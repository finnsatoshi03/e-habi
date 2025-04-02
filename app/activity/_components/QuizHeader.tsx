import React from "react";

interface QuizHeaderProps {
  title: string;
  instruction?: string;
}

export default function QuizHeader({
  title,
  instruction = "Panuto: Basahin nang mabuti ang bawat tanong, sagutin at piliin ang tamang sagot.",
}: QuizHeaderProps) {
  return (
    <header className="relative bg-[#F5F3F0] w-full py-6 border-t-4 border-black">
      <div className="relative flex items-center px-24 w-full">
        <h1 className="text-4xl font-bold text-black font-['Playfair_Display'] z-10">
          {title}
        </h1>
        <p className="absolute left-1/2 transform -translate-x-1/2 text-black text-xl whitespace-nowrap">
          {instruction}
        </p>
      </div>
    </header>
  );
}
