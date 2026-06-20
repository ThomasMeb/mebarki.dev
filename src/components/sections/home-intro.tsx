"use client";
import { motion } from "framer-motion";

const PILLARS = [
  {
    n: "01",
    title: "De la donnée à la prod",
    body: "Je ne m'arrête pas au notebook. Pipelines, déploiement, monitoring : le modèle tourne en conditions réelles.",
  },
  {
    n: "02",
    title: "ML orienté valeur",
    body: "Une métrique business avant une métrique de papier. Le bon modèle est celui qui change une décision.",
  },
  {
    n: "03",
    title: "Fondateur produit",
    body: "EGIR, Grada, JobScout : je conçois, je code et je livre des produits complets, pas seulement des POC.",
  },
];

export function HomeIntro() {
  return (
    <section className="border-y border-border px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="font-mono text-xs text-teal">{"// approche"}</span>
          <h2 className="mt-4 max-w-3xl text-2xl font-normal leading-snug sm:text-3xl">
            Entre la recherche et le produit, je choisis ce qui{" "}
            <span className="text-teal">marche en production</span>.
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="border-t border-border pt-5"
            >
              <span className="font-mono text-sm text-teal">{p.n}</span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
