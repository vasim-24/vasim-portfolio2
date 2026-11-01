export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "Internship" | "Hackathons" | "Academic";
  description: string;
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-n8-solutions",
    role: "Full Stack Web Development Intern",
    organization: "N8 IT Solutions",
    location: "Coimbatore, India",
    period: "1 Month Internship",
    type: "Internship",
    description: "Hands-on web engineering role focused on building responsive user interfaces, structured semantic layouts, and client-side interactions using core web technologies.",
    skills: ["HTML", "CSS", "JavaScript", "Frontend Development", "Responsive Layouts"]
  },
  {
    id: "exp-hackathons",
    role: "Hackathon Competitor & Lead Developer",
    organization: "National & State Hackathons",
    location: "India",
    period: "Ongoing Journey",
    type: "Hackathons",
    description: "Built and shipped 3 winning projects under rigorous sprint timelines, taking conceptual ideas to fully functioning full-stack AI prototypes with seamless user interfaces.",
    skills: ["Full Stack Architecture", "AI Integration", "Product Sprinting", "Rapid Prototyping"]
  },
  {
    id: "exp-academic",
    role: "Computer Science & Engineering Journey",
    organization: "Academic Projects & Deep Exploration",
    location: "India",
    period: "Foundation & Continuous Learning",
    type: "Academic",
    description: "Deepening knowledge across algorithms, intelligent retrieval systems, modern web frameworks, and production software patterns.",
    skills: ["Python", "React", "Data Structures", "REST APIs", "Modern Engineering"]
  }
];
