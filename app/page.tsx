"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Header } from "./_components/Header";

import handLeft from "@/public/images/hand-left.png";
import handRight from "@/public/images/hand-right.png";
import broom from "@/public/images/broom.png";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const parentRef = useRef(null);
  const headerRef = useRef(null);

  return (
    <div ref={parentRef} className="relative overflow-y-auto overflow-x-hidden">
      <div className="relative h-screen">
        <Header ref={headerRef} title="E-HABI" subtitle="Walis Tambo" />
        <Image
          src={handLeft}
          alt="hand-left"
          className="object-cover w-1/2 absolute bottom-0 -left-[10%] rotate-[-20deg]"
        />
        <Image
          src={handRight}
          alt="hand-right"
          className="object-cover w-1/2 absolute bottom-1/4 -right-[10%] rotate-[10deg]"
        />
        <Image
          src={broom}
          alt="broom"
          className="object-cover w-1/5 left-1/2 top-1/2 -translate-x-1/2 absolute -translate-y-1/2 rotate-[158deg]"
        />
      </div>
      <div className="h-[200vh]">
        <p>Scroll down</p>
      </div>
    </div>
  );
}
