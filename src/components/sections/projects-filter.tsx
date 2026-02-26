"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
              <Link
                href={`/projects/${project.slug}`}
                className="group block rounded-xl border border-border bg-card p-6 transition-colors hover:border-teal/30"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={32}
                        height={32}
                        className="rounded"
                      />
                    )}
                    <div>
                      <h3 className="font-bold">{project.title}</h3>
                      <p className="text-sm text-teal">{project.subtitle}</p>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-teal" />
                </div>

                <p className="mt-4 line-clamp-2 text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
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

                <div className="mt-4 flex gap-4">
                  {project.metrics.slice(0, 3).map((m) => (
                    <div key={m.label} className="text-center">
                      <p className="text-sm font-bold text-teal">{m.value}</p>
                      <p className="text-xs text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
