import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { getTranslations } from "../i18n";

function Footer({ language }) {
  const t = getTranslations(language);

  const socials = [
    {
      name: t.footer.socials.whatsapp,
      label: t.footer.socials.whatsapp,
      href: "https://wa.me/6281387613515",
      icon: FaWhatsapp,
    },
    {
      name: t.footer.socials.linkedin,
      label: t.footer.socials.linkedin,
      href: "https://www.linkedin.com/in/ricky-nugraha-91929b284/",
      icon: FaLinkedin,
    },
    {
      name: t.footer.socials.github,
      label: t.footer.socials.github,
      href: "https://github.com/ricky-codes12",
      icon: FaGithub,
    },
    {
      name: t.footer.socials.instagram,
      label: t.footer.socials.instagram,
      href: "https://www.instagram.com/rricky_nugraha?igsh=aWdkbjdtYXQyMjdn",
      icon: FaInstagram,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <span>{t.footer.brand}</span>
          <h2>{t.footer.title}</h2>
          <p>{t.footer.description}</p>
        </div>

        <div className="footer__socials">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${social.label} Ricky Nugraha`}
              >
                <Icon size={20} />
                <span>{social.name}</span>
              </a>
            );
          })}
        </div>

        <div className="footer__bottom">
          <small>{t.footer.bottom}</small>
          <a href="mailto:rickynugraha1215@gmail.com">
            rickynugraha1215@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
