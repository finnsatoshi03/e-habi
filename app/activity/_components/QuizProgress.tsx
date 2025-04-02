import React from "react";

interface QuizProgressProps {
  current: number;
  total: number;
}

export default function QuizProgress({ current, total }: QuizProgressProps) {
  return (
    <div className="flex gap-5 flex-wrap">
      {Array.from({ length: total }, (_, i) => {
        const index = i + 1;

        let bgColor = "bg-gray-300 text-gray-700";
        if (index < current) {
          bgColor = "bg-[#F2841580] text-white";
        } else if (index === current) {
          bgColor = "bg-[#F28415CC] text-white";
        }

        return (
          <span
            key={index}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-semibold ${bgColor}`}
          >
            {index}
          </span>
        );
      })}
    </div>
  );
}
