import type { Metadata } from "next";
import { TechBadge } from "@/components/shared/tech-badge";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProjectTabs } from "@/components/shared/project-tabs";
import { StackOverflowDemo } from "@/components/demos/stackoverflow-demo";
import { MetricCard } from "@/components/shared/metric-card";

export const metadata: Metadata = {
  title: "StackOverflow NLP — Suggestion de Tags",
  description:
    "Système de suggestion automatique de tags pour Stack Overflow avec classification NLP multi-label.",
};

const tech = ["Python", "BERT", "Transformers", "TF-IDF", "Word2Vec", "FastAPI", "Scikit-learn", "Streamlit"];

export default function StackOverflowPage() {
  return (
    <article className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-teal">StackOverflow</span> — NLP Tag Suggestion
          </h1>
          <p className="mt-3 text-lg text-muted-foreground">
            Classification multi-label avec analyse NLP des questions
          </p>
        </div>

        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <MetricCard label="Precision@5" value="78%" />
          <MetricCard label="Recall@5" value="62%" />
          <MetricCard label="Corrections modérateurs" value="-31%" />
          <MetricCard label="Adoption" value="52%" />
        </div>

        <ProjectTabs
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
      </div>
    </article>
  );
}
