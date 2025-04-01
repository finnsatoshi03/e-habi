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
  secondTitle?: string;
  secondSubtitle?: string;
};

export const Header = forwardRef<HTMLDivElement, HeaderProps>(
  (
    { title, subtitle, className, secondTitle, secondSubtitle },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
    const secondHeaderRef = useRef<HTMLDivElement>(null);
    const secondTitleRef = useRef<HTMLHeadingElement>(null);
    const secondSubtitleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
      const titleChars = splitText(titleRef.current, title);
      const subtitleChars = splitText(subtitleRef.current, subtitle);

      if (
        secondTitleRef.current &&
        secondSubtitleRef.current &&
        secondTitle &&
        secondSubtitle
      ) {
        // Split text for second header
        const secondTitleChars = splitText(secondTitleRef.current, secondTitle);
        const secondSubtitleChars = splitText(
          secondSubtitleRef.current,
          secondSubtitle
        );

        // Set initial state for second header
        gsap.set(secondHeaderRef.current, {
          opacity: 0,
          x: "-100%", // Start off-screen to the left instead of right
        });

        // Apply specific styling for second header to preserve character spacing
        gsap.set([secondTitleRef.current, secondSubtitleRef.current], {
          letterSpacing: "0.05em",
          wordSpacing: "0.2em",
        });

        // Initial setup - inline-block for all second header characters
        gsap.set([...secondTitleChars, ...secondSubtitleChars], {
          display: "inline-block",
          position: "relative",
        });
      }

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

          // Set up ScrollTrigger for the first animation
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

          // Set up transition to the fourth section header
          if (secondHeaderRef.current) {
            ScrollTrigger.create({
              trigger: ".fourth-section",
              start: "top 80%",
              end: "top 30%",
              scrub: 0.6,
              onUpdate: (self) => {
                // Make first header disappear to top
                gsap.to(
                  [
                    titleRef.current?.parentElement,
                    subtitleRef.current?.parentElement,
                  ],
                  {
                    y: `-${self.progress * 100}%`,
                    opacity: 1 - self.progress,
                    duration: 0.5,
                  }
                );

                // Make second header appear from left
                if (secondHeaderRef.current) {
                  gsap.to(secondHeaderRef.current, {
                    x: `${self.progress * 100 - 100 - 23}%`, // Slide from left to 0
                    y: `-${self.progress * 25}%`,
                    opacity: self.progress,
                    scale: 0.5, // Lower scale
                    duration: 0.5,
                  });
                }
              },
            });
          }
        });

        return () => ctx.revert(); // Clean up
      }
    }, [title, subtitle, secondTitle, secondSubtitle]);

    // Function to split text into separate span elements
    const splitText = (parent: HTMLElement | null, text: string) => {
      if (!parent) return [];

      // Clear the parent element
      parent.innerHTML = "";

      // First, set proper spacing on the parent
      parent.style.letterSpacing = "0.05em";

      // Create spans for each character
      const chars = text.split("").map((char) => {
        const span = document.createElement("span");

        // Handle spaces properly with non-breaking space
        if (char === " ") {
          span.innerHTML = "&nbsp;";
          span.style.width = "0.5em"; // Fixed width for spaces
        } else {
          span.textContent = char;
        }

        // Common styles for all characters
        span.style.display = "inline-block";
        span.style.position = "relative";

        parent.appendChild(span);
        return span;
      });

      return chars;
    };

    return (
      <>
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

        {secondTitle && secondSubtitle && (
          <div
            ref={secondHeaderRef}
            className={cn(
              "flex flex-col p-6 mix-blend-difference fixed top-0 w-full z-50 transition-all duration-300 ease-out will-change-transform text-left",
              className
            )}
          >
            <h1
              ref={secondTitleRef}
              className={`${playfairDisplay.className} text-[length:clamp(100px,10vw,250px)] transition-all duration-300`}
            >
              {secondTitle}
            </h1>
            <h2
              ref={secondSubtitleRef}
              className={`${libreBaskerville.className} text-[length:clamp(50px,5vw,120px)] transition-all duration-300`}
            >
              {secondSubtitle}
            </h2>
          </div>
        )}
      </>
    );
  }
);

Header.displayName = "Header";
