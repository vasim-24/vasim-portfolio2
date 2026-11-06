export interface Achievement {
  id: string;
  number: string;
  projectName: string;
  eventName: string;
  award: string;
  tag: string;
  description: string;
  image: string;
  metrics?: string;
  statusText?: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "hackathon-1",
    number: "01",
    projectName: "Fast & Curious Challenge",
    eventName: "PSG College of Technology",
    award: "First Place Winner",
    tag: "1st Prize",
    description: "Awarded 1st place at PSG College of Technology's Fast & Curious Challenge. Built and pitched a real-time collaborative software prototype under intense sprint constraints, winning top honors for live technical execution and problem-solving.",
    image: "/images/achievements/achievement-1.jpg",
    metrics: "1st Place Champion • PSG Tech",
    statusText: "Verified 1st Place"
  },
  {
    id: "hackathon-2",
    number: "02",
    projectName: "WhizzHack'26",
    eventName: "Erode Sengunthar Engineering College",
    award: "2nd Prize Winner • ₹6,000 Cash Award",
    tag: "2nd Prize",
    description: "Secured 2nd prize and ₹6,000 cash honor at WhizzHack'26 (Department of ECE), architecting and deploying a high-performance software system within an exhaustive 24-hour sprint.",
    image: "/images/achievements/achievement-2.jpg",
    metrics: "2nd Prize • ₹6,000 Cash Prize",
    statusText: "Verified Trophy & Check"
  },
  {
    id: "hackathon-3",
    number: "03",
    projectName: "GALAXY'26 Hackathon",
    eventName: "GCD College • ACE Presents 8 Hours Hackathon",
    award: "1st Place Winner (First Prize)",
    tag: "1st Place",
    description: "Awarded 1st place at GCD College's prestigious GALAXY'26 during the ACE Presents 8 Hours Hackathon. Architected and pitched a complete working software solution under a non-stop 8-hour sprint constraint, winning highest commendations from the faculty and jury.",
    image: "/images/achievements/achievement-3.jpg",
    metrics: "1st Place Champion • GALAXY'26",
    statusText: "Verified 1st Place"
  }
];
