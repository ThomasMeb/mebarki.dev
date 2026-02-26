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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ChefHat,
  TrendingUp,
  Search,
  Zap,
  Users,
  Code,
  ScanEye,
};

const floatPositions = [
  { top: "15%", left: "10%", delay: "0s", size: "h-5 w-5 sm:h-6 sm:w-6" },
  { top: "25%", right: "15%", delay: "1.5s", size: "h-4 w-4 sm:h-5 sm:w-5" },
  { bottom: "30%", left: "20%", delay: "3s", size: "h-4 w-4 sm:h-5 sm:w-5" },
  { bottom: "20%", right: "10%", delay: "0.8s", size: "h-5 w-5 sm:h-6 sm:w-6" },
];

export function ProjectBanner({
  slug,
  theme,
  variant = "hero",
}: {
  slug: string;
  theme: ProjectTheme;
  variant?: "hero" | "card";
}) {
  const Icon = iconMap[theme.icon];
  const isCard = variant === "card";

  return (
    <div
      className={`relative w-full overflow-hidden ${
        isCard ? "h-[100px] sm:h-[120px]" : "h-[200px] sm:h-[280px]"
      }`}
    >
      {/* Gradient layer */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${theme.from}15, ${theme.to}15)`,
        }}
      />

      {/* Pattern layer */}
      <BannerPattern type={theme.pattern} slug={`${slug}-${variant}`} color={theme.from} />

      {/* Floating icons */}
      {!isCard &&
        floatPositions.map((pos, i) => (
          <div
            key={i}
            className="banner-float absolute opacity-20"
            style={{
              top: pos.top,
              left: pos.left,
              right: pos.right,
              bottom: pos.bottom,
              animationDelay: pos.delay,
              color: theme.from,
            }}
          >
            {Icon && <Icon className={pos.size} />}
          </div>
        ))}

      {/* Card: small floating icons (2 only) */}
      {isCard && (
        <>
          <div
            className="banner-float absolute opacity-15"
            style={{ top: "20%", right: "12%", animationDelay: "0s", color: theme.from }}
          >
            {Icon && <Icon className="h-4 w-4" />}
          </div>
          <div
            className="banner-float absolute opacity-15"
            style={{ bottom: "25%", left: "10%", animationDelay: "2s", color: theme.from }}
          >
            {Icon && <Icon className="h-3 w-3" />}
          </div>
        </>
      )}

      {/* Central icon with glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-full p-3 sm:p-4"
          style={{
            background: `radial-gradient(circle, ${theme.from}20, transparent 70%)`,
          }}
        >
          {Icon && (
            <span style={{ color: theme.from }}>
              <Icon
                className={`${isCard ? "h-8 w-8" : "h-12 w-12 sm:h-16 sm:w-16"} opacity-30`}
              />
            </span>
          )}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0"
        style={{
          height: isCard ? "50%" : "40%",
          background: "linear-gradient(to top, var(--background), transparent)",
        }}
      />
      {/* Card: top fade for border blending */}
      {isCard && (
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: `linear-gradient(to right, transparent, ${theme.from}30, transparent)` }}
        />
      )}
    </div>
  );
}
