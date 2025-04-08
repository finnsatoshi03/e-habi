import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair-display",
});

const Footer = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <div
      className={`mt-8 px-20 py-10 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="grid grid-cols-[1fr_auto]">
        <h1
          className={`${playfairDisplay.className} col-start-1 text-[length:clamp(50px,7vw,180px)]`}
        >
          E-HABI
        </h1>
        <div className="grid grid-cols-[200px_200px] gap-4 col-start-2 row-start-2 justify-self-end">
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
                <Link href="/e-glossary">E-Glossary</Link>
              </li>
              <li>
                <Link href="/take-quiz">Take Quiz</Link>
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
        <div className="col-start-1 row-start-3">
          <p>&#169; 2025 E-Habi. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
