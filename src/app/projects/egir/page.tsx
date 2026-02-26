import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { ProjectDetailLayout } from "@/components/shared/project-detail-layout";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";

export const metadata: Metadata = {
  title: "EGIR — SaaS Restauration",
  description:
    "EGIR : plateforme SaaS analytique pour restaurateurs avec IA intégrée. Calcul des coûts, fiches techniques, dashboard de rentabilité.",
};

const project = projects.find((p) => p.slug === "egir")!;

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
    <ProjectDetailLayout
      project={project}
      demo={
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      }
      context={
        <div className="space-y-4 text-muted-foreground">
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
      }
      resources={
        <div className="space-y-6">
          <SectionHeading title="Stack" highlight="Technique" />
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <TechBadge key={t} name={t} />
            ))}
          </div>
        </div>
      }
    />
  );
}
