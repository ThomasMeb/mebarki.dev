export interface SkillCategory {
  name: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Machine Learning",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "XGBoost / LightGBM", level: 85 },
      { name: "TensorFlow / Keras", level: 70 },
      { name: "PyTorch", level: 60 },
    ],
  },
  {
    name: "LLM & Agents IA",
    skills: [
      { name: "Mistral / OpenAI API", level: 80 },
      { name: "LangChain / LangGraph", level: 60 },
      { name: "RAG & Embeddings", level: 70 },
      { name: "BERT / Transformers", level: 70 },
    ],
  },
  {
    name: "Data Engineering",
    skills: [
      { name: "Python", level: 95 },
      { name: "Pandas / NumPy", level: 90 },
      { name: "SQL / PostgreSQL", level: 85 },
      { name: "PySpark / Databricks", level: 65 },
    ],
  },
  {
    name: "Développement Full-Stack",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Next.js / React", level: 75 },
      { name: "Streamlit", level: 85 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    name: "Visualisation",
    skills: [
      { name: "Plotly", level: 85 },
      { name: "Matplotlib / Seaborn", level: 85 },
      { name: "Recharts / D3", level: 60 },
    ],
  },
  {
    name: "Infra & MLOps",
    skills: [
      { name: "OVH VPS / Caddy", level: 80 },
      { name: "GitHub Actions", level: 80 },
      { name: "Vercel / Cloudflare", level: 80 },
      { name: "SHAP / MLflow", level: 65 },
    ],
  },
];
