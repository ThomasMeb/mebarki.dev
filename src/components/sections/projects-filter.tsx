"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectBanner } from "@/components/shared/project-banner";
import { projects } from "@/lib/data/projects";
import { CATEGORY_COLORS } from "@/lib/constants";

const allCategories = Array.from(new Set(projects.flatMap((p) => p.categories)));

export function ProjectsFilter() {
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter
    ? projects.filter((p) => p.categories.includes(filter))
    : projects;

  return (
    <>
      <h2 className="sr-only">Liste des projets</h2>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-border pb-6">
        <span className="eyebrow mr-2">Filtrer</span>
        <button
          onClick={() => setFilter(null)}
          className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
            !filter
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Tous
        </button>
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat === filter ? null : cat)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              cat === filter
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <article
                  className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 group-hover:-translate-y-1"
                  style={{ ["--theme" as string]: project.theme.from }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 z-10 h-px scale-x-0 bg-[var(--theme)] transition-transform duration-300 group-hover:scale-x-100"
                  />

                  <div className="relative">
                    <ProjectBanner slug={project.slug} theme={project.theme} variant="card" categories={project.categories} />
                    <span
                      className="absolute left-4 top-3 font-mono text-xs tracking-widest"
                      style={{ color: project.theme.from }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="absolute right-4 top-3 h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <div className="flex flex-1 flex-col px-5 pb-5">
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm" style={{ color: project.theme.from }}>
                      {project.subtitle}
                    </p>

                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.categories.map((cat) => (
                        <Badge
                          key={cat}
                          variant="outline"
                          className={CATEGORY_COLORS[cat] || "border-border text-muted-foreground"}
                        >
                          {cat}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto flex gap-5 border-t border-border pt-4">
                      {project.metrics.slice(0, 3).map((m) => (
                        <div key={m.label}>
                          <p className="font-mono text-sm font-bold" style={{ color: project.theme.from }}>
                            {m.value}
                          </p>
                          <p className="mt-0.5 text-xs text-muted-foreground">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
