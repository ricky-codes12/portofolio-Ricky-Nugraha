import { getTranslations } from "../i18n";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

function Skills({ language }) {
  const t = getTranslations(language);

  return (
    <section
      className="section skills"
      id="skills"
    >
      <div className="section__title">
        <p>{t.skills.eyebrow}</p>
        <h2>{t.skills.title}</h2>
      </div>

      <div className="skills__grid">
        {t.skills.groups.map((group) => (
          <Card
            className="overflow-hidden"
            key={group.title}
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <CardTitle>{group.title}</CardTitle>
                <Badge variant="default">{group.items.length}</Badge>
              </div>
              <CardDescription>{group.desc}</CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Skills;
