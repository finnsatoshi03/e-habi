import React from "react";

interface QuizProgressProps {
  current: number;
  total: number;
}

export default function QuizProgress({ current, total }: QuizProgressProps) {
  return (
    <div className="grid grid-cols-5 md:grid-cols-10 lg:grid-cols-15 gap-4">
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
            className={`rounded-full size-full flex items-center justify-center ${bgColor}`}
          >
            {index}
          </span>
        );
      })}
    </div>
  );
}
