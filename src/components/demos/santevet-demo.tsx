"use client";
import { useState, useCallback } from "react";

const BREED_CATEGORIES: Record<string, string[]> = {
  small: ["Chihuahua", "Yorkshire Terrier", "Pomeranian", "Maltese", "Pug", "Papillon", "Bichon Frise"],
  medium: ["Beagle", "French Bulldog", "Cocker Spaniel", "Corgi", "Boston Terrier", "Basset Hound"],
  large: ["Golden Retriever", "German Shepherd", "Labrador Retriever", "Siberian Husky", "Boxer", "Rottweiler"],
  giant: ["Great Dane", "Mastiff", "Saint Bernard", "Newfoundland", "Irish Wolfhound", "Bernese Mountain Dog"],
};

const ALL_BREEDS = Object.values(BREED_CATEGORIES).flat();

const POPULAR_BREEDS = [
  "Golden Retriever",
  "German Shepherd",
  "Poodle",
  "Beagle",
  "Siberian Husky",
  "French Bulldog",
];

function hashString(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

function generatePredictions(seed: string, topK: number) {
  const h = hashString(seed);
  const rand = seededRandom(h);

  const categories = Object.keys(BREED_CATEGORIES);
  const catIdx = Math.floor(rand() * categories.length);
  const primaryBreeds = BREED_CATEGORIES[categories[catIdx]];

  const selected: string[] = [];
  const used = new Set<number>();
  while (selected.length < Math.min(topK, primaryBreeds.length)) {
    const idx = Math.floor(rand() * primaryBreeds.length);
    if (!used.has(idx)) {
      used.add(idx);
      selected.push(primaryBreeds[idx]);
    }
  }

  while (selected.length < topK) {
    const other = ALL_BREEDS.filter((b) => !selected.includes(b));
    selected.push(other[Math.floor(rand() * other.length)]);
  }

  const probs: number[] = [];
  let remaining = 0.95;
  for (let i = 0; i < topK; i++) {
    if (i === topK - 1) {
      probs.push(remaining);
    } else {
      const p = remaining * (0.4 + rand() * 0.3);
      probs.push(p);
      remaining -= p;
    }
  }
  probs.sort((a, b) => b - a);

  return selected.map((breed, i) => ({ breed, prob: probs[i] }));
}

function generateBreedPredictions(breedName: string, topK: number) {
  const h = hashString(breedName);
  const rand = seededRandom(h);

  const others = ALL_BREEDS.filter((b) => b !== breedName);
  const similar: string[] = [];
  const used = new Set<number>();
  while (similar.length < topK - 1) {
    const idx = Math.floor(rand() * others.length);
    if (!used.has(idx)) {
      used.add(idx);
      similar.push(others[idx]);
    }
  }

  const mainProb = 0.75 + rand() * 0.2;
  let remaining = 1 - mainProb;
  const results = [{ breed: breedName, prob: mainProb }];

  for (let i = 0; i < similar.length; i++) {
    const p = i < similar.length - 1 ? remaining * (0.3 + rand() * 0.3) : remaining;
    results.push({ breed: similar[i], prob: p });
    remaining -= p;
  }

  return results;
}

export function SanteVetDemo() {
  const [predictions, setPredictions] = useState<{ breed: string; prob: number }[]>([]);
  const [label, setLabel] = useState("");
  const [topK, setTopK] = useState(3);

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (!file) return;
      setLabel(file.name);
      setPredictions(generatePredictions(file.name + file.size, topK));
    },
    [topK]
  );

  const handleBreedClick = useCallback(
    (breed: string) => {
      setLabel(breed);
      setPredictions(generateBreedPredictions(breed, topK));
    },
    [topK]
  );

  const colors = ["#22c55e", "#84cc16", "#eab308", "#f97316", "#ef4444"];

  return (
    <div className="space-y-8">
      <p className="text-sm text-muted-foreground">
        Mode démo — prédictions simulées (hash déterministe). Le modèle complet utilise ResNet50V2 + SVM.
      </p>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Input */}
        <div className="space-y-4">
          <h3 className="font-semibold">Télécharger une Photo</h3>

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border p-8 transition-colors hover:border-teal/30">
            <span className="text-3xl">📸</span>
            <span className="mt-2 text-sm text-muted-foreground">Cliquez pour choisir une image</span>
            <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
          </label>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-muted-foreground">Ou tester avec une race :</h4>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {POPULAR_BREEDS.map((breed) => (
                <button
                  key={breed}
                  onClick={() => handleBreedClick(breed)}
                  className={`rounded-lg border px-3 py-2 text-sm transition-colors ${
                    label === breed
                      ? "border-teal bg-teal/10 text-teal"
                      : "border-border bg-secondary text-muted-foreground hover:border-teal/30"
                  }`}
                >
                  {breed}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-sm text-muted-foreground">
              Nombre de prédictions : <span className="text-teal">{topK}</span>
            </label>
            <input type="range" min={1} max={5} value={topK}
              onChange={(e) => setTopK(Number(e.target.value))}
              className="w-full accent-[#00d4aa]" />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <h3 className="font-semibold">Résultats de Classification</h3>

          {predictions.length > 0 ? (
            <>
              <span className="inline-block rounded-full bg-yellow-500 px-3 py-0.5 text-xs font-bold text-white">
                MODE DÉMO
              </span>

              <p className="text-sm text-muted-foreground">
                Simulation pour : <strong className="text-foreground">{label}</strong>
              </p>

              <div className="space-y-4">
                {predictions.map((p, i) => {
                  const color = colors[Math.min(i, colors.length - 1)];
                  const pct = p.prob * 100;
                  return (
                    <div key={i}>
                      <div className="mb-1 flex items-center justify-between">
                        <span className="font-medium">{p.breed}</span>
                        <span className="font-bold" style={{ color }}>
                          {pct.toFixed(1)}%
                        </span>
                      </div>
                      <div className="h-5 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full transition-all duration-500"
                          style={{
                            width: `${pct}%`,
                            background: `linear-gradient(90deg, ${color}, ${color}88)`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Donut-like distribution */}
              <div className="rounded-xl border border-border bg-card p-6">
                <h4 className="mb-3 text-sm font-semibold">Distribution</h4>
                <div className="flex h-4 overflow-hidden rounded-full">
                  {predictions.map((p, i) => (
                    <div
                      key={i}
                      style={{
                        width: `${p.prob * 100}%`,
                        backgroundColor: colors[Math.min(i, colors.length - 1)],
                      }}
                    />
                  ))}
                  <div
                    className="bg-gray-600"
                    style={{
                      width: `${Math.max(0, (1 - predictions.reduce((a, b) => a + b.prob, 0)) * 100)}%`,
                    }}
                  />
                </div>
                <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                  {predictions.map((p, i) => (
                    <span key={i} className="flex items-center gap-1">
                      <span
                        className="inline-block h-2 w-2 rounded-full"
                        style={{ backgroundColor: colors[Math.min(i, colors.length - 1)] }}
                      />
                      {p.breed}
                    </span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <p className="text-sm text-muted-foreground">
              Téléchargez une image ou sélectionnez une race pour voir les prédictions.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
