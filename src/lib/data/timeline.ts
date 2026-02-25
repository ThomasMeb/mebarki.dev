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
    subtitle: "SaaS pour restaurateurs",
    description:
      "SaaS analytique d'aide à la décision pour restaurateurs. Développement full-stack, intégration IA (Mistral), déploiement cloud EU. Pilote 10 restaurants.",
    type: "entrepreneurship",
  },
  {
    year: "2025",
    title: "Diplôme d'Artisan Cuisinier",
    subtitle: "À l'École des Chefs",
    description:
      "Formation chez un maître restaurateur. Immersion terrain au Café de Paris, Calais. Analyse des marges, stocks et pricing — menant à la création d'EGIR.",
    type: "education",
  },
  {
    year: "2023-2024",
    title: "Projets ML / Data Science",
    subtitle: "Schneider · BackMarket · StackOverflow · SantéVet",
    description:
      "5 projets end-to-end : prédiction énergétique, segmentation clients, NLP multi-label, classification d'images, trading automatisé.",
    type: "project",
  },
  {
    year: "2023",
    title: "ML Engineer — Détection de Fraude",
    subtitle: "Shift Technology (Licorne Insurtech)",
    description:
      "Feature engineering et modélisation de scoring de risque. Modèles supervisés et non supervisés pour détection d'anomalies transactionnelles.",
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
