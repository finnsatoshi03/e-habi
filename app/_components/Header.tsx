import { Playfair_Display, Libre_Baskerville } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  style: ["italic"],
});

type HeaderProps = {
  title: string;
  subtitle: string;
};

export const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <div className="flex flex-col items-end p-6">
      <h1
        className={`${playfairDisplay.className} text-[length:clamp(100px,10vw,250px)] leading-[clamp(110px,1.1em,275px)]`}
      >
        {title}
      </h1>
      <h2
        className={`${libreBaskerville.className} text-[length:clamp(50px,5vw,120px)] leading-[clamp(60px,1.2em,140px)]`}
      >
        {subtitle}
      </h2>
    </div>
  );
};
