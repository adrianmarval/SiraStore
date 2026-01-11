import { Body, Container, Column, Head, Heading, Html, Img, Preview, Row, Section, Text, Hr } from "@react-email/components";
import * as React from "react";
import { currencyFormat } from "@/utils/currencyFormat";

interface InvoiceEmailProps {
  orderId: string;
  invoiceId: number;
  locale: "es" | "en";
  orderDate: Date;
  billingAddress: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    postalCode: string;
    country: string;
    phone: string;
  };
  products: {
    title: string;
    price: number;
    quantity: number;
    image: string;
  }[];
  subTotal: number;
  tax: number;
  total: number;
}

export const InvoiceEmail = ({
  orderId,
  invoiceId,
  locale = "es",
  orderDate,
  billingAddress,
  products,
  subTotal,
  tax,
  total,
}: InvoiceEmailProps) => {
  const messages = {
    es: {
      invoice: "FACTURA",
      order: "Orden",
      billedTo: "Facturado a:",
      from: "De:",
      product: "Producto",
      quantity: "Cant.",
      price: "Precio",
      total: "Total",
      subtotal: "Subtotal",
      taxes: "Impuestos (15%)",
      footer: "Gracias por su compra. Si tiene alguna pregunta sobre esta factura, por favor contáctenos.",
    },
    en: {
      invoice: "INVOICE",
      order: "Order",
      billedTo: "Billed to:",
      from: "From:",
      product: "Product",
      quantity: "Qty.",
      price: "Price",
      total: "Total",
      subtotal: "Subtotal",
      taxes: "Taxes (15%)",
      footer: "Thank you for your purchase. If you have any questions about this invoice, please contact us.",
    },
  };

  const t = messages[locale] || messages.es;
  const currency = "USD"; // Assuming USD for now, or pass as prop if dynamic

  const formattedDate = new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-US", {
    dateStyle: "long",
  }).format(new Date(orderDate));

  return (
    <Html>
      <Head />
      <Preview>
        {t.invoice} #{invoiceId.toString().padStart(6, "0")}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column>
                <Heading style={heading}>{t.invoice}</Heading>
              </Column>
              <Column align="right">
                <Text style={headingDetails}>
                  {t.invoice} #{invoiceId.toString().padStart(6, "0")}
                  <br />
                  {formattedDate}
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Column>
                <Text style={subHeading}>{t.billedTo}</Text>
                <Text style={addressText}>
                  {billingAddress.firstName} {billingAddress.lastName}
                  <br />
                  {billingAddress.address}
                  <br />
                  {billingAddress.city}, {billingAddress.postalCode}
                  <br />
                  {billingAddress.country}
                  <br />
                  {billingAddress.phone}
                </Text>
              </Column>
              <Column align="right">
                <Text style={subHeading}>{t.from}</Text>
                <Text style={addressText}>
                  CrowdFast Store
                  <br />
                  123 Business Street
                  <br />
                  City, Country
                  <br />
                  support@crowdfast.store
                </Text>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Section style={tableContainer}>
            <Row style={tableHeader}>
              <Column style={{ width: "50%" }}>
                <Text style={tableHeaderText}>{t.product}</Text>
              </Column>
              <Column align="center">
                <Text style={tableHeaderText}>{t.quantity}</Text>
              </Column>
              <Column align="right">
                <Text style={tableHeaderText}>{t.price}</Text>
              </Column>
              <Column align="right">
                <Text style={tableHeaderText}>{t.total}</Text>
              </Column>
            </Row>
            {products.map((product, index) => (
              <Row key={index} style={tableRow}>
                <Column style={{ width: "50%" }}>
                  <Text style={productTitle}>{product.title}</Text>
                </Column>
                <Column align="center">
                  <Text style={productText}>{product.quantity}</Text>
                </Column>
                <Column align="right">
                  <Text style={productText}>{currencyFormat(product.price, locale, currency)}</Text>
                </Column>
                <Column align="right">
                  <Text style={productText}>{currencyFormat(product.price * product.quantity, locale, currency)}</Text>
                </Column>
              </Row>
            ))}
          </Section>

          <Hr style={hr} />

          <Section>
            <Row>
              <Column />
              <Column style={{ width: "40%" }}>
                <Row>
                  <Column>
                    <Text style={summaryLabel}>{t.subtotal}:</Text>
                  </Column>
                  <Column align="right">
                    <Text style={summaryValue}>{currencyFormat(subTotal, locale, currency)}</Text>
                  </Column>
                </Row>
                <Row>
                  <Column>
                    <Text style={summaryLabel}>{t.taxes}:</Text>
                  </Column>
                  <Column align="right">
                    <Text style={summaryValue}>{currencyFormat(tax, locale, currency)}</Text>
                  </Column>
                </Row>
                <Hr style={hrSmall} />
                <Row>
                  <Column>
                    <Text style={totalLabel}>{t.total}:</Text>
                  </Column>
                  <Column align="right">
                    <Text style={totalValue}>{currencyFormat(total, locale, currency)}</Text>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>{t.footer}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default InvoiceEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  marginBottom: "64px",
};

const heading = {
  fontSize: "32px",
  fontWeight: "bold",
  color: "#333",
  margin: "0",
};

const headingDetails = {
  fontSize: "14px",
  color: "#666",
  lineHeight: "24px",
  textAlign: "right" as const,
};

const subHeading = {
  fontSize: "12px",
  fontWeight: "bold",
  color: "#999",
  textTransform: "uppercase" as const,
  marginBottom: "10px",
};

const addressText = {
  fontSize: "14px",
  color: "#333",
  lineHeight: "24px",
  margin: "0",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const hrSmall = {
  borderColor: "#e6ebf1",
  margin: "10px 0",
};

const tableContainer = {
  marginTop: "20px",
};

const tableHeader = {
  borderBottom: "1px solid #e6ebf1",
};

const tableHeaderText = {
  fontSize: "12px",
  fontWeight: "bold",
  color: "#999",
  textTransform: "uppercase" as const,
  marginBottom: "10px",
};

const tableRow = {
  borderBottom: "1px solid #fafafa",
};

const productTitle = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#333",
  margin: "10px 0",
};

const productText = {
  fontSize: "14px",
  color: "#333",
  margin: "10px 0",
};

const summaryLabel = {
  fontSize: "14px",
  color: "#666",
  margin: "5px 0",
};

const summaryValue = {
  fontSize: "14px",
  fontWeight: "bold",
  color: "#333",
  margin: "5px 0",
};

const totalLabel = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#333",
  margin: "5px 0",
};

const totalValue = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#000",
  margin: "5px 0",
};

const footer = {
  fontSize: "12px",
  color: "#999",
  textAlign: "center" as const,
  marginTop: "40px",
};
