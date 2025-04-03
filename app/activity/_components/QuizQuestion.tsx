import React from "react";

interface QuizQuestionProps {
  question: string;
}

export default function QuizQuestion({ question }: QuizQuestionProps) {
  return (
    <div className="bg-[#D9D9D9] px-4 py-4 sm:px-8 sm:py-6 md:px-12 md:py-8 rounded-xl shadow text-center w-full">
      <p className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold text-black leading-snug font-[var(--font-didact-gothic)]">
        {question}
      </p>
    </div>
  );
}
