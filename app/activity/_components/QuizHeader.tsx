import React from "react";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface QuizHeaderProps {
  title: string;
  instruction?: string;
}

export default function QuizHeader({
  title,
  instruction = "Panuto: Basahin nang mabuti ang bawat tanong, sagutin at piliin ang tamang sagot.",
}: QuizHeaderProps) {
  return (
    <header className="">
      <div className="relative flex-wrap flex items-center w-full gap-4">
        <h1
          className={`text-4xl font-bold text-black z-10 ${playfairDisplay.className}`}
        >
          {title}
        </h1>
        <p className="lg:absolute left-1/2 lg:transform text-center lg:-translate-x-1/2 text-black text-xl lg:whitespace-nowrap">
          {instruction}
        </p>
      </div>
    </header>
  );
}
