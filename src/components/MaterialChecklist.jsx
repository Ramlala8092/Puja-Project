import { useState } from "react";

export default function MaterialChecklist({
  materials,
  language,
}) {
  const [checked, setChecked] = useState([]);

  const toggleItem = (item) => {
    setChecked((previous) =>
      previous.includes(item)
        ? previous.filter((x) => x !== item)
        : [...previous, item]
    );
  };

  return (
    <div className="rounded-3xl border border-orange-100 bg-white p-5 shadow-sm sm:p-7">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <div className="mb-1 text-xs font-black uppercase tracking-[0.2em] text-orange-600">
            {language === "en"
              ? "Shopping Checklist"
              : "खरीदारी चेकलिस्ट"}
          </div>

          <h2 className="text-2xl font-black text-slate-950">
            {language === "en"
              ? "Samagri"
              : "सामग्री"}
          </h2>
        </div>

        <div className="rounded-xl bg-orange-50 px-3 py-2 text-xs font-bold text-orange-700">
          {checked.length}/{materials.length}
        </div>
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        {materials.map((item) => {
          const isChecked = checked.includes(item);

          return (
            <button
              key={item}
              onClick={() => toggleItem(item)}
              className={`flex items-center gap-3 rounded-xl border p-3 text-left text-sm transition ${
                isChecked
                  ? "border-orange-200 bg-orange-50 text-orange-700"
                  : "border-slate-100 bg-slate-50 text-slate-700 hover:border-orange-200 hover:bg-orange-50"
              }`}
            >
              <span
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md border text-xs font-black ${
                  isChecked
                    ? "border-orange-600 bg-orange-600 text-white"
                    : "border-slate-300 bg-white"
                }`}
              >
                {isChecked ? "✓" : ""}
              </span>

              <span className={isChecked ? "line-through opacity-60" : ""}>
                {item}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}