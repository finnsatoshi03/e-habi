import React from "react";

interface QuizQuestionProps {
  question: string;
}

export default function QuizQuestion({ question }: QuizQuestionProps) {
  return (
    <div className="bg-[#D9D9D9] px-20 py-14 rounded-xl shadow text-left w-full">
      <p className="text-4xl font-bold text-black text-center leading-snug font-[var(--font-didact-gothic)]">{question}</p>
    </div>
  );
}
