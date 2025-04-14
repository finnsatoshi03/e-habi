import React, { useRef } from "react";
import { Playfair_Display, Didact_Gothic } from "next/font/google";
import gsap from "gsap";
import Image from "next/image";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-playfair-display",
  style: ["normal"],
});

const didactGothic = Didact_Gothic({
  variable: "--font-didact-gothic",
  subsets: ["latin"],
  weight: ["400"],
});

gsap.registerPlugin(Flip, ScrollTrigger);

type AlphabetProps = {
  alphabet: string;
};

export const Alphabet = ({ alphabet }: AlphabetProps) => {
  return (
    <h1 className={`${playfairDisplay.className} z-50 lg:text-[220px] text-[155px] font-black`}>
      {alphabet}
    </h1>
  );
};

Alphabet.displayName = "Alphabet";

type AlphabetBlockProps = {
  title: string;
  sub: string;
  desc: string;
  img: string;
  voice: string;
};

export const AlphabetBlocks = ({
  title,
  sub,
  desc,
  img,
  voice,
}: AlphabetBlockProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      audioRef.current = new Audio(voice);
      audioRef.current.play();
    }
  };

  return (
    <div className="text-left text-md spacing-0 z-10 w-full h-full flex flex-col justify-center">
      <div
        className="flex items-center gap-2 cursor-pointer hover:text-orange-700"
        onClick={playAudio}
      >
        <h1 className={`${playfairDisplay.className} font-bold`}>{title}</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-volume2-icon lucide-volume-2"
        >
          <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
          <path d="M16 9a5 5 0 0 1 0 6" />
          <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
        </svg>
      </div>
      <h6 className={`${playfairDisplay.className} italic text-gray-700`}>
        {sub}
      </h6>
      {img && (
        <Image
          src={img}
          alt={title}
          className="border border-black"
          width={150}
          height={150}
        />
      )}
      <h6 className={`${didactGothic.className} text-md max-w-sm`}>{desc}</h6>
    </div>
  );
};
