import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { getTranslations } from "../i18n";

function Navbar({ theme, onToggleTheme, language, onToggleLanguage }) {
  const [open, setOpen] = useState(false);
  const t = getTranslations(language);
  const toggleLanguageLabel = language === "id" ? "EN" : "ID";

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
        <button
          className="navbar__theme"
          type="button"
          aria-label={t.nav.toggleLanguage}
          onClick={onToggleLanguage}
        >
          <span>{toggleLanguageLabel}</span>
        </button>

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
