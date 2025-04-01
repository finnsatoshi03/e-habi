"use client";

import { Didact_Gothic } from "next/font/google";
import { useEffect } from "react";
import "./_styles/globals.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Metadata } from "next";

const didactGothic = Didact_Gothic({
  variable: "--font-didact-gothic",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "E-Habi | Traditional Filipino Walis Tambo",
  description:
    "E-Habi is your comprehensive platform about Walis Tambo, the traditional Filipino broom. Learn about its authentic crafting process, cultural beliefs, traditions associated with its making, and explore our e-glossary of terminologies. Test your knowledge with our optional interactive quiz!",
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
      "Discover the rich cultural heritage of Walis Tambo - how it's made, traditional beliefs, and practices. Includes an e-glossary and interactive quiz.",
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
  // Lenis smooth scrolling setup
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Dynamically import Lenis to avoid SSR issues
    const setupScroll = async () => {
      const { default: Lenis } = await import("lenis");
      gsap.registerPlugin(ScrollTrigger);

      // Create new Lenis instance
      const lenis = new Lenis({
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        syncTouch: false,
      });

      // Connect Lenis with ScrollTrigger
      lenis.on("scroll", ScrollTrigger.update);

      // Use GSAP ticker for the animation loop
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      // Disable lag smoothing for better performance
      gsap.ticker.lagSmoothing(0);

      // Clean up on unmount
      return () => {
        lenis.destroy();
        gsap.ticker.remove((time) => {
          lenis.raf(time * 1000);
        });
      };
    };

    const cleanup = setupScroll();
    return () => {
      cleanup.then((cleanupFn) => cleanupFn && cleanupFn());
    };
  }, []);

  return (
    <html lang="en">
      <body
        className={`${didactGothic.variable} antialiased bg-[#1e1e1e] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
