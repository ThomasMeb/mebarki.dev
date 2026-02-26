import type { Metadata } from "next";
import { projects } from "@/lib/data/projects";
import { ProjectDetailLayout } from "@/components/shared/project-detail-layout";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { StackOverflowDemo } from "@/components/demos/stackoverflow-demo";

export const metadata: Metadata = {
  title: "StackOverflow NLP — Suggestion de Tags",
  description:
    "Système de suggestion automatique de tags pour Stack Overflow avec classification NLP multi-label.",
};

const project = projects.find((p) => p.slug === "stackoverflow")!;

const tech = ["Python", "BERT", "Transformers", "TF-IDF", "Word2Vec", "FastAPI", "Scikit-learn", "Streamlit"];

export default function StackOverflowPage() {
  return (
    <ProjectDetailLayout
      project={project}
      demo={<StackOverflowDemo />}
      context={
        <div className="space-y-6 text-muted-foreground">
          <h3 className="text-lg font-semibold text-foreground">Mission — IntelliTag (Stack Overflow)</h3>
          <p>
            Développer un système de suggestion automatique de tags pour améliorer la
            catégorisation des questions sur Stack Overflow.
          </p>
          <h4 className="font-semibold text-foreground">Approche Multi-Modèle</h4>
          <ol className="list-inside list-decimal space-y-1">
            <li>TF-IDF (Bag-of-Words) — baseline rapide</li>
            <li>Word2Vec — embeddings de mots (300 dim)</li>
            <li>BERT — embeddings contextuels (768 dim)</li>
            <li>USE — Universal Sentence Encoder (512 dim)</li>
          </ol>
          <p>Classifieur : OneVsRest avec Logistic Regression</p>
          <h4 className="font-semibold text-foreground">Pipeline NLP</h4>
          <p>
            Question → Preprocessing (HTML, tokenization, lemmatization)
            → Feature Extraction → Multi-Label Classification → Tags + scores
          </p>
        </div>
      }
      resources={
        <div className="space-y-6">
          <SectionHeading title="Stack" highlight="Technique" />
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => <TechBadge key={t} name={t} />)}
          </div>
          <p className="text-sm text-muted-foreground">
            84 tests, 85% coverage. API FastAPI + demo Streamlit.
          </p>
        </div>
      }
    />
  );
}
