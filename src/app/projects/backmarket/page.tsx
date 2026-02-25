import type { Metadata } from "next";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectTabs } from "@/components/shared/project-tabs";
import { BackMarketDemo } from "@/components/demos/backmarket-demo";
import { MetricCard } from "@/components/shared/metric-card";

export const metadata: Metadata = {
  title: "BackMarket — Segmentation Client RFM",
  description:
    "Segmentation automatisée de la base clients Back Market par analyse RFM et clustering KMeans.",
};

const tech = ["Python", "Scikit-learn", "KMeans", "PCA", "Pandas", "Plotly", "Streamlit"];

export default function BackMarketPage() {
  return (
    <article className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-teal">BackMarket</span> — Segmentation Client
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Segmentation RFM avec KMeans en 4 segments actionnables
          </p>
        </div>

        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <MetricCard label="Clients segmentés" value="95,420" />
          <MetricCard label="Segments" value="4" />
          <MetricCard label="Silhouette" value="0.49" />
          <MetricCard label="Taux ouverture" value="+25%" />
        </div>

        <ProjectTabs
          demo={<BackMarketDemo />}
          context={
            <div className="space-y-6 text-muted-foreground">
              <h3 className="text-lg font-semibold text-foreground">Mission — Back Market</h3>
              <p>
                Segmentation de la base clients d&apos;une marketplace de produits reconditionnés
                pour optimiser les campagnes marketing.
              </p>
              <h4 className="font-semibold text-foreground">Méthodologie RFM</h4>
              <ul className="list-inside list-disc space-y-1">
                <li>Récence — jours depuis le dernier achat</li>
                <li>Fréquence — nombre total de commandes</li>
                <li>Monétaire — montant total dépensé</li>
              </ul>
              <h4 className="font-semibold text-foreground">Pipeline</h4>
              <ol className="list-inside list-decimal space-y-1">
                <li>Preprocessing et agrégation par client</li>
                <li>Feature Engineering — scores RFM</li>
                <li>StandardScaler sur les 3 features</li>
                <li>KMeans (k=4, optimisé par Elbow + Silhouette)</li>
              </ol>
              <h4 className="font-semibold text-foreground">Impact Business</h4>
              <ul className="list-inside list-disc space-y-1">
                <li>+25% taux d&apos;ouverture emails</li>
                <li>-15% coût acquisition</li>
                <li>+18% rétention VIP</li>
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
                Dataset : Olist Brazilian E-Commerce (simulation des données Back Market confidentielles).
              </p>
            </div>
          }
        />
      </div>
    </article>
  );
}
