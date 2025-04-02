"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { FirstHeader, SecondHeader } from "../_components/EGlossaryTitle";

import handLeft from "@/public/images/hand-left.png";
import handRight from "@/public/images/hand-right.png";
import broom from "@/public/images/broom.png";
import map from "@/public/images/map.png";

gsap.registerPlugin(ScrollTrigger);

export default function EGlossaryPage() {
  const parentRef = useRef(null);
  const handLeftRef = useRef(null);
  const handRightRef = useRef(null);
  const broomRef = useRef(null);
  const verticalLineRef = useRef(null);
  const firstParagraphRef = useRef(null);
  const secondParagraphRef = useRef(null);
  const mapRef = useRef(null);
  const secondSectionRef = useRef(null);
  const horizontalLineRef = useRef(null);
  const thirdSectionFirstParagraphRef = useRef(null);
  const thirdSectionSecondParagraphRef = useRef(null);
  const fourthSectionBroomRef = useRef(null);
  const fourthSectionTitleRef = useRef(null);
  const fourthSectionBoxRef = useRef(null);
  const fourthSectionLineRef = useRef(null);
  const fourthSectionNumberRef = useRef(null);
  const fourthSectionTextRef = useRef(null);
  const fourthSectionBottomLineRef = useRef(null);
  const fifthSectionBroomRef = useRef(null);
  const fifthSectionTitleRef = useRef(null);
  const fifthSectionBoxRef = useRef(null);
  const fifthSectionNumberRef = useRef(null);
  const fifthSectionTextRef = useRef(null);
  const fifthSectionLineRef = useRef(null);
  const fifthSectionBottomLineRef = useRef(null);

  useEffect(() => {
    // Images animation
    if (handLeftRef.current && handRightRef.current && broomRef.current) {
      // Create a timeline for image animations

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          start: "20% center",
          end: "25% top",
          scrub: 0.5,
        },
      });

      gsap.set([handRightRef.current, broomRef.current], {
        scale: 1,
      });

      // Make handLeft disappear
      tl.to(
        handLeftRef.current,
        {
          opacity: 0,
          y: 150,
          x: "-10%",
          duration: 1,
          ease: "power1.out",
        },
        0
      );

      // Rotate handRight and move to bottom
      tl.to(
        handRightRef.current,
        {
          rotation: -30,
          y: "-25vh",
          x: "5vw",
          scale: 1.2,
          duration: 1,
          ease: "power1.inOut",
        },
        0
      );

      // Rotate broom and move to bottom center
      tl.to(
        broomRef.current,
        {
          rotation: 90,
          scale: 1.5,
          bottom: "-10%",
          x: "70%",
          y: 250,
          duration: 1,
          ease: "power1.inOut",
        },
        0
      );
    }

    // Text and line animation
    if (
      verticalLineRef.current &&
      firstParagraphRef.current &&
      secondParagraphRef.current
    ) {
      // Set initial states
      gsap.set(verticalLineRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
        height: "100%",
      });

      gsap.set([firstParagraphRef.current, secondParagraphRef.current], {
        opacity: 0,
        y: 30,
      });

      // Create a scroll-based animation for the line
      const lineDrawing = gsap.timeline({
        scrollTrigger: {
          trigger: ".second-section",
          start: "center 70%",
          end: "center center",
          scrub: 0.6,
        },
      });

      // Draw the line as user scrolls
      lineDrawing.to(verticalLineRef.current, {
        scaleY: 1,
        duration: 1,
        ease: "none",
      });

      // Create a timeline for text animations that triggers after line reaches halfway
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".second-section",
          start: "70% 70%",
          end: "bottom bottom",
          toggleActions: "play none none reverse",
        },
      });

      // Fade in first paragraph
      textTl
        .to(firstParagraphRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "back.out(1.2)",
        })
        // Fade in second paragraph
        .to(
          secondParagraphRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.2)",
          },
          "-=0.3"
        );
    }

    // Third section animations - disappearing elements and map appearance
    if (
      mapRef.current &&
      secondSectionRef.current &&
      handRightRef.current &&
      broomRef.current
    ) {
      // Set initial state for map
      gsap.set(mapRef.current, {
        opacity: 0,
        x: "-5%",
      });

      // Create a dedicated ScrollTrigger just for map visibility with proper callbacks
      ScrollTrigger.create({
        trigger: ".third-section",
        start: "top+=20% 80%",
        end: "bottom-=30% 20%",
        onEnter: () => {
          gsap.to(mapRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
          });
        },
        onLeave: () => {
          gsap.to(mapRef.current, {
            opacity: 0,
            x: "-100%",
            duration: 0.5,
          });
        },
        onEnterBack: () => {
          gsap.to(mapRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          gsap.to(mapRef.current, {
            opacity: 0,
            x: "-5%",
            duration: 0.5,
          });
        },
      });

      // Create a timeline for third section animations (keep existing animation for other elements)
      const thirdSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".third-section",
          start: "top 80%",
          end: "top-=20% 30%",
          scrub: 0.8,
        },
      });

      // Make handRight disappear to the right
      thirdSectionTl.to(
        handRightRef.current,
        {
          x: "100vw",
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      // Fade out broom
      thirdSectionTl.to(
        broomRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      // Fade out second section
      thirdSectionTl.to(
        secondSectionRef.current,
        {
          opacity: 0,
          y: -50,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );
    }

    // Third section text and horizontal line animations
    if (
      horizontalLineRef.current &&
      thirdSectionFirstParagraphRef.current &&
      thirdSectionSecondParagraphRef.current
    ) {
      // Get the container element
      const textContainer = document.querySelector(".third-section-text");

      // Set initial states - hide the text container completely
      gsap.set(textContainer, {
        opacity: 0,
        pointerEvents: "none", // Prevent interaction when invisible
      });

      gsap.set(horizontalLineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      gsap.set(
        [
          thirdSectionFirstParagraphRef.current,
          thirdSectionSecondParagraphRef.current,
        ],
        {
          opacity: 0,
          y: 20,
        }
      );

      // Create visibility control for the fixed element based on section position
      ScrollTrigger.create({
        trigger: ".third-section",
        start: "top 80%", // Start showing when third section is near view
        end: "bottom 20%", // Hide when third section is leaving
        // markers: true,
        onEnter: () => {
          gsap.to(textContainer, {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.5,
          });
        },
        onLeave: () => {
          gsap.to(textContainer, {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.5,
          });
        },
        onEnterBack: () => {
          gsap.to(textContainer, {
            opacity: 1,
            pointerEvents: "auto",
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          gsap.to(textContainer, {
            opacity: 0,
            pointerEvents: "none",
            duration: 0.5,
          });
        },
      });

      // Create a timeline for horizontal line drawing
      const horizontalLineDrawing = gsap.timeline({
        scrollTrigger: {
          trigger: ".third-section",
          start: "top 50%",
          end: "top 20%",
          scrub: 0.6,
        },
      });

      // Draw the horizontal line from left to right
      horizontalLineDrawing.to(horizontalLineRef.current, {
        scaleX: 1,
        duration: 1,
        ease: "none",
      });

      // Create a timeline for third section text animations
      const thirdSectionTextTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".third-section",
          start: "top 40%",
          toggleActions: "play none none reverse",
        },
      });

      // Fade in first paragraph of third section
      thirdSectionTextTl
        .to(thirdSectionFirstParagraphRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "back.out(1.2)",
        })
        // Fade in second paragraph of third section
        .to(
          thirdSectionSecondParagraphRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: "back.out(1.2)",
          },
          "-=0.3"
        );
    }

    // Fourth section entrance - hide map and third section text
    if (mapRef.current) {
      const textContainer = document.querySelector(".third-section-text");

      // Create a timeline for fourth section entrance animations
      const fourthSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.8,
          // Remove the markers to avoid console clutter
          // markers: true,
        },
      });

      // Fade out third section paragraphs (keep this part)
      if (textContainer) {
        fourthSectionTl.to(
          textContainer,
          {
            opacity: 0,
            y: -30,
            duration: 1,
            ease: "power2.inOut",
          },
          0
        );
      }

      // Remove the map animation from here as it's now handled by the dedicated ScrollTrigger above
    }

    // Fourth section element animations
    if (
      fourthSectionBroomRef.current &&
      fourthSectionTitleRef.current &&
      fourthSectionBoxRef.current &&
      fourthSectionLineRef.current &&
      fourthSectionNumberRef.current &&
      fourthSectionTextRef.current &&
      fourthSectionBottomLineRef.current
    ) {
      // Set initial states
      gsap.set(fourthSectionBroomRef.current, {
        y: "-100vh", // Start from way off the top
        opacity: 0.3,
        scale: 0.8,
      });

      gsap.set(
        [
          fourthSectionTitleRef.current,
          fourthSectionBoxRef.current,
          fourthSectionNumberRef.current,
          fourthSectionTextRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      gsap.set(
        [fourthSectionLineRef.current, fourthSectionBottomLineRef.current],
        {
          scaleX: 0,
          transformOrigin: "left center",
        }
      );

      // Create animation timeline for fourth section elements
      const fourthElementsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top 60%",
          end: "center center",
          scrub: 0.6,
        },
      });

      // Animate broom from top to final position
      fourthElementsTl.to(
        fourthSectionBroomRef.current,
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power2.out",
        },
        0
      );

      // Animate title
      fourthElementsTl.to(
        fourthSectionTitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.3
      );

      // Animate horizontal line
      fourthElementsTl.to(
        fourthSectionLineRef.current,
        {
          scaleX: 1,
          duration: 1,
          ease: "none",
        },
        0.5
      );

      // Animate box
      fourthElementsTl.to(
        fourthSectionBoxRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        0.6
      );

      // Animate numbered section
      fourthElementsTl.to(
        fourthSectionNumberRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.7
      );

      // Animate text paragraph
      fourthElementsTl.to(
        fourthSectionTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.8
      );

      // Animate bottom line
      fourthElementsTl.to(
        fourthSectionBottomLineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "none",
        },
        0.9
      );
    }

    // Fifth section animations - transition from fourth section
    if (
      fourthSectionBroomRef.current &&
      fifthSectionBroomRef.current &&
      fourthSectionTitleRef.current &&
      fifthSectionTitleRef.current &&
      fourthSectionTextRef.current &&
      fifthSectionTextRef.current &&
      fourthSectionNumberRef.current &&
      fifthSectionNumberRef.current &&
      fourthSectionBoxRef.current &&
      fifthSectionBoxRef.current &&
      fourthSectionLineRef.current &&
      fifthSectionLineRef.current &&
      fourthSectionBottomLineRef.current &&
      fifthSectionBottomLineRef.current
    ) {
      // Split text into characters for animation
      const splitTextToChars = (
        element: HTMLElement
      ): NodeListOf<HTMLSpanElement> => {
        const text = element.textContent || "";
        element.innerHTML = "";
        const chars = text.split("");

        chars.forEach((char: string) => {
          const span = document.createElement("span");
          span.className = "char inline-block relative";
          span.textContent = char === " " ? "\u00A0" : char;
          element.appendChild(span);
        });

        return element.querySelectorAll<HTMLSpanElement>(".char");
      };

      // Split texts into characters
      const fourthTitleChars = splitTextToChars(fourthSectionTitleRef.current);
      const fourthTextChars = splitTextToChars(fourthSectionTextRef.current);
      const fifthTitleChars = splitTextToChars(fifthSectionTitleRef.current);
      const fifthTextChars = splitTextToChars(fifthSectionTextRef.current);
      const fourthNumberChars = splitTextToChars(
        fourthSectionNumberRef.current
      );
      const fifthNumberChars = splitTextToChars(fifthSectionNumberRef.current);

      // Set initial states
      gsap.set(fifthSectionBroomRef.current, { opacity: 0 });
      gsap.set([...fifthTitleChars, ...fifthTextChars, ...fifthNumberChars], {
        opacity: 0,
      });
      gsap.set(fifthSectionBoxRef.current, { opacity: 0, scale: 0.8 });
      gsap.set(
        [fifthSectionLineRef.current, fifthSectionBottomLineRef.current],
        {
          scaleX: 0,
          transformOrigin: "left center",
        }
      );

      // Create a dedicated ScrollTrigger for fourth/fifth section transition
      // This handles visibility of both boxes with proper enter/leave callbacks
      ScrollTrigger.create({
        trigger: ".fifth-section",
        start: "top 80%",
        end: "top 30%",
        onEnter: () => {
          // When entering fifth section, hide fourth section elements
          gsap.to(fourthSectionBoxRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(fourthSectionBroomRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });

          // Show fifth section elements
          gsap.to(fifthSectionBoxRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.2)",
            overwrite: "auto",
          });
          gsap.to(fifthSectionBroomRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.in",
            overwrite: "auto",
          });
        },
        onLeave: () => {
          // Additional animations when leaving fifth section upward (if needed)
        },
        onEnterBack: () => {
          // When entering fifth section from below (if needed)
        },
        onLeaveBack: () => {
          // When leaving fifth section going up (back to fourth)
          gsap.to(fourthSectionBoxRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(1.2)",
            overwrite: "auto",
          });
          gsap.to(fourthSectionBroomRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: "power2.in",
            overwrite: "auto",
          });

          // Hide fifth section elements
          gsap.to(fifthSectionBoxRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
          gsap.to(fifthSectionBroomRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
            overwrite: "auto",
          });
        },
      });

      // Create timeline for section transition animations (for text and other elements)
      const sectionTransitionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.8,
        },
      });

      // Fade out fourth section characters randomly
      fourthTitleChars.forEach((char: HTMLSpanElement) => {
        sectionTransitionTl.to(
          char,
          {
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
          },
          0.1 + Math.random() * 0.3
        );
      });

      fourthTextChars.forEach((char: HTMLSpanElement) => {
        sectionTransitionTl.to(
          char,
          {
            opacity: 0,
            duration: 0.3,
            ease: "power1.out",
          },
          0.2 + Math.random() * 0.3
        );
      });

      // Fade out fourth section number characters
      fourthNumberChars.forEach((char: HTMLSpanElement) => {
        sectionTransitionTl.to(
          char,
          {
            opacity: 0,
            y: -10,
            duration: 0.3,
            ease: "power1.out",
          },
          0.15 + Math.random() * 0.2
        );
      });

      // Fade in fifth section characters randomly
      fifthTitleChars.forEach((char: HTMLSpanElement) => {
        sectionTransitionTl.to(
          char,
          {
            opacity: 1,
            duration: 0.3,
            ease: "power1.in",
          },
          0.4 + Math.random() * 0.3
        );
      });

      fifthTextChars.forEach((char: HTMLSpanElement) => {
        sectionTransitionTl.to(
          char,
          {
            opacity: 1,
            duration: 0.3,
            ease: "power1.in",
          },
          0.5 + Math.random() * 0.3
        );
      });

      // Fade in fifth section number with a special effect
      fifthNumberChars.forEach((char: HTMLSpanElement) => {
        sectionTransitionTl.to(
          char,
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "back.out(1.5)",
          },
          0.45 + Math.random() * 0.2
        );
      });

      // Fade out fourth section lines
      sectionTransitionTl.to(
        fourthSectionLineRef.current,
        {
          scaleX: 0,
          duration: 0.4,
          ease: "power1.in",
        },
        0.1
      );

      sectionTransitionTl.to(
        fourthSectionBottomLineRef.current,
        {
          scaleX: 0,
          duration: 0.4,
          ease: "power1.in",
        },
        0.2
      );

      // Animate in fifth section horizontal line
      sectionTransitionTl.to(
        fifthSectionLineRef.current,
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power1.out",
        },
        0.5
      );

      // Animate in fifth section bottom line
      sectionTransitionTl.to(
        fifthSectionBottomLineRef.current,
        {
          scaleX: 1,
          duration: 0.6,
          ease: "power1.out",
        },
        0.6
      );
    }
  }, []);

  return (
    <div ref={parentRef} className="relative overflow-y-auto overflow-x-hidden">
      <div className="relative h-screen">
        <FirstHeader
          title="E-GLOSSARY"
          subtitle="Ng Walis Tambo"
        />
      </div>
      <div className="relative h-screen second-section">
        <SecondHeader
          secondTitle="TAMBO"
        />
      </div>
      {/* 
      <div className="h-[100vh] relative third-section">
        <div ref={mapRef} className="fixed w-4/5 -left-[20%] -top-[25%]">
          <Image src={map} alt="map" className="object-cover w-full" />
        </div>
        <div className="fixed grid grid-cols-2 gap-4 bottom-[15%] right-[10%] w-1/2 third-section-text">
          <p ref={thirdSectionFirstParagraphRef} className="col-start-2">
            Sa San Lorenzo Ruiz, ang paggawa ng walis tambo ay hindi lang
            simpleng kabuhayan—ito ay isang sining at pamana
          </p>
          <div
            ref={horizontalLineRef}
            className="h-[1px] w-full bg-white col-span-2"
          ></div>
          <p ref={thirdSectionSecondParagraphRef} className="col-start-2">
            Nagbibigay ito ng oportunidad sa mga manggagawa upang kumita at
            mabuhay, habang ipinapakita ang kanilang sipag, husay, at kultura.
            Ang tradisyong ito ay naipapasa mula henerasyon hanggang henerasyon,
            patuloy na nagpapatibay sa pagkakakilanlan ng bayan.
          </p>
        </div>
      </div>
      <div className="h-[100vh] relative fourth-section">
        <div
          ref={fourthSectionBroomRef}
          className="fixed w-[60%] -right-[10%] -top-[235%]"
        >
          <Image
            src={broom}
            alt="Walis Tambo"
            style={{
              filter: "saturate(2) hue-rotate(40deg)",
            }}
            className="object-cover w-full"
          />
        </div>
        <div className="fixed grid grid-cols-[auto_1fr] bottom-[25%] left-[10%] w-1/2 fourth-section-image">
          <p
            ref={fourthSectionTitleRef}
            className="col-start-1 uppercase w-fit"
          >
            pagtatanim at pagtatahi
          </p>
          <div
            ref={fourthSectionBoxRef}
            className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] row-start-2"
          ></div>
          <div
            ref={fourthSectionLineRef}
            className="h-[1px] w-full bg-white row-start-2 mt-[10vh]"
          ></div>
        </div>
        <div className="fixed grid grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4 bottom-[15%] left-[35%] w-1/3 fourth-section-text">
          <p ref={fourthSectionNumberRef} className="col-start-1">
            01
          </p>
          <p ref={fourthSectionTextRef} className="col-start-2">
            Karaniwang ginagawa tuwing Pebrero hanggang Mayo.
          </p>
          <div
            ref={fourthSectionBottomLineRef}
            className="h-[1px] w-full bg-white col-start-2 col-span-2"
          ></div>
        </div>
      </div>
      <div className="h-[100vh] relative fifth-section">
        <div
          ref={fifthSectionBroomRef}
          className="fixed w-[60%] -right-[10%] -top-[235%]"
        >
          <Image
            src={broom}
            alt="Walis Tambo"
            className="object-cover w-full"
          />
        </div>
        <div className="fixed grid grid-cols-[auto_1fr] bottom-[25%] left-[10%] w-1/2 fifth-section-image">
          <p ref={fifthSectionTitleRef} className="col-start-1 uppercase w-fit">
            pagpapatuyo
          </p>
          <div
            ref={fifthSectionBoxRef}
            className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] row-start-2"
          ></div>
          <div
            ref={fifthSectionLineRef}
            className="h-[1px] w-full bg-white row-start-2 mt-[10vh]"
          ></div>
        </div>
        <div className="fixed grid grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4 bottom-[15%] left-[35%] w-1/3 fifth-section-text">
          <p ref={fifthSectionNumberRef} className="col-start-1">
            02
          </p>
          <p ref={fifthSectionTextRef} className="col-start-2">
            Binibilad sa araw o tinutuyo gamit ang mahinang apoy kapag maulan.
          </p>
          <div
            ref={fifthSectionBottomLineRef}
            className="h-[1px] w-full bg-white col-start-2 col-span-2"
          ></div>
        </div>
      </div> */}
    </div>
  );
}
