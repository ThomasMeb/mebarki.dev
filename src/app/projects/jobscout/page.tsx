import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { ProjectDetailLayout } from "@/components/shared/project-detail-layout";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { JobScoutDashboard } from "@/components/demos/jobscout-dashboard";

export const metadata: Metadata = {
  title: "JobScout — Agent IA de veille emploi",
  description:
    "JobScout : agent autonome de recherche d'emploi avec scoring LLM et dashboard interactif.",
};

const project = projects.find((p) => p.slug === "jobscout")!;

const tech = [
  "Python",
  "FastAPI",
  "Next.js",
  "SQLite",
  "LLM (GPT-4o-mini)",
  "Docker",
  "Playwright",
  "Render",
];

export default function JobScoutPage() {
  return (
    <ProjectDetailLayout
      project={project}
      demo={<JobScoutDashboard />}
      context={
        <div className="space-y-4 text-muted-foreground">
          <p>
            JobScout est un agent IA autonome qui scrape, analyse et score des offres
            d&apos;emploi depuis plusieurs plateformes. Le scoring est réalisé par un LLM
            (GPT-4o-mini) qui évalue l&apos;adéquation entre le profil du candidat et
            chaque offre.
          </p>
          <p>
            Le projet utilise une architecture 3 services : API FastAPI, worker de
            scraping, et dashboard Next.js. Le tout est containerisé avec Docker et
            déployable sur Render.
          </p>
          <h3 className="font-semibold text-foreground">Fonctionnalités</h3>
          <ul className="list-inside list-disc space-y-1">
            <li>Scraping multi-plateforme avec retry et rate limiting</li>
            <li>Scoring LLM avec justification</li>
            <li>Dashboard interactif avec filtres</li>
            <li>Export CSV des résultats</li>
            <li>Déduplication automatique</li>
          </ul>
        </div>
      }
      resources={
        <div className="space-y-6">
          <SectionHeading title="Stack" highlight="Technique" />
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </div>
      }
    />
  );
}
