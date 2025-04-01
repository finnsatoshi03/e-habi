"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./_components/Header";

import handLeft from "@/public/images/hand-left.png";
import handRight from "@/public/images/hand-right.png";
import broom from "@/public/images/broom.png";
import map from "@/public/images/map.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
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

  useEffect(() => {
    // Images animation
    if (handLeftRef.current && handRightRef.current && broomRef.current) {
      // Create a timeline for image animations

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          start: "20% top",
          end: "center center",
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

      // Create a timeline for third section animations
      const thirdSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".third-section",
          start: "top 80%",
          end: "top 30%",
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

      // Make map appear
      thirdSectionTl.to(
        mapRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        0.3
      );
    }

    // Third section text and horizontal line animations
    if (
      horizontalLineRef.current &&
      thirdSectionFirstParagraphRef.current &&
      thirdSectionSecondParagraphRef.current
    ) {
      // Set initial states
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

      // Create a timeline for horizontal line drawing
      const horizontalLineDrawing = gsap.timeline({
        scrollTrigger: {
          trigger: ".third-section-text",
          start: "top-=40% 80%",
          end: "top-=40% 60%",
          markers: true,
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
          trigger: ".third-section-text",
          start: "top 70%",
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
  }, []);

  return (
    <div ref={parentRef} className="relative overflow-y-auto overflow-x-hidden">
      <div className="relative h-screen">
        <Header title="E-HABI" subtitle="Walis Tambo" />
        <div
          ref={handLeftRef}
          className="fixed bottom-0 -left-[10%] w-1/2 rotate-[-20deg]"
        >
          <Image
            src={handLeft}
            alt="hand-left"
            className="object-cover w-full"
          />
        </div>
        <div
          ref={handRightRef}
          className="fixed bottom-1/4 -right-[10%] w-1/2 rotate-[10deg]"
        >
          <Image
            src={handRight}
            alt="hand-right"
            className="object-cover w-full"
          />
        </div>
        <div
          ref={broomRef}
          className="fixed w-1/5 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[158deg] transform-origin-center"
        >
          <Image src={broom} alt="broom" className="object-cover w-full" />
        </div>
      </div>
      <div ref={secondSectionRef} className="h-[100vh] relative second-section">
        <div className="grid grid-cols-[1fr_auto_1fr] gap-8 absolute top-0 left-[10%] w-1/2">
          <p
            ref={firstParagraphRef}
            className="text-right row-start-2 col-start-1 pr-8 mt-[25vh]"
          >
            Ang E-HABI ay isang digital na kasangkapan na naglalaman ng kultura
            at wika sa paggawa ng walis tambo sa San Lorenzo Ruiz, Camarines
            Norte.
          </p>
          <div
            ref={verticalLineRef}
            className="w-[1px] h-full row-span-3 row-start-1 left-1/3 bg-white mb-8"
          ></div>
          <p
            ref={secondParagraphRef}
            className="text-left row-start-3 col-start-3 pl-8"
          >
            Dito, matutuklasan ang tradisyon at kasanayang nagpapakilala sa mga
            manggagawang gumagawa ng walis, na patuloy na nagpapanatili ng
            kanilang identidad at pamana.
          </p>
        </div>
      </div>
      <div className="h-[100vh] relative third-section">
        <div ref={mapRef} className="fixed w-4/5 -left-[20%] -top-[25%]">
          <Image src={map} alt="map" className="object-cover w-full" />
        </div>
        <div className="grid grid-cols-2 gap-4 absolute bottom-[15%] right-[10%] w-1/2 third-section-text">
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
      {/* <div className="h-[100vh] relative fourth-section"></div> */}
    </div>
  );
}
