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
      <div className="relative flex w-full flex-wrap items-center gap-4">
        <h1
          className={`z-10 text-4xl font-bold text-black ${playfairDisplay.className}`}
        >
          {title}
        </h1>
        <p className="w-full text-center text-xl text-black">{instruction}</p>
      </div>
    </header>
  );
}
