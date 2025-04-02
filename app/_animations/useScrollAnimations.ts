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
    sixthSectionTitleRef,
    sixthSectionBoxRef,
    sixthSectionNumberRef,
    sixthSectionTextRef,
    sixthSectionLineRef,
    sixthSectionBottomLineRef,
    seventhSectionTitleRef,
    seventhSectionBoxRef,
    seventhSectionNumberRef,
    seventhSectionTextRef,
    seventhSectionLineRef,
    seventhSectionBottomLineRef,
    eighthSectionTitleRef,
    eighthSectionBoxRef,
    eighthSectionNumberRef,
    eighthSectionTextRef,
    eighthSectionLineRef,
    eighthSectionBottomLineRef,
  };
};
