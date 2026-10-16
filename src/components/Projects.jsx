import { useState } from "react";
import { getHexaProjects, getProjectCopy } from "../data/hexa-projects";
import ProjectDetails from "./ProjectDetails";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Images,
  ImageOff,
} from "lucide-react";
import { getTranslations } from "../i18n";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const projectImages = {
  "https://ims-finance-frontend.vercel.app/": "ims-finance",
  "https://company-profile-teal-eta.vercel.app/": "company-profile",
  "https://bike-sharing-dashboard-qjornwxhtakibwxwqpd9ho.streamlit.app/": "bike-sharing",
  "https://capstone-warisan-nusantara.vercel.app/#/": "warisan-nusantara",
  "https://erp-management-system-five.vercel.app/login": "erp",
};

function Projects({ language }) {
  const t = getTranslations(language);
  const copy = getProjectCopy(language);
  const hexaProjects = getHexaProjects(language);
  const [selectedProject, setSelectedProject] = useState(null);

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

      <div className="projects__group-heading"><h3>{copy.company}</h3><span>05</span></div>
      <div className="projects__grid projects__grid--company">
        {hexaProjects.map((project) => (
          <Card className="company-project" key={project.id}>
            <CardHeader>
              <div className="company-project__labels"><Badge variant="outline">{project.type}</Badge><span>{copy.internal}</span></div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.desc}</CardDescription>
            </CardHeader>
            <CardContent className="company-project__content pt-0">
              <button type="button" className="company-project__preview" data-project-details={project.id} aria-label={`${copy.details}: ${project.title}`} onClick={() => setSelectedProject(project)}>
                {project.photos.length ? <img src={project.photos[0].src} alt={project.title} loading="lazy" /> : <><ImageOff size={30} /><span>{copy.gallery}</span><small>{copy.empty}</small></>}
              </button>
              <div className="company-project__role"><span>{copy.role}</span><strong>{project.role}</strong></div>
              <div className="project-details__tech">{project.tech.map(item => <Badge key={item} variant="secondary">{item}</Badge>)}</div>
              <button type="button" className="company-project__details" onClick={() => setSelectedProject(project)}><Images size={18} />{copy.details}<ArrowUpRight size={17} /></button>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="projects__group-heading"><h3>{copy.personal}</h3><span>{String(projects.length).padStart(2, '0')}</span></div>
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
              <a
                className="projects__screenshot"
                href={`/projects/${projectImages[project.demoUrl]}.png`}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} — screenshot`}
              >
                <img
                  src={`/projects/${projectImages[project.demoUrl]}.png`}
                  alt={`${project.title} — screenshot`}
                  width="1440"
                  height="900"
                  loading="lazy"
                  decoding="async"
                />
              </a>

              <div className="mt-4 space-y-4">
                <dl className="projects__outcomes">
                  <div>
                    <dt>{t.projects.contributionLabel}</dt>
                    <dd>{project.contribution}</dd>
                  </div>
                  <div>
                    <dt>{t.projects.outcomeLabel}</dt>
                    <dd>{project.outcome}</dd>
                  </div>
                </dl>

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
      {selectedProject ? <ProjectDetails key={selectedProject.id} project={selectedProject} copy={copy} language={language} onClose={() => setSelectedProject(null)} /> : null}
    </section>
  );
}

export default Projects;
