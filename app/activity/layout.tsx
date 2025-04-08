import { Didact_Gothic } from "next/font/google";
import "../_styles/activity.css";
import { Metadata } from "next";

const didactGothic = Didact_Gothic({
  variable: "--font-didact-gothic",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "E-HABI | Walis Tambo Quiz",
  description:
    "Test your knowledge about the traditional Filipino Walis Tambo with this interactive quiz.",
  keywords: ["Walis Tambo", "Quiz", "Filipino Culture", "Interactive Learning"],
  authors: [{ name: "E-HABI Team" }],
};

export default function ActivityLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${didactGothic.variable} antialiased h-screen bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}
