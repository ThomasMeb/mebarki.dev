import type { Metadata } from "next";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectTabs } from "@/components/shared/project-tabs";
import { SchneiderDemo } from "@/components/demos/schneider-demo";
import { MetricCard } from "@/components/shared/metric-card";

export const metadata: Metadata = {
  title: "Schneider Energy — Prédiction Énergétique",
  description:
    "Prédiction de consommation énergétique et émissions CO₂ des bâtiments avec Random Forest pour Schneider Electric.",
};

const tech = ["Python", "Scikit-learn", "XGBoost", "Random Forest", "SHAP", "Pandas", "Plotly", "Streamlit"];

export default function SchneiderPage() {
  return (
    <article className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-teal">Schneider Energy</span> — Prédiction Énergétique
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Modèle ML prédisant la consommation énergétique et les émissions CO₂ des bâtiments
          </p>
        </div>

        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <MetricCard label="R²" value="0.83" />
          <MetricCard label="vs Baseline" value="+45.5%" />
          <MetricCard label="Bâtiments" value="1,650" />
          <MetricCard label="Features" value="40" />
        </div>

        <ProjectTabs
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
      </div>
    </article>
  );
}
