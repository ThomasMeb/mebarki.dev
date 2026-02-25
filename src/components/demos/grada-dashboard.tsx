"use client";
import { useEffect, useState } from "react";
import { MetricCard } from "@/components/shared/metric-card";

interface VaultData {
  tokenPrice: string;
  totalValue: string;
  perf7d: number;
  perf30d: number;
}

// Static backtest data (embedded for SSG)
const BACKTEST = {
  full: {
    accuracy: 0.611,
    sharpe: 3.37,
    earning: 8.3,
    sortino: 4.89,
    maxDrawdown: 0.267,
    nTrades: 1847,
    start: "2017-10-01",
    end: "2026-02-15",
  },
  oos: {
    accuracy: 0.605,
    sharpe: 2.81,
    earning: 2.1,
    sortino: 3.92,
    maxDrawdown: 0.189,
    nTrades: 412,
    start: "2024-09-01",
    end: "2026-02-15",
  },
};

export function GradaDashboard() {
  const [vault, setVault] = useState<VaultData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dhedge")
      .then((r) => r.json())
      .then((data) => {
        if (data.tokenPrice) setVault(data);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="space-y-10">
      {/* Backtest Performance */}
      <div>
        <h3 className="mb-6 text-lg font-semibold">
          Performance : Période Complète vs Out-of-Sample
        </h3>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Full period */}
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="mb-4 text-sm font-medium text-muted-foreground">
              Période complète ({BACKTEST.full.start} → {BACKTEST.full.end})
            </p>
            <div className="grid grid-cols-3 gap-3">
              <MetricCard label="Accuracy" value={`${(BACKTEST.full.accuracy * 100).toFixed(1)}%`} />
              <MetricCard label="Sharpe" value={String(BACKTEST.full.sharpe)} />
              <MetricCard label="Earning" value={`${BACKTEST.full.earning}x`} />
              <MetricCard label="Sortino" value={String(BACKTEST.full.sortino)} />
              <MetricCard label="Max Drawdown" value={`${(BACKTEST.full.maxDrawdown * 100).toFixed(1)}%`} />
              <MetricCard label="Trades" value={BACKTEST.full.nTrades.toLocaleString()} />
            </div>
          </div>

          {/* OOS */}
          <div className="rounded-xl border border-violet/30 bg-card p-6">
            <p className="mb-4 text-sm font-medium text-violet">
              Out-of-Sample ({BACKTEST.oos.start} → {BACKTEST.oos.end})
            </p>
            <div className="grid grid-cols-3 gap-3">
              <MetricCard label="Accuracy" value={`${(BACKTEST.oos.accuracy * 100).toFixed(1)}%`} />
              <MetricCard label="Sharpe" value={String(BACKTEST.oos.sharpe)} />
              <MetricCard label="Earning" value={`${BACKTEST.oos.earning}x`} />
              <MetricCard label="Sortino" value={String(BACKTEST.oos.sortino)} />
              <MetricCard label="Max Drawdown" value={`${(BACKTEST.oos.maxDrawdown * 100).toFixed(1)}%`} />
              <MetricCard label="Trades" value={BACKTEST.oos.nTrades.toLocaleString()} />
            </div>
          </div>
        </div>
      </div>

      {/* Live Vault */}
      <div>
        <h3 className="mb-6 text-lg font-semibold">Vault dHEDGE — Live</h3>

        {loading ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-teal border-t-transparent" />
            Chargement des données live...
          </div>
        ) : vault ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <MetricCard label="Token Price" value={`$${Number(vault.tokenPrice).toFixed(4)}`} />
            <MetricCard label="AUM" value={`$${Number(vault.totalValue).toFixed(2)}`} />
            <MetricCard label="7j" value={`${vault.perf7d >= 0 ? "+" : ""}${vault.perf7d.toFixed(2)}%`} />
            <MetricCard label="30j" value={`${vault.perf30d >= 0 ? "+" : ""}${vault.perf30d.toFixed(2)}%`} />
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Données live non disponibles. Le vault est actif sur{" "}
            <a
              href="https://app.dhedge.org/vault/0x27462cd4f35d4b3d118eaa85acb61a2cb9ba4e08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal hover:underline"
            >
              dHEDGE
            </a>
            .
          </p>
        )}

        <p className="mt-4 text-xs text-muted-foreground">
          Données via dHEDGE GraphQL API — rafraîchies toutes les 10 min (ISR)
        </p>
      </div>

      {/* Methodology */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-4 font-semibold">Méthodologie</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          Walk-Forward Validation sur fenêtre glissante de 1500 jours : chaque jour, le modèle
          est ré-entraîné et prédit la direction du BTC pour le lendemain.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {[
                ["Modèle", "XGBoost Classifier (max_depth=5, 200 estimators)"],
                ["Features", "22 = 14 techniques + 8 macro-économiques"],
                ["Cible", "Direction du prix BTC à J+1"],
                ["Sizing", "EarningStrategy (threshold 5%, deadzone 5%)"],
                ["Frais", "0.1% par portion rééquilibrée"],
              ].map(([k, v]) => (
                <tr key={k} className="border-b border-border">
                  <td className="px-3 py-2 font-medium text-teal">{k}</td>
                  <td className="px-3 py-2 text-muted-foreground">{v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
