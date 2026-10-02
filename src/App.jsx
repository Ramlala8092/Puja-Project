import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import PujaDetail from "./views/PujaDetails";

export default function App() {
  const [language, setLanguage] = useState("en");

  const [user, setUser] = useState(null);

  const [unlockedPujas, setUnlockedPujas] = useState([
    // Example:
    // "lakshmi-puja"
  ]);

  const [selectedPuja, setSelectedPuja] = useState(null);

  const login = () => {
    setUser({
      name: "Ramlala",
      email: "user@example.com",
      avatar: "R",
    });
  };

  const logout = () => {
    setUser(null);
  };

  const unlockPuja = (pujaId) => {
    setUnlockedPujas((previous) => {
      if (previous.includes(pujaId)) {
        return previous;
      }

      return [...previous, pujaId];
    });
  };

  const openPuja = (puja) => {
    setSelectedPuja(puja);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const goHome = () => {
    setSelectedPuja(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-[#fffaf0] text-slate-800">
      <Navbar
        language={language}
        setLanguage={setLanguage}
        user={user}
        onLogin={login}
        onLogout={logout}
        onHome={goHome}
      />

      {selectedPuja ? (
        <PujaDetail
          puja={selectedPuja}
          language={language}
          isUnlocked={unlockedPujas.includes(selectedPuja.id)}
          onUnlock={() => unlockPuja(selectedPuja.id)}
          onBack={goHome}
        />
      ) : (
        <Home
          language={language}
          onOpenPuja={openPuja}
        />
      )}

      <Footer language={language} />
    </div>
  );
}