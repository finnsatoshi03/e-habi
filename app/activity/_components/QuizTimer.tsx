import React from "react";

interface QuizTimerProps {
  timeRemaining: string;
}

export default function QuizTimer({ timeRemaining }: QuizTimerProps) {
  return (
    <div className="bg-red-600 text-white justify-self-end gap-4 rounded-xl px-2 py-1 flex items-center w-full">
      <div className="">
        <p className="text-sm leading-none">Time</p>
        <p className="text-sm">Remaining</p>
      </div>
      <div className="text-4xl font-bold">{timeRemaining}</div>
    </div>
  );
}
