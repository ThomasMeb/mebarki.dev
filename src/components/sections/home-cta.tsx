"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SOCIAL } from "@/lib/constants";

export function HomeCta() {
  return (
    <section className="px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl"
      >
        <span className="eyebrow">Contact</span>
        <h2 className="mt-5 max-w-3xl text-4xl font-light leading-tight tracking-tight sm:text-6xl">
          Un modèle à mettre <span className="italic text-teal">en production</span> ?
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          Missions ML, projets data, ou simplement échanger. La boîte de réception
          est ouverte.
        </p>

        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Me contacter
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/cv"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-teal"
          >
            Voir le CV
          </Link>
          <a
            href={`mailto:${SOCIAL.email}`}
            className="font-mono text-sm text-muted-foreground transition-colors hover:text-teal sm:ml-auto"
          >
            {SOCIAL.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
