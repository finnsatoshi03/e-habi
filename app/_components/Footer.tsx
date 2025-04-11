import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import { ArrowDownRight } from "lucide-react";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
});

const Footer = ({
  darkMode,
  callToAction,
  callToActionText = "GO TO E-REHISTRO",
  to = "/e-rehistro",
}: {
  darkMode: boolean;
  callToAction?: boolean;
  callToActionText?: string;
  to?: string;
}) => {
  return (
    <>
      {callToAction && (
        <div className="mt-8 flex items-end justify-center gap-4 px-20">
          <Link
            href={to}
            className={`${playfairDisplay.className} text-[length:clamp(50px,7vw,180px)] leading-[1.2]`}
          >
            {callToActionText}
          </Link>
          <ArrowDownRight
            className="size-[length:clamp(50px,7vw,180px)]"
            strokeWidth={1}
          />
        </div>
      )}
      <div
        className={`relative z-50 mt-8 px-20 py-10 ${
          darkMode ? "bg-[#ae7437] text-white" : "bg-white text-black"
        }`}
      >
        <div className="flex grid-cols-[1fr_auto] flex-col items-center gap-16 md:grid md:gap-0">
          <h1
            className={`${playfairDisplay.className} col-start-1 text-[length:clamp(50px,7vw,180px)]`}
          >
            E-HABI
          </h1>
          <div className="col-start-2 row-start-2 flex grid-cols-[200px_200px] flex-col gap-16 justify-self-end text-center md:grid md:gap-4 md:text-left">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="#paano">Paano Ginagawa ang Walis Tambo</Link>
                </li>
                <li>
                  <Link href="#paniniwala">
                    Mga Paniniwala sa Paggawa ng Walis Tambo
                  </Link>
                </li>
                <li>
                  <Link href="/e-rehistro">E-Rehistro</Link>
                </li>
                <li>
                  <Link href="/activity">Take Quiz</Link>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link href="/">Facebook</Link>
                </li>
                <li>
                  <Link href="/">Instagram</Link>
                </li>
                <li>
                  <Link href="/">Messenger</Link>
                </li>
                <li>
                  <Link href="/">Twitter</Link>
                </li>
                <li>
                  <Link href="/">Connect with Developers</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-start-1 row-start-3 md:text-left text-center">
            <p>&#169; 2025 E-Habi. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
