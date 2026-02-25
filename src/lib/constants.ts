export const SITE = {
  name: "Thomas Mebarki",
  title: "Thomas Mebarki — ML Engineer & Entrepreneur",
  description:
    "Portfolio de Thomas Mebarki — ML Engineer & Entrepreneur. Projets en Machine Learning, NLP, Computer Vision et SaaS.",
  url: "https://mebarki.dev",
  ogImage: "/images/og-image.png",
  locale: "fr_FR",
} as const;

export const SOCIAL = {
  github: "https://github.com/ThomasMeb",
  linkedin: "https://linkedin.com/in/thomasmebarki",
  twitter: "https://x.com/_elmeb_",
  email: "thomas.mebarki@protonmail.com",
  egir: "https://egir.app",
} as const;

export const COLORS = {
  teal: "#00d4aa",
  violet: "#667eea",
  background: "#0a0a0b",
  cardBg: "#111113",
} as const;

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Projets", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/contact" },
] as const;

export const CATEGORY_COLORS: Record<string, string> = {
  ML: "bg-teal/20 text-teal border-teal/30",
  NLP: "bg-red-500/20 text-red-400 border-red-500/30",
  CV: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
  SaaS: "bg-yellow-400/20 text-yellow-300 border-yellow-400/30",
  "Time Series": "bg-violet/20 text-violet border-violet/30",
  Automation: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};
