import { Didact_Gothic } from "next/font/google";
import "./_styles/globals.css";
import { Metadata } from "next";
import LenisWrapper from "./_components/LenisWrapper";
import ScrollRestoration from "./_components/ScrollRestoration";

const didactGothic = Didact_Gothic({
  variable: "--font-didact-gothic",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "E-Habi | Traditional Filipino Walis Tambo",
  description:
    "E-Habi is your comprehensive platform about Walis Tambo, the traditional Filipino broom. Learn about its authentic crafting process, cultural beliefs, traditions associated with its making, and explore our e-rehistro of terminologies. Test your knowledge with our optional interactive quiz!",
  keywords: [
    "Walis Tambo",
    "Filipino broom",
    "traditional crafting",
    "Filipino traditions",
    "indigenous craft",
    "handmade broom",
    "cultural heritage",
    "Filipino household items",
    "craftsmanship",
    "sustainable materials",
    "traditional beliefs",
    "craft terminology",
  ],
  authors: [{ name: "E-Habi Team" }],
  creator: "E-Habi",
  publisher: "E-Habi Platform",
  openGraph: {
    title: "E-Habi | Traditional Filipino Walis Tambo",
    description:
      "Discover the rich cultural heritage of Walis Tambo - how it's made, traditional beliefs, and practices. Includes an e-rehistro and interactive quiz.",
    url: "https://e-habi.com",
    siteName: "E-Habi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/broom.png",
        width: 1200,
        height: 630,
        alt: "Traditional Walis Tambo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Habi | Traditional Filipino Walis Tambo",
    description:
      "Learn about Walis Tambo's crafting process, cultural significance, and traditions",
    images: ["/images/broom.png"],
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  alternates: {
    canonical: "https://e-habi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${didactGothic.variable} antialiased`}>
        <ScrollRestoration />
        <LenisWrapper>{children}</LenisWrapper>
      </body>
    </html>
  );
}
