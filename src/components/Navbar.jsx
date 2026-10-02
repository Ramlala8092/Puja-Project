export default function Navbar({
  language,
  setLanguage,
  user,
  onLogin,
  onLogout,
  onHome,
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-[#fffaf0]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <button
          onClick={onHome}
          className="flex shrink-0 items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-xl shadow-lg shadow-orange-200">
            🪔
          </div>

          <div className="hidden sm:block text-left">
            <div className="text-lg font-black tracking-tight text-orange-700">
              Puja<span className="text-amber-500">Guide</span>
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
              Your Digital Pandit
            </div>
          </div>
        </button>

        {/* Search */}
        <div className="relative ml-auto hidden max-w-md flex-1 md:block">
          <svg
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>

          <input
            type="text"
            placeholder={
              language === "en"
                ? "Search puja..."
                : "पूजा खोजें..."
            }
            className="w-full rounded-2xl border border-orange-100 bg-white px-11 py-2.5 text-sm outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          />
        </div>

        {/* Language */}
        <div className="flex rounded-xl border border-orange-100 bg-white p-1">
          <button
            onClick={() => setLanguage("en")}
            className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition ${
              language === "en"
                ? "bg-orange-600 text-white shadow"
                : "text-slate-500"
            }`}
          >
            En
          </button>

          <button
            onClick={() => setLanguage("hi")}
            className={`rounded-lg px-2.5 py-1.5 text-xs font-bold transition ${
              language === "hi"
                ? "bg-orange-600 text-white shadow"
                : "text-slate-500"
            }`}
          >
            हि
          </button>
        </div>

        {/* Login */}
        {user ? (
          <button
            onClick={onLogout}
            title="Logout"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 font-black text-white shadow-lg"
          >
            {user.avatar}
          </button>
        ) : (
          <button
            onClick={onLogin}
            className="hidden rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-orange-600 sm:block"
          >
            {language === "en"
              ? "Login with Google"
              : "Google से Login"}
          </button>
        )}
      </div>

      {/* Mobile search */}
      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <svg
            className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-3.5-3.5" />
          </svg>

          <input
            type="text"
            placeholder={
              language === "en"
                ? "Search puja..."
                : "पूजा खोजें..."
            }
            className="w-full rounded-2xl border border-orange-100 bg-white px-11 py-2.5 text-sm outline-none focus:border-orange-400"
          />
        </div>
      </div>
    </header>
  );
}