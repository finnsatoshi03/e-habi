"use client";

import React, { useEffect, useState } from "react";

interface IdentificationQuestionProps {
  question: string;
  answer: string;
  onCorrect: () => void;
  onIncorrect: () => void;
}

export default function IdentificationQuestion({
  question,
  answer,
  onCorrect,
  onIncorrect,
}: IdentificationQuestionProps) {
  const [shuffledLetters, setShuffledLetters] = useState<string[]>([]);
  const [userAnswer, setUserAnswer] = useState<string[]>([]);
  const [usedIndices, setUsedIndices] = useState<number[]>([]);
  const [isAnswered, setIsAnswered] = useState<"correct" | "wrong" | null>(null);
  const [hasProcessedAnswer, setHasProcessedAnswer] = useState(false); // Prevent multiple calls

  useEffect(() => {
    const correct = answer.toUpperCase().split("");
    const totalLetters = 12;
    const extras = Array.from({ length: totalLetters - correct.length }, () =>
      String.fromCharCode(65 + Math.floor(Math.random() * 26))
    );
    const combined = [...correct, ...extras].sort(() => Math.random() - 0.5);
    setShuffledLetters(combined);
    setUserAnswer([]);
    setUsedIndices([]);
    setIsAnswered(null);
    setHasProcessedAnswer(false); // Reset for new question
  }, [answer]);

  const handleSelectLetter = (char: string, index: number) => {
    if (isAnswered || usedIndices.includes(index)) return;
    setUserAnswer((prev) => [...prev, char]);
    setUsedIndices((prev) => [...prev, index]);
  };

  const handleRemoveLetter = (index: number) => {
    if (isAnswered) return;
    const updatedAnswer = [...userAnswer];
    const updatedUsed = [...usedIndices];
    updatedAnswer.splice(index, 1);
    updatedUsed.splice(index, 1);
    setUserAnswer(updatedAnswer);
    setUsedIndices(updatedUsed);
  };

  useEffect(() => {
    if (userAnswer.length === answer.length && !hasProcessedAnswer) {
      const isCorrect = userAnswer.join("") === answer.toUpperCase();
      setIsAnswered(isCorrect ? "correct" : "wrong");
      setHasProcessedAnswer(true); // Prevent multiple calls

      if (isCorrect) {
        setTimeout(() => {
          setIsAnswered(null);
          onCorrect();
        }, 1000);
      } else {
        setTimeout(() => {
          setUserAnswer([]);
          setUsedIndices([]);
          setIsAnswered(null);
          onIncorrect();
        }, 1000);
      }
    }
  }, [userAnswer, answer, onCorrect, onIncorrect, hasProcessedAnswer]);

  return (
    <div className="space-y-10">
      <div className="bg-[#D9D9D9] px-20 py-16 rounded-xl shadow text-center w-full">
        <p className="text-5xl text-black font-[var(--font-didact-gothic)] leading-snug">
          {question}
        </p>
      </div>

      <div className="bg-gray-600 px-8 py-8 rounded-xl flex justify-center flex-wrap gap-5">
        {Array.from({ length: answer.length }).map((_, i) => (
          <span
            key={i}
            onClick={() => handleRemoveLetter(i)}
            className={`w-20 h-20 rounded-xl flex items-center justify-center text-4xl font-bold cursor-pointer transition ${
              isAnswered === "correct"
                ? "bg-lime-400 text-black"
                : isAnswered === "wrong"
                ? "bg-red-500 text-white"
                : userAnswer[i]
                ? "bg-[#D9D9D9] text-black"
                : "bg-[#D9D9D9] opacity-40"
            }`}
          >
            {userAnswer[i] || ""}
          </span>
        ))}
      </div>

      <div className="bg-[#E4E8EE] px-6 py-8 rounded-xl grid grid-cols-6 gap-6 justify-center w-fit mx-auto">
        {shuffledLetters.map((char, i) => (
          <button
            key={i}
            onClick={() => handleSelectLetter(char, i)}
            disabled={usedIndices.includes(i) || isAnswered !== null}
            className={`w-20 h-20 rounded-xl text-4xl font-bold flex items-center justify-center transition ${
              usedIndices.includes(i)
                ? "bg-gray-300 text-white"
                : "bg-gray-500 text-white hover:bg-gray-600"
            }`}
          >
            {char}
          </button>
        ))}
      </div>
    </div>
  );
}