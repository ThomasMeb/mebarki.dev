export const KEYWORD_TAG_MAP: Record<string, string[]> = {
  // Python ecosystem
  python: ["python"],
  pandas: ["python", "pandas", "dataframe"],
  numpy: ["python", "numpy"],
  django: ["python", "django", "web"],
  flask: ["python", "flask", "web"],
  fastapi: ["python", "fastapi", "api"],
  tensorflow: ["python", "tensorflow", "machine-learning"],
  keras: ["python", "keras", "deep-learning"],
  pytorch: ["python", "pytorch", "deep-learning"],
  scikit: ["python", "scikit-learn", "machine-learning"],
  sklearn: ["python", "scikit-learn", "machine-learning"],
  matplotlib: ["python", "matplotlib", "visualization"],
  seaborn: ["python", "seaborn", "visualization"],
  plotly: ["python", "plotly", "visualization"],
  jupyter: ["python", "jupyter-notebook"],
  pip: ["python", "pip"],
  venv: ["python", "virtualenv"],
  pytest: ["python", "pytest", "testing"],

  // JavaScript ecosystem
  javascript: ["javascript"],
  typescript: ["typescript", "javascript"],
  react: ["javascript", "reactjs", "frontend"],
  reactjs: ["javascript", "reactjs", "frontend"],
  vue: ["javascript", "vue.js", "frontend"],
  angular: ["javascript", "angular", "frontend"],
  nodejs: ["javascript", "node.js", "backend"],
  node: ["javascript", "node.js", "backend"],
  express: ["javascript", "node.js", "express"],
  npm: ["javascript", "npm"],
  webpack: ["javascript", "webpack"],
  async: ["javascript", "async-await"],
  await: ["javascript", "async-await"],
  promise: ["javascript", "promises"],

  // Data & ML
  "machine learning": ["machine-learning"],
  "deep learning": ["deep-learning"],
  "neural network": ["neural-network", "deep-learning"],
  nlp: ["nlp", "machine-learning"],
  bert: ["nlp", "transformers", "deep-learning"],
  transformer: ["nlp", "transformers", "deep-learning"],
  classification: ["classification", "machine-learning"],
  regression: ["regression", "machine-learning"],
  clustering: ["clustering", "machine-learning"],

  // Databases
  sql: ["sql", "database"],
  mysql: ["mysql", "sql", "database"],
  postgresql: ["postgresql", "sql", "database"],
  mongodb: ["mongodb", "database", "nosql"],
  redis: ["redis", "database", "caching"],

  // DevOps
  docker: ["docker", "containers"],
  kubernetes: ["kubernetes", "docker", "devops"],
  k8s: ["kubernetes", "docker", "devops"],
  aws: ["aws", "cloud"],
  azure: ["azure", "cloud"],
  gcp: ["google-cloud", "cloud"],
  "ci/cd": ["ci-cd", "devops"],
  "github actions": ["github-actions", "ci-cd"],

  // Web
  html: ["html", "web"],
  css: ["css", "web"],
  flexbox: ["css", "flexbox"],
  api: ["api", "rest"],
  rest: ["api", "rest"],
  graphql: ["graphql", "api"],
  json: ["json"],

  // Git
  git: ["git", "version-control"],
  merge: ["git", "merge-conflict"],
  branch: ["git", "branching"],

  // Java
  java: ["java"],
  spring: ["java", "spring-boot"],
  maven: ["java", "maven"],
};

export const SAMPLE_QUESTIONS = [
  {
    title: "How to parse JSON in Python?",
    body: "I have a JSON string and I want to convert it to a Python dictionary. I tried using the json module but I'm getting errors.",
    expectedTags: ["python", "json", "parsing"],
  },
  {
    title: "React useState not updating immediately",
    body: "I'm using useState in my React component but when I call setState, the value doesn't update immediately.",
    expectedTags: ["javascript", "reactjs", "react-hooks"],
  },
  {
    title: "TensorFlow model not converging during training",
    body: "My neural network model isn't converging during training. The loss stays constant after a few epochs.",
    expectedTags: ["python", "tensorflow", "machine-learning"],
  },
  {
    title: "Docker container cannot connect to localhost",
    body: "I have a Docker container running my Node.js app, but it cannot connect to a service running on localhost:5432.",
    expectedTags: ["docker", "node.js", "postgresql"],
  },
];

export function predictTagsKeyword(
  text: string,
  topK: number = 5,
  threshold: number = 0.3
): { tag: string; score: number }[] {
  const lower = text.toLowerCase();
  const tagScores: Record<string, number> = {};

  for (const [keyword, tags] of Object.entries(KEYWORD_TAG_MAP)) {
    if (lower.includes(keyword)) {
      for (const tag of tags) {
        tagScores[tag] = (tagScores[tag] || 0) + 1;
      }
    }
  }

  const entries = Object.entries(tagScores);
  if (entries.length === 0) {
    return [
      { tag: "programming", score: 0.5 },
      { tag: "question", score: 0.4 },
    ];
  }

  const maxScore = Math.max(...entries.map(([, v]) => v));
  return entries
    .map(([tag, score]) => ({
      tag,
      score: Math.min(0.95, (score / maxScore) * 0.8 + 0.15),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .filter((t) => t.score >= threshold);
}
