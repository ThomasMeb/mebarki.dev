"use client";
import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data/skills";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function SkillsSection() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="font-mono text-xs text-teal">$ cat stack.txt</span>
          <h2 className="mt-3 text-3xl font-light tracking-tight sm:text-4xl">
            Compétences <span className="text-teal">techniques</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Les technologies que j&apos;utilise au quotidien, regroupées par domaine.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.name}
              variants={item}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-teal/30"
            >
              <h3 className="mb-4 flex items-center gap-2 text-base font-semibold">
                <span className="font-mono text-sm text-teal">▸</span>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-foreground/80"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
