import Image from "next/image";
import { SecondsCounter } from "@/components/SecondsCounter";
import { SecondsCounterWithTimer } from "@/components/SecondsCounter";
import { ResetButton } from "@/lib/withTimer";
import { TbClockHour12 } from "react-icons/tb";

export default function Home() {
  return (
    <div className="items-center justify-center flex flex-col h-screen bg-gradient-to-b from-black to-blue-900">
      <div className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-stone-100 to-slate-900">
        <h1>Seconds Counter</h1>
      </div>
      <div className="text-white text-8xl my-10 animate-spin-slow">
        <TbClockHour12 />
      </div>
      <div>
        <SecondsCounter seconds={3} />
        <SecondsCounterWithTimer />
        
      </div>
    </div>
  );
}
