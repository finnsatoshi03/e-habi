import React from "react";

interface QuizQuestionProps {
  question: string;
}

export default function QuizQuestion({ question }: QuizQuestionProps) {
  return (
    <div className="bg-gray-200 py-10 px-4 rounded-xl text-center w-full">
      <p className="text-xl text-black leading-snug">{question}</p>
    </div>
  );
}
