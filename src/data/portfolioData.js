import profileImage from "../assets/profile-preview.png";

export const personalInfo = {
  name: "Mariam Tarek",
  title: "Junior Frontend Developer",
  tagline: "< Junior Frontend Developer />",
  location: "Cairo, Egypt",
  phone: "+201152028066",
  email: "mariamtarek763@gmail.com",
  github: "https://github.com/MariamTarek098",
  linkedin: "https://www.linkedin.com/in/mariam-tarek-105a8422a/",
  bio: "Motivated Junior Frontend Developer proficient in React.js, Next.js, Tailwind CSS, JavaScript, and TypeScript. Experienced in building responsive, user-friendly, and modern web interfaces with a focus on clean code and interactive UX.",
  avatarPlaceholder: profileImage,
};

export const quickStats = [
  {
    icon: "Code2",
    title: "Frontend",
    description: "React.js, Next.js, TypeScript, Tailwind CSS"
  },
  {
    icon: "MapPin",
    title: "Cairo, Egypt",
    description: "Available for Remote & On-site opportunities"
  },
  {
    icon: "GraduationCap",
    title: "Computer Science",
    description: "Bachelor's Degree Graduate (2021 - 2025)"
  }
];

export const projects = [
  {
    id: "ellestore",
    title: "ElleStore | E-Commerce Web Application",
    subtitle: "Modern E-Commerce Experience",
    type: "Featured Project",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "NextAuth"],
    description: "Developed a full-featured responsive e-commerce web application with rich catalog browsing, cart management, wishlist, user authentication, and checkout workflow.",
    features: [
      "Developed responsive e-commerce application with product browsing, shopping cart, wishlist, authentication, and checkout functionality.",
      "Implemented reusable components, global state management, REST API integration, and performance optimizations using SSR and lazy loading."
    ],
    liveUrl: "https://elle-store.vercel.app/",
    githubUrl: "https://github.com/MariamTarek098/ElleStore"
  },
  {
    id: "redlline",
    title: "Redlline | Social Media Web Application",
    subtitle: "Interactive Social Platform UI",
    type: "Featured Project",
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Vite"],
    description: "Developed a responsive social media web application with a modern, dynamic user interface focused on smooth navigation and component reusability.",
    features: [
      "Developed a responsive social media web application with a modern, user-friendly interface.",
      "Built reusable React components and interactive UI features with a focus on responsive design and smooth user experience."
    ],
    liveUrl: "https://redlline.vercel.app/",
    githubUrl: "https://github.com/MariamTarek098/Redlline"
  }
];

export const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"]
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Redux"]
  },
  {
    title: "Styling & UI",
    skills: ["Tailwind CSS", "Bootstrap", "Responsive Design", "Mobile-First"]
  },
  {
    title: "APIs & Data Fetching",
    skills: ["RESTful APIs", "Axios", "Fetch API"]
  },
  {
    title: "Tools & Version Control",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Jira"]
  }
];

export const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Arab Open University, Egypt",
    period: "2021 – 2025",
    description: "Focused on core computer science foundations, algorithms, data structures, software engineering principles, and web technologies."
  }
];

export const courses = [
  {
    title: "Front-End Web Development Diploma",
    provider: "Route Academy",
    period: "Sep 2025 – Apr 2026",
    description: "Intensive diploma covering advanced frontend web development techniques, modern JavaScript standards, React architecture, state management, and real-world project delivery."
  }
];
