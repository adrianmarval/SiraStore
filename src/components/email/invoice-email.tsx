import { Body, Container, Column, Head, Heading, Html, Img, Preview, Row, Section, Text, Hr } from "@react-email/components";
import * as React from "react";
import { currencyFormat } from "@/utils/currencyFormat";
import enMessages from "../../messages/en.json";
import esMessages from "../../messages/es.json";

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
  taxRate?: number;
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
  taxRate,
}: InvoiceEmailProps) => {
  const t = locale === "es" ? esMessages.Invoice : enMessages.Invoice;
  const currency = "USD"; // Assuming USD for now, or pass as prop if dynamic

  // Calculate tax percentage if taxRate is not provided
  // If subTotal is 0, we avoid division by zero
  const calculatedTaxRate = taxRate ? taxRate * 100 : subTotal > 0 ? Math.round((tax / subTotal) * 100) : 15;

  const formattedDate = new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-US", {
    dateStyle: "long",
  }).format(new Date(orderDate));

  return (
    <Html>
      <Head />
      <Preview>
        {t.title} #{invoiceId.toString().padStart(6, "0")}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Row>
              <Column>
                <Heading style={heading}>{t.title}</Heading>
              </Column>
              <Column align="right">
                <Text style={headingDetails}>
                  {t.title} #{invoiceId.toString().padStart(6, "0")}
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
                    <Text style={summaryLabel}>{t.taxes.replace("{rate}", calculatedTaxRate.toString())}:</Text>
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

          <Text style={footer}>{t.emailFooter}</Text>
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
