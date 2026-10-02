export default function Paywall({
  language,
  price,
  onUnlock,
}) {
  const handleUnlock = () => {
    const confirmed = window.confirm(
      language === "en"
        ? `Mock Razorpay Payment\n\nPay ₹${price} to unlock the complete Puja Vidhi?`
        : `Mock Razorpay Payment\n\nपूरी पूजा विधि के लिए ₹${price} भुगतान करें?`
    );

    if (confirmed) {
      alert(
        language === "en"
          ? "Payment Successful! Puja Vidhi unlocked."
          : "भुगतान सफल! पूजा विधि अनलॉक हो गई।"
      );

      onUnlock();
    }
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-orange-200 bg-white p-6 shadow-2xl shadow-orange-100 sm:p-10">
      
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-100 blur-3xl" />

      <div className="relative mx-auto max-w-xl text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 text-3xl shadow-xl shadow-orange-200">
          🔐
        </div>

        <div className="mt-6 inline-flex rounded-full bg-orange-50 px-4 py-2 text-xs font-black text-orange-700">
          PREMIUM PUJA GUIDE
        </div>

        <h3 className="mt-5 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
          {language === "en"
            ? `Unlock Complete Step-by-Step Vidhi with Audio Mantras for just ₹${price}`
            : `संपूर्ण पूजा विधि और ऑडियो मंत्र केवल ₹${price} में अनलॉक करें`}
        </h3>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-slate-500">
          {language === "en"
            ? "Get every ritual step, Sanskrit mantra and guided audio experience in one place."
            : "हर पूजा चरण, संस्कृत मंत्र और ऑडियो गाइड एक ही जगह प्राप्त करें।"}
        </p>

        <div className="mx-auto mt-7 grid max-w-md gap-3 text-left sm:grid-cols-3">
          {[
            ["✓", "Step-by-step"],
            ["♪", "Audio Mantras"],
            ["∞", "Lifetime Access"],
          ].map(([icon, text]) => (
            <div
              key={text}
              className="rounded-xl bg-slate-50 p-3 text-center"
            >
              <div className="text-lg font-black text-orange-600">
                {icon}
              </div>

              <div className="mt-1 text-xs font-bold text-slate-600">
                {text}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleUnlock}
          className="mt-8 w-full rounded-2xl bg-orange-600 px-6 py-4 text-base font-black text-white shadow-xl shadow-orange-200 transition hover:-translate-y-0.5 hover:bg-orange-700"
        >
          {language === "en"
            ? `Unlock Now — ₹${price}`
            : `अभी अनलॉक करें — ₹${price}`}
        </button>

        <p className="mt-3 text-[11px] font-semibold text-slate-400">
          🔒 {language === "en"
            ? "Secure mock checkout"
            : "सुरक्षित डेमो भुगतान"}
        </p>
      </div>
    </div>
  );
}