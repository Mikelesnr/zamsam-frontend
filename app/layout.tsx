// app/layout.tsx

import type { Metadata } from "next";
import { Roboto, Merriweather } from "next/font/google";
import "./globals.css";
import { MantineProviderWrapper } from "./providers/MantineProviderWrapper";
import ChatbaseEmbed from "@/components/ChatbaseEmbed";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

const merriweather = Merriweather({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Zamsam Engineering | Refrigeration & Air Conditioning Experts in Harare",
  description:
    "Zamsam Engineering in Highlands, Harare, Zimbabwe offers reliable domestic fridge repairs, commercial cold room installations, and AC servicing for homes and businesses. Trusted local experts delivering fast, professional cooling solutions.",
  authors: [{ name: "Michael Mwanza", url: "https://michaelmwanza.site" }],
  keywords: [
    "domestic refrigeration Harare",
    "fridge repair Zimbabwe",
    "home fridge servicing",
    "AC repair Highlands Harare",
    "air conditioning maintenance Harare",
    "commercial refrigeration Zimbabwe",
    "cold room installation Harare",
    "industrial refrigeration servicing",
    "commercial AC servicing",
    "business cooling solutions Harare",
    "Zamsam Engineering",
    "refrigeration experts Harare",
    "air conditioning Harare Zimbabwe"
  ],
  openGraph: {
    title: "Zamsam Engineering | Refrigeration & AC Experts",
    description:
      "Reliable refrigeration and air conditioning services in Harare, Zimbabwe — domestic & commercial.",
    url: "https://zamsam.netlify.app/", // replace with your custom domain later
    siteName: "Zamsam Engineering",
    locale: "en_ZW",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/images/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${merriweather.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zamsam Engineering",
              "url": "https://zamsam.netlify.app/", // replace with custom domain
              "logo": "https://zamsam.netlify.app/images/apple-touch-icon.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Alexander Road, Highlands",
                "addressLocality": "Harare",
                "addressCountry": "Zimbabwe"
              },
              "author": {
                "@type": "Person",
                "name": "Michael Mwanza",
                "url": "https://michaelmwanza.site"
              }
            }),
          }}
        />
      </head>
      <body>
        <MantineProviderWrapper>{children}</MantineProviderWrapper>
        <div id="chatbase-chatbot-container">
          <ChatbaseEmbed />
        </div>
      </body>
    </html>
  );
}
