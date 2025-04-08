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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1 w-full">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => onSelect(option)}
          disabled={selectedAnswer !== null}
          className={`w-full flex items-center hover:cursor-pointer justify-center text-center px-4 py-6 rounded-2xl text-lg transition ${
            selectedAnswer === option
              ? option === correctAnswer
                ? "bg-green-400 text-black"
                : "bg-red-400 text-white"
              : "bg-gray-400 text-white hover:bg-gray-400/80"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
