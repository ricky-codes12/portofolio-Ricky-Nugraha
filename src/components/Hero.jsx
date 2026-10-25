import {
  ArrowUpRight,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import profile from "../assets/profile.png";
import CVPicker from "./CVPicker";
import { getPortfolioCopy } from "../data/portfolio-copy";
import { getTranslations } from "../i18n";
import { Button } from "./ui/button";

function Hero({ language }) {
  const heroRef = useRef(null);
  const t = getTranslations(language);
  const copy = getPortfolioCopy(language);

  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.from(".hero__label, .hero__title, .hero__desc, .hero__image", {
          y: 16, opacity: 0, stagger: 0.08, duration: 0.55, ease: "power2.out",
        });
      }, heroRef);
      return () => ctx.revert();
    });
    return () => media.revert();
  }, []);

  return (
    <section
      className="hero"
      id="home"
      ref={heroRef}
    >
      <div className="hero__content">
        <p className="hero__label">
          <Sparkles size={16} />
          {copy.label}
        </p>

        <h1 className="hero__title">
          Ricky Nugraha
          <span>{copy.role}</span>
        </h1>

        <p className="hero__desc">{copy.description}</p>

        <div className="hero__buttons">
          <Button
            as="a"
            href="#projects"
            className="hero__button shadow-[0_18px_40px_rgba(14,116,144,0.24)]"
          >
            <ArrowUpRight size={18} />
            {t.hero.viewProjects}
          </Button>

          <CVPicker label={t.hero.downloadCV} download />
          <CVPicker label={t.hero.viewCV} />

          <Button
            as="a"
            href="#contact"
            variant="secondary"
            className="hero__button"
          >
            {t.hero.contact}
          </Button>
        </div>

        <div className="hero__meta">
          <span>
            <MapPin size={18} />
            {t.hero.location}
          </span>
          <span>{copy.focus}</span>
        </div>

        <div className="hero__socials">
          <a
            href="https://wa.me/6281387613515"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp Ricky Nugraha"
          >
            <FaWhatsapp size={22} />
          </a>

          <a
            href="https://github.com/ricky-codes12"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub Ricky Nugraha"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/ricky-nugraha-91929b284/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Ricky Nugraha"
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://www.instagram.com/rricky_nugraha?igsh=aWdkbjdtYXQyMjdn"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Ricky Nugraha"
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="mailto:rickynugraha1215@gmail.com"
            aria-label="Email Ricky Nugraha"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      <div
        className="hero__image"
      >
        <div className="hero__circle">
          <img
            src={profile}
            alt="Ricky Nugraha"
          />
        </div>
        <div className="hero__badge hero__badge--bottom">
          <strong>React · Next.js · Go</strong>
          <span>{copy.delivery}</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
