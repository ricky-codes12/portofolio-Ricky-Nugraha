import { getTranslations } from "../i18n";

function Education({ language }) {
  const { education } = getTranslations(language);

  return (
    <section className="section education" id="education" aria-labelledby="education-title">
      <div className="section__title">
        <p>{education.eyebrow}</p>
        <h2 id="education-title">{education.title}</h2>
      </div>
      <div className="education__grid">
        {education.groups.map((group) => (
          <div className="education__group" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.institution}>
                  <span className="education__period">{item.period}</span>
                  <h4>{item.institution}</h4>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
