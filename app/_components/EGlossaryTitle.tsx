import { forwardRef, ForwardedRef, useEffect, useRef } from "react";
import Image from "next/image";
import { Playfair_Display, Libre_Baskerville } from "next/font/google";
import { cn } from "../_lib/utils";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import tambo from "@/public/images/tambo.jpg";
import abaka from "@/public/images/abaka.jpg";
import hammer from "@/public/images/hammer.jpg";
import berdengTambo from "@/public/images/berdeng-tambo.jpg";

gsap.registerPlugin(Flip, ScrollTrigger);

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
  style: ["normal", "italic"],
});

const playfairDisplayBlack = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-playfair-display",
  style: ["normal"],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  style: ["italic"],
});

type FirstHeaderProps = {
  title: string;
  subtitle: string;
  className?: string;
  secondTitle?: string;
};

type SecondHeaderProps = {
  secondTitle: string;
  className?: string;
};

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

const splitTextWithImgDescription = (parent : any, text : string) => { 
  if (!parent) return [];
  parent.innerHTML = "";
  parent.style.letterSpacing = "0.05em";

  const chars = text.split("").map((char, charIndex) => {
    const span = document.createElement("span");

    if (char === " ") {
      span.innerHTML = "&nbsp;";
      span.style.width = "0.5em";
    } else {
      span.textContent = char;
    }

    span.style.display = "inline-block";
    span.style.position = "relative";

    parent.appendChild(span);
    return span;
  });
  return chars;
};


export const FirstHeader = forwardRef<HTMLDivElement, FirstHeaderProps>(
  (
    { title, subtitle, className },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
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

          ScrollTrigger.create({
            trigger: ".second-section",
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
            },
          });

        });

        return () => ctx.revert(); // Clean up
      }
    }, [title, subtitle]);

    return (
      <>
        <div
          ref={ref}
          className={cn(
            "flex flex-col justify-center items-center h-full p-6 mix-blend-difference fixed top-0 w-full z-50 transition-all duration-300 ease-out will-change-transform",
            className
          )}
        >
          <div className="flex items-center">  
            <h1
              ref={titleRef}
              className={`${playfairDisplay.className}
              text-[length:clamp(100px,10vw,250px)] transition-all 
              duration-300 flex `}>
              {title.split("-")[0]}
              -
            </h1>
            <h1
              ref={titleRef}
              className={`${playfairDisplay.className}
              text-[length:clamp(100px,10vw,250px)] transition-all 
              duration-300 flex italic font-bold`}
            >        
              {title.split("-")[1]}
            </h1>
          </div>
          <h2
            ref={subtitleRef}
            className={`${libreBaskerville.className} text-[length:clamp(50px,5vw,120px)] transition-all duration-300`}
          >
            {subtitle}
          </h2>
        </div>
      </>
    );
  }
);

FirstHeader.displayName = "FirstHeader";


export const SecondHeader = forwardRef<HTMLDivElement, SecondHeaderProps>(
  (
    { className, secondTitle },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const secondHeaderRef = useRef<HTMLDivElement>(null);
    const secondTitleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
      if (secondTitleRef.current && secondTitle) {
        // Split text into span elements
        const secondTitleChars = splitTextWithImgDescription(secondTitleRef.current, secondTitle);
    
        // Set initial state for second header
        gsap.set(secondHeaderRef.current, {
          opacity: 0,
          x: "-50%",
        });
    
        // Ensure characters are inline-block and positioned normally
        gsap.set(secondTitleChars, {
          x: 0,
          y: 0,
          opacity: 1,
        });
      }
    
      if (secondHeaderRef.current) {
        // Create a GSAP context
        const ctx = gsap.context(() => {
          ScrollTrigger.create({
            trigger: ".second-section",
            start: "top 80%",
            end: "top 30%",
            scrub: 0.6,
            onUpdate: (self) => {
              if (secondHeaderRef.current && secondTitleRef.current) {
                gsap.to(secondHeaderRef.current, {
                  x: 0,
                  y: 0,
                  opacity: self.progress,
                  scale: 1,
                  duration: 0.5,
                  zIndex: 51,
                });
          
                // Select character spans
                const secondTitleChars = secondTitleRef.current.querySelectorAll("span");
          
                // Get middle index of the text
                const middleIndex = Math.floor(secondTitleChars.length / 2);
          
                // Calculate total width increase
                const spreadAmount = self.progress * 80; // Adjust this value for spacing
          
                // Separate each character outward
                gsap.to(secondTitleChars, {
                  x: (index) => `${(index - middleIndex) * spreadAmount}px`, 
                  duration: 0.5,
                  stagger: 0.05,
                });
        
              }
            },
          });
                    
        });
    
        return () => ctx.revert(); // Clean up
      }
    }, [secondTitle]);
    
    

    return(
      <>
        <div
          ref={secondHeaderRef}
          className={cn(
            "flex flex-col justify-center items-center h-full p-6 mix-blend-difference fixed top-0 w-full z-50 transition-all duration-300 ease-out will-change-transform",
            className
          )}
        >
          <h1
              ref={secondTitleRef}
              className={`${playfairDisplayBlack.className} 
              text-[length:clamp(100px,10vw,250px)] transition-all duration-300`}
          >
              {secondTitle}
          </h1>
        
          <div className="absolute relative w-[150px] h-[150px]">          
            <div className={`relative absolute text-left spacing-0 text-md`}>
              <h1 className={`${playfairDisplay.className} font-[700] non-italic`}>Tambo</h1>
              <span className={`${playfairDisplay.className} italic text-gray-700`}>pangngalan</span>
              <p className="max-w-md">Isang halamang ginagamit sa paggawa ng walis tambo.</p>
            </div>
          </div>
          <div className="absolute relative w-[150px] h-[150px]">
            TAMBO
            <div className={`relative absolute`}>                    
              <Image
                src={tambo}
                alt="abaka"
                className="w-full h-full border border-black"
              />
            </div>
          </div>
        </div>
        
      </>
    )
  
  }
)

SecondHeader.displayName = "SecondHeader";
