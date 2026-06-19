"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ProjectBanner } from "@/components/shared/project-banner";
import { projects } from "@/lib/data/projects";
import { CATEGORY_COLORS } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ProjectGrid() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Editorial section header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-end justify-between border-b border-border pb-6"
        >
          <div>
            <span className="eyebrow">Sélection</span>
            <h2 className="mt-3 text-4xl font-light tracking-tight sm:text-5xl">
              Projets
            </h2>
          </div>
          <span className="eyebrow hidden sm:block">
            {String(projects.length).padStart(2, "0")} études de cas
          </span>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <motion.div key={project.slug} variants={item}>
              <Link href={`/projects/${project.slug}`} className="group block h-full">
                <article
                  className="relative flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 group-hover:-translate-y-1"
                  style={{ ["--theme" as string]: project.theme.from }}
                >
                  {/* accent top line revealed on hover */}
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 z-10 h-px scale-x-0 bg-[var(--theme)] transition-transform duration-300 group-hover:scale-x-100"
                  />

                  <div className="relative">
                    <ProjectBanner slug={project.slug} theme={project.theme} variant="card" categories={project.categories} />
                    {/* index number */}
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
        </motion.div>
      </div>
    </section>
  );
}
