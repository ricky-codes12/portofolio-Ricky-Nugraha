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

    if (["id", "en", "zh", "ar"].includes(savedLanguage)) {
      return savedLanguage;
    }

    return "id";
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("portfolio-lang", language);
    document.documentElement.lang = language === "zh" ? "zh-CN" : language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
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

  return (
    <Home
      theme={theme}
      onToggleTheme={toggleTheme}
      language={language}
      onChangeLanguage={setLanguage}
    />
  );
}

export default App;
