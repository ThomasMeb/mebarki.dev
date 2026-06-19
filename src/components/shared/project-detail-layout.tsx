"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/shared/metric-card";
import { ProjectBanner } from "@/components/shared/project-banner";
import { ProjectTabs } from "@/components/shared/project-tabs";
import type { Project } from "@/lib/data/projects";

export function ProjectDetailLayout({
  project,
  demo,
  context,
  resources,
}: {
  project: Project;
  demo: React.ReactNode;
  context: React.ReactNode;
  resources: React.ReactNode;
}) {
  return (
    <article className="relative">
      {/* Banner */}
      <ProjectBanner slug={project.slug} theme={project.theme} variant="hero" categories={project.categories} />

      <div className="mx-auto max-w-5xl px-6">
        {/* Back link */}
        <div className="-mt-20 relative z-10 mb-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Projets
          </Link>
        </div>

        {/* Header overlapping banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 mb-10 flex flex-col items-center gap-4 text-center"
        >
          <div className="flex items-center gap-3">
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={48}
                height={48}
                className="rounded-lg"
              />
            )}
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span style={{ color: project.theme.from }}>{project.title}</span>
              <span className="text-muted-foreground font-normal text-xl sm:text-2xl ml-3">
                {project.subtitle}
              </span>
            </h1>
          </div>

          {/* CTA buttons */}
          <div className="flex gap-3">
            {project.liveUrl && (
              <Button asChild size="lg" style={{ backgroundColor: project.theme.from }} className="text-background hover:opacity-90">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Voir le site <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild size="lg" variant="outline">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Code source
                </Link>
              </Button>
            )}
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {project.metrics.map((m) => (
            <MetricCard
              key={m.label}
              label={m.label}
              value={m.value}
              color={project.theme.from}
            />
          ))}
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="sr-only">Détails du projet</h2>
          <ProjectTabs demo={demo} context={context} resources={resources} />
        </motion.div>
      </div>
    </article>
  );
}
