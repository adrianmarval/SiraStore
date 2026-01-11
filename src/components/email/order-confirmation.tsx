import { Body, Container, Head, Heading, Html, Preview, Section, Text, Hr, Row, Column } from "@react-email/components";
import * as React from "react";
import { currencyFormat } from "@/utils/currencyFormat"; // Adjust import path if needed, assuming absolute imports work

interface OrderConfirmationEmailProps {
  orderId: string;
  total: number;
  locale?: "es" | "en";
  products: {
    title: string;
    price: number;
    quantity: number;
    size: string;
    image: string;
  }[];
}

export const OrderConfirmationEmail = ({ orderId, total, locale = "es", products }: OrderConfirmationEmailProps) => {
  const messages = {
    es: {
      subject: "Gracias por tu pedido",
      title: "Confirmación de Pedido",
      message: "¡Gracias por tu compra! Tu pedido",
      received: "ha sido recibido exitosamente.",
      quantity: "Cantidad:",
      total: "Total:",
      policyTitle: "¿Cómo puedo verificar el estado de mi pedido?",
      policyText:
        "Cuando su pedido se haya enviado, recibirá una notificación por correo electrónico con un número de seguimiento para consultar su estado. La información de seguimiento tardará 48 horas en estar disponible.",
      footer: "Si tienes alguna pregunta, no dudes en contactarnos.",
    },
    en: {
      subject: "Thank you for your order",
      title: "Order Confirmation",
      message: "Thank you for your purchase! Your order",
      received: "has been received successfully.",
      quantity: "Quantity:",
      total: "Total:",
      policyTitle: "How can I check my order status?",
      policyText:
        "When your order ships, you will receive an email notification with a tracking number to check its status. Tracking information will be available within 48 hours.",
      footer: "If you have any questions, feel free to contact us.",
    },
  };

  const t = messages[locale] || messages.es;
  const currency = "USD";

  return (
    <Html>
      <Head />
      <Preview>{t.subject}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>{t.title}</Heading>
          <Text style={text}>
            {t.message} <strong>#{orderId.split("-")[0]}</strong> {t.received}
          </Text>

          <Section>
            {products.map((product, index) => (
              <Row key={index} style={{ marginBottom: "10px" }}>
                <Column style={{ width: "60px" }}>
                  <img src={product.image} alt={product.title} width="50" height="50" style={{ objectFit: "cover", borderRadius: "4px" }} />
                </Column>
                <Column>
                  <Text style={productTitle}>
                    {product.title} ({product.size})
                  </Text>
                  <Text style={productRef}>
                    {t.quantity} {product.quantity}
                  </Text>
                </Column>
                <Column style={{ textAlign: "right" }}>
                  <Text style={productPrice}>{currencyFormat(product.price * product.quantity, locale, currency)}</Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Column>
                <Text style={totalLabel}>{t.total}</Text>
              </Column>
              <Column style={{ textAlign: "right" }}>
                <Text style={totalPrice}>{currencyFormat(total, locale, currency)}</Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section style={policySection}>
            <Heading as="h3" style={h3}>
              {t.policyTitle}
            </Heading>
            <Text style={policyText}>{t.policyText}</Text>
          </Section>

          <Text style={footer}>{t.footer}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default OrderConfirmationEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const h1 = {
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center" as const,
  marginBottom: "30px",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "20px",
};

const productTitle = {
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0",
};

const productRef = {
  fontSize: "12px",
  color: "#666",
  margin: "0",
};

const productPrice = {
  fontSize: "14px",
  fontWeight: "bold",
  margin: "0",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const totalLabel = {
  fontSize: "16px",
  fontWeight: "bold",
};

const totalPrice = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#000",
};

const policySection = {
  backgroundColor: "#f4f4f4",
  padding: "20px",
  borderRadius: "5px",
  marginTop: "20px",
};

const h3 = {
  fontSize: "18px",
  fontWeight: "bold",
  margin: "0 0 10px 0",
};

const policyText = {
  fontSize: "14px",
  color: "#555",
  lineHeight: "22px",
  margin: "0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "20px",
  textAlign: "center" as const,
};
