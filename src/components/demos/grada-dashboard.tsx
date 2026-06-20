"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const VAULT_URL =
  "https://app.dhedge.org/vault/0x27462cd4f35d4b3d118eaa85acb61a2cb9ba4e08";

const UP = "#34d399";
const DOWN = "#f87171";

interface Perf {
  perf7d: number | null;
  perf30d: number | null;
  perfQuarter: number | null;
  perfHalfyear: number | null;
  perfYear: number | null;
}

const fmt = (n: number | null | undefined) =>
  n == null ? "—" : `${n >= 0 ? "+" : ""}${n.toFixed(1)}%`;

export function GradaDashboard() {
  const [perf, setPerf] = useState<Perf | null>(null);

  useEffect(() => {
    fetch("/api/dhedge")
      .then((r) => r.json())
      .then((d) => {
        if (d.tokenPrice) setPerf(d);
      })
      .catch(() => {});
  }, []);

  const periods = [
    { label: "7 jours", v: perf?.perf7d },
    { label: "30 jours", v: perf?.perf30d },
    { label: "3 mois", v: perf?.perfQuarter },
    { label: "6 mois", v: perf?.perfHalfyear },
    { label: "1 an", v: perf?.perfYear },
  ];

  return (
    <div className="space-y-8">
      {/* Performance by period — live */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-1 font-semibold">Performance par période</h3>
        <p className="mb-5 font-mono text-xs text-muted-foreground">
          tirée en direct de la blockchain — rien n&apos;est maquillé
        </p>
        <div className="grid grid-cols-3 gap-x-4 gap-y-5 sm:grid-cols-5">
          {periods.map((p) => (
            <div key={p.label}>
              <p
                className="font-mono text-xl font-bold"
                style={{ color: p.v == null ? undefined : p.v >= 0 ? UP : DOWN }}
              >
                {fmt(p.v)}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">{p.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it works — plain language for non-developers */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-3 font-semibold">Comment ça marche, en clair</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Un programme décide automatiquement, sans intervention humaine, comment
          se positionner sur le Bitcoin. Les ordres sont exécutés directement sur
          la blockchain via une vault dHEDGE : il n&apos;y a ni intermédiaire, ni
          chiffre invérifiable. C&apos;est une{" "}
          <strong className="text-foreground">phase d&apos;expérimentation</strong>{" "}
          en conditions réelles — toutes les performances affichées sont tirées en
          direct de la blockchain, gains comme pertes.
        </p>
      </div>

      {/* Verify it yourself */}
      <div className="flex flex-col items-start gap-4 rounded-xl border border-teal/30 bg-teal/[0.05] p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
          <div>
            <h3 className="font-semibold">Vérifiez par vous-même</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Chaque position et chaque transaction sont publiques et auditables
              on-chain. Aucune donnée ne peut être maquillée.
            </p>
          </div>
        </div>
        <a
          href={VAULT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Auditer la vault
          <ArrowUpRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
