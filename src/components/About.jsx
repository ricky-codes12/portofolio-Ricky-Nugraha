import { getTranslations } from "../i18n";

function About({ language }) {
  const t = getTranslations(language);

  return (
    <section
      className="section about"
      id="about"
    >
      <div className="section__title">
        <p>{t.about.eyebrow}</p>
        <h2>{t.about.title}</h2>
      </div>

      <div className="about__content">
        <div className="about__intro">
          <span>{t.about.tag}</span>
          <h3>{t.about.heading}</h3>
          <p>{t.about.intro}</p>
        </div>

        <div className="about__card">
          <h3>{t.about.profileTitle}</h3>
          <p>{t.about.profileText}</p>
        </div>

        <div className="about__card">
          <h3>{t.about.careerTitle}</h3>
          <p>{t.about.careerText}</p>
        </div>

        <div className="about__card">
          <h3>{t.about.personalTitle}</h3>
          <dl className="about__details">
            {t.about.personalDetails.map((detail) => (
              <div key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;
