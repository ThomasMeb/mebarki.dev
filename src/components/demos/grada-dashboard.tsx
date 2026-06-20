"use client";
import { useEffect, useState } from "react";
import { MetricCard } from "@/components/shared/metric-card";

interface VaultData {
  tokenPrice: string;
  totalValue: string;
  perf7d: number;
  perf30d: number;
}

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
      {/* Experimentation banner */}
      <div className="rounded-lg border border-teal/30 bg-teal/[0.06] p-4 font-mono text-sm">
        <span className="text-teal">$ status</span>
        <span className="text-muted-foreground"> → </span>
        phase d&apos;expérimentation, exécution réelle on-chain. La vault est
        publiquement auditable : chaque position est vérifiable sur la blockchain.
      </div>

      {/* Live vault — the real, real-time data */}
      <div>
        <div className="mb-5 flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
          </span>
          <h3 className="text-lg font-semibold">Performance en direct</h3>
          <span className="font-mono text-xs text-muted-foreground">
            vault dHEDGE · Polygon
          </span>
        </div>

        {loading ? (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-teal border-t-transparent" />
            Chargement des données on-chain…
          </div>
        ) : vault ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <MetricCard label="Valeur de part" value={`$${Number(vault.tokenPrice).toFixed(4)}`} />
            <MetricCard label="Encours (AUM)" value={`$${Number(vault.totalValue).toFixed(2)}`} />
            <MetricCard label="7 jours" value={`${vault.perf7d >= 0 ? "+" : ""}${vault.perf7d.toFixed(2)}%`} />
            <MetricCard label="30 jours" value={`${vault.perf30d >= 0 ? "+" : ""}${vault.perf30d.toFixed(2)}%`} />
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Données live momentanément indisponibles. La vault reste consultable sur{" "}
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
          Données on-chain via l&apos;API dHEDGE — rafraîchies automatiquement toutes les 10 min.
        </p>
      </div>

      {/* How it works — plain language for non-developers */}
      <div className="rounded-xl border border-border bg-card p-6">
        <h3 className="mb-3 font-semibold">Comment ça marche, en clair</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Un programme décide automatiquement, sans intervention humaine, comment
          se positionner sur le Bitcoin. Les ordres sont exécutés directement sur
          la blockchain via une vault dHEDGE : il n&apos;y a ni intermédiaire, ni
          chiffre invérifiable — n&apos;importe qui peut auditer la performance et
          les positions en temps réel.
        </p>
      </div>
    </div>
  );
}
