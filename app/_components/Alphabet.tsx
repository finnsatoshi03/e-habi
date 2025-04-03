import { Playfair_Display, Didact_Gothic } from "next/font/google";
import gsap from "gsap";
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
  alphabet: string
}

export const Alphabet = ({ alphabet }: AlphabetProps) => {
  return <h1 className={`${playfairDisplay.className} z-50 text-[250px] font-black`}>
    {alphabet}
    </h1>;
};

Alphabet.displayName = "Alphabet"


type AlphabetBlockProps = {
  title: string;
  sub: string;
  desc: string;
  img: string;
}

export const AlphabetBlocks = (
  {title, sub, desc, img} : AlphabetBlockProps) => {
  
    return (
      <div className="text-left text-md spacing-0 z-10 w-full h-full flex flex-col justify-center">
        <h1 className={`${playfairDisplay.className} font-bold`}>{title}</h1>
        <h6 className={`${playfairDisplay.className} italic text-gray-700`}>{sub}</h6>
        <img src="https://placehold.co/150" className="w-[150px] h-[150px] border border-black" />
        <h6 className={`${didactGothic.className} text-md max-w-sm`}>{desc}</h6>
      </div>
    )
}