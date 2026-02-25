import { ProjectType } from "@/types/project.types";

export const PROJECTS_DATA: ProjectType[] = [
  {
    id: 1,
    title: "EcoTrack",
    description: "Environmental monitoring platform",
    fullDescription:
      "EcoTrack is a comprehensive environmental monitoring platform that helps individuals and organizations measure, analyze, and reduce their carbon footprint. The platform leverages artificial intelligence to provide personalized recommendations for sustainable living and business practices.",
    challenge:
      "The main challenge was aggregating environmental data from multiple sources and transforming it into actionable insights while maintaining real-time accuracy and scalability.",
    solution:
      "We designed a microservices architecture with event-driven data processing. Machine learning models analyze user behavior patterns to generate personalized recommendations.",
    image: "/projects/ecotrack.jpg",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "TensorFlow",
      "Docker",
    ],
    role: "Lead Frontend Developer",
    duration: "8 months",
    team: "6 people",
    achievements: [
      "Increased user engagement by 40%",
      "Reduced page load time by 60%",
      "Implemented AI recommendation system",
    ],
    features: [
      "Real-time calculation",
      "AI recommendations",
      "Community challenges",
    ],
    liveUrl: "https://ecotrack-demo.vercel.app",
    githubUrl: "https://github.com/komeilyeganeh/ecotrack",
  },
  {
    id: 2,
    title: "AI Code Assistant",
    description: "Intelligent development tool",
    fullDescription:
      "An AI-powered code assistant that helps developers write better code faster. The tool provides intelligent code completion, refactoring suggestions, bug detection, and automated documentation generation.",
    challenge:
      "Building a real-time code analysis engine that provides accurate suggestions without disrupting workflow.",
    solution:
      "Built a lightweight language server with machine learning models fine-tuned on millions of code repositories.",
    image: "/projects/ai-assistant.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Python",
      "TensorFlow",
      "Express",
      "PostgreSQL",
    ],
    role: "Full Stack Developer",
    duration: "10 months",
    team: "8 people",
    achievements: [
      "85% accuracy in code completion",
      "Reduced bug detection time by 70%",
      "Real-time collaboration features",
    ],
    features: ["Code completion", "Bug detection", "Documentation generation"],
    githubUrl: "https://github.com/komeilyeganeh/ai-assistant",
  },
  {
    id: 3,
    title: "Design System Hub",
    description: "Enterprise component library",
    fullDescription:
      "A comprehensive design system that ensures consistency across multiple products. Includes a component library, design tokens, documentation, and integration tools.",
    challenge:
      "Creating a unified design language that works across different teams while maintaining flexibility.",
    solution:
      "Developed a token-based design system with automated documentation generation.",
    image: "/projects/design-system.jpg",
    technologies: ["React", "TypeScript", "Storybook", "Tailwind", "Figma"],
    role: "Lead UI Engineer",
    duration: "6 months",
    team: "5 people",
    achievements: [
      "Standardized design across 5 products",
      "Reduced development time by 50%",
      "100% accessibility compliance",
    ],
    features: ["120+ components", "Design tokens", "Figma integration"],
    liveUrl: "https://design-system.demo.com",
  },
  {
    id: 4,
    title: "Real-time Dashboard",
    description: "Analytics platform",
    fullDescription:
      "A powerful real-time analytics dashboard for monitoring business metrics, user behavior, and system performance with customizable widgets and interactive charts.",
    challenge:
      "Handling high-velocity data streams and rendering complex visualizations without performance issues.",
    solution:
      "Implemented streaming architecture with WebSocket and WebGL for hardware-accelerated rendering.",
    image: "/projects/dashboard.jpg",
    technologies: ["Next.js", "D3.js", "Socket.io", "Redis", "TimescaleDB"],
    role: "Frontend Developer",
    duration: "5 months",
    team: "4 people",
    achievements: [
      "1M+ events per day",
      "15+ chart types",
      "45% bundle size reduction",
    ],
    features: ["Real-time viz", "Custom widgets", "Alerts"],
    liveUrl: "https://dashboard.demo.com",
  },
];
