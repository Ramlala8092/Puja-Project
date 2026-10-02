import { pujaData } from "../data/pujaData";
import PujaCard from "../components/PujaCard";

export default function Home({
  language,
  onOpenPuja,
}) {
  return (
    <main>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-200/40 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-xs font-bold text-orange-700 shadow-sm">
              <span>✨</span>
              {language === "en"
                ? "Simple. Authentic. Guided."
                : "सरल। पारंपरिक। आसान।"}
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              {language === "en" ? (
                <>
                  Your Digital{" "}
                  <span className="text-orange-600">
                    Pandit
                  </span>{" "}
                  for Step-by-Step Pujas
                </>
              ) : (
                <>
                  आपकी डिजिटल{" "}
                  <span className="text-orange-600">
                    पूजा गाइड
                  </span>{" "}
                  — हर विधि आसान तरीके से
                </>
              )}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              {language === "en"
                ? "Perform important Indian pujas at home with confidence. Follow materials, rituals and mantras step-by-step."
                : "घर पर प्रमुख भारतीय पूजाएं आसानी से और सही तरीके से करें। सामग्री, विधि और मंत्र एक-एक चरण में सीखें।"}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#pujas"
                className="rounded-2xl bg-orange-600 px-6 py-3.5 font-bold text-white shadow-xl shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-700"
              >
                {language === "en"
                  ? "Explore Pujas"
                  : "पूजा देखें"}
              </a>

              <div className="flex items-center gap-2 rounded-2xl border border-orange-100 bg-white px-5 py-3.5 text-sm font-semibold text-slate-600">
                <span className="text-lg">🙏</span>
                {language === "en"
                  ? "Made for home worship"
                  : "घर की पूजा के लिए"}
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="relative aspect-square overflow-hidden rounded-[3rem] bg-gradient-to-br from-orange-500 via-orange-600 to-amber-500 p-5 shadow-2xl shadow-orange-200">
              
              <div className="absolute inset-5 rounded-[2.5rem] border border-white/20" />

              <div className="flex h-full flex-col items-center justify-center text-center text-white">
                <div className="mb-6 text-8xl drop-shadow-2xl">
                  🪔
                </div>

                <div className="text-2xl font-black sm:text-3xl">
                  {language === "en"
                    ? "Puja, Simplified."
                    : "पूजा, अब आसान।"}
                </div>

                <p className="mt-3 max-w-xs text-sm leading-6 text-orange-50">
                  {language === "en"
                    ? "Materials → Vidhi → Mantra → Aarti"
                    : "सामग्री → विधि → मंत्र → आरती"}
                </p>

                <div className="mt-8 flex gap-2">
                  {["🪷", "🌺", "🙏", "✨", "🕉️"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur"
                      >
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-orange-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-orange-100 px-4 py-6 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            ["15+", language === "en" ? "Major Pujas" : "प्रमुख पूजाएं"],
            ["100+", language === "en" ? "Ritual Steps" : "पूजा चरण"],
            ["2", language === "en" ? "Languages" : "भाषाएं"],
            ["₹0", language === "en" ? "Starting Price" : "शुरुआती कीमत"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="px-3 text-center"
            >
              <div className="text-2xl font-black text-orange-600">
                {number}
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-500">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pujas */}
      <section
        id="pujas"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <div className="mb-2 text-sm font-black uppercase tracking-[0.2em] text-orange-600">
              {language === "en"
                ? "Popular Guides"
                : "लोकप्रिय पूजा गाइड"}
            </div>

            <h2 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              {language === "en"
                ? "Perform Your Puja With Confidence"
                : "पूजा करें पूरे विश्वास के साथ"}
            </h2>

            <p className="mt-3 max-w-2xl text-slate-500">
              {language === "en"
                ? "Choose a festival and follow the guided ritual."
                : "अपना पर्व चुनें और आसान चरणों में पूजा करें।"}
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {pujaData.map((puja) => (
            <PujaCard
              key={puja.id}
              puja={puja}
              language={language}
              onClick={onOpenPuja}
            />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-slate-950 px-6 py-12 text-center text-white sm:px-10">
          <div className="mx-auto max-w-2xl">
            <div className="mb-4 text-4xl">🙏</div>

            <h2 className="text-3xl font-black sm:text-4xl">
              {language === "en"
                ? "Bring the Puja Experience Home"
                : "पूजा का अनुभव घर पर लाएं"}
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              {language === "en"
                ? "No confusion. No complicated books. Just a simple guided experience."
                : "न कोई भ्रम, न कठिन किताबें — बस आसान और व्यवस्थित पूजा गाइड।"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}