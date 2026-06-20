"use client";
import { useEffect, useState } from "react";
import { MetricCard } from "@/components/shared/metric-card";

interface VaultData {
  tokenPrice: string;
  totalValue: string;
  sortino: number | null;
  perfYear: number | null;
}

const AMBER = "#f59e0b";
const UP = "#34d399";
const DOWN = "#f87171";
const signColor = (n: number | null | undefined) =>
  n == null ? AMBER : n >= 0 ? UP : DOWN;
const pct = (n: number | null | undefined) =>
  n == null ? "—" : `${n >= 0 ? "+" : ""}${n.toFixed(1)}%`;

export function GradaLiveMetrics() {
  const [v, setV] = useState<VaultData | null>(null);
  const [state, setState] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    fetch("/api/dhedge")
      .then((r) => r.json())
      .then((d) => {
        if (d.tokenPrice) {
          setV(d);
          setState("ok");
        } else {
          setState("error");
        }
      })
      .catch(() => setState("error"));
  }, []);

  const cards = [
    { label: "Perf. 1 an", value: pct(v?.perfYear), color: signColor(v?.perfYear) },
    {
      label: "Ratio de Sortino",
      value: v?.sortino != null ? v.sortino.toFixed(2) : "—",
      color: signColor(v?.sortino),
    },
    { label: "Encours (AUM)", value: v ? `$${v.totalValue}` : "—", color: AMBER },
    { label: "Valeur de part", value: v ? `$${Number(v.tokenPrice).toFixed(4)}` : "—", color: AMBER },
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
            : "données live · vault dHEDGE · Polygon"}
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {cards.map((c) => (
          <MetricCard key={c.label} label={c.label} value={c.value} color={c.color} />
        ))}
      </div>
    </div>
  );
}
