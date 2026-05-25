import { useEffect, useState } from "react";
import Lenis from "lenis";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");

    if (savedTheme) {
      return savedTheme;
    }

    return "dark";
  });
  const [language, setLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem("portfolio-lang");

    if (savedLanguage === "en") {
      return "en";
    }

    return "id";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio-lang", language);
  }, [language]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let animationFrame = 0;

    const raf = (time) => {
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    };

    animationFrame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrame);
      lenis.destroy();
    };
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  const toggleLanguage = () => {
    setLanguage((currentLanguage) => (currentLanguage === "id" ? "en" : "id"));
  };

  return (
    <Home
      theme={theme}
      onToggleTheme={toggleTheme}
      language={language}
      onToggleLanguage={toggleLanguage}
    />
  );
}

export default App;
