import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { ProjectDetailLayout } from "@/components/shared/project-detail-layout";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { BackMarketDemo } from "@/components/demos/backmarket-demo";

export const metadata: Metadata = {
  title: "BackMarket — Segmentation Client RFM",
  description:
    "Segmentation automatisée de la base clients Back Market par analyse RFM et clustering KMeans.",
};

const project = projects.find((p) => p.slug === "backmarket")!;

const tech = ["Python", "Scikit-learn", "KMeans", "PCA", "Pandas", "Plotly", "Streamlit"];

export default function BackMarketPage() {
  return (
    <ProjectDetailLayout
      project={project}
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
  );
}
