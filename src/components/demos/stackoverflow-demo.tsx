"use client";
import { useState, useMemo } from "react";
import { predictTagsKeyword, SAMPLE_QUESTIONS } from "@/lib/data/keyword-tag-map";

export function StackOverflowDemo() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topK, setTopK] = useState(5);
  const [threshold, setThreshold] = useState(0.3);
  const [selectedExample, setSelectedExample] = useState(-1);

  const predictions = useMemo(() => {
    const text = `${title} ${body}`;
    if (!text.trim()) return [];
    return predictTagsKeyword(text, topK, threshold);
  }, [title, body, topK, threshold]);

  function loadExample(idx: number) {
    setSelectedExample(idx);
    if (idx >= 0) {
      setTitle(SAMPLE_QUESTIONS[idx].title);
      setBody(SAMPLE_QUESTIONS[idx].body);
    }
  }

  return (
    <div className="space-y-8">
      <p className="text-sm text-muted-foreground">
        Mode démo — système de mots-clés reproduisant le comportement du classificateur NLP multi-label.
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Inputs */}
        <div className="space-y-4">
          <h3 className="font-semibold">Votre Question</h3>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">Exemple</label>
            <select
              aria-label="Exemple de question"
              value={selectedExample}
              onChange={(e) => loadExample(Number(e.target.value))}
              className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm"
            >
              <option value={-1}>(Écrire ma propre question)</option>
              {SAMPLE_QUESTIONS.map((q, i) => (
                <option key={i} value={i}>{q.title}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">Titre</label>
            <input
              type="text"
              aria-label="Titre de la question"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: How to parse JSON in Python?"
              className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">Corps</label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={5}
              placeholder="Décrivez votre problème..."
              className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm"
            />
          </div>

          {selectedExample >= 0 && (
            <p className="text-xs text-muted-foreground">
              Tags attendus : {SAMPLE_QUESTIONS[selectedExample].expectedTags.join(", ")}
            </p>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">
                Nombre de tags : <span className="text-teal">{topK}</span>
              </label>
              <input type="range" aria-label="Nombre de tags" min={3} max={10} value={topK}
                onChange={(e) => setTopK(Number(e.target.value))}
                className="w-full accent-primary" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-muted-foreground">
                Seuil : <span className="text-teal">{threshold.toFixed(2)}</span>
              </label>
              <input type="range" aria-label="Seuil de confiance" min={0} max={100} value={threshold * 100}
                onChange={(e) => setThreshold(Number(e.target.value) / 100)}
                className="w-full accent-primary" />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h3 className="font-semibold">Tags Suggérés</h3>

          {predictions.length > 0 ? (
            <>
              <div className="flex flex-wrap gap-2">
                {predictions.map((p) => {
                  const color =
                    p.score >= 0.7 ? "#22c55e" : p.score >= 0.4 ? "#eab308" : "#ef4444";
                  return (
                    <span
                      key={p.tag}
                      className="rounded-full px-3 py-1 text-sm font-medium text-white"
                      style={{ backgroundColor: color }}
                    >
                      {p.tag} ({Math.round(p.score * 100)}%)
                    </span>
                  );
                })}
              </div>

              {/* Confidence bars */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="mb-4 text-sm font-semibold">Confiance des Prédictions</h4>
                <div className="space-y-3">
                  {predictions.map((p) => {
                    const pct = p.score * 100;
                    const color =
                      pct >= 70 ? "#22c55e" : pct >= 40 ? "#eab308" : "#ef4444";
                    return (
                      <div key={p.tag}>
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span>{p.tag}</span>
                          <span style={{ color }}>{pct.toFixed(0)}%</span>
                        </div>
                        <div className="h-3 overflow-hidden rounded-full bg-secondary">
                          <div className="h-full rounded-full transition-all"
                            style={{ width: `${pct}%`, backgroundColor: color }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Entrez une question pour voir les suggestions de tags.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
