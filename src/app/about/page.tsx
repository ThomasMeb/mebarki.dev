import type { Metadata } from "next";
import Image from "next/image";
import { SkillsSection } from "@/components/sections/skills-section";
import { Timeline } from "@/components/sections/timeline";

export const metadata: Metadata = {
  title: "About",
  description:
    "Parcours de Thomas Mebarki — ML Engineer & Entrepreneur. Formation, compétences et expérience.",
};

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-[2fr_1fr]">
          <div>
            <span className="eyebrow">À propos</span>
            <h1 className="mt-4 text-4xl font-light tracking-tight sm:text-5xl">
              À propos de <span className="text-teal">Thomas</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              ML Engineer qui a quitté la tech pour travailler en cuisine — et qui en est
              revenu avec un SaaS. Je construis des modèles qui servent le business, pas
              l&apos;inverse.
            </p>
            <p className="mt-4 text-muted-foreground">
              3 ans d&apos;expérience en Machine Learning appliqué (Computer Vision, NLP,
              Time Series, Fraud Detection), avec une approche produit orientée ROI.
              Parcours atypique : immersion terrain en restauration pour comprendre les
              contraintes métier avant de créer{" "}
              <a
                href="https://egir.app"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-teal underline-offset-4 hover:underline"
              >
                EGIR
              </a>
              , un SaaS analytique pour restaurateurs.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/photo_thomas.png"
              alt="Thomas Mebarki"
              width={280}
              height={280}
              className="rounded-2xl border border-border"
              priority
            />
          </div>
        </div>
      </section>

      <SkillsSection />
      <Timeline />

      {/* Certifications */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 text-center">
            <span className="eyebrow">Au-delà du code</span>
            <h2 className="mt-3 text-3xl font-light tracking-tight sm:text-4xl">
              Certifications & <span className="text-teal">Extras</span>
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 font-semibold">Projets ML réalisés</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>5 projets end-to-end déployés</li>
                <li>Couverture : Régression, Classification, Clustering, NLP, CV</li>
                <li>Code open-source sur GitHub</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 font-semibold">Autres</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>CLES B2 Anglais</li>
                <li>PSC1 — Secourisme</li>
                <li>Ceinture noire de karaté, champion départemental</li>
                <li>Marathonien, régatier (voile)</li>
                <li>
                  <a
                    href="https://x.com/_elmeb_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal hover:underline"
                  >
                    14k+ abonnés sur X/Twitter
                  </a>{" "}
                  — veille ML/produit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
