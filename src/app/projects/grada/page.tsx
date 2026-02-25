import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectTabs } from "@/components/shared/project-tabs";
import { GradaDashboard } from "@/components/demos/grada-dashboard";

export const metadata: Metadata = {
  title: "Grada Trading — Prédiction BTC + dHEDGE",
  description:
    "Bot de trading automatisé : prédiction BTC avec XGBoost et exécution on-chain via vault dHEDGE sur Polygon.",
};

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
    <article className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-teal">Grada</span> — BTC Trading Bot
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Prédiction directionnelle BTC avec XGBoost + exécution automatisée via vault dHEDGE
          </p>
          <div className="mt-6">
            <Button asChild size="lg" className="bg-teal text-background hover:bg-teal/90">
              <Link
                href="https://app.dhedge.org/vault/0x27462cd4f35d4b3d118eaa85acb61a2cb9ba4e08"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le vault dHEDGE <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>

        <ProjectTabs
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
      </div>
    </article>
  );
}
