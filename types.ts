
export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Experience {
  period: string;
  company: string;
  role: string;
}

export interface SocialLinks {
  instagram: string;
  linkedin: string;
  behance: string;
}

export interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  aboutTitle: string;
  aboutBio: string;
  projectsTitle: string;
  skillsTitle: string;
  experienceTitle: string;
  contactTitle: string;
  contactSubtitle: string;
  contactEmail: string;
  footerText: string;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    accent: string;
  };
  fonts: {
    body: string;
  };
  content: SiteContent;
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
  socials: SocialLinks;
}
