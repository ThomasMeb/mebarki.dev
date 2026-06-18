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
      "Plateforme de gestion analytique pour restaurateurs. Fiches techniques assistées par IA, propagation automatique des coûts, dashboard de rentabilité. Freemium 79€-119€/mois, pilote collectivité avec la Mairie de Gravelines.",
    categories: ["SaaS", "ML"],
    metrics: [
      { label: "Statut", value: "En lancement" },
      { label: "Offre lancement", value: "79€/mois" },
      { label: "Pilote B2G", value: "Gravelines" },
      { label: "Stack", value: "Next.js + FastAPI" },
    ],
    tech: ["Python", "FastAPI", "Next.js", "PostgreSQL", "Mistral LLM", "Stripe", "OVH"],
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
      "Bot de trading automatisé utilisant XGBoost pour prédire la direction du Bitcoin. Exécution on-chain via dHEDGE sur Polygon avec vault publiquement auditable. Actuellement en DRY_RUN post-audit ML.",
    categories: ["ML", "Time Series"],
    metrics: [
      { label: "Accuracy", value: "61%" },
      { label: "Sharpe Ratio", value: "3.37" },
      { label: "Statut", value: "DRY_RUN" },
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
      "Agent IA qui scrape 9 plateformes, score les offres via pipeline 3-tier (pgvector + LLM DeepSeek), et envoie digests email. Notion sync bidirectionnelle. 140+ tests, déployé sur VPS OVH.",
    categories: ["Automation", "ML"],
    metrics: [
      { label: "Sources", value: "9 scrapers" },
      { label: "Scoring", value: "pgvector + LLM" },
      { label: "Tests", value: "140+" },
      { label: "Infra", value: "OVH VPS" },
    ],
    tech: ["Python", "FastAPI", "Next.js", "Supabase", "pgvector", "DeepSeek", "Stripe"],
    theme: { from: "#3b82f6", to: "#8b5cf6", icon: "Search", pattern: "dots" },
    liveUrl: "https://jobscout.mebarki.dev",
    githubUrl: "https://github.com/ThomasMeb/JobScout",
  },
  {
    slug: "schneider",
    title: "Schneider Energy",
    subtitle: "Prédiction de consommation énergétique",
    description:
      "Modèle de prédiction de consommation énergétique de bâtiments pour Schneider Electric avec XGBoost. Features temporelles (sin/cos, lag), météo (HDD/CDD) et bâtiment. R² = 0.83, +45% vs baseline linéaire.",
    categories: ["ML"],
    metrics: [
      { label: "R²", value: "0.83" },
      { label: "vs Baseline", value: "+45%" },
      { label: "Bâtiments", value: "1,650" },
      { label: "Features", value: "40" },
    ],
    tech: ["Python", "XGBoost", "Scikit-learn", "SHAP", "Pandas", "Plotly"],
    theme: { from: "#22c55e", to: "#15803d", icon: "Zap", pattern: "circuit" },
    githubUrl: "https://github.com/ThomasMeb/portfolio",
  },
  {
    slug: "stackoverflow",
    title: "StackOverflow NLP",
    subtitle: "Suggestion de tags multi-label",
    description:
      "Système de suggestion automatique de tags pour Stack Overflow. Comparaison TF-IDF, Word2Vec, USE, BERT fine-tuné. Précision@5 = 78%, -31% corrections modérateurs.",
    categories: ["NLP"],
    metrics: [
      { label: "Precision@5", value: "78%" },
      { label: "Recall@5", value: "62%" },
      { label: "Corrections modérateurs", value: "-31%" },
      { label: "Latence p95", value: "145ms" },
    ],
    tech: ["Python", "BERT", "Transformers", "Hugging Face", "TF-IDF", "Word2Vec"],
    theme: { from: "#f97316", to: "#ef4444", icon: "Code", pattern: "diagonal" },
    githubUrl: "https://github.com/ThomasMeb/portfolio",
  },
  {
    slug: "backmarket",
    title: "BackMarket Segmentation",
    subtitle: "Segmentation clients RFM avec KMeans",
    description:
      "Segmentation automatisée sur 750k clients Back Market (périmètre France) par analyse RFM et clustering K-Means en 4 segments actionnables. +25% taux d'ouverture emails après personnalisation.",
    categories: ["ML"],
    metrics: [
      { label: "Clients", value: "~750k" },
      { label: "Segments", value: "4" },
      { label: "Silhouette", value: "0.49" },
      { label: "Taux ouverture", value: "+25%" },
    ],
    tech: ["Python", "Scikit-learn", "K-Means", "PCA", "Pandas", "Plotly"],
    theme: { from: "#a855f7", to: "#ec4899", icon: "Users", pattern: "hexagons" },
    githubUrl: "https://github.com/ThomasMeb/portfolio",
  },
  {
    slug: "santevet",
    title: "SantéVet Dogs",
    subtitle: "Classification de races canines",
    description:
      "Classificateur d'images 120 races pour SantéVet utilisant ResNet50V2 + SVM RBF avec calibration Platt scaling. Architecture CNN + classifieur pour probabilités fiables (pricing assurance).",
    categories: ["CV"],
    metrics: [
      { label: "Top-1 Accuracy", value: "78%" },
      { label: "Top-3 Accuracy", value: "90%" },
      { label: "Races", value: "120" },
      { label: "Latence", value: "<500ms" },
    ],
    tech: ["Python", "TensorFlow", "Keras", "ResNet50V2", "OpenCV", "Scikit-learn"],
    theme: { from: "#06b6d4", to: "#0ea5e9", icon: "ScanEye", pattern: "dots" },
    githubUrl: "https://github.com/ThomasMeb/portfolio",
  },
];
