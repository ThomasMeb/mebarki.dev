"use client";
import { useState, useMemo } from "react";
import { MetricCard } from "@/components/shared/metric-card";

const SEGMENT_CONFIG: Record<
  number,
  { name: string; color: string; description: string; action: string }
> = {
  0: {
    name: "Clients Dormants",
    color: "#ef4444",
    description: "Clients inactifs depuis longtemps",
    action: "Campagne de réactivation",
  },
  1: {
    name: "Clients Récents",
    color: "#22c55e",
    description: "Nouveaux clients ou achats récents",
    action: "Programme de fidélisation",
  },
  2: {
    name: "Clients VIP",
    color: "#eab308",
    description: "Clients à très haute valeur",
    action: "Service premium exclusif",
  },
  3: {
    name: "Clients Fidèles",
    color: "#3b82f6",
    description: "Clients réguliers et engagés",
    action: "Programme de rewards",
  },
};

const DISTRIBUTION = [
  { segment: 0, pct: 35, recency: 280, frequency: 1.2, monetary: 85 },
  { segment: 1, pct: 28, recency: 45, frequency: 1.8, monetary: 120 },
  { segment: 2, pct: 12, recency: 30, frequency: 8.5, monetary: 950 },
  { segment: 3, pct: 25, recency: 60, frequency: 4.2, monetary: 320 },
];

export function BackMarketDemo() {
  const [recency, setRecency] = useState(90);
  const [frequency, setFrequency] = useState(2);
  const [monetary, setMonetary] = useState(150);

  const segment = useMemo(() => {
    if (monetary > 500) return 2;
    if (recency > 300) return 0;
    if (frequency > 3) return 3;
    return 1;
  }, [recency, frequency, monetary]);

  const config = SEGMENT_CONFIG[segment];

  return (
    <div className="space-y-8">
      <p className="text-sm text-muted-foreground">
        Mode démo — heuristique RFM reproduisant la segmentation KMeans (k=4).
      </p>

      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        {/* Inputs */}
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <h3 className="font-semibold">Profil Client</h3>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">
              Récence (jours) : <span className="text-teal">{recency}</span>
            </label>
            <input type="number" min={1} max={600} value={recency}
              onChange={(e) => setRecency(Number(e.target.value))}
              className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm" />
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">
              Fréquence (commandes) : <span className="text-teal">{frequency}</span>
            </label>
            <input type="number" min={1} max={20} value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm" />
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">
              Montant total (BRL) : <span className="text-teal">{monetary}</span>
            </label>
            <input type="number" min={10} max={5000} step={10} value={monetary}
              onChange={(e) => setMonetary(Number(e.target.value))}
              className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm" />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {/* Segment result */}
          <div
            className="rounded-xl border-l-4 p-6"
            style={{
              borderColor: config.color,
              background: `linear-gradient(135deg, ${config.color}15, ${config.color}05)`,
            }}
          >
            <h3 className="text-xl font-bold" style={{ color: config.color }}>
              {config.name}
            </h3>
            <p className="mt-1 text-muted-foreground">{config.description}</p>
            <p className="mt-2 text-sm text-muted-foreground">
              <strong>Action recommandée :</strong> {config.action}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <MetricCard label="Récence" value={`${recency}j`} />
            <MetricCard label="Fréquence" value={`${frequency} cmd`} />
            <MetricCard label="Montant" value={`${monetary} BRL`} />
          </div>

          {/* Distribution */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h4 className="mb-4 font-semibold">Répartition des Segments</h4>
            <div className="space-y-3">
              {DISTRIBUTION.map((d) => {
                const c = SEGMENT_CONFIG[d.segment];
                return (
                  <div key={d.segment}>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span style={{ color: d.segment === segment ? c.color : undefined }}>
                        {c.name}
                      </span>
                      <span className="text-muted-foreground">{d.pct}%</span>
                    </div>
                    <div className="h-3 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${d.pct}%`, backgroundColor: c.color,
                          opacity: d.segment === segment ? 1 : 0.4 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Segment profiles */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h4 className="mb-4 font-semibold">Profils Moyens par Segment</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-3 py-2 text-left text-muted-foreground">Segment</th>
                    <th className="px-3 py-2 text-right text-muted-foreground">Récence</th>
                    <th className="px-3 py-2 text-right text-muted-foreground">Fréquence</th>
                    <th className="px-3 py-2 text-right text-muted-foreground">Montant</th>
                  </tr>
                </thead>
                <tbody>
                  {DISTRIBUTION.map((d) => {
                    const c = SEGMENT_CONFIG[d.segment];
                    return (
                      <tr key={d.segment}
                        className={`border-b border-border ${d.segment === segment ? "bg-secondary" : ""}`}>
                        <td className="px-3 py-2 font-medium" style={{ color: c.color }}>{c.name}</td>
                        <td className="px-3 py-2 text-right text-muted-foreground">{d.recency}j</td>
                        <td className="px-3 py-2 text-right text-muted-foreground">{d.frequency}</td>
                        <td className="px-3 py-2 text-right text-muted-foreground">{d.monetary} BRL</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
