export interface ProjectType {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  image: string;
  technologies: string[];
  role: string;
  duration: string;
  team: string;
  achievements: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}
