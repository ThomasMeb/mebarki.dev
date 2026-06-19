"use client";

// Generative, data-flavoured banner motifs keyed to a project's category.
// Each motif is a single SVG scene drawn in the project's theme color.

type MotifKey = "spark" | "nodes" | "tokens" | "boxes" | "bars" | "flow";

function pick(categories: string[]): { key: MotifKey; label: string } {
  if (categories.includes("Time Series")) return { key: "spark", label: "time series" };
  if (categories.includes("NLP")) return { key: "tokens", label: "nlp" };
  if (categories.includes("CV")) return { key: "boxes", label: "computer vision" };
  if (categories.includes("Automation")) return { key: "flow", label: "automation" };
  if (categories.includes("SaaS")) return { key: "bars", label: "saas" };
  return { key: "nodes", label: "machine learning" };
}

function Spark({ c }: { c: string }) {
  const top = "0,150 56,120 112,134 168,78 224,98 280,52 336,74 400,28";
  return (
    <g>
      <polygon points={`${top} 400,200 0,200`} fill={c} opacity={0.1} />
      <polyline points={top} fill="none" stroke={c} strokeWidth={2} opacity={0.65} />
      {[[168, 78], [280, 52], [400, 28]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r={3.5} fill={c} opacity={0.85} />
      ))}
    </g>
  );
}

function Nodes({ c }: { c: string }) {
  const pts: [number, number][] = [
    [60, 60], [140, 120], [210, 50], [285, 110], [340, 60], [120, 165], [320, 150],
  ];
  const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [3, 6], [2, 4]];
  return (
    <g>
      {edges.map(([a, b], i) => (
        <line key={i} x1={pts[a][0]} y1={pts[a][1]} x2={pts[b][0]} y2={pts[b][1]} stroke={c} strokeWidth={1} opacity={0.35} />
      ))}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 5 : 3.5} fill={c} opacity={0.75} />
      ))}
    </g>
  );
}

function Tokens({ c }: { c: string }) {
  const rows = [
    [40, 64, 36, 52],
    [48, 28, 70, 40],
    [32, 56, 44],
  ];
  return (
    <g>
      {rows.map((widths, r) => {
        let x = 28;
        const y = 50 + r * 42;
        return widths.map((w, i) => {
          const rect = (
            <rect key={`${r}-${i}`} x={x} y={y} width={w} height={20} rx={5} fill="none" stroke={c} strokeWidth={1.2} opacity={i % 2 ? 0.4 : 0.65} />
          );
          x += w + 14;
          return rect;
        });
      })}
    </g>
  );
}

function Boxes({ c }: { c: string }) {
  const dots = [];
  for (let x = 24; x < 400; x += 34) for (let y = 30; y < 190; y += 34) dots.push([x, y]);
  const corner = (x: number, y: number, w: number, h: number) => {
    const s = 12;
    return (
      <g stroke={c} strokeWidth={1.6} fill="none" opacity={0.7}>
        <path d={`M${x},${y + s} V${y} H${x + s}`} />
        <path d={`M${x + w - s},${y} H${x + w} V${y + s}`} />
        <path d={`M${x + w},${y + h - s} V${y + h} H${x + w - s}`} />
        <path d={`M${x + s},${y + h} H${x} V${y + h - s}`} />
      </g>
    );
  };
  return (
    <g>
      {dots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1} fill={c} opacity={0.18} />
      ))}
      {corner(70, 56, 120, 90)}
      {corner(232, 88, 96, 70)}
    </g>
  );
}

function Bars({ c }: { c: string }) {
  const hs = [50, 86, 64, 120, 96, 140, 110, 70];
  return (
    <g>
      {hs.map((h, i) => {
        const x = 36 + i * 44;
        return <rect key={i} x={x} y={190 - h} width={22} height={h} rx={3} fill={c} opacity={i % 2 ? 0.3 : 0.5} />;
      })}
    </g>
  );
}

function Flow({ c }: { c: string }) {
  const ys = 100;
  const xs = [60, 160, 260, 360];
  return (
    <g>
      {xs.slice(0, -1).map((x, i) => (
        <g key={i} stroke={c} strokeWidth={1.4} opacity={0.45}>
          <line x1={x + 18} y1={ys} x2={xs[i + 1] - 22} y2={ys} />
          <path d={`M${xs[i + 1] - 22},${ys} l-7,-5 v10 z`} fill={c} stroke="none" />
        </g>
      ))}
      {xs.map((x, i) => (
        <circle key={i} cx={x} cy={ys} r={16} fill="none" stroke={c} strokeWidth={1.8} opacity={0.7} />
      ))}
      {xs.map((x, i) => (
        <circle key={`d${i}`} cx={x} cy={ys} r={4} fill={c} opacity={0.6} />
      ))}
    </g>
  );
}

const motifMap: Record<MotifKey, (p: { c: string }) => React.ReactElement> = {
  spark: Spark,
  nodes: Nodes,
  tokens: Tokens,
  boxes: Boxes,
  bars: Bars,
  flow: Flow,
};

export function bannerMotifLabel(categories: string[]): string {
  return pick(categories).label;
}

export function BannerMotif({
  categories,
  color,
}: {
  categories: string[];
  color: string;
}) {
  const { key } = pick(categories);
  const Motif = motifMap[key];
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <Motif c={color} />
    </svg>
  );
}
