"use client";

import {
  ChefHat,
  TrendingUp,
  Search,
  Zap,
  Users,
  Code,
  ScanEye,
} from "lucide-react";
import type { ProjectTheme } from "@/lib/data/projects";
import { BannerPattern } from "@/lib/banner-patterns";
import { BannerMotif, bannerMotifLabel } from "@/lib/banner-motifs";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ChefHat,
  TrendingUp,
  Search,
  Zap,
  Users,
  Code,
  ScanEye,
};

export function ProjectBanner({
  slug,
  theme,
  variant = "hero",
  categories = [],
}: {
  slug: string;
  theme: ProjectTheme;
  variant?: "hero" | "card";
  categories?: string[];
}) {
  const Icon = iconMap[theme.icon];
  const isCard = variant === "card";
  const label = bannerMotifLabel(categories);

  return (
    <div
      className={`relative w-full overflow-hidden ${
        isCard ? "h-[110px] sm:h-[130px]" : "h-[220px] sm:h-[300px]"
      }`}
    >
      {/* Gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 120% at 0% 0%, ${theme.from}22, transparent 55%), radial-gradient(120% 130% at 100% 100%, ${theme.to}1c, transparent 55%)`,
        }}
      />

      {/* Faint texture */}
      <BannerPattern type={theme.pattern} slug={`${slug}-${variant}`} color={theme.from} />

      {/* Generative, category-driven motif */}
      <BannerMotif categories={categories} color={theme.from} />

      {/* Editorial icon plate + label (hero only) */}
      {!isCard && (
        <>
          <div
            className="absolute left-5 top-5 flex h-10 w-10 items-center justify-center rounded-md border"
            style={{
              borderColor: `${theme.from}40`,
              background: `${theme.from}12`,
              color: theme.from,
            }}
          >
            {Icon && <Icon className="h-5 w-5" />}
          </div>
          <span
            className="absolute bottom-5 left-5 font-mono text-[0.7rem] uppercase tracking-[0.22em]"
            style={{ color: theme.from, opacity: 0.85 }}
          >
            {label}
          </span>
        </>
      )}

      {/* Bottom fade for text blending */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: isCard ? "45%" : "40%",
          background: "linear-gradient(to top, var(--background), transparent)",
        }}
      />

      {/* Card: top hairline */}
      {isCard && (
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{
            background: `linear-gradient(to right, transparent, ${theme.from}40, transparent)`,
          }}
        />
      )}
    </div>
  );
}
