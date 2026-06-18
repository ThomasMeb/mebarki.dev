import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { ProjectDetailLayout } from "@/components/shared/project-detail-layout";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { SchneiderDemo } from "@/components/demos/schneider-demo";

export const metadata: Metadata = {
  title: "Schneider Energy — Prédiction Énergétique",
  description:
    "Prédiction de consommation énergétique et émissions CO₂ des bâtiments avec Random Forest (énergie) et XGBoost (CO₂) pour Schneider Electric.",
};

const project = projects.find((p) => p.slug === "schneider")!;

const tech = ["Python", "Scikit-learn", "XGBoost", "Random Forest", "SHAP", "Pandas", "Plotly", "Streamlit"];

export default function SchneiderPage() {
  return (
    <ProjectDetailLayout
      project={project}
      demo={<SchneiderDemo />}
      context={
        <div className="space-y-6 text-muted-foreground">
          <h3 className="text-lg font-semibold text-foreground">Mission — Schneider Electric</h3>
          <p>
            Développer un outil ML prédisant la consommation énergétique et les émissions CO₂
            du parc immobilier tertiaire, dans le cadre des engagements ESG.
          </p>
          <h4 className="font-semibold text-foreground">Approche</h4>
          <ol className="list-inside list-decimal space-y-1">
            <li>Exploration — 3,376 bâtiments, 47 variables</li>
            <li>Feature Engineering — Traitement de 34% de valeurs manquantes</li>
            <li>Modélisation — 18 modèles testés, validation croisée 10-fold</li>
            <li>Déploiement — Application Streamlit avec SHAP</li>
          </ol>
          <h4 className="font-semibold text-foreground">Insights clés</h4>
          <ul className="list-inside list-disc space-y-1">
            <li>Surface totale (42%) — principal prédicteur de consommation</li>
            <li>Score ENERGY STAR (12%) — l&apos;efficacité réduit la consommation</li>
            <li>Âge du bâtiment (8%) — les anciens bâtiments consomment plus</li>
          </ul>
        </div>
      }
      resources={
        <div className="space-y-6">
          <SectionHeading title="Stack" highlight="Technique" />
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => <TechBadge key={t} name={t} />)}
          </div>
          <p className="text-sm text-muted-foreground">
            Dataset : Seattle Building Energy Benchmarking (données publiques similaires
            aux données client confidentielles).
          </p>
        </div>
      }
    />
  );
}
