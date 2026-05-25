import {
  ArrowUpRight,
  Code2,
  ExternalLink,
} from "lucide-react";
import { getTranslations } from "../i18n";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

function Projects({ language }) {
  const t = getTranslations(language);

  const projects = t.projects.projects.map((project) => ({
    ...project,
    codeUrl: project.codeUrl ?? "https://github.com/ricky-codes12",
  }));

  return (
    <section
      className="section projects"
      id="projects"
    >
      <div className="section__title">
        <p>{t.projects.eyebrow}</p>
        <h2>{t.projects.title}</h2>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <Card
            className="overflow-hidden"
            key={project.title}
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-4">
                <Badge variant="outline">{project.type}</Badge>
                <ArrowUpRight size={18} className="text-(--brand)" />
              </div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.desc}</CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="projects__preview" aria-hidden="true">
                <div className="projects__preview-bar">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className="projects__preview-body">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                <strong className="projects__metric block">{project.metric}</strong>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="projects__links">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${t.projects.code} ${project.title}`}
                  >
                    <Code2 size={18} />
                    {t.projects.code}
                  </a>

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${t.projects.demo} ${project.title}`}
                  >
                    <ExternalLink size={18} />
                    {t.projects.demo}
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Projects;
