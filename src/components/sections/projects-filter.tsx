"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { CardContainer, CardBody, CardItem } from "@/components/aceternity/3d-card";
import { ProjectBanner } from "@/components/shared/project-banner";
import { projects } from "@/lib/data/projects";
import { CATEGORY_COLORS } from "@/lib/constants";

const allCategories = Array.from(
  new Set(projects.flatMap((p) => p.categories))
);

export function ProjectsFilter() {
  const [filter, setFilter] = useState<string | null>(null);

  const filtered = filter
    ? projects.filter((p) => p.categories.includes(filter))
    : projects;

  return (
    <>
      {/* Filters */}
      <div className="mb-10 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setFilter(null)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
            !filter
              ? "bg-teal text-background"
              : "bg-secondary text-muted-foreground hover:text-foreground"
          }`}
        >
          Tous
        </button>
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat === filter ? null : cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              cat === filter
                ? "bg-teal text-background"
                : "bg-secondary text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/projects/${project.slug}`}>
                <CardContainer containerClassName="w-full">
                  <CardBody className="group relative w-full overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-white/15">
                    <CardItem translateZ={20} className="w-full">
                      <ProjectBanner slug={project.slug} theme={project.theme} variant="card" />
                    </CardItem>

                    <div className="relative -mt-4 px-5 pb-5">
                      <CardItem translateZ={35} className="w-full">
                        <h3 className="font-bold">{project.title}</h3>
                        <p className="text-sm" style={{ color: project.theme.from }}>
                          {project.subtitle}
                        </p>
                      </CardItem>

                      <CardItem translateZ={25} className="mt-2 w-full">
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </CardItem>

                      <CardItem translateZ={20} className="mt-3 w-full">
                        <div className="flex flex-wrap gap-1.5">
                          {project.categories.map((cat) => (
                            <Badge
                              key={cat}
                              variant="outline"
                              className={CATEGORY_COLORS[cat] || ""}
                            >
                              {cat}
                            </Badge>
                          ))}
                        </div>
                      </CardItem>

                      <CardItem translateZ={15} className="mt-3 w-full">
                        <div className="flex gap-4">
                          {project.metrics.slice(0, 3).map((m) => (
                            <div key={m.label} className="text-center">
                              <p className="text-sm font-bold" style={{ color: project.theme.from }}>
                                {m.value}
                              </p>
                              <p className="text-xs text-muted-foreground">{m.label}</p>
                            </div>
                          ))}
                        </div>
                      </CardItem>
                    </div>
                  </CardBody>
                </CardContainer>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
