import AudioPlayer from "./AudioPlayer";

export default function TimelineStep({
  step,
  index,
  language,
}) {
  return (
    <div className="relative flex gap-4 sm:gap-6">

      {/* Timeline */}
      <div className="relative flex shrink-0 flex-col items-center">
        <div className="z-10 flex h-11 w-11 items-center justify-center rounded-full bg-orange-600 text-sm font-black text-white shadow-lg shadow-orange-200">
          {index + 1}
        </div>

        <div className="absolute top-11 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-orange-300 to-orange-100" />
      </div>

      {/* Card */}
      <div className="mb-8 flex-1 rounded-3xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">
        <div className="mb-2 text-xs font-black uppercase tracking-[0.15em] text-orange-500">
          Step {String(index + 1).padStart(2, "0")}
        </div>

        <h3 className="text-xl font-black text-slate-950 sm:text-2xl">
          {step.title[language]}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
          {step.instruction[language]}
        </p>

        <div className="mt-5 rounded-2xl bg-slate-950 p-4">
          <div className="mb-2 text-[10px] font-black uppercase tracking-[0.2em] text-orange-400">
            Sanskrit Mantra
          </div>

          <p className="font-serif text-base font-bold leading-7 text-white sm:text-lg">
            {step.mantra}
          </p>
        </div>

        <AudioPlayer language={language} />
      </div>
    </div>
  );
}