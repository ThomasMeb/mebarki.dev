export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 80 },
      { name: "XGBoost / LightGBM", level: 80 },
      { name: "TensorFlow / Keras", level: 70 },
      { name: "PyTorch", level: 60 },
    ],
  },
  {
    name: "NLP & LLMs",
    skills: [
      { name: "Transformers / BERT", level: 70 },
      { name: "spaCy", level: 70 },
      { name: "Hugging Face", level: 60 },
      { name: "LangChain / RAG", level: 60 },
    ],
  },
  {
    name: "Data Engineering",
    skills: [
      { name: "Python", level: 90 },
      { name: "Pandas / NumPy", level: 90 },
      { name: "SQL", level: 80 },
      { name: "Streamlit", level: 80 },
    ],
  },
  {
    name: "Visualisation",
    skills: [
      { name: "Plotly", level: 80 },
      { name: "Matplotlib / Seaborn", level: 80 },
      { name: "Recharts / D3", level: 60 },
    ],
  },
  {
    name: "Développement",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "FastAPI", level: 70 },
      { name: "Next.js / React", level: 65 },
      { name: "Docker", level: 60 },
    ],
  },
  {
    name: "Cloud & MLOps",
    skills: [
      { name: "AWS / GCP", level: 60 },
      { name: "CI/CD", level: 60 },
      { name: "MLflow", level: 50 },
      { name: "Render / Vercel", level: 75 },
    ],
  },
];
