import {
  Award,
  BadgeCheck,
  ExternalLink,
} from "lucide-react";
import { getTranslations } from "../i18n";

function Certificates({ language }) {
  const t = getTranslations(language);

  return (
    <section
      className="section certificates"
      id="certificates"
    >
      <div className="section__title">
        <p>{t.certificates.eyebrow}</p>
        <h2>{t.certificates.title}</h2>
      </div>

      <div className="certificates__grid">
        {t.certificates.items.map((certificate) => (
          <article
            className="certificates__card"
            key={certificate.title}
          >
            <div className="certificates__icon">
              <Award size={24} />
            </div>

            <div className="certificates__body">
              <span>{certificate.category}</span>
              <h3>{certificate.title}</h3>
              <p>
                {certificate.issuer} / {certificate.year}
              </p>
            </div>

            <a
              href={certificate.url || "#"}
              target={certificate.url ? "_blank" : undefined}
              rel={certificate.url ? "noreferrer" : undefined}
              aria-label={`${t.certificates.verified} ${certificate.title}`}
            >
              <BadgeCheck size={18} />
              {t.certificates.verified}
              <ExternalLink size={16} />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
