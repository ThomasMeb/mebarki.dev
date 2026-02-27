export type PatternType = "grid" | "dots" | "waves" | "circuit" | "hexagons" | "diagonal";

export interface ProjectTheme {
  from: string;
  to: string;
  icon: string;
  pattern: PatternType;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  categories: string[];
  metrics: { label: string; value: string }[];
  tech: string[];
  theme: ProjectTheme;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  highlight?: boolean;
}

export const projects: Project[] = [
  {
    slug: "egir",
    title: "EGIR",
    subtitle: "SaaS pour restaurateurs avec IA",
    description:
      "Plateforme de gestion analytique pour restaurateurs. Calcul automatisé des coûts matières, fiches techniques assistées par IA, dashboard de rentabilité.",
    categories: ["SaaS", "ML"],
    metrics: [
      { label: "Marge moyenne", value: "+10%" },
      { label: "Temps économisé", value: "80%" },
      { label: "Pilote", value: "10 restaurants" },
      { label: "Statut", value: "MVP en prod" },
    ],
    tech: ["Python", "Streamlit", "SQLAlchemy", "Mistral AI", "Render", "Cloudflare"],
    theme: { from: "#14b8a6", to: "#10b981", icon: "ChefHat", pattern: "grid" },
    image: "/images/egir_logo.png",
    liveUrl: "https://egir.app",
    highlight: true,
  },
  {
    slug: "grada",
    title: "Grada Trading",
    subtitle: "Prédiction BTC + vault dHEDGE automatisé",
    description:
      "Bot de trading automatisé utilisant XGBoost pour prédire la direction du Bitcoin. Exécution on-chain via dHEDGE sur Polygon avec vault live.",
    categories: ["ML", "Time Series"],
    metrics: [
      { label: "Accuracy", value: "61%" },
      { label: "Sharpe Ratio", value: "3.37" },
      { label: "Statut", value: "Live Trading" },
    ],
    tech: ["Python", "XGBoost", "TypeScript", "dHEDGE", "Polygon", "GitHub Actions"],
    theme: { from: "#f59e0b", to: "#8b5cf6", icon: "TrendingUp", pattern: "waves" },
    liveUrl: "https://app.dhedge.org/vault/0x27462cd4f35d4b3d118eaa85acb61a2cb9ba4e08",
  },
  {
    slug: "jobscout",
    title: "JobScout",
    subtitle: "Agent autonome de recherche d'emploi",
    description:
      "Agent IA autonome qui scrape, analyse et score des offres d'emploi avec LLM. Dashboard interactif et export CSV.",
    categories: ["Automation", "ML"],
    metrics: [
      { label: "Jobs analysés", value: "1,989" },
      { label: "Sources", value: "9 scrapers" },
      { label: "Scoring", value: "LLM" },
      { label: "Tests", value: "140+" },
    ],
    tech: ["Python", "FastAPI", "Next.js", "Supabase", "LLM", "Docker"],
    theme: { from: "#3b82f6", to: "#8b5cf6", icon: "Search", pattern: "dots" },
    liveUrl: "https://jobscout.mebarki.dev",
    githubUrl: "https://github.com/ThomasMeb/JobScout",
  },
  {
    slug: "schneider",
    title: "Schneider Energy",
    subtitle: "Prédiction de consommation énergétique",
    description:
      "Modèle de prédiction de consommation et d'émissions CO₂ des bâtiments pour Schneider Electric avec Random Forest.",
    categories: ["ML"],
    metrics: [
      { label: "R²", value: "0.83" },
      { label: "vs Baseline", value: "+45.5%" },
      { label: "Bâtiments", value: "1,650" },
      { label: "Features", value: "40" },
    ],
    tech: ["Python", "Scikit-learn", "Random Forest", "Pandas", "Plotly"],
    theme: { from: "#22c55e", to: "#15803d", icon: "Zap", pattern: "circuit" },
    githubUrl: "https://github.com/ThomasMeb/portfolio",
  },
  {
    slug: "stackoverflow",
    title: "StackOverflow NLP",
    subtitle: "Suggestion de tags multi-label",
    description:
      "Système de suggestion automatique de tags pour Stack Overflow. Classification multi-label avec analyse NLP des titres et corps de questions.",
    categories: ["NLP"],
    metrics: [
      { label: "Precision@5", value: "78%" },
      { label: "Recall@5", value: "62%" },
      { label: "Corrections modérateurs", value: "-31%" },
      { label: "Adoption", value: "52%" },
    ],
    tech: ["Python", "BERT", "Transformers", "spaCy", "TF-IDF"],
    theme: { from: "#f97316", to: "#ef4444", icon: "Code", pattern: "diagonal" },
    githubUrl: "https://github.com/ThomasMeb/portfolio",
  },
  {
    slug: "backmarket",
    title: "BackMarket Segmentation",
    subtitle: "Segmentation clients RFM avec KMeans",
    description:
      "Segmentation automatisée de la base clients Back Market par analyse RFM et clustering KMeans en 4 segments actionnables.",
    categories: ["ML"],
    metrics: [
      { label: "Clients segmentés", value: "95,420" },
      { label: "Segments", value: "4" },
      { label: "Silhouette", value: "0.49" },
      { label: "Taux ouverture", value: "+25%" },
    ],
    tech: ["Python", "Scikit-learn", "KMeans", "Pandas", "Plotly"],
    theme: { from: "#a855f7", to: "#ec4899", icon: "Users", pattern: "hexagons" },
    githubUrl: "https://github.com/ThomasMeb/portfolio",
  },
  {
    slug: "santevet",
    title: "SantéVet Dogs",
    subtitle: "Classification de races canines",
    description:
      "Classificateur d'images de races de chiens pour SantéVet utilisant ResNet50V2 avec transfer learning sur 120 races.",
    categories: ["CV"],
    metrics: [
      { label: "Top-1 Accuracy", value: "87%" },
      { label: "Top-3 Accuracy", value: "96%" },
      { label: "Races", value: "120" },
      { label: "Inférence", value: "<1 sec" },
    ],
    tech: ["Python", "TensorFlow", "Keras", "ResNet50V2", "Transfer Learning"],
    theme: { from: "#06b6d4", to: "#0ea5e9", icon: "ScanEye", pattern: "dots" },
    githubUrl: "https://github.com/ThomasMeb/portfolio",
  },
];
