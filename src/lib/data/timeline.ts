export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: "education" | "work" | "project" | "entrepreneurship";
}

export const timeline: TimelineItem[] = [
  {
    year: "2025+",
    title: "Fondateur — EGIR",
    subtitle: "SaaS analytique pour restaurateurs",
    description:
      "SaaS en phase de lancement commercial avec la Mairie de Gravelines (pilote B2G). Stack Next.js + FastAPI + PostgreSQL, Mistral LLM, Stripe. Déployé sur VPS OVH. Freemium 79-119€/mois.",
    type: "entrepreneurship",
  },
  {
    year: "2024-2025",
    title: "Diplôme d'Artisan Cuisinier",
    subtitle: "À l'École des Chefs — Café de Paris, Calais",
    description:
      "8 mois d'immersion en cuisine professionnelle chez un Maître Restaurateur. Analyse des marges, stocks et pricing — observations transformées en features EGIR.",
    type: "education",
  },
  {
    year: "2023-2024",
    title: "Missions ML / Data Science",
    subtitle: "Schneider · BackMarket · StackOverflow · SantéVet",
    description:
      "4 missions end-to-end : prédiction énergétique (R²=0.83), segmentation clients 750k, NLP multi-label (BERT, Precision@5=78%), classification d'images 120 races (ResNet50V2 + SVM RBF).",
    type: "project",
  },
  {
    year: "2023",
    title: "ML Engineer — Shift Technology",
    subtitle: "Licorne Insurtech (Paris)",
    description:
      "Stage puis mission freelance. Scoring supervisé (XGBoost) puis anomaly detection non supervisée (Isolation Forest, autoencoders) + features de graphe social. PySpark/Databricks.",
    type: "work",
  },
  {
    year: "2023",
    title: "Master Data Science — spé Machine Learning",
    subtitle: "CentraleSupélec",
    description:
      "Machine Learning, Deep Learning, NLP, Computer Vision, Data Engineering, MLOps.",
    type: "education",
  },
  {
    year: "2021",
    title: "Licence de Mathématiques — Mention Bien",
    subtitle: "Université du Littoral Côte d'Opale (ULCO)",
    description:
      "Fondations mathématiques : algèbre linéaire, probabilités, statistiques, analyse.",
    type: "education",
  },
];
