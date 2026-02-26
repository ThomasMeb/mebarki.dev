export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  categories: string[];
  metrics: { label: string; value: string }[];
  tech: string[];
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
    ],
    tech: ["Python", "Streamlit", "SQLAlchemy", "Mistral AI", "Render", "Cloudflare"],
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
      { label: "Sources", value: "Multi-plateforme" },
      { label: "Scoring", value: "LLM" },
    ],
    tech: ["Python", "FastAPI", "Next.js", "SQLite", "LLM", "Docker"],
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
      { label: "vs baseline", value: "+45%" },
      { label: "Features", value: "40" },
    ],
    tech: ["Python", "Scikit-learn", "Random Forest", "Pandas", "Plotly"],
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
      { label: "Réduction modération", value: "-31%" },
      { label: "Adoption", value: "52%" },
    ],
    tech: ["Python", "BERT", "Transformers", "spaCy", "TF-IDF"],
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
      { label: "Segments", value: "4" },
      { label: "Méthode", value: "RFM + KMeans" },
      { label: "Clients analysés", value: "10K+" },
    ],
    tech: ["Python", "Scikit-learn", "KMeans", "Pandas", "Plotly"],
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
      { label: "Top-3 Accuracy", value: "90%" },
      { label: "Races", value: "120" },
      { label: "Modèle", value: "ResNet50V2" },
    ],
    tech: ["Python", "TensorFlow", "Keras", "ResNet50V2", "Transfer Learning"],
    githubUrl: "https://github.com/ThomasMeb/portfolio",
  },
];
