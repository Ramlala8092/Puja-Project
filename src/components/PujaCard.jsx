export default function PujaCard({
  puja,
  language,
  onClick,
}) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-orange-100">
      
      {/* <div
        className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${puja.color}`}
      >
        <div className="absolute inset-0 bg-black/5" />

        <div className="relative text-7xl drop-shadow-lg transition duration-300 group-hover:scale-110">
          {puja.emoji}
        </div>

        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 shadow">
          {puja.time}
        </div>
      </div> */}
      <div className="relative h-40 overflow-hidden">
            <img
              src={puja.image}
              alt={puja.title[language]}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/5" />

            <div className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-700 shadow">
              {puja.time}
            </div>
        </div>

      <div className="p-5">
        <div className="mb-2 text-xs font-bold uppercase tracking-[0.15em] text-orange-500">
          {puja.festival[language]}
        </div>

        <h3 className="min-h-[56px] text-xl font-black text-slate-900">
          {puja.title[language]}
        </h3>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Guide
            </div>

            <div className="text-xl font-black text-orange-600 line-through">
              ₹{puja.price}
            </div>
          </div>

          <button
            onClick={() => onClick(puja)}
            className="rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-700"
          >
            {language === "en"
              ? "View Vidhi"
              : "विधि देखें"}
          </button>
        </div>
      </div>
    </article>
  );
}