import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MetricCard } from "@/components/shared/metric-card";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "EGIR — SaaS Restauration",
  description:
    "EGIR : plateforme SaaS analytique pour restaurateurs avec IA intégrée. Calcul des coûts, fiches techniques, dashboard de rentabilité.",
};

const tech = [
  "Python 3.12",
  "Streamlit",
  "SQLAlchemy",
  "SQLite",
  "Mistral AI",
  "PostHog",
  "Render (EU)",
  "Cloudflare",
  "R2 Backups",
];

const features = [
  {
    title: "Fiches Techniques IA",
    description:
      "Création et modification de recettes assistées par un LLM conversationnel (Mistral). Calcul automatique des coûts matières.",
  },
  {
    title: "Propagation des Coûts",
    description:
      "Modification d'un prix matière première → mise à jour automatique de toutes les fiches techniques impactées.",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Filtres par catégorie, recherche, exports PDF/Excel. Visualisation des marges et coûts en temps réel.",
  },
  {
    title: "Multi-tenant & Rôles",
    description:
      "Architecture multi-tenant avec 3 rôles (admin, client, demo). Isolation des données par restaurant.",
  },
  {
    title: "Landing Page",
    description:
      "Calculateur ROI interactif pour convaincre les prospects. Conversion optimisée.",
  },
  {
    title: "Infrastructure EU",
    description:
      "Hébergement Render EU (RGPD), DNS/CDN Cloudflare, backups R2. SSL automatique.",
  },
];

export default function EgirPage() {
  return (
    <article className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center gap-6 text-center">
          <Image
            src="/images/egir_logo.png"
            alt="EGIR Logo"
            width={80}
            height={80}
            className="rounded-xl"
          />
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              <span className="text-teal">EGIR</span> — SaaS Restauration
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Assistant financier pour restaurateurs — &quot;La clarté sur vos marges&quot;
            </p>
          </div>
          <Button asChild size="lg" className="bg-teal text-background hover:bg-teal/90">
            <Link href="https://egir.app" target="_blank" rel="noopener noreferrer">
              Découvrir egir.app <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Metrics */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <MetricCard label="Marge moyenne" value="+10%" />
          <MetricCard label="Temps économisé" value="80%" />
          <MetricCard label="Pilote" value="10 restaurants" />
          <MetricCard label="Statut" value="MVP en prod" />
        </div>

        {/* Features */}
        <SectionHeading title="Fonctionnalités" highlight="Clés" />
        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-2 font-semibold">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.description}</p>
            </div>
          ))}
        </div>

        {/* Context */}
        <SectionHeading
          title="Contexte &"
          highlight="Genèse"
          description="D'une immersion en cuisine à la création d'un SaaS."
        />
        <div className="mb-16 space-y-4 text-muted-foreground">
          <p>
            Après mon Master en Data Science et un passage chez Shift Technology, j&apos;ai
            voulu comprendre un métier de terrain. J&apos;ai obtenu un diplôme de cuisinier et
            travaillé pendant 8 mois au Café de Paris à Calais.
          </p>
          <p>
            Sur le terrain, j&apos;ai constaté que les restaurateurs gèrent leurs marges à
            l&apos;instinct, sans outils adaptés. Les solutions existantes sont trop complexes ou
            trop chères. EGIR est né de ce constat : un outil simple, abordable, avec de
            l&apos;IA pour automatiser le calcul des coûts.
          </p>
        </div>

        {/* Tech Stack */}
        <SectionHeading title="Stack" highlight="Technique" />
        <div className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <TechBadge key={t} name={t} />
          ))}
        </div>
      </div>
    </article>
  );
}
