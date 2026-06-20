"use client";
import { useEffect, useState } from "react";
import { MetricCard } from "@/components/shared/metric-card";

interface VaultData {
  tokenPrice: string;
  totalValue: string;
  perf7d: number;
  perf30d: number;
}

const AMBER = "#f59e0b";

export function GradaLiveMetrics() {
  const [vault, setVault] = useState<VaultData | null>(null);
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    fetch("/api/dhedge")
      .then((r) => r.json())
      .then((d) => {
        if (d.tokenPrice) {
          setVault(d);
          setState("ok");
        } else {
          setState("error");
        }
      })
      .catch(() => setState("error"));
  }, []);

  const pct = (n: number) => `${n >= 0 ? "+" : ""}${n.toFixed(2)}%`;
  const cards = [
    { label: "Valeur de part", value: vault ? `$${Number(vault.tokenPrice).toFixed(4)}` : "—" },
    { label: "Encours (AUM)", value: vault ? `$${Number(vault.totalValue).toFixed(2)}` : "—" },
    { label: "7 jours", value: vault ? pct(vault.perf7d) : "—" },
    { label: "30 jours", value: vault ? pct(vault.perf30d) : "—" },
  ];

  return (
    <div>
      <div className="mb-3 flex items-center justify-center gap-2 font-mono text-xs text-muted-foreground">
        <span className="relative flex h-2 w-2">
          <span
            className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-60"
            style={{ background: AMBER }}
          />
          <span className="relative inline-flex h-2 w-2 rounded-full" style={{ background: AMBER }} />
        </span>
        {state === "loading"
          ? "connexion à la vault…"
          : state === "error"
            ? "données live indisponibles"
            : "performance live · vault dHEDGE · Polygon"}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {cards.map((c) => (
          <MetricCard key={c.label} label={c.label} value={c.value} color={AMBER} />
        ))}
      </div>
    </div>
  );
}
