"use server";

import prisma from "@/lib/prisma";
import { PayPalOrderStatusResponse } from "@/interfaces";
import { revalidatePath } from "next/cache";
import { sentPaymentConfirmationEmail, sendInvoiceEmail } from "@/services/mail";

export const paypalCheckPayment = async (paypalTransactionId: string) => {
  const authToken = await getPayPalBearerToken();

  if (!authToken) {
    return {
      ok: false,
      message: "No se pudo obtener token de verificación",
    };
  }

  const resp = await verifyPayPalPayment(paypalTransactionId, authToken);

  if (!resp) {
    return {
      ok: false,
      message: "Error al verificar el pago",
    };
  }

  const { status, purchase_units } = resp;
  const { invoice_id: orderId } = purchase_units[0]; // TODO: invoice ID

  if (status !== "COMPLETED") {
    return {
      ok: false,
      message: "Aún no se ha pagado en PayPal",
    };
  }

  // TODO: Realizar la actualización en nuestra base de datos
  try {
    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: {
        isPaid: true,
        paidAt: new Date(),
      },
      include: {
        user: true,
        OrderAddress: true,
        OrderItem: {
          include: {
            product: {
              include: {
                ProductImage: {
                  take: 1,
                },
              },
            },
          },
        },
      },
    });

    // Create Invoice
    const invoice = await prisma.invoice.create({
      data: {
        orderId: updatedOrder.id,
      },
    });

    // Enviar correo de pago confirmado
    try {
      const { user, OrderItem, OrderAddress } = updatedOrder;
      const userEmail = user.email;

      if (userEmail) {
        // Enviar Invoice Email
        await sendInvoiceEmail(
          userEmail,
          {
            id: updatedOrder.id,
            createdAt: updatedOrder.createdAt,
            total: updatedOrder.total,
            subTotal: updatedOrder.subTotal,
            tax: updatedOrder.tax,
          },
          {
            firstName: OrderAddress?.firstName || "",
            lastName: OrderAddress?.lastName || "",
            address: OrderAddress?.address || "",
            city: OrderAddress?.city || "",
            postalCode: OrderAddress?.postalCode || "",
            country: OrderAddress?.countryId || "",
            phone: OrderAddress?.phone || "",
          },
          OrderItem.map((item) => ({
            title: item.product.title,
            price: item.price,
            quantity: item.quantity,
            image: item.product.ProductImage[0]?.url || "",
          })),
          invoice.id,
          // TODO: Get user locale from DB if available or default to "es"
          "es",
        );
      }
    } catch (error) {
      console.log("Error sending payment email:", error);
    }

    // TODO: Revalidar un path
    revalidatePath(`/orders/${orderId}`);

    return {
      ok: true,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: "500 - El pago no se pudo realizar",
    };
  }
};

const getPayPalBearerToken = async (): Promise<string | null> => {
  const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;
  const PAYPAL_SECRET = process.env.PAYPAL_SECRET;
  const oauth2Url = process.env.PAYPAL_OAUTH_URL ?? "";

  const base64Token = Buffer.from(`${PAYPAL_CLIENT_ID}:${PAYPAL_SECRET}`, "utf-8").toString("base64");

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  myHeaders.append("Authorization", `Basic ${base64Token}`);

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "client_credentials");

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
  };

  try {
    const result = await fetch(oauth2Url, {
      ...requestOptions,
      cache: "no-store",
    }).then((r) => r.json());
    return result.access_token;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const verifyPayPalPayment = async (paypalTransactionId: string, bearerToken: string): Promise<PayPalOrderStatusResponse | null> => {
  const paypalOrderUrl = `${process.env.PAYPAL_ORDERS_URL}/${paypalTransactionId}`;

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${bearerToken}`);

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  try {
    const resp = await fetch(paypalOrderUrl, {
      ...requestOptions,
      cache: "no-store",
    }).then((r) => r.json());
    return resp;
  } catch (error) {
    console.log(error);
    return null;
  }
};
