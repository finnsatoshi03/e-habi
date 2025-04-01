"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function LenisWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
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

  return <>{children}</>;
}
