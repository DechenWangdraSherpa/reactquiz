import React from "react";
import { TimerIcon } from "lucide-react";

interface TimerProps {
  timeLeft: number;
}

export default function Timer({ timeLeft }: TimerProps) {
  // Add warning color when time is low (10 seconds or less)
  const timerClass =
    timeLeft <= 10
      ? "flex items-center justify-center space-x-2 text-2xl font-bold text-red-600 mb-8 danger"
      : "flex items-center justify-center space-x-2 text-2xl font-bold text-gray-700 mb-8";

  return (
    <div className={timerClass} data-testid="timer">
      <TimerIcon className="w-6 h-6" />
      <span>{timeLeft}s</span>
    </div>
  );
}
