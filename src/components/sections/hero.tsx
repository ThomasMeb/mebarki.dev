"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const fade: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

const SIGNATURE_PROJECTS = ["EGIR", "Grada", "JobScout"];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Editorial backdrop: warm radial + hairline rule, very restrained */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 0%, rgba(255,94,58,0.10), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent"
      />

      <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-32">
        {/* Eyebrow */}
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="flex items-center justify-between"
        >
          <span className="eyebrow">ML Engineer · Entrepreneur</span>
          <span className="eyebrow flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-teal" />
            Disponible · 2026
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 text-[clamp(3rem,9vw,7.5rem)] font-light leading-[0.95] tracking-tight"
        >
          Thomas
          <br />
          Mebarki
        </motion.h1>

        {/* Statement */}
        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-2xl font-display text-2xl italic leading-snug text-foreground/90 sm:text-3xl"
        >
          Je construis des modèles qui servent le business, pas l&apos;inverse.
        </motion.p>

        {/* Supporting line */}
        <motion.p
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground"
        >
          Fondateur d&apos;EGIR, Grada et JobScout. J&apos;amène le Machine Learning
          jusqu&apos;en production, là où il crée de la valeur réelle.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voir mes projets
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="https://egir.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-teal"
          >
            Découvrir EGIR
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Project ticker */}
        <motion.div
          custom={5}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6"
        >
          <span className="eyebrow">Projets</span>
          {SIGNATURE_PROJECTS.map((p) => (
            <span key={p} className="font-display text-lg text-foreground/70">
              {p}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
