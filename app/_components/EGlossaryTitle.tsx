import { forwardRef, ForwardedRef, useEffect, useRef } from "react";
import { Playfair_Display, Libre_Baskerville, Didact_Gothic } from "next/font/google";
import { cn } from "../_lib/utils";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const characterData = {
  T: { 
    img: "/images/tambo.jpg", 
    title: "Tambo", 
    sub: "pangngalan", 
    desc: "Isang halamang ginagamit sa paggawa ng walis tambo."
  },
  A: { 
    img: "/images/abaka.jpg", 
    title: "Abaká", 
    sub: "pangngalan", 
    desc: "Isang halamang hemp o napagkukunan ng himayma na berde ang mga dahon na kawangis ng dahon ng saging. Ito ay ginagamit bilang pantali at panahi sa walis tambo."
  },
  M: { 
    img: "/images/hammer.jpg", 
    title: "Martilyo", 
    sub: "pangngalan", 
    desc: "Gamit na ginagamit sa pagpukpok ng pako."
  },
  B: { 
    img: "/images/berdeng-tambo.jpg", 
    title: "Berdeng Tambo", 
    sub: "pang-uri", 
    desc: "Isang uri ng tambo na may berdeng kulay kapag sariwa."
  },
  O: { 
    img: "", 
    title: "Ordináryo", 
    sub: "pang-uri", 
    desc: "Manipis at karaniwang ginagamit na walis tambo."
  }
};

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

const didactGothic = Didact_Gothic({
  variable: "--font-didact-gothic",
  subsets: ["latin"],
  weight: ["400"],
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  style: ["italic"],
});

type FirstHeaderProps = {
  title1: string;
  title2: string;
  subtitle: string;
  className?: string;
  secondTitle?: string;
};

type SecondHeaderProps = {
  secondTitle: string;
  className?: string;
};

const splitTextWithImgDescription = (parent: HTMLElement | null, text: string) => {
  if (!parent) return [];

  parent.innerHTML = ""; // Clear the parent element
  parent.style.letterSpacing = "0.05em";

  let toggle = true; // Used to alternate positions

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

    span.style.display = "inline-block";
    span.style.position = "relative";

    if (characterData[char]) {
      const { img, title, sub, desc } = characterData[char];

      // Tooltip container
      const root = document.createElement("div");
      root.style.position = "absolute";
      root.style.left = "50%";
      root.style.transform = "translateX(-50%)";
      root.style.textAlign = "left";
      root.style.fontSize = "15px";
      root.style.letterSpacing = "0px";      
      root.style.zIndex = "10";
      root.style.width = "190px";
      root.style.height = "150px";

      // Alternate position
      if (toggle) {
        root.style.top = "100%"; // Below the character
      } else {
        root.style.bottom = "100%"; // Above the character
      }

      // Create description elements
      const h1 = document.createElement("h1");
      h1.className = `${playfairDisplay.className} font-bold`;
      h1.textContent = title;

      const subSpan = document.createElement("h6");
      subSpan.className = `${playfairDisplay.className} italic text-gray-700`;
      subSpan.textContent = sub;

      const p = document.createElement("h6");
      p.className = `${didactGothic.className} text-md`;
      p.textContent = desc;

      // Append text content to root
      root.appendChild(h1);
      root.appendChild(subSpan);
      root.appendChild(p);

      // Create image container
      if (img) {
        const p = document.createElement("h6");
        p.className = `${didactGothic.className} text-xs spacing-0`;
        p.textContent = title;

        const imgElement = document.createElement("div");
        imgElement.innerHTML = `
          <img src="${img}" className="w-full h-full border border-black" />`;
        imgElement.style.position = "absolute";
        imgElement.style.left = "50%";
        imgElement.style.width = "150px"
        imgElement.style.height = "150px"
        imgElement.style.transform = "translateX(-50%)";

        // Place the image opposite to the tooltip
        if (toggle) {
          imgElement.style.bottom = "100%"; // Image above if description is below
        } else {
          imgElement.style.top = "100%"; // Image below if description is above
        }
        imgElement.appendChild(p)
        span.appendChild(imgElement);
      }

      // Append root inside the span
      span.appendChild(root);

      // Toggle for the next character
      toggle = !toggle;
    }

    parent.appendChild(span);
    return span;
  });

  return chars;
};

const splitText = (parent : HTMLElement | null, text : string) => { 
  if (!parent) return [];
  parent.innerHTML = "";
  parent.style.letterSpacing = "0.05em";

  const chars = text.split("").map((char) => {
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
    { title1, title2, subtitle, className },
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLHeadingElement>(null);
  
    useEffect(() => {
        const titleChars1 = splitText(titleRef.current, title1);
        const titleChars2 = splitText(titleRef.current, title2);
        const subtitleChars = splitText(subtitleRef.current, subtitle);

        if (titleRef.current && subtitleRef.current) {
        // Create a GSAP context
        const ctx = gsap.context(() => {
          // Initial setup - inline-block for all characters
          gsap.set([...titleChars1, ...titleChars2, ...subtitleChars], {
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
              const state = Flip.getState([...titleChars1, ...titleChars2, ...subtitleChars]);

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
    }, [title1, title2, subtitle]);

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
              {title1}
              -
            </h1>
            <h1
              ref={titleRef}
              className={`${playfairDisplay.className}
              text-[length:clamp(100px,10vw,250px)] transition-all 
              duration-300 flex italic font-bold`}
            >        
              {title2}
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
          x: 0,
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

          ScrollTrigger.create({
            trigger: ".third-section",
            start: "top 80%",
            end: "top 30%",
            scrub: 0.6,
            onUpdate: (self) => {
              if (secondTitleRef.current) {
                const secondTitleChars = secondTitleRef.current.querySelectorAll("span");
    
                // Reverse character spread effect (bring them back)
                gsap.to(secondTitleChars, {
                  x: 0,
                  opacity: 1 - self.progress, // Fades out gradually
                  duration: 0.5,
                  stagger: 0.05,
                });
              }
    
              // Fade out the header as it moves up
              gsap.to(secondHeaderRef.current, {
                opacity: 1 - self.progress,
                duration: 0.5,
              });
            }
          })
                    
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
        </div>
      </>
    )
  
  }
)

SecondHeader.displayName = "SecondHeader";


export const Title = forwardRef<HTMLDivElement>(
  (
    { },
    ref: ForwardedRef<HTMLDivElement>
  ) => {

  return (
    <div className="flex items-center">
      <h1 className={`${playfairDisplay.className} text-6xl`}> E </h1>
      <div className="flex flex-col justify-center text-lg">
        <h1 className={`${playfairDisplay.className}`}>HABI</h1>
        <h1 className={`${libreBaskerville.className}`}>Glossary</h1>
      </div>
    </div>
  )
})

Title.displayName = "Title";
