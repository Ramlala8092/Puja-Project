export default function Footer({ language }) {
  return (
    <footer className="border-t border-orange-100 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-600 text-xl">
                🪔
              </div>

              <div>
                <div className="text-xl font-black">
                  Puja<span className="text-orange-400">Guide</span>
                </div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  Your Digital Pandit
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              {language === "en"
                ? "A modern DIY guide for performing traditional Indian pujas at home."
                : "घर पर पारंपरिक भारतीय पूजा करने के लिए आधुनिक DIY गाइड।"}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">
              {language === "en"
                ? "Explore"
                : "एक्सप्लोर करें"}
            </h3>

            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <div>Festival Pujas</div>
              <div>Step-by-Step Vidhi</div>
              <div>Mantras</div>
              <div>Samagri Checklist</div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">
              {language === "en"
                ? "Built for modern homes"
                : "आधुनिक परिवारों के लिए"}
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              {language === "en"
                ? "Simple guides for young families, students and anyone who wants to perform puja independently."
                : "युवा परिवारों, छात्रों और स्वयं पूजा करने वालों के लिए सरल गाइड।"}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} PujaGuide. Made with 🙏
        </div>
      </div>
    </footer>
  );
}