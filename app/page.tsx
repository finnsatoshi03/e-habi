"use client";

import React, { useRef, useLayoutEffect } from "react";
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
  const sixthSectionTitleRef = useRef(null);
  const sixthSectionBoxRef = useRef(null);
  const sixthSectionNumberRef = useRef(null);
  const sixthSectionTextRef = useRef(null);
  const sixthSectionLineRef = useRef(null);
  const sixthSectionBottomLineRef = useRef(null);
  const seventhSectionTitleRef = useRef(null);
  const seventhSectionBoxRef = useRef(null);
  const seventhSectionNumberRef = useRef(null);
  const seventhSectionTextRef = useRef(null);
  const seventhSectionLineRef = useRef(null);
  const seventhSectionBottomLineRef = useRef(null);
  const eighthSectionTitleRef = useRef(null);
  const eighthSectionBoxRef = useRef(null);
  const eighthSectionNumberRef = useRef(null);
  const eighthSectionTextRef = useRef(null);
  const eighthSectionLineRef = useRef(null);
  const eighthSectionBottomLineRef = useRef(null);

  useLayoutEffect(() => {
    // Images animation
    if (handLeftRef.current && handRightRef.current && broomRef.current) {
      // Create a timeline for image animations with improved configuration
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          start: "20% center",
          end: "25% center",
          scrub: 0.8,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "header-animations",
        },
      });

      // Set initial states with smoother scaling
      gsap.set([handRightRef.current, broomRef.current], {
        scale: 1,
        opacity: 0.8,
      });

      // Make handLeft disappear with smoother transition
      tl.to(
        handLeftRef.current,
        {
          opacity: 0,
          y: 150,
          x: "-10%",
          scale: 0.8,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      // Rotate handRight and move to bottom with smoother scaling
      tl.to(
        handRightRef.current,
        {
          rotation: -30,
          y: "-25vh",
          x: "5vw",
          scale: 1.2,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      // Rotate broom and move to bottom center with smoother scaling
      tl.to(
        broomRef.current,
        {
          rotation: 90,
          scale: 1.5,
          bottom: "-10%",
          x: "70%",
          y: 250,
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
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

      // Create a dedicated ScrollTrigger for map visibility with improved configuration
      ScrollTrigger.create({
        trigger: ".third-section",
        start: "top+=20% 80%",
        end: "bottom-=30% 20%",
        preventOverlaps: true,
        toggleActions: "play none none reverse",
        id: "map-visibility",
        onEnter: () => {
          gsap.to(mapRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.inOut",
          });
        },
        onLeave: () => {
          gsap.to(mapRef.current, {
            opacity: 0,
            x: "-100%",
            duration: 0.5,
            ease: "power2.inOut",
          });
        },
        onEnterBack: () => {
          gsap.to(mapRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: "power2.inOut",
          });
        },
        onLeaveBack: () => {
          gsap.to(mapRef.current, {
            opacity: 0,
            x: "-5%",
            duration: 0.5,
            ease: "power2.inOut",
          });
        },
      });

      // Create a timeline for third section animations with improved ScrollTrigger config
      const thirdSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".third-section",
          start: "top 80%",
          end: "top-=20% 30%",
          scrub: 0.8,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "third-section",
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

      // Add transition animation for map when entering fourth section
      const mapTransitionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.8,
        },
      });

      // Fade out and slide map to the left
      mapTransitionTl.to(
        mapRef.current,
        {
          opacity: 0,
          x: "-100%",
          scale: 0.8,
          duration: 1,
          ease: "power2.inOut",
        },
        0
      );

      // Ensure map is properly hidden after transition
      ScrollTrigger.create({
        trigger: ".fourth-section",
        start: "top 30%",
        onEnter: () => {
          gsap.set(mapRef.current, {
            opacity: 0,
            x: "-100%",
            scale: 0.8,
          });
        },
      });
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
        y: "-100vh",
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

      // Create animation timeline for fourth section elements with improved ScrollTrigger config
      const fourthElementsTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top 60%",
          end: "center center",
          scrub: 0.6,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "fourth-section",
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

      // Add exit animation for fourth section elements
      ScrollTrigger.create({
        trigger: ".fifth-section",
        start: "top 80%",
        end: "top 30%",
        scrub: 0.8,
        onEnter: () => {
          gsap.to(fourthSectionBoxRef.current, {
            opacity: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.inOut",
          });
        },
        onLeave: () => {
          gsap.set(fourthSectionBoxRef.current, {
            opacity: 0,
            scale: 0.8,
          });
        },
      });
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
      // Set initial states for fifth section
      gsap.set(fifthSectionBroomRef.current, {
        opacity: 0,
        y: -50,
        scale: 0.8,
      });
      gsap.set(fifthSectionBoxRef.current, {
        opacity: 0,
        scale: 0.8,
      });
      gsap.set(
        [
          fifthSectionTitleRef.current,
          fifthSectionTextRef.current,
          fifthSectionNumberRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );
      gsap.set(
        [fifthSectionLineRef.current, fifthSectionBottomLineRef.current],
        {
          scaleX: 0,
          transformOrigin: "left center",
        }
      );

      // Create timeline for section transition animations with improved ScrollTrigger config
      const sectionTransitionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.8,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "fifth-section",
        },
      });

      // Fade out fourth section broom
      sectionTransitionTl.to(
        fourthSectionBroomRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      // Fade out fourth section elements
      sectionTransitionTl.to(
        [fourthSectionTitleRef.current, fourthSectionTextRef.current],
        {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      sectionTransitionTl.to(
        fourthSectionNumberRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      // Fade out fourth section lines
      sectionTransitionTl.to(
        [fourthSectionLineRef.current, fourthSectionBottomLineRef.current],
        {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      // Animate fifth section broom
      sectionTransitionTl.to(
        fifthSectionBroomRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.2
      );

      // Animate fifth section title
      sectionTransitionTl.to(
        fifthSectionTitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.3
      );

      // Animate fifth section horizontal line
      sectionTransitionTl.to(
        fifthSectionLineRef.current,
        {
          scaleX: 1,
          duration: 1,
          ease: "none",
        },
        0.5
      );

      // Animate fifth section box
      sectionTransitionTl.to(
        fifthSectionBoxRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power1.out",
        },
        0.6
      );

      // Animate fifth section number
      sectionTransitionTl.to(
        fifthSectionNumberRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.7
      );

      // Animate fifth section text
      sectionTransitionTl.to(
        fifthSectionTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.8
      );

      // Animate fifth section bottom line
      sectionTransitionTl.to(
        fifthSectionBottomLineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "none",
        },
        0.9
      );

      // Add exit animation for fifth section elements
      ScrollTrigger.create({
        trigger: ".sixth-section",
        start: "top 80%",
        end: "top 30%",
        scrub: 0.8,
        onEnter: () => {
          gsap.to(fifthSectionBoxRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: "power2.inOut",
          });
        },
        onLeave: () => {
          gsap.set(fifthSectionBoxRef.current, {
            opacity: 0,
            scale: 0.8,
          });
        },
      });
    }

    // Sixth section animations - transition from fifth section
    if (
      fifthSectionBroomRef.current &&
      fifthSectionTitleRef.current &&
      fifthSectionTextRef.current &&
      fifthSectionNumberRef.current &&
      fifthSectionBoxRef.current &&
      fifthSectionLineRef.current &&
      fifthSectionBottomLineRef.current &&
      sixthSectionTitleRef.current &&
      sixthSectionBoxRef.current &&
      sixthSectionNumberRef.current &&
      sixthSectionTextRef.current &&
      sixthSectionLineRef.current &&
      sixthSectionBottomLineRef.current
    ) {
      // Set initial states for sixth section
      gsap.set(sixthSectionBoxRef.current, {
        opacity: 0,
        scale: 0.8,
      });
      gsap.set(
        [
          sixthSectionTitleRef.current,
          sixthSectionTextRef.current,
          sixthSectionNumberRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );
      gsap.set(
        [sixthSectionLineRef.current, sixthSectionBottomLineRef.current],
        {
          scaleX: 0,
          transformOrigin: "left center",
        }
      );

      // Create timeline for section transition animations with improved ScrollTrigger config
      const sectionTransitionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".sixth-section",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.8,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "sixth-section",
        },
      });

      // Scale down fifth section broom instead of fading it out
      sectionTransitionTl.to(
        fifthSectionBroomRef.current,
        {
          y: "10%",
          x: "-10%",
          scale: 0.8,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      // Fade out fifth section elements
      sectionTransitionTl.to(
        [fifthSectionTitleRef.current, fifthSectionTextRef.current],
        {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      sectionTransitionTl.to(
        fifthSectionNumberRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      // Fade out fifth section lines
      sectionTransitionTl.to(
        [fifthSectionLineRef.current, fifthSectionBottomLineRef.current],
        {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      // Animate sixth section title
      sectionTransitionTl.to(
        sixthSectionTitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.3
      );

      // Animate sixth section horizontal line
      sectionTransitionTl.to(
        sixthSectionLineRef.current,
        {
          scaleX: 1,
          duration: 1,
          ease: "none",
        },
        0.5
      );

      // Animate sixth section box
      sectionTransitionTl.to(
        sixthSectionBoxRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power1.out",
        },
        0.6
      );

      // Animate sixth section number
      sectionTransitionTl.to(
        sixthSectionNumberRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.7
      );

      // Animate sixth section text
      sectionTransitionTl.to(
        sixthSectionTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.8
      );

      // Animate sixth section bottom line
      sectionTransitionTl.to(
        sixthSectionBottomLineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "none",
        },
        0.9
      );

      // Create a separate timeline for sixth section exit animations with improved ScrollTrigger config
      const sixthSectionExitTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".seventh-section",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.8,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "sixth-section-exit",
        },
      });

      // Fade out sixth section elements with staggered timing
      sixthSectionExitTl.to(
        [sixthSectionTitleRef.current, sixthSectionTextRef.current],
        {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.inOut",
        },
        0
      );

      sixthSectionExitTl.to(
        sixthSectionNumberRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.inOut",
        },
        0.1
      );

      // Fix line animations to ensure they disappear properly
      sixthSectionExitTl.to(
        [sixthSectionLineRef.current, sixthSectionBottomLineRef.current],
        {
          scaleX: 0,
          opacity: 0,
          transformOrigin: "left center",
          duration: 0.3,
          ease: "power2.inOut",
        },
        0.2
      );

      sixthSectionExitTl.to(
        sixthSectionBoxRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.inOut",
        },
        0.3
      );

      // Ensure lines are properly reset after animation
      ScrollTrigger.create({
        trigger: ".seventh-section",
        start: "top 30%",
        onLeave: () => {
          gsap.set(
            [sixthSectionLineRef.current, sixthSectionBottomLineRef.current],
            {
              scaleX: 0,
              opacity: 0,
              transformOrigin: "left center",
            }
          );
        },
      });

      // Add a cleanup trigger to ensure lines stay hidden
      ScrollTrigger.create({
        trigger: ".seventh-section",
        start: "top 30%",
        end: "bottom bottom",
        onEnter: () => {
          gsap.set(
            [sixthSectionLineRef.current, sixthSectionBottomLineRef.current],
            {
              scaleX: 0,
              opacity: 0,
              transformOrigin: "left center",
            }
          );
        },
      });
    }

    // Seventh section animations - transition from sixth section
    if (
      fifthSectionBroomRef.current &&
      sixthSectionTitleRef.current &&
      sixthSectionTextRef.current &&
      sixthSectionNumberRef.current &&
      sixthSectionBoxRef.current &&
      sixthSectionLineRef.current &&
      sixthSectionBottomLineRef.current &&
      seventhSectionTitleRef.current &&
      seventhSectionBoxRef.current &&
      seventhSectionNumberRef.current &&
      seventhSectionTextRef.current &&
      seventhSectionLineRef.current &&
      seventhSectionBottomLineRef.current
    ) {
      // Set initial states for seventh section
      gsap.set(seventhSectionBoxRef.current, {
        opacity: 0,
        scale: 0.8,
      });
      gsap.set(
        [
          seventhSectionTitleRef.current,
          seventhSectionTextRef.current,
          seventhSectionNumberRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );
      gsap.set(
        [seventhSectionLineRef.current, seventhSectionBottomLineRef.current],
        {
          scaleX: 0,
          transformOrigin: "left center",
        }
      );

      // Create timeline for section transition animations with improved ScrollTrigger config
      const sectionTransitionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".seventh-section",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.8,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "seventh-section",
        },
      });

      // Scale down fifth section broom and center it with adjusted timing
      sectionTransitionTl.to(
        fifthSectionBroomRef.current,
        {
          y: "30%",
          x: "-45%",
          scale: 0.4,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.4 // Start after sixth section elements fade out
      );

      // Animate seventh section elements with staggered timing
      sectionTransitionTl.to(
        seventhSectionTitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        0.5 // Start after broom starts moving
      );

      sectionTransitionTl.to(
        seventhSectionLineRef.current,
        {
          scaleX: 1,
          duration: 0.4,
          ease: "none",
        },
        0.6
      );

      sectionTransitionTl.to(
        seventhSectionBoxRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power1.out",
        },
        0.7
      );

      sectionTransitionTl.to(
        seventhSectionNumberRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        0.8
      );

      sectionTransitionTl.to(
        seventhSectionTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        0.9
      );

      sectionTransitionTl.to(
        seventhSectionBottomLineRef.current,
        {
          scaleX: 1,
          duration: 0.4,
          ease: "none",
        },
        1.0
      );

      // Add exit animation for seventh section elements
      ScrollTrigger.create({
        trigger: ".eighth-section",
        start: "top 80%",
        end: "top 30%",
        scrub: 0.8,
        onEnter: () => {
          gsap.to(seventhSectionBoxRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: "power2.inOut",
          });
        },
        onLeave: () => {
          gsap.set(seventhSectionBoxRef.current, {
            opacity: 0,
            scale: 0.8,
          });
        },
      });
    }

    // Eighth section animations - transition from seventh section
    if (
      fifthSectionBroomRef.current &&
      seventhSectionTitleRef.current &&
      seventhSectionTextRef.current &&
      seventhSectionNumberRef.current &&
      seventhSectionBoxRef.current &&
      seventhSectionLineRef.current &&
      seventhSectionBottomLineRef.current &&
      eighthSectionTitleRef.current &&
      eighthSectionBoxRef.current &&
      eighthSectionNumberRef.current &&
      eighthSectionTextRef.current &&
      eighthSectionLineRef.current &&
      eighthSectionBottomLineRef.current
    ) {
      // Set initial states for eighth section
      gsap.set(eighthSectionBoxRef.current, {
        opacity: 0,
        scale: 0.8,
      });
      gsap.set(
        [
          eighthSectionTitleRef.current,
          eighthSectionTextRef.current,
          eighthSectionNumberRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );
      gsap.set(
        [eighthSectionLineRef.current, eighthSectionBottomLineRef.current],
        {
          scaleX: 0,
          transformOrigin: "left center",
        }
      );

      // Create timeline for section transition animations with improved ScrollTrigger config
      const sectionTransitionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".eighth-section",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.8,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "eighth-section",
        },
      });

      // Scale down fifth section broom and move it up
      sectionTransitionTl.to(
        fifthSectionBroomRef.current,
        {
          y: "25%",
          x: "-45%",
          scale: 0.5,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.4
      );

      // Fade out seventh section elements
      sectionTransitionTl.to(
        [seventhSectionTitleRef.current, seventhSectionTextRef.current],
        {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      sectionTransitionTl.to(
        seventhSectionNumberRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      sectionTransitionTl.to(
        [seventhSectionLineRef.current, seventhSectionBottomLineRef.current],
        {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      // Animate eighth section elements with staggered timing
      sectionTransitionTl.to(
        eighthSectionTitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        0.5
      );

      sectionTransitionTl.to(
        eighthSectionLineRef.current,
        {
          scaleX: 1,
          duration: 0.4,
          ease: "none",
        },
        0.6
      );

      sectionTransitionTl.to(
        eighthSectionBoxRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power1.out",
        },
        0.7
      );

      sectionTransitionTl.to(
        eighthSectionNumberRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        0.8
      );

      sectionTransitionTl.to(
        eighthSectionTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        0.9
      );

      sectionTransitionTl.to(
        eighthSectionBottomLineRef.current,
        {
          scaleX: 1,
          duration: 0.4,
          ease: "none",
        },
        1.0
      );
    }
  }, []);

  return (
    <div ref={parentRef} className="relative overflow-y-auto overflow-x-hidden">
      <div className="relative h-screen">
        <Header
          title="E-HABI"
          subtitle="Walis Tambo"
          secondTitle="Paggawa"
          secondSubtitle="Ng Walis Tambo"
        />
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
      </div>
      <div className="h-[100vh] relative sixth-section">
        <div className="fixed grid grid-cols-[auto_1fr] bottom-[25%] left-[10%] w-1/2 sixth-section-image">
          <p ref={sixthSectionTitleRef} className="col-start-1 uppercase w-fit">
            pagsusuri
          </p>
          <div
            ref={sixthSectionBoxRef}
            className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] row-start-2"
          ></div>
          <div
            ref={sixthSectionLineRef}
            className="h-[1px] w-full bg-white row-start-2 mt-[10vh]"
          ></div>
        </div>
        <div className="fixed grid grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4 bottom-[15%] left-[35%] w-1/3 sixth-section-text">
          <p ref={sixthSectionNumberRef} className="col-start-1">
            03
          </p>
          <p ref={sixthSectionTextRef} className="col-start-2">
            Pinipili ang tamang haba at kapal ng tambo.
          </p>
          <div
            ref={sixthSectionBottomLineRef}
            className="h-[1px] w-full bg-white col-start-2 col-span-2"
          ></div>
        </div>
      </div>
      <div className="h-[100vh] relative seventh-section">
        <div className="fixed grid grid-cols-[auto_1fr] bottom-[25%] left-[10%] w-[42%] seventh-section-image">
          <p
            ref={seventhSectionTitleRef}
            className="col-start-1 uppercase w-fit"
          >
            pagbibigkis
          </p>
          <div
            ref={seventhSectionBoxRef}
            className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] row-start-2"
          ></div>
          <div
            ref={seventhSectionLineRef}
            className="h-[1px] w-full bg-white row-start-2 mt-[10vh]"
          ></div>
        </div>
        <div className="fixed grid grid-cols-[1fr_1fr_auto] gap-x-8 gap-y-4 bottom-[15%] right-[10%] w-1/3 seventh-section-text text-right">
          <p ref={seventhSectionNumberRef} className="row-start-1 col-start-3">
            04.1
          </p>
          <p ref={seventhSectionTextRef} className="col-start-2 row-start-1">
            Ang mga lalaki ang nagbibigkis ng tambo sa tangkay
          </p>
          <div
            ref={seventhSectionBottomLineRef}
            className="h-[1px] w-full bg-white col-start-1 col-span-2"
          ></div>
        </div>
      </div>
      <div className="h-[100vh] relative eighth-section">
        <div className="w-[35%] fixed grid grid-cols-[1fr_auto] bottom-[27%] right-[10%] eighth-section-image">
          <p
            ref={eighthSectionTitleRef}
            className="col-start-2 uppercase w-fit justify-self-end"
          >
            pananahi
          </p>
          <div
            ref={eighthSectionBoxRef}
            className="w-[150px] h-[150px] border md:h-[300px] md:w-[300px] col-start-2 row-start-2"
          ></div>
          <div
            ref={eighthSectionLineRef}
            className="h-[1px] w-full bg-white mt-[10vh] row-start-2 col-start-1"
          ></div>
        </div>
        <div className="fixed grid grid-cols-[auto_1fr_1fr] gap-x-8 gap-y-4 bottom-[15%] left-[10%] w-1/3 eighth-section-text">
          <p ref={eighthSectionNumberRef} className="row-start-1 col-start-1">
            04.2
          </p>
          <p ref={eighthSectionTextRef} className="col-start-2 row-start-1">
            Habang ang mga babae ang nagtatahi gamit ang karayom at plastic
            rattan.{" "}
          </p>
          <div
            ref={eighthSectionBottomLineRef}
            className="h-[1px] w-full bg-white col-start-2 col-span-2"
          ></div>
        </div>
      </div>
    </div>
  );
}
