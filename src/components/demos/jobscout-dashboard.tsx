"use client";
import { useState } from "react";
import { MetricCard } from "@/components/shared/metric-card";

const MOCK_JOBS = [
  { title: "ML Engineer", company: "Dataiku", score: 92, location: "Paris", source: "LinkedIn" },
  { title: "Data Scientist Senior", company: "Criteo", score: 88, location: "Paris", source: "Indeed" },
  { title: "ML Engineer — NLP", company: "Mistral AI", score: 85, location: "Paris", source: "LinkedIn" },
  { title: "Data Engineer", company: "Doctolib", score: 78, location: "Paris", source: "WelcomeToTheJungle" },
  { title: "AI Engineer", company: "Hugging Face", score: 95, location: "Remote", source: "LinkedIn" },
  { title: "ML Ops Engineer", company: "OVHcloud", score: 72, location: "Roubaix", source: "Indeed" },
  { title: "Data Scientist", company: "BNP Paribas", score: 68, location: "Paris", source: "LinkedIn" },
  { title: "Applied ML Engineer", company: "Alan", score: 90, location: "Paris", source: "WelcomeToTheJungle" },
];

export function JobScoutDashboard() {
  const [minScore, setMinScore] = useState(70);

  const filtered = MOCK_JOBS.filter((j) => j.score >= minScore);
  const avgScore = Math.round(filtered.reduce((a, b) => a + b.score, 0) / (filtered.length || 1));

  return (
    <div className="space-y-8">
      <p className="text-sm text-muted-foreground">
        Aperçu du dashboard JobScout avec données de démonstration.
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        <MetricCard label="Total offres" value={String(MOCK_JOBS.length)} />
        <MetricCard label="Score moyen" value={`${avgScore}%`} />
        <MetricCard label="Au-dessus seuil" value={String(filtered.length)} />
        <MetricCard label="Sources" value="3" />
      </div>

      {/* Score filter */}
      <div>
        <label className="mb-2 block text-sm text-muted-foreground">
          Score minimum : <span className="font-bold text-teal">{minScore}%</span>
        </label>
        <input
          type="range"
          aria-label="Score minimum"
          min={0}
          max={100}
          value={minScore}
          onChange={(e) => setMinScore(Number(e.target.value))}
          className="w-full accent-primary"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-secondary">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Poste</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Entreprise</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Lieu</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Source</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Score</th>
            </tr>
          </thead>
          <tbody>
            {filtered
              .sort((a, b) => b.score - a.score)
              .map((job, i) => (
                <tr
                  key={i}
                  className="border-b border-border transition-colors hover:bg-secondary/50"
                >
                  <td className="px-4 py-3 font-medium">{job.title}</td>
                  <td className="px-4 py-3 text-muted-foreground">{job.company}</td>
                  <td className="px-4 py-3 text-muted-foreground">{job.location}</td>
                  <td className="px-4 py-3 text-muted-foreground">{job.source}</td>
                  <td className="px-4 py-3 text-right">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-xs font-bold ${
                        job.score >= 90
                          ? "bg-green-500/20 text-green-400"
                          : job.score >= 80
                            ? "bg-teal/20 text-teal"
                            : job.score >= 70
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {job.score}%
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
