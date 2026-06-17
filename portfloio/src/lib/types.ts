export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  problemStatement: string;
  businessContext: string;
  architecture: string;
  techStack: string[];
  dataFlow: string[];
  kpiImpact: string[];
  githubUrl: string;
  docsUrl?: string;
  tags: string[];
  featured: boolean;
  status: "completed" | "in-progress" | "planned";
  date: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  category: string;
  status: "earned" | "in-progress" | "planned";
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  tags: string[];
  status: "published" | "draft";
}

export interface TimelineEvent {
  year: string;
  month?: string;
  title: string;
  description: string;
  icon: string;
  tags?: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

export interface NavItem {
  label: string;
  href: string;
}
