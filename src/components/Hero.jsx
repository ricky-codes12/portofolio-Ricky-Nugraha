import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import profile from "../assets/profile.png";
import { getTranslations } from "../i18n";
import { Button } from "./ui/button";

function Hero({ language }) {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const t = getTranslations(language);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero__label", { y: 30, opacity: 0, duration: 0.7 })
        .from(
          ".hero__title",
          { y: 40, opacity: 0, duration: 0.9 },
          "<0.04",
        )
        .from(
          ".hero__desc",
          { y: 26, opacity: 0, duration: 0.7 },
          "<0.05",
        )
        .from(
          ".hero__buttons a",
          { y: 22, opacity: 0, stagger: 0.09, duration: 0.65 },
          "<0.08",
        )
        .from(
          ".hero__meta span",
          { y: 18, opacity: 0, stagger: 0.06, duration: 0.55 },
          "<0.05",
        )
        .from(
          ".hero__stats div",
          { y: 20, opacity: 0, stagger: 0.08, duration: 0.55 },
          "<0.04",
        )
        .from(
          ".hero__socials a",
          { y: 18, opacity: 0, stagger: 0.05, duration: 0.5 },
          "<0.02",
        )
        .from(
          ".hero__badge",
          { y: 24, opacity: 0, stagger: 0.08, duration: 0.55 },
          "<0.04",
        )
        .fromTo(
          ".hero__circle",
          { scale: 0.94, rotate: -4, opacity: 0 },
          { scale: 1, rotate: 0, opacity: 1, duration: 1, ease: "back.out(1.5)" },
          "<0.05",
        );

      gsap.to(".hero__badge--top", {
        y: -5,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero__badge--bottom", {
        y: 5,
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    const heroNode = heroRef.current;
    const imageNode = imageRef.current;

    const handlePointerMove = (event) => {
      if (!heroNode || !imageNode) return;

      const rect = heroNode.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(imageNode, {
        x: x * 16,
        y: y * 16,
        duration: 0.35,
        ease: "power2.out",
      });
    };

    const handlePointerLeave = () => {
      if (!imageNode) return;

      gsap.to(imageNode, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    heroNode?.addEventListener("pointermove", handlePointerMove);
    heroNode?.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      ctx.revert();
      heroNode?.removeEventListener("pointermove", handlePointerMove);
      heroNode?.removeEventListener("pointerleave", handlePointerLeave);
    };
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
          {t.hero.label}
        </p>

        <h1 className="hero__title">
          Ricky Nugraha
          <span>{t.hero.role}</span>
        </h1>

        <p className="hero__desc">{t.hero.description}</p>

        <div className="hero__buttons">
          <Button
            as="a"
            href="#projects"
            className="shadow-[0_18px_40px_rgba(14,116,144,0.24)]"
          >
            <ArrowUpRight size={18} />
            {t.hero.viewProjects}
          </Button>

          <Button
            as="a"
            href="#contact"
            variant="secondary"
          >
            {t.hero.contact}
          </Button>

          <Button
            as="a"
            href="/cv-ricky-nugraha.pdf"
            variant="outline"
            className="border-emerald-600 bg-emerald-600 text-white shadow-[0_18px_40px_rgba(5,150,105,0.28)] hover:border-emerald-700 hover:bg-emerald-700"
            download="CV_RickyNugraha.pdf"
          >
            <Download size={18} />
            {t.hero.downloadCV}
          </Button>
        </div>

        <div className="hero__meta">
          <span>
            <MapPin size={18} />
            {t.hero.location}
          </span>
          <span>{t.hero.availability}</span>
        </div>

        <div className="hero__stats" aria-label="Portfolio highlights">
          <div>
            <strong>{t.hero.stats.focusValue}</strong>
            <span>{t.hero.stats.focusLabel}</span>
          </div>

          <div>
            <strong>{t.hero.stats.techValue}</strong>
            <span>{t.hero.stats.techLabel}</span>
          </div>

          <div>
            <strong>{t.hero.stats.hybridValue}</strong>
            <span>{t.hero.stats.hybridLabel}</span>
          </div>
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
        ref={imageRef}
      >
        <div className="hero__badge hero__badge--top">
          <strong>{t.hero.badgeTop}</strong>
          <span>{t.hero.badgeTopDesc}</span>
        </div>
        <div className="hero__circle">
          <img
            src={profile}
            alt="Ricky Nugraha"
          />
        </div>
        <div className="hero__badge hero__badge--bottom">
          <strong>{t.hero.badgeBottom}</strong>
          <span>{t.hero.badgeBottomDesc}</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
