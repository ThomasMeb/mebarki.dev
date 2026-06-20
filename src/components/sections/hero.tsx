"use client";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data/projects";

const group: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
};

const line: Variants = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

function Cmd({
  children,
  gloss,
}: {
  children: React.ReactNode;
  gloss?: string;
}) {
  return (
    <p className="text-muted-foreground">
      <span className="select-none text-teal">❯</span>{" "}
      <span className="text-foreground/90">{children}</span>
      {gloss && (
        <span className="ml-2 select-none text-xs text-muted-foreground/50">
          # {gloss}
        </span>
      )}
    </p>
  );
}

export function Hero() {
  return (
    <section className="px-6 pb-20 pt-12 md:pt-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="overflow-hidden rounded-lg border border-border bg-card/70 shadow-[0_24px_80px_-32px_rgba(0,0,0,0.8)] backdrop-blur-sm"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-border bg-secondary/40 px-4 py-3">
            <span className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            </span>
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              thomas@mebarki: ~/portfolio
            </span>
            <span className="ml-auto hidden font-mono text-xs text-muted-foreground sm:inline">
              zsh — 80×24
            </span>
          </div>

          {/* Terminal body */}
          <motion.div
            variants={group}
            initial="hidden"
            animate="show"
            className="space-y-5 p-6 font-mono text-sm leading-relaxed sm:p-8"
          >
            <motion.p variants={line} className="text-muted-foreground">
              <span className="text-teal"># </span>status: disponible · 2026 · remote
            </motion.p>

            {/* whoami */}
            <motion.div variants={line}>
              <Cmd gloss="qui suis-je">whoami</Cmd>
              <h1 className="mt-2 text-[clamp(2.1rem,7vw,4.5rem)] font-bold leading-[0.95] tracking-tight text-foreground">
                Thomas Mebarki
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                ML Engineer<span className="text-teal"> · </span>Entrepreneur
              </p>
            </motion.div>

            {/* manifesto */}
            <motion.div variants={line}>
              <Cmd gloss="ma philosophie">cat manifesto.txt</Cmd>
              <p className="mt-2 max-w-2xl text-base text-foreground/80 sm:text-lg">
                &laquo; Je construis des modèles qui servent le business, pas
                l&apos;inverse. &raquo;
              </p>
              <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                Fondateur d&apos;EGIR, Grada et JobScout. J&apos;amène le ML
                jusqu&apos;en production, là où il crée de la valeur.
              </p>
            </motion.div>

            {/* ls projects */}
            <motion.div variants={line}>
              <Cmd gloss="mes projets — cliquables">ls projects/</Cmd>
              <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1.5">
                {projects.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group text-foreground/70 underline-offset-4 transition-colors hover:text-teal hover:underline"
                  >
                    {p.slug}
                    <span className="text-muted-foreground group-hover:text-teal">
                      /
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* actions */}
            <motion.div variants={line}>
              <Cmd gloss="me contacter">open _</Cmd>
              <div className="mt-2 flex flex-wrap items-center gap-3">
                <Link
                  href="/projects"
                  className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  ./voir-mes-projets
                </Link>
                <Link
                  href="https://egir.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 rounded-md border border-border px-4 py-2 text-sm text-foreground/80 transition-colors hover:border-teal/50 hover:text-teal"
                >
                  egir.app
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>

            {/* live prompt */}
            <motion.p variants={line} className="text-muted-foreground">
              <span className="text-teal">❯</span>{" "}
              <span className="cursor-blink inline-block text-teal">▋</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
