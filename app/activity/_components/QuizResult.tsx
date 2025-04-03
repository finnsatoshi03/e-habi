"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import trophywithbrooms from "@/public/images/trophywithbrooms.png";
import broomsinsidebin from "@/public/images/broominsidebin.png";

interface QuizResultProps {
  score: number;
  total: number;
  answers: (string | null)[];
  questions: {
    id: number;
    text: string;
    correctAnswer: string;
    options?: string[];
  }[];
  onRestart: () => void;
}

export default function QuizResult({
  score,
  total,
  answers,
  questions,
  onRestart,
}: QuizResultProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState<{
    id: number;
    text: string;
    correctAnswer: string;
    userAnswer?: string | null;
  } | null>(null);

  const isPassed = score >= 8;

  const wrongAnswers = questions
    .map((q, i) =>
      answers[i] !== q.correctAnswer ? { ...q, userAnswer: answers[i] } : null
    )
    .filter((q) => q !== null);

  const handleReviewClick = (question: {
    id: number;
    text: string;
    correctAnswer: string;
    userAnswer?: string | null;
  }) => {
    setActiveQuestion(question);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveQuestion(null);
  };

  return (
    <div className="text-center p-12 bg-[#F5F3F0] rounded-lg">
      {/* Result Image */}
      <Image
        src={isPassed ? trophywithbrooms : broomsinsidebin}
        alt={isPassed ? "Trophy with brooms" : "Brooms inside a bin"}
        width={300}
        height={300}
        className="mx-auto mb-8"
      />

      {/* Result Message */}
      <h2 className="text-5xl font-bold font-[var(--font-didact-gothic)] mb-4 text-black">
        {isPassed ? "Congratulations!" : "Nice Try!"}
      </h2>

      {/* Score */}
      <p className="text-3xl mb-4 text-black">
        You’ve scored {score}/{total}
      </p>

      {!isPassed && (
        <p className="text-xl mb-8 text-gray-700">
          Don’t worry — try again to improve your score!
        </p>
      )}

      {/* Buttons */}
      <div className="flex justify-center space-x-6 mb-12">
        <button
          onClick={onRestart}
          className="bg-gray-500 text-black px-8 py-3 rounded-full text-2xl font-semibold hover:bg-gray-600"
        >
          Take quiz again
        </button>
        <Link
          href="/"
          className="bg-orange-500 text-black px-8 py-3 rounded-full text-2xl font-semibold hover:bg-orange-600"
        >
          Go home
        </Link>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Quiz Summary - Order first on mobile */}
        <div className="order-1 md:order-2 md:col-span-1">
          <h3 className="text-3xl font-bold mb-6 text-black">Quiz Summary</h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-xl text-black">Number of Questions</p>
              <span
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white text-center"
                style={{ backgroundColor: "#A855F7" }}
              >
                {total}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl text-black">Number of Correct</p>
              <span
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white text-center"
                style={{ backgroundColor: "#68FF46" }}
              >
                {score}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xl text-black">Number of Wrong</p>
              <span
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white text-center"
                style={{ backgroundColor: "#F32A23" }}
              >
                {total - score}
              </span>
            </div>
          </div>
        </div>

        {/* Questions to Review - Order second on mobile */}
        <div className="order-2 md:order-1 md:col-span-2">
          <h3 className="text-3xl font-bold mb-6 text-black">
            Questions to Review
          </h3>
          {wrongAnswers.length > 0 ? (
            wrongAnswers.map((q) => (
              <div
                key={q!.id}
                className="mb-4 flex justify-between items-start gap-4"
              >
                <p className="text-lg text-black max-w-[90%] break-words text-left">
                  <span className="font-semibold">Question {q!.id}:</span>{" "}
                  {q!.text}
                </p>
                <button
                  onClick={() =>
                    handleReviewClick({
                      id: q!.id,
                      text: q!.text,
                      correctAnswer: q!.correctAnswer,
                      userAnswer: q!.userAnswer ?? null,
                    })
                  }
                  className="bg-gray-300 text-black px-4 py-2 rounded-md text-base font-medium hover:bg-gray-400"
                >
                  Review
                </button>
              </div>
            ))
          ) : (
            <p className="text-xl text-gray-500">No questions to review.</p>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && activeQuestion && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none">
          <div className="bg-white rounded-lg p-8 w-full max-w-xl text-left shadow-lg pointer-events-auto">
            <h2 className="text-2xl font-bold mb-4 text-black">
              Question {activeQuestion.id}
            </h2>
            <p className="text-lg mb-4 text-gray-800">{activeQuestion.text}</p>
            <p className="text-md mb-2 text-green-600 font-semibold">
              ✅ Correct Answer: {activeQuestion.correctAnswer}
            </p>
            {activeQuestion.userAnswer &&
              activeQuestion.userAnswer !== "TIMEOUT" &&
              activeQuestion.userAnswer !== "INCORRECT" && (
                <p className="text-md mb-2 text-red-600 font-medium">
                  ❌ Your Answer: {activeQuestion.userAnswer}
                </p>
              )}
            {activeQuestion.userAnswer === "TIMEOUT" && (
              <p className="text-md mb-2 text-yellow-600 font-medium">
                ⏰ You ran out of time.
              </p>
            )}
            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
