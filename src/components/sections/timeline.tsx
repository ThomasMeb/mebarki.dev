"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, GraduationCap, Code, Rocket } from "lucide-react";
import { timeline, type TimelineItem } from "@/lib/data/timeline";

const typeIcons: Record<TimelineItem["type"], React.ElementType> = {
  work: Briefcase,
  education: GraduationCap,
  project: Code,
  entrepreneurship: Rocket,
};

const typeColors: Record<TimelineItem["type"], string> = {
  work: "border-violet/40 bg-violet/10 text-violet",
  education: "border-blue-500/40 bg-blue-500/10 text-blue-400",
  project: "border-teal/40 bg-teal/10 text-teal",
  entrepreneurship: "border-yellow-400/40 bg-yellow-400/10 text-yellow-300",
};

const typeLabels: Record<TimelineItem["type"], string> = {
  work: "Expérience",
  education: "Formation",
  project: "Projet",
  entrepreneurship: "Entrepreneuriat",
};

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.55"],
  });
  const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="font-mono text-xs text-teal">$ git log --career</span>
          <h2 className="mt-3 text-3xl font-light tracking-tight sm:text-4xl">
            Parcours <span className="text-teal">professionnel</span>
          </h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Track */}
          <div className="absolute bottom-2 left-4 top-2 w-px -translate-x-1/2 bg-border" />
          {/* Progress fill — driven by scroll */}
          <motion.div
            style={{ scaleY: fill }}
            className="absolute bottom-2 left-4 top-2 w-px -translate-x-1/2 origin-top bg-teal"
          />

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = typeIcons[item.type];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="relative pl-14"
                >
                  {/* Node on the line */}
                  <div
                    className={`absolute left-4 top-1 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border bg-background ${typeColors[item.type]}`}
                  >
                    <Icon size={15} />
                  </div>

                  {/* Card */}
                  <div className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-teal/30">
                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-mono text-sm font-medium text-teal">
                        {item.year}
                      </span>
                      <span
                        className={`rounded border px-1.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider ${typeColors[item.type]}`}
                      >
                        {typeLabels[item.type]}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
