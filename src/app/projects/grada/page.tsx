import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { ProjectDetailLayout } from "@/components/shared/project-detail-layout";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradaDashboard } from "@/components/demos/grada-dashboard";

export const metadata: Metadata = {
  title: "Grada Trading — Prédiction BTC + dHEDGE",
  description:
    "Bot de trading automatisé : prédiction BTC avec XGBoost et exécution on-chain via vault dHEDGE sur Polygon.",
};

const project = projects.find((p) => p.slug === "grada")!;

const tech = [
  "Python",
  "XGBoost",
  "TypeScript",
  "dHEDGE SDK",
  "ethers.js",
  "Polygon",
  "KyberSwap",
  "GitHub Actions",
  "Telegram Bot",
];

export default function GradaPage() {
  return (
    <ProjectDetailLayout
      project={project}
      demo={<GradaDashboard />}
      context={
        <div className="space-y-6 text-muted-foreground">
          <h3 className="text-lg font-semibold text-foreground">Méthodologie</h3>
          <p>
            Walk-Forward Validation sur fenêtre glissante de 1500 jours : chaque jour, le
            modèle est ré-entraîné et prédit la direction du BTC pour le lendemain.
          </p>
          <h4 className="font-semibold text-foreground">Découvertes clés</h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong>Macro features (+269% earning)</strong> : DXY, S&amp;P 500, VIX et Gold
              apportent un signal fort (+3.7x earning)
            </li>
            <li>
              <strong>On-chain features (-18.6%)</strong> : MVRV, exchange flows, hash rate
              dégradent les performances (bruit &gt; signal)
            </li>
            <li>
              <strong>Calibration</strong> : XGBoost surpasse LightGBM et CatBoost par la
              qualité de ses probabilités, optimisant le position sizing
            </li>
          </ul>
          <h4 className="font-semibold text-foreground">Pipeline quotidien</h4>
          <p>
            GitHub Actions (00:30 UTC) : fetch données → feature engineering (22) → train
            XGBoost → predict proba → signal.json → swap via dHEDGE SDK → notification Telegram
          </p>
        </div>
      }
      resources={
        <div className="space-y-6">
          <SectionHeading title="Stack" highlight="Technique" />
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => <TechBadge key={t} name={t} />)}
          </div>
          <div className="mt-4 rounded-xl border border-border bg-card p-4 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Note :</strong> Le repository est privé. Le vault est publiquement vérifiable sur dHEDGE/Polygon.</p>
            <p className="mt-2">Premier trade : 13 février 2026</p>
          </div>
        </div>
      }
    />
  );
}
