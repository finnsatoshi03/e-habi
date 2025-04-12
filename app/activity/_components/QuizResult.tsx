"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import trophywithbrooms from "@/public/images/trophywithbrooms.png";
import broomsinsidebin from "@/public/images/broominsidebin.png";
import { ArrowRight } from "lucide-react";

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
      answers[i] !== q.correctAnswer ? { ...q, userAnswer: answers[i] } : null,
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
    <div className="text-center">
      <div className="space-y-2">
        {/* Result Image */}
        <Image
          src={isPassed ? trophywithbrooms : broomsinsidebin}
          alt={isPassed ? "Trophy with brooms" : "Brooms inside a bin"}
          width={200}
          height={200}
          className="mx-auto"
        />

        {/* Result Message */}
        <h2 className="text-4xl text-black">
          {isPassed ? "Congratulations!" : "Nice Try!"}
        </h2>

        <div>
          {/* Score */}
          <p className="text-black">
            You’ve scored {score}/{total}
          </p>
          {!isPassed && (
            <p className="text-gray-700">
              Don’t worry — try again to improve your score!
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-center gap-2">
          <button
            onClick={onRestart}
            className="rounded-full bg-gray-500 px-8 py-1 text-sm text-white hover:bg-gray-600"
          >
            Umulit sa Pagsusulit
          </button>
          <Link
            href="/"
            className="rounded-full bg-orange-500 px-8 py-1 text-sm text-white hover:bg-orange-600"
          >
            Pumunta sa Home
          </Link>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-[1fr_auto] gap-4">
        {/* Questions to Review - Order second on mobile */}
        <div className="">
          <h3 className="text-medium mb-6 text-left text-2xl text-black">
            Questions to Review
          </h3>
          <div className="max-h-[150px] space-y-4 overflow-y-auto pr-4">
            {wrongAnswers.length > 0 ? (
              wrongAnswers.map((q) => (
                <div
                  key={q!.id}
                  className="flex items-start justify-between gap-4"
                >
                  <p className="max-w-[90%] text-left break-words text-black">
                    <span className="font-semibold">Question {q!.id}:</span>{" "}
                    <span className="text-black/70">{q!.text}</span>
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
                    className="inline-flex items-center gap-1 rounded-full bg-gray-300 px-4 py-1 text-sm font-medium text-black hover:bg-gray-400"
                  >
                    Review <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-xl text-gray-500">No questions to review.</p>
            )}
          </div>
        </div>

        {/* Quiz Summary - Order first on mobile */}
        <div className="">
          <h3 className="text-medium mb-6 text-left text-2xl text-black">
            Questions Summary
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-black">Number of Questions</p>
              <span
                className="flex size-6 items-center justify-center rounded-full text-center text-white"
                style={{ backgroundColor: "#A855F7" }}
              >
                {total}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-black">Number of Correct</p>
              <span
                className="flex size-6 items-center justify-center rounded-full text-center text-black"
                style={{ backgroundColor: "#68FF46" }}
              >
                {score}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-black">Number of Wrong</p>
              <span
                className="flex size-6 items-center justify-center rounded-full text-center text-white"
                style={{ backgroundColor: "#F32A23" }}
              >
                {total - score}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && activeQuestion && (
        <div className="pointer-events-none fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform">
          <div className="pointer-events-auto w-full max-w-xl rounded-lg bg-white p-8 text-left shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-black">
              Question {activeQuestion.id}
            </h2>
            <p className="mb-4 text-lg text-gray-800">{activeQuestion.text}</p>
            <p className="text-md mb-2 font-semibold text-green-600">
              ✅ Correct Answer: {activeQuestion.correctAnswer}
            </p>
            {activeQuestion.userAnswer &&
              activeQuestion.userAnswer !== "TIMEOUT" &&
              activeQuestion.userAnswer !== "INCORRECT" && (
                <p className="text-md mb-2 font-medium text-red-600">
                  ❌ Your Answer: {activeQuestion.userAnswer}
                </p>
              )}
            {activeQuestion.userAnswer === "TIMEOUT" && (
              <p className="text-md mb-2 font-medium text-yellow-600">
                ⏰ You ran out of time.
              </p>
            )}
            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className="rounded-md bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
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
