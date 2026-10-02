export default function TimelineStep({ step, index, language }) {
  const title = step.title?.[language] || "";
  const instruction = step.instruction?.[language] || "";
  const material = step.material?.[language] || "";
  const mantra = step.mantra?.[language] || "";

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Timeline Number */}
      <div className="relative flex shrink-0 flex-col items-center">
        <div className="z-10 flex h-11 w-11 items-center justify-center rounded-full bg-orange-600 text-sm font-black text-white shadow-lg shadow-orange-200">
          {index + 1}
        </div>

        {/* Vertical Line */}
        <div className="absolute top-11 bottom-0 w-px bg-gradient-to-b from-orange-300 to-orange-100" />
      </div>

      {/* Step Content */}
      <div className="mb-10 flex-1 rounded-3xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">
        {/* Step Number */}
        <div className="text-xs font-black uppercase tracking-[0.15em] text-orange-500">
          {language === "en"
            ? `Step ${String(index + 1).padStart(2, "0")}`
            : `चरण ${String(index + 1).padStart(2, "0")}`}
        </div>

        {/* Title */}
        <h3 className="mt-2 text-xl font-black text-slate-950 sm:text-2xl">
          {title}
        </h3>

        {/* Image */}
        {step.image && (
          <img
            src={step.image}
            alt={title}
            className="mt-5 h-48 w-full rounded-2xl object-cover"
          />
        )}

        {/* Instruction */}
        <div className="mt-5 rounded-2xl bg-orange-50 p-4">
          <div className="text-xs font-black uppercase tracking-wider text-orange-600">
            {language === "en" ? "What to do" : "क्या करना है"}
          </div>

          <p className="mt-2 text-sm leading-7 text-slate-700 sm:text-base">
            {instruction}
          </p>
        </div>

        {/* Material */}
        {material && (
          <div className="mt-4 rounded-2xl bg-amber-50 p-4">
            <div className="text-xs font-black uppercase tracking-wider text-amber-700">
              {language === "en" ? "Required Material" : "आवश्यक सामग्री"}
            </div>

            <p className="mt-2 text-sm font-semibold leading-6 text-slate-700">
              {material}
            </p>
          </div>
        )}

        {/* Mantra */}
        {step.mantra && (
          <div className="mt-5 rounded-2xl bg-slate-950 p-5">
            <div className="mb-4 text-xs font-black uppercase tracking-wider text-orange-400">
              {language === "en" ? "Mantra" : "मंत्र"}
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* English / Roman Mantra */}
              {step.mantra?.en && (
                <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                  <div className="mb-3 text-xs font-bold uppercase tracking-wider text-orange-400">
                  </div>

                  <p className="whitespace-pre-line text-center font-serif text-base font-bold leading-8 text-white sm:text-lg">
                    {step.mantra.en}
                  </p>
                </div>
              )}

              {/* Sanskrit Mantra */}
              {step.mantra?.hi && (
                <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
                  <div className="mb-3 text-xs font-bold uppercase tracking-wider text-orange-400">
                  </div>

                  <p className="whitespace-pre-line text-center font-serif text-base font-bold leading-8 text-white sm:text-lg">
                    {step.mantra.hi}
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
