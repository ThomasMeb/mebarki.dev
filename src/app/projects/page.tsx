import type { Metadata } from "next";
import { ProjectsFilter } from "@/components/sections/projects-filter";

export const metadata: Metadata = {
  title: "Projets",
  description:
    "Découvrez mes projets en Machine Learning, NLP, Computer Vision, SaaS et trading automatisé. EGIR, Grada, JobScout et plus.",
  alternates: { canonical: "https://mebarki.dev/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-4 text-center text-4xl font-bold tracking-tight">
          Mes <span className="text-teal">Projets</span>
        </h1>
        <p className="mb-12 text-center text-muted-foreground">
          Machine Learning, NLP, Computer Vision, SaaS & Trading
        </p>
        <ProjectsFilter />
      </div>
    </section>
  );
}
