"use client";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Rocket } from "lucide-react";
import { timeline, type TimelineItem } from "@/lib/data/timeline";

const typeIcons: Record<TimelineItem["type"], React.ElementType> = {
  work: Briefcase,
  education: GraduationCap,
  project: Code,
  entrepreneurship: Rocket,
};

const typeColors: Record<TimelineItem["type"], string> = {
  work: "border-violet bg-violet/10 text-violet",
  education: "border-blue-500 bg-blue-500/10 text-blue-400",
  project: "border-teal bg-teal/10 text-teal",
  entrepreneurship: "border-yellow-400 bg-yellow-400/10 text-yellow-300",
};

export function Timeline() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="eyebrow">Parcours</span>
          <h2 className="mt-3 text-3xl font-light tracking-tight sm:text-4xl">
            Parcours <span className="text-teal">Professionnel</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="space-y-12">
            {timeline.map((item, i) => {
              const Icon = typeIcons[item.type];
              const colorClass = typeColors[item.type];
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex items-start gap-6 md:gap-0"
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-6 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border ${colorClass} md:left-1/2`}
                  >
                    <Icon size={18} />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-16 w-full md:ml-0 ${
                      isLeft
                        ? "md:mr-auto md:w-[calc(50%-2rem)] md:pr-8 md:text-right"
                        : "md:ml-auto md:w-[calc(50%-2rem)] md:pl-8"
                    }`}
                  >
                    <span className="font-mono text-sm font-medium text-teal">{item.year}</span>
                    <h3 className="mt-1 text-lg font-bold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    <p className="mt-2 text-sm text-muted-foreground/80">
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
