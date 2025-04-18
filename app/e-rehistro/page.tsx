"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  FirstHeader,
  SecondHeader,
  Title,
} from "../_components/EGlossaryTitle";
import { Alphabet, AlphabetBlocks } from "../_components/Alphabet";
import { Terminologies } from "./constant";

import broom from "@/public/images/broom.png";
import Footer from "../_components/Footer";
import { ScrollIndicator } from "../_components/ScrollIndicator";

gsap.registerPlugin(ScrollTrigger);

export default function EGlossaryPage() {
  const parentRef = useRef(null);
  const alphabetRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const ctx = gsap.context(() => {
      Object.values(alphabetRefs.current).forEach((ref) => {
        if (!ref) return;

        gsap.set(ref, { opacity: 0, y: 50 });

        ScrollTrigger.create({
          trigger: ref,
          start: "top 90%",
          end: "top 40%",
          scrub: 0.6,
          onUpdate: (self) => {
            gsap.to(ref, {
              opacity: self.progress,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            });
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={parentRef} className="relative overflow-x-hidden overflow-y-auto">
      <ScrollIndicator />
      <div className="relative h-screen">
        <FirstHeader title1="E" title2="REHISTRO" subtitle="Ng Walis Tambo" />
      </div>
      <div className="second-section relative z-0 h-screen">
        <SecondHeader secondTitle="TAMBO" />
      </div>

      <div className="third-section relative h-full w-full px-12 py-4">
        <div
          className="absolute h-full w-full"
          style={{
            backgroundImage: `url(${broom.src})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top center",
            opacity: "10%",
          }}
        ></div>

        <div className="w-fit">
          <Title />
        </div>

        {Object.keys(Terminologies).map((key) => (
          <div
            key={key}
            ref={(el) => {
              alphabetRefs.current[key] = el;
            }}
            className="mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              <Alphabet alphabet={key} />
              {Terminologies[key].map((item, index) => (
                <AlphabetBlocks
                  key={index}
                  title={item.title}
                  sub={item.sub}
                  desc={item.desc}
                  img={item.img}
                  voice={item.voice}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer
        darkMode
        callToAction
        callToActionText="SIMULAN ANG PAGSUSULIT!"
        to="/activity"
      />
    </div>
  );
}
