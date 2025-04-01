import { forwardRef, ForwardedRef, useEffect, useRef } from "react";
import { Playfair_Display, Libre_Baskerville } from "next/font/google";
import { cn } from "../_lib/utils";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Flip, ScrollTrigger);

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  style: ["italic"],
});

type HeaderProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  ({ title, subtitle, className }, ref: ForwardedRef<HTMLDivElement>) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
      const titleChars = splitText(titleRef.current, title);
      const subtitleChars = splitText(subtitleRef.current, subtitle);

      if (titleRef.current && subtitleRef.current) {
        // Create a GSAP context
        const ctx = gsap.context(() => {
          // Initial setup - inline-block for all characters
          gsap.set([...titleChars, ...subtitleChars], {
            display: "inline-block",
            position: "relative",
          });

          // Set initial line heights
          gsap.set(titleRef.current, {
            lineHeight: "1.1em",
          });

          gsap.set(subtitleRef.current, {
            lineHeight: "1.2em",
          });

          // Set up ScrollTrigger for the animation
          ScrollTrigger.create({
            trigger: document.body,
            start: "25% top",
            end: "center bottom",
            scrub: 0.5,
            onUpdate: (self) => {
              // Capture the initial state for Flip
              const state = Flip.getState([...titleChars, ...subtitleChars]);

              // Change the alignment to center
              gsap.set([titleRef.current, subtitleRef.current], {
                textAlign: self.progress > 0 ? "center" : "right",
                scale: self.progress > 0 ? 0.5 : 1,
              });

              // Dynamically adjust line height based on scale
              gsap.set(titleRef.current, {
                lineHeight: self.progress > 0 ? "0.9em" : "1.1em",
              });

              // Make subtitle animation more direct and consistent with title
              gsap.set(subtitleRef.current, {
                lineHeight: self.progress > 0 ? "0em" : "1.2em",
                // Apply the same animation timing as the rest of the elements
              });

              // Animate to the new positions
              Flip.from(state, {
                duration: 0.3,
                ease: "power1.out",
                stagger: 0.01,
              });
            },
          });
        });

        return () => ctx.revert(); // Clean up
      }
    }, [title, subtitle]);

    // Function to split text into separate span elements
    const splitText = (parent: HTMLElement | null, text: string) => {
      if (!parent) return [];

      // Clear the parent element
      parent.innerHTML = "";

      // Create spans for each character
      const chars = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.display = "inline-block";
        parent.appendChild(span);
        return span;
      });

      return chars;
    };

    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col p-6 mix-blend-difference fixed top-0 w-full z-50 transition-all duration-300 ease-out will-change-transform text-right",
          className
        )}
      >
        <h1
          ref={titleRef}
          className={`${playfairDisplay.className} text-[length:clamp(100px,10vw,250px)] transition-all duration-300`}
        >
          {title}
        </h1>
        <h2
          ref={subtitleRef}
          className={`${libreBaskerville.className} text-[length:clamp(50px,5vw,120px)] transition-all duration-300`}
        >
          {subtitle}
        </h2>
      </div>
    );
  }
);

Header.displayName = "Header";
