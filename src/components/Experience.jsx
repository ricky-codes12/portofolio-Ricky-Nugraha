import { getTranslations } from "../i18n";

function Experience({ language }) {
  const t = getTranslations(language);

  return (
    <section className="section experience" id="experience">
      <div className="section__title">
        <p>{t.experience.eyebrow}</p>
        <h2>{t.experience.title}</h2>
      </div>

      <ul className="experience__list">
        {t.experience.items.map((item) => (
          <li className="experience__item" key={`${item.period}-${item.role}`}>
            <article className="experience__card">
              <div className="experience__meta">
                <span className="experience__period">{item.period}</span>
                <p className="experience__company">{item.company}</p>
              </div>

              <div className="experience__content">
                <h3>{item.role}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experience;
