import { withTimer } from "@/lib/withTimer";
import React from "react";

export function SecondsCounter({ seconds }) {
    
  const digits = Array.from(seconds.toString().padStart(6, "0"));
  console.log(digits);

  return (
    <div className="items-center">
      <div className="flex w-screen px-10">
        {digits.map((e, i) => (
          <div
            className=" w-1/6 h-[20vh] flex items-center justify-center border-2 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-stone-100 to-slate-900"
            key={i}
          >
            {e}
          </div>
        ))}
      </div>
    </div>
  );
}

export const SecondsCounterWithTimer = withTimer(SecondsCounter);
