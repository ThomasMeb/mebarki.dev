"use client";
import { useEffect, useState } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

const VAULT_URL =
  "https://app.dhedge.org/vault/0x27462cd4f35d4b3d118eaa85acb61a2cb9ba4e08";

const UP = "#34d399";
const DOWN = "#f87171";

interface Btc {
  d7: number;
  d30: number;
  d90: number;
  d180: number;
  d365: number;
}
interface Data {
  perf7d: number | null;
  perf30d: number | null;
  perfQuarter: number | null;
  perfHalfyear: number | null;
  perfYear: number | null;
  btc: Btc | null;
}

const fmt = (n: number | null | undefined) =>
  n == null ? "—" : `${n >= 0 ? "+" : ""}${n.toFixed(1)}%`;
const col = (n: number | null | undefined) =>
  n == null ? undefined : n >= 0 ? UP : DOWN;

export function GradaDashboard() {
  const [d, setD] = useState<Data | null>(null);

  useEffect(() => {
    fetch("/api/dhedge")
      .then((r) => r.json())
      .then((x) => {
        if (x.perfYear !== undefined) setD(x);
      })
      .catch(() => {});
  }, []);

  const rows = [
    { label: "7 jours", g: d?.perf7d, b: d?.btc?.d7 },
    { label: "30 jours", g: d?.perf30d, b: d?.btc?.d30 },
    { label: "3 mois", g: d?.perfQuarter, b: d?.btc?.d90 },
    { label: "6 mois", g: d?.perfHalfyear, b: d?.btc?.d180 },
    { label: "1 an", g: d?.perfYear, b: d?.btc?.d365 },
  ];

  return (
    <div className="space-y-8">
      {/* Grada vs Bitcoin — live comparison */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-1 font-semibold">Grada vs Bitcoin (buy &amp; hold)</h3>
        <p className="mb-5 font-mono text-xs text-muted-foreground">
          en direct · gain réalisé en évitant la baisse du marché
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left font-mono text-xs uppercase tracking-wider text-muted-foreground">
                <th className="py-2 pr-4 font-normal">Période</th>
                <th className="py-2 pr-4 text-right font-normal">Grada</th>
                <th className="py-2 pr-4 text-right font-normal">Bitcoin</th>
                <th className="py-2 text-right font-normal">Écart</th>
              </tr>
            </thead>
            <tbody className="font-mono">
              {rows.map((r) => {
                const ecart =
                  r.g != null && r.b != null ? r.g - r.b : null;
                return (
                  <tr key={r.label} className="border-b border-border/60">
                    <td className="py-2.5 pr-4 font-sans text-muted-foreground">{r.label}</td>
                    <td className="py-2.5 pr-4 text-right" style={{ color: col(r.g) }}>{fmt(r.g)}</td>
                    <td className="py-2.5 pr-4 text-right" style={{ color: col(r.b) }}>{fmt(r.b)}</td>
                    <td
                      className="py-2.5 text-right font-semibold"
                      style={{ color: col(ecart) }}
                    >
                      {ecart == null ? "—" : `${ecart >= 0 ? "+" : ""}${ecart.toFixed(1)} pts`}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Grada (live, on-chain) vs Bitcoin (CoinGecko). Un écart positif = la
          stratégie a fait mieux que détenir du BTC sur la période.
        </p>
      </div>

      {/* How it works — plain language for non-developers */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-3 font-semibold">Comment ça marche, en clair</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Un programme décide automatiquement, sans intervention humaine, comment
          se positionner sur le Bitcoin — et notamment quand <strong className="text-foreground">se
          mettre à l&apos;abri</strong> en marché baissier. Les ordres sont exécutés
          directement sur la blockchain via une vault dHEDGE : ni intermédiaire, ni
          chiffre invérifiable. C&apos;est une phase d&apos;expérimentation en
          conditions réelles, et toutes les performances ci-dessus sont tirées en
          direct de la blockchain.
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
