"use client";

import React from "react";

interface QuizOptionsProps {
  options: string[];
  selectedAnswer: string | null;
  correctAnswer: string;
  onSelect: (answer: string) => void;
}

export default function QuizOptions({
  options,
  selectedAnswer,
  correctAnswer,
  onSelect,
}: QuizOptionsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 w-full">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          disabled={selectedAnswer !== null}
          className={`h-32 sm:h-56 w-full flex items-center justify-center text-center px-4 py-6 sm:px-12 sm:py-14 rounded-2xl text-lg sm:text-2xl md:text-4xl font-[var(--font-didact-gothic)] font-bold shadow transition ${
            selectedAnswer === option
              ? option === correctAnswer
                ? "bg-lime-400 text-black"
                : "bg-rose-400 text-white"
              : "bg-gray-300 text-black hover:bg-gray-400"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
