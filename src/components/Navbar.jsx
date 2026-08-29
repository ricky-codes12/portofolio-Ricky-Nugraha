import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { getTranslations } from "../i18n";

function LanguageFlag({ language }) {
  if (language === "zh") {
    return (
      <svg viewBox="0 0 60 36" aria-hidden="true">
        <rect width="60" height="36" fill="#de2910" />
        <path d="m12 6 1.8 5.5h5.8L15 14.9l1.8 5.5-4.8-3.4-4.8 3.4L9 14.9l-4.7-3.4h5.8Z" fill="#ffde00" transform="scale(.58) translate(7 2)" />
      </svg>
    );
  }

  if (language === "ar") {
    return (
      <svg viewBox="0 0 60 36" aria-hidden="true">
        <rect width="60" height="36" fill="#006c35" />
        <path d="M15 24h30" stroke="#fff" strokeWidth="2" />
        <path d="M21 13h18" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    );
  }

  if (language === "en") {
    return (
      <svg viewBox="0 0 60 36" aria-hidden="true">
        <rect width="60" height="36" fill="#012169" />
        <path d="M0 0 60 36M60 0 0 36" stroke="#fff" strokeWidth="8" />
        <path d="M0 0 60 36M60 0 0 36" stroke="#c8102e" strokeWidth="4" />
        <path d="M30 0v36M0 18h60" stroke="#fff" strokeWidth="12" />
        <path d="M30 0v36M0 18h60" stroke="#c8102e" strokeWidth="7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 60 36" aria-hidden="true">
      <rect width="60" height="18" fill="#e70011" />
      <rect y="18" width="60" height="18" fill="#fff" />
    </svg>
  );
}

const languageOptions = [
  { code: "id", label: "Indonesia" },
  { code: "en", label: "English" },
  { code: "zh", label: "中文" },
  { code: "ar", label: "العربية" },
];

function Navbar({ theme, onToggleTheme, language, onChangeLanguage }) {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languageRef = useRef(null);
  const t = getTranslations(language);

  useEffect(() => {
    const closeLanguageMenu = (event) => {
      if (!languageRef.current?.contains(event.target)) setLanguageOpen(false);
    };

    document.addEventListener("pointerdown", closeLanguageMenu);
    return () => document.removeEventListener("pointerdown", closeLanguageMenu);
  }, []);

  const menus = [
    { name: t.nav.home, link: "#home" },
    { name: t.nav.about, link: "#about" },
    { name: t.nav.skills, link: "#skills" },
    { name: t.nav.projects, link: "#projects" },
    { name: t.nav.experience, link: "#experience" },
    { name: t.nav.certificates, link: "#certificates" },
    { name: t.nav.contact, link: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar__logo">
        Ricky<span>.</span>
      </div>

      <nav className={open ? "navbar__menu active" : "navbar__menu"}>
        {menus.map((menu) => (
          <a
            key={menu.name}
            href={menu.link}
            onClick={() => setOpen(false)}
          >
            {menu.name}
          </a>
        ))}
      </nav>

      <div className="navbar__actions">
        <div className="navbar__language-picker" ref={languageRef}>
          <button
            className="navbar__theme navbar__language"
            type="button"
            aria-label={t.nav.toggleLanguage}
            aria-haspopup="listbox"
            aria-expanded={languageOpen}
            onClick={() => setLanguageOpen((value) => !value)}
          >
            <LanguageFlag language={language} />
            <ChevronDown className={languageOpen ? "is-open" : ""} size={14} />
          </button>

          {languageOpen ? (
            <div className="navbar__language-menu" role="listbox" aria-label={t.nav.language}>
              {languageOptions.map((option) => (
                <button
                  type="button"
                  role="option"
                  aria-selected={language === option.code}
                  className={language === option.code ? "active" : ""}
                  onClick={() => {
                    onChangeLanguage(option.code);
                    setLanguageOpen(false);
                  }}
                  key={option.code}
                >
                  <LanguageFlag language={option.code} />
                  <span>{option.label}</span>
                  {language === option.code ? <Check size={16} /> : null}
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <button
          className="navbar__theme"
          type="button"
          aria-label={theme === "dark" ? t.nav.light : t.nav.dark}
          onClick={onToggleTheme}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          <span>{theme === "dark" ? t.nav.light : t.nav.dark}</span>
        </button>

        <button
          className="navbar__toggle"
          type="button"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
