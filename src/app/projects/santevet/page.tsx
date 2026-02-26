import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { ProjectDetailLayout } from "@/components/shared/project-detail-layout";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { SanteVetDemo } from "@/components/demos/santevet-demo";

export const metadata: Metadata = {
  title: "SantéVet — Classification de Races Canines",
  description:
    "Classificateur d'images de races de chiens avec ResNet50V2 et transfer learning sur 120 races.",
};

const project = projects.find((p) => p.slug === "santevet")!;

const tech = ["Python", "TensorFlow", "Keras", "ResNet50V2", "SVM", "OpenCV", "Transfer Learning", "Streamlit"];

export default function SanteVetPage() {
  return (
    <ProjectDetailLayout
      project={project}
      demo={<SanteVetDemo />}
      context={
        <div className="space-y-6 text-muted-foreground">
          <h3 className="text-lg font-semibold text-foreground">Mission — SantéVet (LPA)</h3>
          <p>
            Automatiser l&apos;identification des races de chiens lors de l&apos;accueil
            des animaux dans les refuges de la Ligue Protectrice des Animaux.
          </p>
          <h4 className="font-semibold text-foreground">Architecture Hybride</h4>
          <ol className="list-inside list-decimal space-y-1">
            <li>Feature Extraction : ResNet50V2 pré-entraîné (ImageNet)</li>
            <li>Fine-tuning des dernières couches</li>
            <li>Classificateur SVM (kernel RBF) sur features 2048-dim</li>
          </ol>
          <h4 className="font-semibold text-foreground">Data Augmentation</h4>
          <ul className="list-inside list-disc space-y-1">
            <li>Rotation ±30°, flip horizontal, zoom 0.8-1.2x</li>
            <li>Brightness/Contrast, MixUp &amp; CutMix</li>
          </ul>
          <h4 className="font-semibold text-foreground">Impact</h4>
          <ul className="list-inside list-disc space-y-1">
            <li>-95% temps d&apos;identification</li>
            <li>+40% précision vs identification humaine</li>
            <li>+25% adoptions réussies</li>
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
            Dataset : Stanford Dogs — 20,580 images, 120 races.
          </p>
        </div>
      }
    />
  );
}
