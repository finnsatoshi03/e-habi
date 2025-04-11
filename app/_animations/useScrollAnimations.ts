import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = () => {
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
  const fifthSectionTitleRef2 = useRef(null);
  const fifthSectionBoxRef2 = useRef(null);
  const fifthSectionNumberRef2 = useRef(null);
  const fifthSectionTextRef2 = useRef(null);
  const fifthSectionBottomLineRef2 = useRef(null);
  const sixthSectionTitleRef = useRef(null);
  const sixthSectionBoxRef = useRef(null);
  const sixthSectionNumberRef = useRef(null);
  const sixthSectionTextRef = useRef(null);
  const sixthSectionLineRef = useRef(null);
  const sixthSectionBottomLineRef = useRef(null);
  const seventhSectionBroomRef = useRef(null);
  const seventhSectionTitleRef = useRef(null);
  const seventhSectionBoxRef = useRef(null);
  const seventhSectionNumberRef = useRef(null);
  const seventhSectionTextRef = useRef(null);
  const seventhSectionLineRef = useRef(null);
  const seventhSectionBottomLineRef = useRef(null);
  const eighthSectionBroomRef = useRef(null);
  const eighthSectionTitleRef = useRef(null);
  const eighthSectionBoxRef = useRef(null);
  const eighthSectionNumberRef = useRef(null);
  const eighthSectionTextRef = useRef(null);
  const eighthSectionLineRef = useRef(null);
  const eighthSectionBottomLineRef = useRef(null);
  const ninthSectionBroomRef = useRef(null);
  const ninthSectionBambooRef = useRef(null);
  const ninthSectionNumberRef = useRef(null);
  const ninthSectionFirstTextRef = useRef(null);
  const ninthSectionLineRef = useRef(null);
  const ninthSectionSecondTextRef = useRef(null);
  const finalSectionNumberRef = useRef(null);
  const finalSectionTitleRef = useRef(null);
  const finalSectionLineRef = useRef(null);
  const finalSectionTextRef = useRef(null);
  const finalSectionGridRef = useRef<HTMLDivElement>(null);
  const beliefsSectionNumberRef = useRef(null);
  const beliefsSectionLineRef = useRef(null);
  const beliefsSectionTextRef = useRef(null);
  const beliefsSectionBroomRef = useRef(null);
  const beliefsSecondSectionNumberRef = useRef(null);
  const beliefsSecondSectionLineRef = useRef(null);
  const beliefsSecondSectionTextRef = useRef(null);
  const beliefsSecondSectionFeetRef = useRef(null);
  const beliefsThirdSectionNumberRef = useRef(null);
  const beliefsThirdSectionLineRef = useRef(null);
  const beliefsThirdSectionTextRef = useRef(null);
  const beliefsThirdSectionBroom1Ref = useRef(null);
  const beliefsThirdSectionBroom2Ref = useRef(null);
  const beliefsThirdSectionBroom3Ref = useRef(null);
  const beliefsThirdSectionBroom4Ref = useRef(null);
  const beliefsThirdSectionBroom5Ref = useRef(null);

  useLayoutEffect(() => {
    // Images animation
    if (handLeftRef.current && handRightRef.current && broomRef.current) {
      // Create a timeline for image animations with improved configuration
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parentRef.current,
          start: "5% center",
          end: "15% center",
          scrub: 0.5,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "header-animations",
          fastScrollEnd: true,
        },
      });

      // Set initial states with smoother scaling
      gsap.set([handRightRef.current, broomRef.current], {
        scale: 1,
        opacity: 0.8,
        willChange: "transform",
      });

      // Make handLeft disappear with smoother transition
      tl.to(
        handLeftRef.current,
        {
          opacity: 0,
          y: 150,
          x: "-10%",
          scale: 0.8,
          duration: 0.8,
          ease: "power2.inOut",
        },
        0,
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
          duration: 0.8,
          ease: "power2.inOut",
        },
        0,
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
          duration: 0.8,
          ease: "power2.inOut",
        },
        0,
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
          "-=0.3",
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

      thirdSectionTl.to(
        mapRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0,
      );

      // Make handRight disappear to the right
      thirdSectionTl.to(
        handRightRef.current,
        {
          x: "100vw",
          autoAlpha: 0,
          duration: 1,
        },
        0,
      );

      // Fade out broom
      thirdSectionTl.to(
        broomRef.current,
        {
          autoAlpha: 0,
          duration: 1,
        },
        0,
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
        0,
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
        0,
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
        },
      );

      // Create visibility control for the fixed element based on section position
      ScrollTrigger.create({
        trigger: ".third-section",
        start: "top 80%", // Start showing when third section is near view
        end: "bottom 20%", // Hide when third section is leaving
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
          "-=0.3",
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
          0,
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
        },
      );

      gsap.set(
        [fourthSectionLineRef.current, fourthSectionBottomLineRef.current],
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
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
        0,
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
        0.3,
      );

      // Animate horizontal line
      fourthElementsTl.to(
        fourthSectionLineRef.current,
        {
          scaleX: 1,
          duration: 1,
          ease: "none",
        },
        0.5,
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
        0.6,
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
        0.7,
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
        0.8,
      );

      // Animate bottom line
      fourthElementsTl.to(
        fourthSectionBottomLineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "none",
        },
        0.9,
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
        onEnterBack: () => {
          gsap.to(fourthSectionBoxRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: "power2.inOut",
          });
        },
        onLeaveBack: () => {
          gsap.to(fourthSectionBoxRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.inOut",
          });

          // Ensure all fourth section elements are visible when scrolling back
          gsap.to(
            [
              fourthSectionTitleRef.current,
              fourthSectionLineRef.current,
              fourthSectionNumberRef.current,
              fourthSectionTextRef.current,
              fourthSectionBottomLineRef.current,
            ],
            {
              opacity: 1,
              scaleX: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.inOut",
            },
          );
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
      fifthSectionBottomLineRef.current &&
      fifthSectionTitleRef2.current &&
      fifthSectionBoxRef2.current &&
      fifthSectionNumberRef2.current &&
      fifthSectionTextRef2.current &&
      fifthSectionBottomLineRef2.current
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
          fifthSectionTitleRef2.current,
          fifthSectionTextRef2.current,
          fifthSectionNumberRef2.current,
        ],
        {
          opacity: 0,
          y: 30,
        },
      );
      gsap.set(
        [
          fifthSectionLineRef.current,
          fifthSectionBottomLineRef.current,
          fifthSectionBottomLineRef2.current,
        ],
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
      );
      gsap.set(fifthSectionBoxRef2.current, {
        opacity: 0,
        scale: 0.8,
      });

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
        0,
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
        0,
      );

      sectionTransitionTl.to(
        fourthSectionNumberRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0,
      );

      // Fade out fourth section lines
      sectionTransitionTl.to(
        [fourthSectionLineRef.current, fourthSectionBottomLineRef.current],
        {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0,
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
        0.2,
      );

      // Animate fifth section title (desktop)
      sectionTransitionTl.to(
        fifthSectionTitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.3,
      );

      // Animate fifth section title (mobile)
      sectionTransitionTl.to(
        fifthSectionTitleRef2.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.3,
      );

      // Animate fifth section horizontal line
      sectionTransitionTl.to(
        fifthSectionLineRef.current,
        {
          scaleX: 1,
          duration: 1,
          ease: "none",
        },
        0.5,
      );

      // Animate fifth section box (desktop)
      sectionTransitionTl.to(
        fifthSectionBoxRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power1.out",
        },
        0.6,
      );

      // Animate fifth section box (mobile)
      sectionTransitionTl.to(
        fifthSectionBoxRef2.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power1.out",
        },
        0.6,
      );

      // Animate fifth section number (desktop)
      sectionTransitionTl.to(
        fifthSectionNumberRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.7,
      );

      // Animate fifth section number (mobile)
      sectionTransitionTl.to(
        fifthSectionNumberRef2.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.7,
      );

      // Animate fifth section text (desktop)
      sectionTransitionTl.to(
        fifthSectionTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.8,
      );

      // Animate fifth section text (mobile)
      sectionTransitionTl.to(
        fifthSectionTextRef2.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.8,
      );

      // Animate fifth section bottom line (desktop)
      sectionTransitionTl.to(
        fifthSectionBottomLineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "none",
        },
        0.9,
      );

      // Animate fifth section bottom line (mobile)
      sectionTransitionTl.to(
        fifthSectionBottomLineRef2.current,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "none",
        },
        0.9,
      );

      // Add exit animation for fifth section elements
      ScrollTrigger.create({
        trigger: ".sixth-section",
        start: "top 80%",
        end: "top 30%",
        scrub: 0.8,
        onEnter: () => {
          gsap.to(
            [
              fifthSectionBoxRef.current,
              fifthSectionBoxRef2.current,
              fifthSectionTitleRef2.current,
              fifthSectionNumberRef2.current,
              fifthSectionTextRef2.current,
              fifthSectionBottomLineRef2.current,
            ],
            {
              opacity: 0,
              scale: 0.8,
              duration: 0.5,
              ease: "power2.inOut",
            },
          );
        },
        onLeave: () => {
          gsap.set(
            [
              fifthSectionBoxRef.current,
              fifthSectionBoxRef2.current,
              fifthSectionTitleRef2.current,
              fifthSectionNumberRef2.current,
              fifthSectionTextRef2.current,
              fifthSectionBottomLineRef2.current,
            ],
            {
              opacity: 0,
              scale: 0.8,
            },
          );
        },
        onEnterBack: () => {
          gsap.to(
            [
              fifthSectionBoxRef.current,
              fifthSectionBoxRef2.current,
              fifthSectionTitleRef2.current,
              fifthSectionNumberRef2.current,
              fifthSectionTextRef2.current,
              fifthSectionBottomLineRef2.current,
            ],
            {
              opacity: 0,
              scale: 0.8,
              duration: 0.5,
              ease: "power2.inOut",
            },
          );
        },
        onLeaveBack: () => {
          gsap.to(
            [
              fifthSectionBoxRef.current,
              fifthSectionBoxRef2.current,
              fifthSectionTitleRef2.current,
              fifthSectionNumberRef2.current,
              fifthSectionTextRef2.current,
              fifthSectionBottomLineRef2.current,
            ],
            {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "power2.inOut",
            },
          );

          // Ensure all fifth section elements are visible when scrolling back
          gsap.to(
            [
              fifthSectionTitleRef.current,
              fifthSectionLineRef.current,
              fifthSectionNumberRef.current,
              fifthSectionTextRef.current,
              fifthSectionBottomLineRef.current,
              fifthSectionTitleRef2.current,
              fifthSectionNumberRef2.current,
              fifthSectionTextRef2.current,
              fifthSectionBottomLineRef2.current,
            ],
            {
              opacity: 1,
              scaleX: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.inOut",
            },
          );
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
        },
      );
      gsap.set(
        [sixthSectionLineRef.current, sixthSectionBottomLineRef.current],
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
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
        0,
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
        0,
      );

      sectionTransitionTl.to(
        fifthSectionNumberRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0,
      );

      // Fade out fifth section lines
      sectionTransitionTl.to(
        [fifthSectionLineRef.current, fifthSectionBottomLineRef.current],
        {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0,
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
        0.3,
      );

      // Animate sixth section horizontal line
      sectionTransitionTl.to(
        sixthSectionLineRef.current,
        {
          scaleX: 1,
          duration: 1,
          ease: "none",
        },
        0.5,
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
        0.6,
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
        0.7,
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
        0.8,
      );

      // Animate sixth section bottom line
      sectionTransitionTl.to(
        sixthSectionBottomLineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "none",
        },
        0.9,
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
        0,
      );

      sixthSectionExitTl.to(
        sixthSectionNumberRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.inOut",
        },
        0.1,
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
        0.2,
      );

      sixthSectionExitTl.to(
        sixthSectionBoxRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.inOut",
        },
        0.3,
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
            },
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
            },
          );
        },
      });
    }

    // Seventh section animations - transition from sixth section
    if (
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
      seventhSectionBottomLineRef.current &&
      seventhSectionBroomRef.current
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
        },
      );
      gsap.set(seventhSectionBroomRef.current, {
        opacity: 0,
        scale: 0.8,
      });
      gsap.set(
        [seventhSectionLineRef.current, seventhSectionBottomLineRef.current],
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
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
          opacity: 0,
          scale: 0.4,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.4, // Start after sixth section elements fade out
      );
      sectionTransitionTl.to(
        seventhSectionBroomRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.4,
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
        0.5, // Start after broom starts moving
      );

      sectionTransitionTl.to(
        seventhSectionLineRef.current,
        {
          scaleX: 1,
          duration: 0.4,
          ease: "none",
        },
        0.6,
      );

      sectionTransitionTl.to(
        seventhSectionBoxRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power1.out",
        },
        0.7,
      );

      sectionTransitionTl.to(
        seventhSectionNumberRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        0.8,
      );

      sectionTransitionTl.to(
        seventhSectionTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        0.9,
      );

      sectionTransitionTl.to(
        seventhSectionBottomLineRef.current,
        {
          scaleX: 1,
          duration: 0.4,
          ease: "none",
        },
        1.0,
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
        onEnterBack: () => {
          gsap.to(seventhSectionBoxRef.current, {
            opacity: 0,
            scale: 0.8,
            duration: 0.5,
            ease: "power2.inOut",
          });
        },
        onLeaveBack: () => {
          gsap.to(seventhSectionBoxRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.inOut",
          });

          // Ensure all seventh section elements are visible when scrolling back
          gsap.to(
            [
              seventhSectionTitleRef.current,
              seventhSectionLineRef.current,
              seventhSectionNumberRef.current,
              seventhSectionTextRef.current,
              seventhSectionBottomLineRef.current,
            ],
            {
              opacity: 1,
              scaleX: 1,
              y: 0,
              duration: 0.5,
              ease: "power2.inOut",
            },
          );
        },
      });
    }

    // Eighth section animations - transition from seventh section
    if (
      seventhSectionBroomRef.current &&
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
        },
      );
      gsap.set(eighthSectionBroomRef.current, {
        opacity: 0,
        scale: 0.8,
      });
      gsap.set(
        [eighthSectionLineRef.current, eighthSectionBottomLineRef.current],
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
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
        seventhSectionBroomRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.4,
      );

      sectionTransitionTl.to(
        eighthSectionBroomRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.4,
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
        0,
      );

      sectionTransitionTl.to(
        seventhSectionNumberRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0,
      );

      sectionTransitionTl.to(
        [seventhSectionLineRef.current, seventhSectionBottomLineRef.current],
        {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0,
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
        0.5,
      );

      sectionTransitionTl.to(
        eighthSectionLineRef.current,
        {
          scaleX: 1,
          duration: 0.4,
          ease: "none",
        },
        0.6,
      );

      sectionTransitionTl.to(
        eighthSectionBoxRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power1.out",
        },
        0.7,
      );

      sectionTransitionTl.to(
        eighthSectionNumberRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        0.8,
      );

      sectionTransitionTl.to(
        eighthSectionTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.2)",
        },
        0.9,
      );

      sectionTransitionTl.to(
        eighthSectionBottomLineRef.current,
        {
          scaleX: 1,
          duration: 0.4,
          ease: "none",
        },
        1.0,
      );

      // Add onLeaveBack to the eighth section exit ScrollTrigger
      const eighthSectionExitTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".ninth-section",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.8,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "eighth-section-exit",
          onEnterBack: () => {
            // When scrolling back to eighth section from ninth section
            gsap.to(eighthSectionBoxRef.current, {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: "power2.inOut",
            });

            // Ensure all eighth section elements are visible
            gsap.to(
              [
                eighthSectionTitleRef.current,
                eighthSectionLineRef.current,
                eighthSectionNumberRef.current,
                eighthSectionTextRef.current,
                eighthSectionBottomLineRef.current,
              ],
              {
                opacity: 1,
                scaleX: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.inOut",
              },
            );
          },
        },
      });

      // Fade out eighth section elements with staggered timing
      eighthSectionExitTl.to(
        [eighthSectionTitleRef.current, eighthSectionTextRef.current],
        {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.inOut",
        },
        0,
      );

      eighthSectionExitTl.to(
        eighthSectionNumberRef.current,
        {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.inOut",
        },
        0.1,
      );

      eighthSectionExitTl.to(
        [eighthSectionLineRef.current, eighthSectionBottomLineRef.current],
        {
          scaleX: 0,
          opacity: 0,
          transformOrigin: "left center",
          duration: 0.3,
          ease: "power2.inOut",
        },
        0.2,
      );

      eighthSectionExitTl.to(
        eighthSectionBoxRef.current,
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.3,
          ease: "power2.inOut",
        },
        0.3,
      );

      // Ensure lines are properly reset after animation
      ScrollTrigger.create({
        trigger: ".ninth-section",
        start: "top 30%",
        onLeave: () => {
          gsap.set(
            [eighthSectionLineRef.current, eighthSectionBottomLineRef.current],
            {
              scaleX: 0,
              opacity: 0,
              transformOrigin: "left center",
            },
          );
        },
      });

      // Add a cleanup trigger to ensure lines stay hidden
      ScrollTrigger.create({
        trigger: ".ninth-section",
        start: "top 30%",
        end: "bottom bottom",
        onEnter: () => {
          gsap.set(
            [eighthSectionLineRef.current, eighthSectionBottomLineRef.current],
            {
              scaleX: 0,
              opacity: 0,
              transformOrigin: "left center",
            },
          );
        },
      });
    }

    // Ninth section animations
    if (
      ninthSectionBroomRef.current &&
      eighthSectionBroomRef.current &&
      ninthSectionBambooRef.current &&
      ninthSectionNumberRef.current &&
      ninthSectionFirstTextRef.current &&
      ninthSectionLineRef.current &&
      ninthSectionSecondTextRef.current
    ) {
      // Set initial states for ninth section elements
      gsap.set(ninthSectionBambooRef.current, {
        opacity: 0,
        x: "-20%",
      });

      gsap.set(ninthSectionBroomRef.current, {
        opacity: 0,
        x: "20%",
      });

      gsap.set(
        [
          ninthSectionNumberRef.current,
          ninthSectionFirstTextRef.current,
          ninthSectionSecondTextRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        },
      );

      gsap.set(ninthSectionLineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Create timeline for ninth section animations
      const ninthSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".ninth-section",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.8,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "ninth-section",
        },
      });

      // Animate broom to final position
      ninthSectionTl.to(
        eighthSectionBroomRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.5,
      );

      ninthSectionTl.to(
        ninthSectionBroomRef.current,
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.2,
      );
      // Animate bamboo image
      ninthSectionTl.to(
        ninthSectionBambooRef.current,
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        0.2,
      );

      // Animate number
      ninthSectionTl.to(
        ninthSectionNumberRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.4,
      );

      // Animate first text
      ninthSectionTl.to(
        ninthSectionFirstTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.5,
      );

      // Animate horizontal line
      ninthSectionTl.to(
        ninthSectionLineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
          ease: "none",
        },
        0.6,
      );

      // Animate second text
      ninthSectionTl.to(
        ninthSectionSecondTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "back.out(1.2)",
        },
        0.7,
      );

      // Add cleanup trigger for ninth section elements
      ScrollTrigger.create({
        trigger: ".ninth-section",
        start: "top 30%",
        end: "bottom bottom",
        onEnter: () => {
          gsap.set(ninthSectionBambooRef.current, {
            opacity: 1,
            x: 0,
            scale: 1,
          });
          gsap.set(ninthSectionBroomRef.current, {
            opacity: 1,
            x: 0,
            scale: 1,
          });
          gsap.set(
            [
              ninthSectionNumberRef.current,
              ninthSectionFirstTextRef.current,
              ninthSectionSecondTextRef.current,
            ],
            {
              opacity: 1,
              y: 0,
            },
          );
          gsap.set(ninthSectionLineRef.current, {
            scaleX: 1,
          });
        },
      });
    }

    // Tenth section (Pagtatapos) animations
    if (
      ninthSectionBroomRef.current &&
      ninthSectionBambooRef.current &&
      finalSectionNumberRef.current &&
      finalSectionTitleRef.current &&
      finalSectionLineRef.current &&
      finalSectionTextRef.current &&
      finalSectionGridRef.current
    ) {
      // Set initial states for final section elements
      gsap.set(
        [
          finalSectionNumberRef.current,
          finalSectionTitleRef.current,
          finalSectionTextRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        },
      );

      gsap.set(finalSectionLineRef.current, {
        scaleX: 0,
        transformOrigin: "center center",
      });

      // Set initial states for grid boxes
      if (finalSectionGridRef.current) {
        const gridBoxes = finalSectionGridRef.current.querySelectorAll(
          ".grid-box",
        ) as NodeListOf<HTMLElement>;
        const gridTitles = finalSectionGridRef.current.querySelectorAll(
          ".grid-title",
        ) as NodeListOf<HTMLElement>;

        gsap.set(finalSectionGridRef.current, {
          autoAlpha: 1, // Use autoAlpha instead of opacity
        });

        gsap.set(gridTitles, {
          autoAlpha: 0,
          y: 20,
          immediateRender: true,
        });

        gsap.set(gridBoxes, {
          autoAlpha: 0,
          y: 30,
          scale: 0.95,
          immediateRender: true,
        });
      }

      // Create timeline for final section animations with improved configuration
      const finalSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".final-section",
          start: "top 80%",
          end: "center 30%",
          scrub: 1, // Increase scrub value for smoother animations
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "final-section",
          fastScrollEnd: true, // Helps prevent jumpiness at the end of the animation
        },
        defaults: {
          ease: "power2.out", // Smoother default easing
          overwrite: "auto", // Prevent conflicting animations
        },
      });

      // Move broom to the right - smooth transition
      finalSectionTl.to(
        ninthSectionBroomRef.current,
        {
          x: "100%",
          autoAlpha: 0,
          duration: 1,
        },
        0,
      );

      // Move bamboo to the left - smooth transition
      finalSectionTl.to(
        ninthSectionBambooRef.current,
        {
          x: "-50%",
          autoAlpha: 0,
          duration: 1,
        },
        0,
      );

      // Animate ninth section text exit - smoothly
      finalSectionTl.to(
        [
          ninthSectionNumberRef.current,
          ninthSectionFirstTextRef.current,
          ninthSectionSecondTextRef.current,
        ],
        {
          autoAlpha: 0,
          y: -20,
          duration: 0.8,
          stagger: 0.05,
        },
        0,
      );

      // Animate ninth section line exit - smoothly
      finalSectionTl.to(
        ninthSectionLineRef.current,
        {
          scaleX: 0,
          duration: 0.8,
        },
        0,
      );

      // Animate final section number
      finalSectionTl.to(
        finalSectionNumberRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
        },
        0.4, // Delay start
      );

      // Animate final section title
      finalSectionTl.to(
        finalSectionTitleRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
        },
        0.5,
      );

      // Animate final section line
      finalSectionTl.to(
        finalSectionLineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
        },
        0.6,
      );

      // Animate final section text
      finalSectionTl.to(
        finalSectionTextRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
        },
        0.7,
      );

      // Animate final section grid with staggered effect
      if (finalSectionGridRef.current) {
        const gridBoxes = finalSectionGridRef.current.querySelectorAll(
          ".grid-box",
        ) as NodeListOf<HTMLElement>;
        const gridTitles = finalSectionGridRef.current.querySelectorAll(
          ".grid-title",
        ) as NodeListOf<HTMLElement>;

        // Animate grid titles with stagger
        finalSectionTl.to(
          gridTitles,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            stagger: {
              each: 0.1, // Use 'each' instead of 'amount' for more predictable timing
              from: "start",
            },
          },
          0.8,
        );

        // Animate grid boxes with stagger
        finalSectionTl.to(
          gridBoxes,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: {
              each: 0.1, // Use 'each' instead of 'amount' for more predictable timing
              from: "start",
            },
          },
          0.9,
        );
      } else {
        // Fallback if the DOM query fails
        finalSectionTl.to(
          finalSectionGridRef.current,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
          },
          0.8,
        );
      }

      // Create a separate cleanup ScrollTrigger that doesn't interfere with the animation
      ScrollTrigger.create({
        trigger: ".final-section",
        start: "center center",
        end: "bottom bottom",
        id: "final-section-cleanup",
        onEnter: () => {
          // Ensure all elements are in their final state

          gsap.set(ninthSectionBroomRef.current, {
            opacity: 0,
            x: "50%",
          });

          gsap.set(ninthSectionBambooRef.current, {
            x: "-50%",
            opacity: 0,
          });

          gsap.set(
            [
              ninthSectionNumberRef.current,
              ninthSectionFirstTextRef.current,
              ninthSectionSecondTextRef.current,
            ],
            {
              opacity: 0,
              y: -20,
            },
          );

          gsap.set(ninthSectionLineRef.current, {
            scaleX: 0,
          });

          gsap.set(
            [
              finalSectionNumberRef.current,
              finalSectionTitleRef.current,
              finalSectionTextRef.current,
            ],
            {
              opacity: 1,
              y: 0,
            },
          );

          gsap.set(finalSectionLineRef.current, {
            scaleX: 1,
          });

          // Ensure grid boxes are visible after entering
          if (finalSectionGridRef.current) {
            const gridBoxes = finalSectionGridRef.current.querySelectorAll(
              ".grid-box",
            ) as NodeListOf<HTMLElement>;
            const gridTitles = finalSectionGridRef.current.querySelectorAll(
              ".grid-title",
            ) as NodeListOf<HTMLElement>;

            gsap.set(gridTitles, {
              opacity: 1,
              y: 0,
            });

            gsap.set(gridBoxes, {
              opacity: 1,
              y: 0,
              scale: 1,
            });
          }
        },
      });
    }

    // Beliefs section animations
    if (
      beliefsSectionNumberRef.current &&
      beliefsSectionLineRef.current &&
      beliefsSectionTextRef.current &&
      beliefsSectionBroomRef.current
    ) {
      // Set initial states for beliefs section elements
      gsap.set(
        [beliefsSectionNumberRef.current, beliefsSectionTextRef.current],
        {
          opacity: 0,
          y: 30,
        },
      );

      gsap.set(beliefsSectionLineRef.current, {
        scaleX: 0,
        transformOrigin: "center center",
      });

      gsap.set(beliefsSectionBroomRef.current, {
        opacity: 0,
        scale: 0.5,
      });

      // Create timeline for beliefs section animations
      const beliefsSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".beliefs-section",
          start: "top 80%",
          end: "center 30%",
          scrub: 1,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "beliefs-section",
          fastScrollEnd: true,
        },
        defaults: {
          ease: "power2.out",
          overwrite: "auto",
        },
      });

      // Fade out previous headers
      beliefsSectionTl.to(
        ".header-container",
        {
          opacity: 0,
          y: -20,
          duration: 0.8,
        },
        0,
      );

      // Animate number
      beliefsSectionTl.to(
        beliefsSectionNumberRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        0.2,
      );

      // Animate line
      beliefsSectionTl.to(
        beliefsSectionLineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
        },
        0.4,
      );

      // Animate text
      beliefsSectionTl.to(
        beliefsSectionTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        0.6,
      );

      // Animate broom
      beliefsSectionTl.to(
        beliefsSectionBroomRef.current,
        {
          opacity: 1,
          scale: 0.5,
          y: 0,
          duration: 0.8,
        },
        0.8,
      );

      // Add cleanup trigger for beliefs section
      ScrollTrigger.create({
        trigger: ".beliefs-section",
        start: "center center",
        end: "bottom bottom",
        id: "beliefs-section-cleanup",
        onEnter: () => {
          gsap.set(
            [beliefsSectionNumberRef.current, beliefsSectionTextRef.current],
            {
              opacity: 1,
              y: 0,
            },
          );

          gsap.set(beliefsSectionLineRef.current, {
            scaleX: 1,
          });

          gsap.set(beliefsSectionBroomRef.current, {
            opacity: 1,
            scale: 0.5,
            y: 0,
          });

          // Ensure previous headers are hidden
          gsap.set(".header-container", {
            opacity: 0,
            y: -20,
          });
        },
      });
    }

    // Beliefs second section animations
    if (
      beliefsSectionNumberRef.current &&
      beliefsSectionLineRef.current &&
      beliefsSectionTextRef.current &&
      beliefsSectionBroomRef.current &&
      beliefsSecondSectionNumberRef.current &&
      beliefsSecondSectionLineRef.current &&
      beliefsSecondSectionTextRef.current &&
      beliefsSecondSectionFeetRef.current
    ) {
      // Set initial states for beliefs second section elements
      gsap.set(
        [
          beliefsSecondSectionNumberRef.current,
          beliefsSecondSectionTextRef.current,
        ],
        {
          opacity: 0,
          y: -50,
        },
      );

      gsap.set(beliefsSecondSectionLineRef.current, {
        scaleX: 0,
        transformOrigin: "center center",
      });

      gsap.set(beliefsSecondSectionFeetRef.current, {
        opacity: 0,
        y: -100,
        scale: 0.8,
      });

      // Create timeline for beliefs second section animations
      const beliefsSecondSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".beliefs-second-section",
          start: "top 80%",
          end: "center 30%",
          scrub: 1,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "beliefs-second-section",
          fastScrollEnd: true,
        },
        defaults: {
          ease: "power2.out",
          overwrite: "auto",
        },
      });

      // Fade out previous beliefs section elements
      beliefsSecondSectionTl.to(
        [beliefsSectionNumberRef.current, beliefsSectionTextRef.current],
        {
          opacity: 0,
          y: -20,
          duration: 0.8,
        },
        0,
      );

      beliefsSecondSectionTl.to(
        beliefsSectionLineRef.current,
        {
          scaleX: 0,
          duration: 0.8,
        },
        0,
      );

      // Animate feet image from top
      beliefsSecondSectionTl.to(
        beliefsSecondSectionFeetRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
        },
        0.2,
      );

      // Animate number
      beliefsSecondSectionTl.to(
        beliefsSecondSectionNumberRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        0.4,
      );

      // Animate line
      beliefsSecondSectionTl.to(
        beliefsSecondSectionLineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
        },
        0.6,
      );

      // Animate text
      beliefsSecondSectionTl.to(
        beliefsSecondSectionTextRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        0.8,
      );

      // Add cleanup trigger for beliefs second section
      ScrollTrigger.create({
        trigger: ".beliefs-second-section",
        start: "center center",
        end: "bottom bottom",
        id: "beliefs-second-section-cleanup",
        onEnter: () => {
          gsap.set(
            [
              beliefsSecondSectionNumberRef.current,
              beliefsSecondSectionTextRef.current,
            ],
            {
              opacity: 1,
              y: 0,
            },
          );

          gsap.set(beliefsSecondSectionLineRef.current, {
            scaleX: 1,
          });

          gsap.set(beliefsSecondSectionFeetRef.current, {
            opacity: 1,
            y: 0,
            scale: 1,
          });

          // Ensure previous beliefs section elements are hidden
          gsap.set(
            [beliefsSectionNumberRef.current, beliefsSectionTextRef.current],
            {
              opacity: 0,
              y: -20,
            },
          );

          gsap.set(beliefsSectionLineRef.current, {
            scaleX: 0,
          });
        },
      });

      // Add exit animation for beliefs second section
      const beliefsSecondSectionExitTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".beliefs-third-section",
          start: "top 80%",
          end: "top 30%",
          scrub: 0.8,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "beliefs-second-section-exit",
        },
      });

      // Fade out and move up feet image
      beliefsSecondSectionExitTl.to(
        beliefsSecondSectionFeetRef.current,
        {
          opacity: 0,
          y: -100,
          scale: 0.8,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0,
      );

      // Ensure feet stay hidden after exit animation
      ScrollTrigger.create({
        trigger: ".beliefs-third-section",
        start: "top 30%",
        end: "bottom bottom",
        onEnter: () => {
          gsap.set(beliefsSecondSectionFeetRef.current, {
            opacity: 0,
            y: -100,
            scale: 0.8,
          });
        },
      });
    }

    // Beliefs third section animations
    if (
      beliefsSectionBroomRef.current &&
      beliefsSecondSectionNumberRef.current &&
      beliefsSecondSectionLineRef.current &&
      beliefsSecondSectionTextRef.current &&
      beliefsSecondSectionFeetRef.current &&
      beliefsThirdSectionNumberRef.current &&
      beliefsThirdSectionLineRef.current &&
      beliefsThirdSectionTextRef.current &&
      beliefsThirdSectionBroom1Ref.current &&
      beliefsThirdSectionBroom2Ref.current &&
      beliefsThirdSectionBroom3Ref.current &&
      beliefsThirdSectionBroom4Ref.current &&
      beliefsThirdSectionBroom5Ref.current
    ) {
      // Set initial states for beliefs third section elements
      gsap.set(
        [
          beliefsThirdSectionNumberRef.current,
          beliefsThirdSectionTextRef.current,
        ],
        {
          opacity: 0,
          x: -50,
        },
      );

      gsap.set(beliefsThirdSectionLineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Set initial states for brooms
      gsap.set(
        [
          beliefsThirdSectionBroom1Ref.current,
          beliefsThirdSectionBroom2Ref.current,
          beliefsThirdSectionBroom3Ref.current,
          beliefsThirdSectionBroom4Ref.current,
          beliefsThirdSectionBroom5Ref.current,
        ],
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
      );

      // Create timeline for beliefs third section animations
      const beliefsThirdSectionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".beliefs-third-section",
          start: "top 80%",
          end: "40% 30%",
          scrub: 1,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "beliefs-third-section",
          fastScrollEnd: true,
        },
        defaults: {
          ease: "power2.out",
          overwrite: "auto",
        },
      });

      // Fade out previous beliefs second section elements
      beliefsThirdSectionTl.to(
        [
          beliefsSecondSectionNumberRef.current,
          beliefsSecondSectionTextRef.current,
        ],
        {
          opacity: 0,
          y: -20,
          duration: 0.8,
        },
        0,
      );

      beliefsThirdSectionTl.to(
        beliefsSecondSectionLineRef.current,
        {
          scaleX: 0,
          duration: 0.8,
        },
        0,
      );

      // Fade out and move up feet image
      beliefsThirdSectionTl.to(
        beliefsSecondSectionFeetRef.current,
        {
          opacity: 0,
          y: -100,
          scale: 0.8,
          duration: 0.8,
        },
        0,
      );

      // Rotate broom from first beliefs section
      beliefsThirdSectionTl.to(
        beliefsSectionBroomRef.current,
        {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
        },
        0.2,
      );

      // Animate number
      beliefsThirdSectionTl.to(
        beliefsThirdSectionNumberRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
        },
        0.4,
      );

      // Animate line
      beliefsThirdSectionTl.to(
        beliefsThirdSectionLineRef.current,
        {
          scaleX: 1,
          duration: 0.8,
        },
        0.6,
      );

      // Animate text
      beliefsThirdSectionTl.to(
        beliefsThirdSectionTextRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
        },
        0.8,
      );

      // Animate brooms with staggered effect
      beliefsThirdSectionTl.to(
        [
          beliefsThirdSectionBroom1Ref.current,
          beliefsThirdSectionBroom2Ref.current,
          beliefsThirdSectionBroom3Ref.current,
          beliefsThirdSectionBroom4Ref.current,
          beliefsThirdSectionBroom5Ref.current,
        ],
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: {
            each: 0.2,
            from: "start",
          },
        },
        1.0,
      );

      // Add cleanup trigger for beliefs third section
      const beliefsThirdSectionExitTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".beliefs-third-section",
          start: "70% 80%",
          end: "70% 30%",
          scrub: 0.8,
          preventOverlaps: true,
          toggleActions: "play none none reverse",
          id: "beliefs-third-section-exit",
        },
      });

      // Fade out beliefs section broom
      beliefsThirdSectionExitTl.to(
        beliefsSectionBroomRef.current,
        {
          opacity: 0,
          scale: 0.2,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0,
      );

      // Fade out and move up number and text
      beliefsThirdSectionExitTl.to(
        [
          beliefsThirdSectionNumberRef.current,
          beliefsThirdSectionTextRef.current,
        ],
        {
          opacity: 0,
          y: -30,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.1,
      );

      // Scale down and fade out line
      beliefsThirdSectionExitTl.to(
        beliefsThirdSectionLineRef.current,
        {
          scaleX: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.2,
      );

      // Fade out and move up brooms with staggered effect
      beliefsThirdSectionExitTl.to(
        [
          beliefsThirdSectionBroom1Ref.current,
          beliefsThirdSectionBroom2Ref.current,
          beliefsThirdSectionBroom3Ref.current,
          beliefsThirdSectionBroom4Ref.current,
          beliefsThirdSectionBroom5Ref.current,
        ],
        {
          opacity: 0,
          y: -50,
          scale: 0.8,
          duration: 0.5,
          stagger: {
            each: 0.1,
            from: "start",
          },
        },
        0.3,
      );

      // Ensure elements stay hidden after exit animation
      ScrollTrigger.create({
        trigger: ".beliefs-third-section",
        start: "bottom 30%",
        end: "bottom bottom",
        onEnter: () => {
          gsap.set(beliefsSectionBroomRef.current, {
            opacity: 0,
            scale: 0.2,
          });

          gsap.set(
            [
              beliefsThirdSectionNumberRef.current,
              beliefsThirdSectionTextRef.current,
            ],
            {
              opacity: 0,
              y: -30,
            },
          );

          gsap.set(beliefsThirdSectionLineRef.current, {
            scaleX: 0,
            opacity: 0,
          });

          gsap.set(
            [
              beliefsThirdSectionBroom1Ref.current,
              beliefsThirdSectionBroom2Ref.current,
              beliefsThirdSectionBroom3Ref.current,
              beliefsThirdSectionBroom4Ref.current,
              beliefsThirdSectionBroom5Ref.current,
            ],
            {
              opacity: 0,
              y: -50,
              scale: 0.8,
            },
          );
        },
      });
    }
  }, []);

  return {
    parentRef,
    handLeftRef,
    handRightRef,
    broomRef,
    verticalLineRef,
    firstParagraphRef,
    secondParagraphRef,
    mapRef,
    secondSectionRef,
    horizontalLineRef,
    thirdSectionFirstParagraphRef,
    thirdSectionSecondParagraphRef,
    fourthSectionBroomRef,
    fourthSectionTitleRef,
    fourthSectionBoxRef,
    fourthSectionLineRef,
    fourthSectionNumberRef,
    fourthSectionTextRef,
    fourthSectionBottomLineRef,
    fifthSectionBroomRef,
    fifthSectionTitleRef,
    fifthSectionBoxRef,
    fifthSectionNumberRef,
    fifthSectionTextRef,
    fifthSectionLineRef,
    fifthSectionBottomLineRef,
    fifthSectionTitleRef2,
    fifthSectionBoxRef2,
    fifthSectionNumberRef2,
    fifthSectionTextRef2,
    fifthSectionBottomLineRef2,
    sixthSectionTitleRef,
    sixthSectionBoxRef,
    sixthSectionNumberRef,
    sixthSectionTextRef,
    sixthSectionLineRef,
    sixthSectionBottomLineRef,
    seventhSectionBroomRef,
    seventhSectionTitleRef,
    seventhSectionBoxRef,
    seventhSectionNumberRef,
    seventhSectionTextRef,
    seventhSectionLineRef,
    seventhSectionBottomLineRef,
    eighthSectionBroomRef,
    eighthSectionTitleRef,
    eighthSectionBoxRef,
    eighthSectionNumberRef,
    eighthSectionTextRef,
    eighthSectionLineRef,
    eighthSectionBottomLineRef,
    ninthSectionBroomRef,
    ninthSectionBambooRef,
    ninthSectionNumberRef,
    ninthSectionFirstTextRef,
    ninthSectionLineRef,
    ninthSectionSecondTextRef,
    finalSectionNumberRef,
    finalSectionTitleRef,
    finalSectionLineRef,
    finalSectionTextRef,
    finalSectionGridRef,
    beliefsSectionNumberRef,
    beliefsSectionLineRef,
    beliefsSectionTextRef,
    beliefsSectionBroomRef,
    beliefsSecondSectionNumberRef,
    beliefsSecondSectionLineRef,
    beliefsSecondSectionTextRef,
    beliefsSecondSectionFeetRef,
    beliefsThirdSectionNumberRef,
    beliefsThirdSectionLineRef,
    beliefsThirdSectionTextRef,
    beliefsThirdSectionBroom1Ref,
    beliefsThirdSectionBroom2Ref,
    beliefsThirdSectionBroom3Ref,
    beliefsThirdSectionBroom4Ref,
    beliefsThirdSectionBroom5Ref,
  };
};
