import type { PatternType } from "./data/projects";

interface PatternProps {
  slug: string;
  color: string;
}

function GridPattern({ slug, color }: PatternProps) {
  return (
    <pattern id={`pattern-${slug}`} width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M40 0H0v40" fill="none" stroke={color} strokeWidth="0.5" />
    </pattern>
  );
}

function DotsPattern({ slug, color }: PatternProps) {
  return (
    <pattern id={`pattern-${slug}`} width="20" height="20" patternUnits="userSpaceOnUse">
      <circle cx="10" cy="10" r="1.5" fill={color} />
    </pattern>
  );
}

function WavesPattern({ slug, color }: PatternProps) {
  return (
    <pattern id={`pattern-${slug}`} width="60" height="30" patternUnits="userSpaceOnUse">
      <path d="M0 15c15-10 30-10 60 0" fill="none" stroke={color} strokeWidth="0.8" />
    </pattern>
  );
}

function CircuitPattern({ slug, color }: PatternProps) {
  return (
    <pattern id={`pattern-${slug}`} width="50" height="50" patternUnits="userSpaceOnUse">
      <path d="M25 0v15h15v20H25v15M0 25h15M35 25h15" fill="none" stroke={color} strokeWidth="0.6" />
      <circle cx="25" cy="15" r="2" fill={color} />
      <circle cx="25" cy="35" r="2" fill={color} />
    </pattern>
  );
}

function HexagonsPattern({ slug, color }: PatternProps) {
  return (
    <pattern id={`pattern-${slug}`} width="56" height="48" patternUnits="userSpaceOnUse">
      <path
        d="M28 0L56 16v32L28 48 0 32V16z"
        fill="none"
        stroke={color}
        strokeWidth="0.5"
      />
    </pattern>
  );
}

function DiagonalPattern({ slug, color }: PatternProps) {
  return (
    <pattern id={`pattern-${slug}`} width="16" height="16" patternUnits="userSpaceOnUse">
      <path d="M0 16L16 0M-4 4l8-8M12 20l8-8" stroke={color} strokeWidth="0.5" fill="none" />
    </pattern>
  );
}

const patternMap: Record<PatternType, (props: PatternProps) => React.ReactElement> = {
  grid: GridPattern,
  dots: DotsPattern,
  waves: WavesPattern,
  circuit: CircuitPattern,
  hexagons: HexagonsPattern,
  diagonal: DiagonalPattern,
};

export function BannerPattern({
  type,
  slug,
  color,
}: {
  type: PatternType;
  slug: string;
  color: string;
}) {
  const PatternComponent = patternMap[type];
  return (
    <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <PatternComponent slug={slug} color={color} />
      </defs>
      <rect width="100%" height="100%" fill={`url(#pattern-${slug})`} opacity="0.07" />
    </svg>
  );
}
