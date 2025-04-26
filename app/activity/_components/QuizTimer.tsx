import React from "react";

interface QuizTimerProps {
  timeRemaining: string;
}

export default function QuizTimer({ timeRemaining }: QuizTimerProps) {
  return (
    <div className="flex w-full items-center gap-4 justify-self-end rounded-xl bg-red-600 px-2 py-1 text-white">
      <div className="">
        <p className="text-sm leading-none">Natitirang</p>
        <p className="text-sm">Oras</p>
      </div>
      <div className="text-4xl font-bold">{timeRemaining}</div>
    </div>
  );
}
