"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1e1e1e]">
      <motion.div
        className="w-32 h-32 relative"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 rounded-full border-t-4 border-[#F3A712] opacity-70"></div>
      </motion.div>
    </div>
  );
}
