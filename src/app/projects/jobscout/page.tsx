import type { Metadata } from "next";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/shared/metric-card";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectTabs } from "@/components/shared/project-tabs";
import { JobScoutDashboard } from "@/components/demos/jobscout-dashboard";

export const metadata: Metadata = {
  title: "JobScout — Agent IA de veille emploi",
  description:
    "JobScout : agent autonome de recherche d'emploi avec scoring LLM et dashboard interactif.",
};

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
    <article className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-teal">JobScout</span> — Agent IA Emploi
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Agent autonome de recherche d&apos;emploi avec scoring LLM
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Button asChild size="lg" className="bg-teal text-background hover:bg-teal/90">
              <Link
                href="https://github.com/ThomasMeb/JobScout"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> Voir le code
              </Link>
            </Button>
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <MetricCard label="Jobs analysés" value="1,989" />
          <MetricCard label="Sources" value="Multi" />
          <MetricCard label="Scoring" value="LLM" />
          <MetricCard label="Tests" value="40+" />
        </div>

        <ProjectTabs
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
              <div className="mt-8">
                <Button asChild variant="outline">
                  <Link
                    href="https://github.com/ThomasMeb/JobScout"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> Repository GitHub
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </div>
          }
        />
      </div>
    </article>
  );
}
