import { forwardRef, ForwardedRef, useEffect, useRef } from "react";
import {
  Playfair_Display,
  Libre_Baskerville,
  Didact_Gothic,
} from "next/font/google";
import { cn } from "../_lib/utils";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type CharacterDataProps = {
  [key: string]: {
    img: string;
    title: string;
    sub: string;
    desc: string;
  };
};

const characterData: CharacterDataProps = {
  T: {
    img: "/images/tambo.jpg",
    title: "Tambo",
    sub: "pangngalan",
    desc: "Isang halamang ginagamit sa paggawa ng walis tambo.",
  },
  A: {
    img: "/images/abaka.jpg",
    title: "Abaká",
    sub: "pangngalan",
    desc: "Isang halamang hemp o napagkukunan ng himayma na berde ang mga dahon na kawangis ng dahon ng saging. Ito ay ginagamit bilang pantali at panahi sa walis tambo.",
  },
  M: {
    img: "/images/hammer.jpg",
    title: "Martilyo",
    sub: "pangngalan",
    desc: "Gamit na ginagamit sa pagpukpok ng pako.",
  },
  B: {
    img: "/images/berdeng-tambo.jpg",
    title: "Berdeng Tambo",
    sub: "pang-uri",
    desc: "Isang uri ng tambo na may berdeng kulay kapag sariwa.",
  },
  O: {
    img: "",
    title: "Ordináryo",
    sub: "pang-uri",
    desc: "Manipis at karaniwang ginagamit na walis tambo.",
  },
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

const splitTextWithImgDescription = (
  parent: HTMLElement | null,
  text: string
) => {
  if (!parent) return [];

  parent.innerHTML = "";
  parent.style.letterSpacing = "0.05em";

  let toggle = true;

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

    if (characterData[char]) {
      const { img, title, sub, desc } = characterData[char];

      const root = document.createElement("div");
      root.className = "char-tooltip";
      root.style.display = "none";
      root.style.opacity = "0";
      root.style.position = "absolute";
      root.style.left = "50%";
      root.style.transform = "translateX(-50%)";
      root.style.textAlign = "left";
      root.style.fontSize = "15px";
      root.style.letterSpacing = "0px";
      root.style.zIndex = "10";
      root.style.width = "190px";
      root.style.height = "150px";

      const descLine = document.createElement("div");
      descLine.className = "char-tooltip";
      descLine.style.opacity = "0";
      descLine.style.position = "absolute";
      descLine.style.left = "50%";
      descLine.style.transform = "translateX(-50%)";
      descLine.style.width = "1px";
      descLine.style.height = "30px";
      descLine.style.backgroundColor = "black";
      descLine.style.zIndex = "5";

      if (toggle) {
        root.style.top = "100%";
        descLine.style.top = "80%"; // Below char
      } else {
        root.style.bottom = "100%";
        descLine.style.bottom = "80%"; // Above char
      }

      const h1 = document.createElement("h1");
      h1.className = `${playfairDisplay.className} font-bold`;
      h1.textContent = title;

      const subSpan = document.createElement("h6");
      subSpan.className = `${playfairDisplay.className} italic text-gray-700`;
      subSpan.textContent = sub;

      const p = document.createElement("h6");
      p.className = `${didactGothic.className} text-md`;
      p.textContent = desc;

      root.appendChild(h1);
      root.appendChild(subSpan);
      root.appendChild(p);

      if (img) {
        const p = document.createElement("h6");
        p.className = `${didactGothic.className} text-xs spacing-0`;
        p.textContent = title;

        const imgElement = document.createElement("div");
        imgElement.className = "char-tooltip";
        imgElement.style.opacity = "0";
        imgElement.innerHTML = `
          <img src="${img}" className="w-full h-full border border-black" />`;
        imgElement.style.position = "absolute";
        imgElement.style.left = "50%";
        imgElement.style.width = "150px";
        imgElement.style.height = "150px";
        imgElement.style.transform = "translateX(-50%)";

        const imgLine = document.createElement("div");
        imgLine.className = "char-tooltip";
        imgLine.style.opacity = "0";
        imgLine.style.position = "absolute";
        imgLine.style.left = "50%";
        imgLine.style.transform = "translateX(-50%)";
        imgLine.style.width = "2px";
        imgLine.style.height = "30px";
        imgLine.style.backgroundColor = "black";
        imgLine.style.zIndex = "5";

        if (toggle) {
          imgElement.style.bottom = "100%";
          imgLine.style.bottom = "100%";
        } else {
          imgElement.style.top = "100%";
          imgLine.style.top = "100%";
        }
        imgElement.appendChild(p);
        // span.appendChild(imgLine);
        span.appendChild(imgElement);
      }

      // span.appendChild(descLine);
      span.appendChild(root);
      toggle = !toggle;
    }

    parent.appendChild(span);
    return span;
  });

  return chars;
};

const splitText = (parent: HTMLElement | null, text: string) => {
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
        
        const ctx = gsap.context(() => {          
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
              const state = Flip.getState([
                ...titleChars1,
                ...titleChars2,
                ...subtitleChars,
              ]);

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
              duration-300 flex `}
            >
              {title1}-
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
  ({ className, secondTitle }) => {
    const secondHeaderRef = useRef<HTMLDivElement>(null);
    const secondTitleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
      if (secondTitleRef.current && secondTitle) {
        const secondTitleChars = splitTextWithImgDescription(
          secondTitleRef.current,
          secondTitle
        );

        gsap.set(secondHeaderRef.current, {
          opacity: 0,
          x: 0,
        });

        gsap.set(secondTitleChars, {
          x: 0,
          y: 0,
          opacity: 1,
        });
      }
      if (secondHeaderRef.current) {
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

                const secondTitleChars =
                  secondTitleRef.current.querySelectorAll("span");
                const middleIndex = Math.floor(secondTitleChars.length / 2);
                const spreadAmount = self.progress * 80;
                gsap.to(secondTitleChars, {
                  x: (index) => `${(index - middleIndex) * spreadAmount}px`,
                  duration: 0.5,
                  stagger: 0.05,
                });

                const tooltipElements =
                  secondTitleRef.current.querySelectorAll(".char-tooltip");

                tooltipElements.forEach((el) => {
                  gsap.to(el, {
                    opacity: self.progress >= 1 ? 1 : 0,
                    display: self.progress >= 1 ? "block" : "none",
                    duration: 0.4,
                    ease: "power2.out",
                  });
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
                const secondTitleChars =
                  secondTitleRef.current.querySelectorAll("span");

                gsap.to(secondTitleChars, {
                  x: 0,
                  opacity: 1 - self.progress,
                  duration: 0.5,
                  stagger: 0.05,
                });

                const tooltipElements =
                  secondTitleRef.current.querySelectorAll(".char-tooltip");

                tooltipElements.forEach((el) => {
                  gsap.to(el, {
                    opacity: 0,
                    display: "block",
                    duration: 0.5,
                    ease: "power2.out",
                  });
                });
              }

              gsap.to(secondHeaderRef.current, {
                y: `-${self.progress * 100}%`,
                opacity: 1 - self.progress,
                duration: 0.5,
              });
            },
          });
        });

        return () => ctx.revert(); // Clean up
      }
    }, [secondTitle]);

    return (
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
    );
  }
);

SecondHeader.displayName = "SecondHeader";

export const Title = forwardRef<HTMLDivElement>(
  ({}) => {
    const headerRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      if (headerRef.current) {
        
        gsap.set(headerRef.current, {
          opacity: 0,
          x: '-100',
        });
      }
      if (headerRef.current) {
        const ctx = gsap.context(() => {
          ScrollTrigger.create({
            trigger: ".third-section",
            start: "top 80%",
            end: "top 30%",
            scrub: 0.6,
            onUpdate: (self) => {
              if (headerRef.current) {
                gsap.to(headerRef.current, {
                  x: 0,
                  y: 0,
                  opacity: self.progress,
                  scale: 1,
                  duration: 0.5,
                  zIndex: 51,
                });
                
              }
            },
          });
       
          //   trigger: ".third-section",
          //   start: "top 80%",
          //   end: "top 30%",
          //   scrub: 0.6,
          //   onUpdate: (self) => {
          //     if (secondTitleRef.current) {
          //       const secondTitleChars =
          //         secondTitleRef.current.querySelectorAll("span");

          //       gsap.to(secondTitleChars, {
          //         x: 0,
          //         opacity: 1 - self.progress,
          //         duration: 0.5,
          //         stagger: 0.05,
          //       });

          //       const tooltipElements =
          //         secondTitleRef.current.querySelectorAll(".char-tooltip");

          //       tooltipElements.forEach((el) => {
          //         gsap.to(el, {
          //           opacity: 0,
          //           display: "block",
          //           duration: 0.5,
          //           ease: "power2.out",
          //         });
          //       });
          //     }

          //     gsap.to(secondHeaderRef.current, {
          //       y: `-${self.progress * 100}%`,
          //       opacity: 1 - self.progress,
          //       duration: 0.5,
          //     });
          //   },
          // });
        });

        return () => ctx.revert(); // Clean up
      }
    }, []);
    return (
      <div
        ref={headerRef} 
        className="flex items-center">
        <h1 className={`${playfairDisplay.className} text-6xl`}> E </h1>
        <div className="flex flex-col justify-center text-lg">
          <h1 className={`${playfairDisplay.className}`}>HABI</h1>
          <h1 className={`${libreBaskerville.className}`}>Rehistro</h1>
        </div>
      </div>
    );
  }
);

Title.displayName = "Title";
