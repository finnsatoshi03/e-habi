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
            className="bg-gray-500 text-white px-8 py-1 rounded-full text-sm hover:bg-gray-600"
          >
            Take quiz again
          </button>
          <Link
            href="/"
            className="bg-orange-500 text-white px-8 py-1 rounded-full text-sm hover:bg-orange-600"
          >
            Go home
          </Link>
        </div>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-[1fr_auto] gap-4">
        {/* Questions to Review - Order second on mobile */}
        <div className="">
          <h3 className="text-2xl text-left mb-6 text-medium text-black">
            Questions to Review
          </h3>
          <div className="space-y-4 max-h-[150px] overflow-y-auto pr-4">
          {wrongAnswers.length > 0 ? (
            wrongAnswers.map((q) => (
              <div
                key={q!.id}
                className="flex justify-between items-start gap-4"
              >
                <p className="text-black max-w-[90%] break-words text-left">
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
                  className="bg-gray-300 inline-flex items-center gap-1 text-black px-4 py-1 text-sm rounded-full font-medium hover:bg-gray-400"
                >
                  Review <ArrowRight className="w-4 h-4" />
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
        <h3 className="text-2xl text-left mb-6 text-medium text-black">
            Questions Summary
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <p className="text-black">Number of Questions</p>
              <span
                className="size-6 rounded-full flex items-center justify-center text-white text-center"
                style={{ backgroundColor: "#A855F7" }}
              >
                {total}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-black">Number of Correct</p>
              <span
                className="size-6 rounded-full flex items-center justify-center text-black text-center"
                style={{ backgroundColor: "#68FF46" }}
              >
                {score}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-black">Number of Wrong</p>
              <span
                className="size-6 rounded-full flex items-center justify-center text-white text-center"
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
