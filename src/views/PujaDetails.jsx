import MaterialChecklist from "../components/MaterialChecklist";
import Paywall from "../components/Paywall";
import TimelineStep from "../components/TimelineStep";

export default function PujaDetail({
  puja,
  language,
  isUnlocked,
  onUnlock,
  onBack,
}) {
  return (
    <main className="min-h-screen">

      {/* Detail Hero */}
      <section
        className={`relative overflow-hidden bg-gradient-to-br ${puja.color}`}
      >
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          
          <button
            onClick={onBack}
            className="mb-8 rounded-xl bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/25"
          >
            ←{" "}
            {language === "en"
              ? "Back to Pujas"
              : "पूजा सूची पर वापस"}
          </button>

          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-xs font-black uppercase tracking-wider text-white backdrop-blur">
                {puja.festival[language]}
              </div>

              <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                {puja.title[language]}
              </h1>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-xl bg-white/15 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                  ⏱ {puja.time}
                </span>

                <span className="rounded-xl bg-white px-4 py-2 text-sm font-black text-orange-700 shadow-lg">
                  ₹{puja.price}
                </span>

                {isUnlocked && (
                  <span className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-black text-white">
                    ✓ Unlocked
                  </span>
                )}
              </div>
            </div>

            <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] bg-white/15 text-7xl shadow-2xl backdrop-blur sm:h-40 sm:w-40">
              {puja.emoji}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">

        {/* Significance */}
        <div className="mb-8 rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 to-amber-50 p-6 sm:p-8">
          <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-orange-600">
            {language === "en"
              ? "Puja Mahatva"
              : "पूजा का महत्व"}
          </div>

          <h2 className="text-2xl font-black text-slate-950">
            {language === "en"
              ? "Why this Puja is performed"
              : "यह पूजा क्यों की जाती है"}
          </h2>

          <p className="mt-4 max-w-4xl leading-8 text-slate-600">
            {puja.significance[language]}
          </p>
        </div>

        {/* Materials */}
        <MaterialChecklist
          materials={puja.materials[language]}
          language={language}
        />

        {/* Vidhi */}
        <div className="mt-14">
          <div className="mb-8">
            <div className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-orange-600">
              {language === "en"
                ? "Step-by-Step"
                : "चरण-दर-चरण"}
            </div>

            <h2 className="text-3xl font-black text-slate-950">
              {language === "en"
                ? "Complete Puja Vidhi"
                : "संपूर्ण पूजा विधि"}
            </h2>

            <p className="mt-3 text-slate-500">
              {language === "en"
                ? "Follow each step calmly and according to your family tradition."
                : "हर चरण को शांत मन से और अपनी पारिवारिक परंपरा के अनुसार करें।"}
            </p>
          </div>

          {!isUnlocked ? (
            <div className="relative">

              {/* Blurred preview */}
              <div className="pointer-events-none select-none blur-sm">
                {puja.steps.slice(0, 3).map((step, index) => (
                  <TimelineStep
                    key={index}
                    step={step}
                    index={index}
                    language={language}
                  />
                ))}
              </div>

              {/* Paywall */}
              <div className="relative -mt-24 px-2 pb-2 sm:-mt-32 sm:px-10">
                <Paywall
                  language={language}
                  price={puja.price}
                  onUnlock={onUnlock}
                />
              </div>
            </div>
          ) : (
            <div>
              {puja.steps.map((step, index) => (
                <TimelineStep
                  key={index}
                  step={step}
                  index={index}
                  language={language}
                />
              ))}

              <div className="mt-4 rounded-3xl border border-emerald-100 bg-emerald-50 p-6 text-center">
                <div className="text-3xl">🙏</div>

                <h3 className="mt-3 text-xl font-black text-emerald-800">
                  {language === "en"
                    ? "Puja Complete"
                    : "पूजा पूर्ण"}
                </h3>

                <p className="mt-2 text-sm text-emerald-700">
                  {language === "en"
                    ? "May your home be filled with peace, positivity and blessings."
                    : "आपके घर में सुख, शांति और सकारात्मकता बनी रहे।"}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}