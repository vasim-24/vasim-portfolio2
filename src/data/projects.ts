export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  highlights: string[];
  technologies: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    id: "smart-trip-travia",
    number: "01",
    title: "Smart Trip / Travia",
    subtitle: "AI-Assisted Trip Planning & Budget Discovery Engine",
    category: "AI & Full-Stack Platform",
    year: "2024",
    description: "An intelligent travel orchestration platform engineered for effortless group trips and personalized exploration. Features AI-assisted itinerary generation, budget-aware destination discovery, real-time group collaboration, and multi-modal travel routing.",
    highlights: [
      "AI-assisted contextual itinerary synthesis",
      "Dynamic budget allocation & expense forecasting",
      "Real-time multi-user collaborative travel canvas",
      "Full-stack architecture with REST API integrations"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "OpenAI API", "REST APIs"],
    image: "/images/projects/travia.jpg",
    githubUrl: "https://github.com/vasim-24",
    liveUrl: "#",
    featured: true
  },
  {
    id: "edupath",
    number: "02",
    title: "EduPath",
    subtitle: "AI-Powered Adaptive Learning & Personalized Career Pathway Engine",
    category: "EdTech & Intelligent Systems",
    year: "2024",
    description: "A next-generation AI-powered learning management platform that dynamically tailors technical curricula to student comprehension. Features neural learning pathways, competency radar tracking, interactive roadmaps, and 24/7 intelligent contextual tutoring.",
    highlights: [
      "Autonomous curriculum breakdown & mastery roadmaps",
      "Interactive neural knowledge graph & skill radar visualization",
      "Dynamic adaptive learning recommendations",
      "Contextual learning assistant agent with instant comprehension checks"
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express", "Python", "Vector DB", "Tailwind CSS"],
    image: "/images/projects/edupath.jpg",
    githubUrl: "https://github.com/vasim-24",
    liveUrl: "#",
    featured: true
  },
  {
    id: "hostel-management",
    number: "03",
    title: "Hostel Management",
    subtitle: "Full-Stack Smart Campus Residence & Room Allocation System",
    category: "Full-Stack Platform & Management",
    year: "2024",
    description: "A comprehensive digital management platform for campus residences and student hostels. Streamlines interactive room allocations, digital check-in/check-out, real-time occupancy analytics, automated maintenance workflows, and administrative fee tracking.",
    highlights: [
      "Interactive room allocation grid & live occupancy analytics",
      "Digital student directory with check-in & gate pass logs",
      "Automated maintenance ticketing & resolution lifecycle",
      "Role-based administrative dashboards for wardens and students"
    ],
    technologies: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Tailwind CSS"],
    image: "/images/projects/hostel-management.jpg",
    githubUrl: "https://github.com/vasim-24",
    liveUrl: "#",
    featured: true
  },
  {
    id: "learning-path-generator",
    number: "04",
    title: "Personalized Learning Path Generator",
    subtitle: "Dynamic Skill-Tree & Competency Recommendation Engine",
    category: "AI Algorithms & EdTech",
    year: "2024",
    description: "An algorithmic platform that assesses a learner's baseline skills, career aspirations, and available study hours to map out an optimal, branching competency tree with curated high-yield milestones.",
    highlights: [
      "Dynamic non-linear skill progression trees",
      "Automated prerequisite analysis & difficulty scaling",
      "Curated resource orchestration with progress tracking",
      "Interactive node-based mastery roadmap interface"
    ],
    technologies: ["React", "TypeScript", "Python", "Tailwind CSS", "REST APIs", "Git"],
    image: "/images/projects/learning-path.jpg",
    githubUrl: "https://github.com/vasim-24",
    liveUrl: "#",
    featured: false
  }
];
