"use client";
import { useState, useMemo } from "react";
import { MetricCard } from "@/components/shared/metric-card";

const BUILDING_TYPES = [
  "Bureau (Petit/Moyen)",
  "Bureau (Grand)",
  "Hôtel",
  "Commerce",
  "Entrepôt",
  "École",
  "Université",
  "Hôpital",
  "Autre",
];

const FEATURE_IMPORTANCE = [
  { name: "Surface totale", value: 42 },
  { name: "Surface usage principal", value: 19 },
  { name: "Score ENERGY STAR", value: 12 },
  { name: "Âge du bâtiment", value: 8 },
  { name: "Nombre d'étages", value: 5 },
  { name: "% Surface bâtiment", value: 4 },
  { name: "% Surface parking", value: 3 },
  { name: "Type bâtiment", value: 4 },
  { name: "Nb bâtiments", value: 2 },
  { name: "District", value: 1 },
];

export function SchneiderDemo() {
  const [surface, setSurface] = useState(5000);
  const [floors, setFloors] = useState(5);
  const [age, setAge] = useState(30);
  const [energyStar, setEnergyStar] = useState(50);
  const [buildingType, setBuildingType] = useState("Bureau (Petit/Moyen)");

  const prediction = useMemo(() => {
    const sqft = surface * 10.764;
    const baseEnergy = sqft * 50;
    const energy = baseEnergy * (1 + age / 100) * (2 - energyStar / 100) * (1 + floors * 0.02);

    const typeMultiplier: Record<string, number> = {
      "Bureau (Petit/Moyen)": 1.0,
      "Bureau (Grand)": 1.2,
      "Hôtel": 1.5,
      "Commerce": 0.9,
      "Entrepôt": 0.6,
      "École": 0.8,
      "Université": 1.1,
      "Hôpital": 1.8,
      "Autre": 1.0,
    };

    const adjustedEnergy = energy * (typeMultiplier[buildingType] || 1.0);
    const co2 = adjustedEnergy * 0.0001;

    return { energy: adjustedEnergy, co2 };
  }, [surface, floors, age, energyStar, buildingType]);

  const energyMkbtu = prediction.energy / 1e6;
  const gaugePercent = Math.min(100, (energyMkbtu / 100) * 100);
  const gaugeColor =
    gaugePercent < 20 ? "#22c55e" : gaugePercent < 50 ? "#eab308" : "#ef4444";

  return (
    <div className="space-y-8">
      <p className="text-sm text-muted-foreground">
        Mode démo — estimation heuristique reproduisant le comportement du modèle Random Forest.
      </p>

      <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
        {/* Inputs */}
        <div className="space-y-4 rounded-xl border border-border bg-card p-6">
          <h3 className="font-semibold">Caractéristiques du Bâtiment</h3>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">
              Surface totale (m²) : <span className="text-teal">{surface.toLocaleString()}</span>
            </label>
            <input type="range" min={100} max={200000} step={100} value={surface}
              onChange={(e) => setSurface(Number(e.target.value))}
              className="w-full accent-[#00d4aa]" />
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">
              Nombre d&apos;étages : <span className="text-teal">{floors}</span>
            </label>
            <input type="range" min={1} max={50} value={floors}
              onChange={(e) => setFloors(Number(e.target.value))}
              className="w-full accent-[#00d4aa]" />
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">
              Âge (années) : <span className="text-teal">{age}</span>
            </label>
            <input type="range" min={0} max={100} value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              className="w-full accent-[#00d4aa]" />
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">
              Score ENERGY STAR : <span className="text-teal">{energyStar}</span>
            </label>
            <input type="range" min={1} max={100} value={energyStar}
              onChange={(e) => setEnergyStar(Number(e.target.value))}
              className="w-full accent-[#00d4aa]" />
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">Type de bâtiment</label>
            <select value={buildingType} onChange={(e) => setBuildingType(e.target.value)}
              className="w-full rounded-lg border border-border bg-secondary px-3 py-2 text-sm">
              {BUILDING_TYPES.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <MetricCard label="Consommation Énergétique" value={`${energyMkbtu.toFixed(2)} M kBtu/an`} />
            <MetricCard label="Émissions CO₂" value={`${prediction.co2.toFixed(1)} tonnes/an`}
              delta={`~${Math.round(prediction.co2 * 45)} arbres/an`} />
          </div>

          {/* Simple gauge */}
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="mb-2 text-sm text-muted-foreground">Consommation (M kBtu)</p>
            <div className="h-4 overflow-hidden rounded-full bg-secondary">
              <div className="h-full rounded-full transition-all duration-500"
                style={{ width: `${gaugePercent}%`, backgroundColor: gaugeColor }} />
            </div>
            <div className="mt-1 flex justify-between text-xs text-muted-foreground">
              <span>0</span><span>50</span><span>100</span>
            </div>
          </div>

          {/* Feature importance */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h4 className="mb-4 font-semibold">Importance des Features</h4>
            <div className="space-y-2">
              {FEATURE_IMPORTANCE.map((f) => (
                <div key={f.name} className="flex items-center gap-3">
                  <span className="w-40 shrink-0 text-xs text-muted-foreground">{f.name}</span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-gradient-to-r from-teal to-violet"
                      style={{ width: `${f.value}%` }} />
                  </div>
                  <span className="w-8 text-right text-xs text-teal">{f.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
