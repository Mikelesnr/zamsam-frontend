// app/layout.tsx

import type { Metadata } from "next";
import { Roboto, Merriweather } from "next/font/google";
import "./globals.css";
import { MantineProviderWrapper } from "./providers/MantineProviderWrapper";
import Image from "next/image";

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
  title: "Zamsam Engineering | Expert Refrigeration & AC Solutions",
  description:
    "Reliable cold room installation, AC repairs, and commercial servicing in Deep Arctic Blue and Ice Cyan branding.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${merriweather.variable}`}>
      <body>
        <MantineProviderWrapper>{children}</MantineProviderWrapper>
      </body>
    </html>
  );
}
