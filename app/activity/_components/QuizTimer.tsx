import React from "react";

interface QuizTimerProps {
  timeRemaining: string;
}

export default function QuizTimer({ timeRemaining }: QuizTimerProps) {
    return (
      <div
        className="bg-[#FC5151] text-black gap-4 px-7 py-3 rounded-3xl flex justify-between items-center w-[350px] font-sans"
      >
        <div className="text-left leading-tight">
          <div className="text-xl">Time</div>
          <div className="text-xl">Remaining</div>
        </div>
        <div className="text-4xl font-bold">{timeRemaining}</div>
      </div>
    );
  }
  
  
  