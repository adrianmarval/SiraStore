import type { Metadata } from "next";
import { inter } from "@/config/fonts";
import { spaceGrotesk, manrope, notoSans } from "@/config/design-fonts";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "../globals.css";
import { Providers } from "@/components";

export const metadata: Metadata = {
  title: {
    template: "%s - Crowdfast | Store",
    default: "Home - Crowdfast | Store",
  },
  description: "Una tienda virtual de productos",
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "Crowdfast | Store",
    description: "Una tienda virtual de productos",
    type: "website",
    locale: "es_ES",
    siteName: "Crowdfast | Store",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crowdfast | Store",
    description: "Una tienda virtual de productos",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} ${spaceGrotesk.variable} ${manrope.variable} ${notoSans.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
