import { auth } from "@/auth.config";
import { InvoiceWeb } from "@/components/invoice/InvoiceWeb";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

interface Props {
  params: {
    id: string;
    locale: string;
  };
}

export default async function InvoicePage({ params }: Props) {
  const { id, locale } = params;
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }

  const order = await prisma.order.findUnique({
    where: { id },
    include: {
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

  if (!order) {
    redirect("/");
  }

  // Verify that the order belongs to the user
  if (order.userId !== session.user.id) {
    redirect("/");
  }

  const { OrderAddress, OrderItem } = order;

  // Transform OrderItems to products format expected by InvoiceWeb
  const products = OrderItem.map((item) => ({
    title: item.product.title,
    price: item.price,
    quantity: item.quantity,
    image: item.product.ProductImage[0]?.url
      ? item.product.ProductImage[0].url.startsWith("http")
        ? item.product.ProductImage[0].url
        : `/products/${item.product.ProductImage[0].url}`
      : "",
  }));

  const billingAddress = {
    firstName: OrderAddress?.firstName || "",
    lastName: OrderAddress?.lastName || "",
    address: OrderAddress?.address || "",
    city: OrderAddress?.city || "",
    postalCode: OrderAddress?.postalCode || "",
    country: OrderAddress?.countryId || "",
    phone: OrderAddress?.phone || "",
  };

  return (
    <InvoiceWeb
      orderId={order.id}
      orderDate={order.createdAt}
      billingAddress={billingAddress}
      products={products}
      subTotal={order.subTotal}
      tax={order.tax}
      total={order.total}
      locale={locale}
    />
  );
}
