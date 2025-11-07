// app/layout.tsx

import type { Metadata } from "next";
import { Roboto, Merriweather } from "next/font/google";
import "./globals.css";
import { MantineProviderWrapper } from "./providers/MantineProviderWrapper";

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

        {/* /////////////////////////////////////////////////////////////////////
            /// CHATBASE WIDGET EMBED (FIXED VERSION)                      ///
            ///////////////////////////////////////////////////////////////////// */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.chatbaseConfig = {
                chatbotId: "${process.env.NEXT_PUBLIC_CHATBASE_ID}"
              };

              (function () {
                var s = document.createElement("script");
                s.src = "https://www.chatbase.co/embed.min.js";
                s.async = true;
                s.defer = true;
                document.body.appendChild(s);
              })();
            `,
          }}
        />
        {/* /////////////////////////////////////////////////////////////////////
            /// END CHATBASE WIDGET EMBED                                    ///
            ///////////////////////////////////////////////////////////////////// */}
      </body>
    </html>
  );
}
