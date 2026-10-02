import { useState } from "react";

export default function AudioPlayer({
  language,
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="mt-5 flex items-center gap-3 rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 to-amber-50 p-3">
      <button
        onClick={() => setPlaying(!playing)}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-orange-600 text-white shadow-lg shadow-orange-200 transition hover:bg-orange-700"
      >
        {playing ? "Ⅱ" : "▶"}
      </button>

      <div className="min-w-0 flex-1">
        <div className="text-xs font-black text-orange-700">
          {language === "en"
            ? "Mantra Audio"
            : "मंत्र ऑडियो"}
        </div>

        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-orange-100">
          <div
            className={`h-full rounded-full bg-orange-500 transition-all ${
              playing ? "w-2/3" : "w-1/4"
            }`}
          />
        </div>
      </div>

      <span className="hidden text-xs font-bold text-slate-400 sm:block">
        {playing ? "00:32" : "01:00"}
      </span>
    </div>
  );
}