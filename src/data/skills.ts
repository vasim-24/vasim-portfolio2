export interface TechSkill {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "AI & Systems";
  role: string;
  experienceLevel: string;
  featured: boolean;
}

export const skillsData: TechSkill[] = [
  // Frontend
  { name: "React", category: "Frontend", role: "Component Architecture & State", experienceLevel: "Core", featured: true },
  { name: "JavaScript", category: "Frontend", role: "Modern ES6+, DOM & Async", experienceLevel: "Proficient", featured: true },
  { name: "HTML5", category: "Frontend", role: "Semantic Structure & Accessibility", experienceLevel: "Core", featured: false },
  { name: "CSS3 / Tailwind", category: "Frontend", role: "Fluid Layouts & Design Systems", experienceLevel: "Proficient", featured: true },

  // Backend
  { name: "Python", category: "Backend", role: "AI Services & Algorithmic Logic", experienceLevel: "Core", featured: true },
  { name: "Node.js", category: "Backend", role: "Scalable Event-Driven Runtimes", experienceLevel: "Proficient", featured: true },
  { name: "Express", category: "Backend", role: "RESTful Service Orchestration", experienceLevel: "Proficient", featured: false },

  // Database
  { name: "MongoDB", category: "Database", role: "NoSQL Modeling & Aggregations", experienceLevel: "Proficient", featured: true },

  // Other & AI
  { name: "AI / LLM Integrations", category: "AI & Systems", role: "Prompt Architecture & Agentic Flow", experienceLevel: "Specialized", featured: true },
  { name: "RAG Systems", category: "AI & Systems", role: "Vector Search & Grounded Retrieval", experienceLevel: "Specialized", featured: true },
  { name: "REST APIs", category: "AI & Systems", role: "Contract Design & High-Speed Comms", experienceLevel: "Core", featured: false },
  { name: "Git", category: "AI & Systems", role: "Distributed Version Control", experienceLevel: "Proficient", featured: false },
  { name: "GitHub", category: "AI & Systems", role: "CI/CD & Open Source Collaboration", experienceLevel: "Proficient", featured: true },
];

export const skillCategories = ["All", "Frontend", "Backend", "AI & Systems", "Database"] as const;
