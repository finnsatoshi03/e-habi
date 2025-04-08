"use client";

import React, { useEffect, useState, useRef, KeyboardEvent } from "react";

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
  const [isAnswered, setIsAnswered] = useState<"correct" | "wrong" | null>(
    null
  );
  const [hasProcessedAnswer, setHasProcessedAnswer] = useState(false);
  const [currentFocus, setCurrentFocus] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

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
    setHasProcessedAnswer(false);
    setCurrentFocus(0);
  }, [answer]);

  useEffect(() => {
    // Set focus to container when mounting and when focus changes
    if (containerRef.current) {
      containerRef.current.focus();
    }
  }, [currentFocus]);

  const handleSelectLetter = (char: string, index: number) => {
    if (
      isAnswered ||
      usedIndices.includes(index) ||
      userAnswer.length >= answer.length
    )
      return;

    setUserAnswer((prev) => {
      const newAnswer = [...prev];
      newAnswer[currentFocus] = char;
      return newAnswer;
    });

    setUsedIndices((prev) => [...prev, index]);

    // Focus next empty slot if available
    if (currentFocus < answer.length - 1) {
      setCurrentFocus(currentFocus + 1);
    }
  };

  const handleRemoveLetter = (index: number) => {
    if (isAnswered) return;

    const updatedAnswer = [...userAnswer];
    const updatedUsed = [...usedIndices];

    updatedAnswer.splice(index, 1);
    updatedUsed.splice(index, 1);

    setUserAnswer(updatedAnswer);
    setUsedIndices(updatedUsed);
    setCurrentFocus(index > 0 ? index - 1 : 0);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (isAnswered) return;

    // Handle backspace
    if (e.key === "Backspace" && userAnswer.length > 0) {
      e.preventDefault();
      handleRemoveLetter(userAnswer.length - 1);
      return;
    }

    // Handle arrow keys
    if (e.key === "ArrowLeft" && currentFocus > 0) {
      e.preventDefault();
      setCurrentFocus(currentFocus - 1);
      return;
    }

    if (
      e.key === "ArrowRight" &&
      currentFocus < Math.min(userAnswer.length, answer.length - 1)
    ) {
      e.preventDefault();
      setCurrentFocus(currentFocus + 1);
      return;
    }

    // Check if pressed key exists in available letters
    const pressedKey = e.key.toUpperCase();
    const availableLetterIndex = shuffledLetters.findIndex(
      (char, idx) => char === pressedKey && !usedIndices.includes(idx)
    );

    if (availableLetterIndex !== -1) {
      e.preventDefault();
      handleSelectLetter(pressedKey, availableLetterIndex);
    }
  };

  useEffect(() => {
    if (userAnswer.length === answer.length && !hasProcessedAnswer) {
      const isCorrect = userAnswer.join("") === answer.toUpperCase();
      setIsAnswered(isCorrect ? "correct" : "wrong");
      setHasProcessedAnswer(true);

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
    <div
      className="space-y-4 flex-1 h-full flex-col flex"
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Identification question input"
    >
      <div className="bg-gray-200 py-10 px-4 rounded-xl text-center w-full">
        <p className="text-xl text-black leading-snug">{question}</p>
      </div>

      <div className="bg-gray-400 py-4 rounded-xl flex justify-center flex-wrap gap-2 md:gap-4">
        {Array.from({ length: answer.length }).map((_, i) => (
          <span
            key={i}
            onClick={() => setCurrentFocus(i)}
            className={`size-12 rounded-xl flex items-center justify-center text-2xl font-bold cursor-pointer transition ${
              isAnswered === "correct"
                ? "bg-green-400 text-black"
                : isAnswered === "wrong"
                  ? "bg-red-500 text-white"
                  : i === currentFocus
                    ? "bg-blue-300 text-black ring-2 ring-blue-500"
                    : userAnswer[i]
                      ? "bg-gray-200 text-black"
                      : "bg-gray-200 opacity-40"
            }`}
          >
            {userAnswer[i] || ""}
          </span>
        ))}
      </div>

      <div className="bg-gray-200 py-4 w-full flex-1 rounded-xl flex items-center justify-center">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 md:gap-4">
          {shuffledLetters.map((char, i) => (
            <button
              key={i}
              onClick={() => handleSelectLetter(char, i)}
              disabled={usedIndices.includes(i) || isAnswered !== null}
              className={`size-12 rounded-xl hover:cursor-pointer text-2xl font-bold flex items-center justify-center transition ${
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
    </div>
  );
}
