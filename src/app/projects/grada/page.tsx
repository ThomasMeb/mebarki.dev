import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { ProjectDetailLayout } from "@/components/shared/project-detail-layout";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { GradaDashboard } from "@/components/demos/grada-dashboard";
import { GradaLiveMetrics } from "@/components/demos/grada-live-metrics";

export const metadata: Metadata = {
  title: "Grada Trading — Trading Bitcoin on-chain",
  description:
    "Stratégie de trading systématique sur Bitcoin, exécutée automatiquement on-chain via une vault dHEDGE publiquement auditable sur Polygon.",
};

const project = projects.find((p) => p.slug === "grada")!;

const tech = [
  "Python",
  "Machine Learning",
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
      badge={
        <span
          className="inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs"
          style={{ borderColor: "#f59e0b55", color: "#f59e0b", background: "#f59e0b14" }}
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#f59e0b" }} />
          Phase d&apos;expérimentation
        </span>
      }
      metricsSlot={<GradaLiveMetrics />}
      demo={<GradaDashboard />}
      context={
        <div className="space-y-6 text-muted-foreground">
          <h3 className="text-lg font-semibold text-foreground">Le projet</h3>
          <p>
            Grada est une stratégie de trading entièrement automatisée sur le
            Bitcoin. Aucune intervention manuelle : le système prend ses décisions,
            puis exécute les ordres directement sur la blockchain.
          </p>
          <h4 className="font-semibold text-foreground">Ce qui le rend différent</h4>
          <ul className="list-inside list-disc space-y-2">
            <li>
              <strong className="text-foreground">Transparence totale</strong> :
              exécution on-chain via une vault dHEDGE — performance et positions
              vérifiables publiquement, en temps réel.
            </li>
            <li>
              <strong className="text-foreground">Zéro boîte noire</strong> : pas de
              chiffre invérifiable, tout est auditable sur Polygon.
            </li>
            <li>
              <strong className="text-foreground">100% automatisé</strong> : du
              signal à l&apos;exécution on-chain, sans intervention humaine.
            </li>
          </ul>
          <p className="text-sm">
            <em>
              Phase d&apos;expérimentation — la méthodologie détaillée et les
              statistiques de performance sont en cours de consolidation.
            </em>
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
