"use client";

import { useState, useEffect } from "react";
import { Header } from "./_components/Header";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import handLeft from "@/public/images/hand-left.png";
import handRight from "@/public/images/hand-right.png";
import walisTambo from "@/public/images/broom.png";

export default function Home() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // Wait a moment for page to be fully loaded
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-[#1e1e1e] text-white h-screen relative overflow-x-hidden">
      <AnimatePresence>
        {animationComplete && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Header title="E-Habi" subtitle="Walis Tambo" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 2 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute w-[22%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            >
              <Image
                src={walisTambo}
                alt="Walis Tambo"
                className="rotate-[158deg] object-cover w-full h-auto"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="absolute bottom-0 -left-[10%] w-1/2"
            >
              <Image
                src={handLeft}
                alt="Hand Left"
                className="-rotate-[15deg] object-cover"
                priority
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="absolute bottom-1/4 -right-[10%] w-1/2"
            >
              <Image
                src={handRight}
                alt="Hand Right"
                className="-rotate-[8deg] object-cover"
                priority
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
