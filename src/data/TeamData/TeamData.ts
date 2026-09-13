import type { LucideIcon } from "lucide-react";
import { Sparkles, CheckCircle2, Award } from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  specialization?: string;
  useAvatar?: boolean;
}

/**
 * Normalizes an image URL, automatically converting Google Drive URLs or IDs into direct CDN links
 */
export function formatImageUrl(urlOrId: string): string {
  if (!urlOrId) return "";
  const trimmed = urlOrId.trim();
  const match = trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/) || trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return `https://lh3.googleusercontent.com/d/${match[1]}`;
  }
  if (/^[a-zA-Z0-9_-]{25,}$/.test(trimmed) && !trimmed.startsWith("http")) {
    return `https://lh3.googleusercontent.com/d/${trimmed}`;
  }
  return trimmed;
}

export interface TeamSectionGroup {
  id: string;
  heading: string;
  subheading?: string;
  members: TeamMember[];
}

export interface TeamHeroData {
  sectionNumber: string;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface TeamCultureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TeamCtaData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const teamHeroData: TeamHeroData = {
  sectionNumber: "01",
  badge: "OUR SPECIALIZED TEAMS",
  title: "The Minds Behind",
  titleHighlight: "Lunar Eclipse",
  description:
    "Meet the dedicated professionals powering our software engineering, creative direction, and global apparel merchandising operations.",
};

// 1. Director Bodies (Executive Leadership)
export const directorBodiesTeam: TeamMember[] = [
  {
    name: "Md. Saidur Rahman",
    role: "Managing Director",
    image: "",
    specialization: "Managing Director",
    useAvatar: true,
  },
  {
    name: "Md. Atiqur Rahman",
    role: "Executive Director",
    image: "",
    specialization: "Executive Director",
  },
  {
    name: "Md. Kawsar",
    role: "Executive Director",
    image: "",
    specialization: "Executive Director",
  },
  {
    name: "Md. Fardin Ahmed",
    role: "Cheif Executive Officer",
    image: "https://lh3.googleusercontent.com/d/1mxl-UM4v1oFBPoJUxXwnHgjJYd2j6kXI",
    specialization: "Executive Director",
  },
];
export const executiveTeam = directorBodiesTeam;

// 2. Merchandiser Team
export const merchandiserTeam: TeamMember[] = [
  {
    name: "Abul Kashem",
    role: "Marchendiser",
    image: "https://lh3.googleusercontent.com/d/1bMM9FhvKfgE73-2QnmOQ0VTIAkj2Evs-",
    specialization: "Fabric Sourcing & Garment Manufacturing",
  },
  {
    name: "Nazrul",
    role: "Marchendiser",
    image: "https://lh3.googleusercontent.com/d/1DPPbhvcXr3ocJQFVSV6K4QUMrao69i0o",
    specialization: "Executive Merchandising Coordination",
  },
];

// 3. Admin & Finance Team
export const adminAndFinanceTeam: TeamMember[] = [
  {
    name: "Jannat",
    role: "Accountants",
    image: "https://lh3.googleusercontent.com/d/1CMmOoZuc2l3kpwsthGYQb9d0qedXRy7W",
    specialization: "Quality Audits & Buyer Liaison",
  },
];

// 4. Creative Design & Development Team (combining Software and Creative teams)
export const creativeDesignAndDevTeam: TeamMember[] = [
  {
    name: "Nishat Ahmed",
    role: "Web Developer",
    image: "https://lh3.googleusercontent.com/d/16L-gvboNvWhbwAD7jvuDaCQXId-h4gwE",
    specialization: "Modern Web Developer",
  },
  {
    name: "Tuhin",
    role: "Creative Designer",
    image: "",
    specialization: "Visual Storytelling & Brand Identity",
  },
  {
    name: "Shawon",
    role: "Creative Designer",
    image: "https://lh3.googleusercontent.com/d/16yHv6GahJPpThH9Y7O7N4g-Wna-L6xdW",
    specialization: "Visual Storytelling & Brand Identity",
  },
  {
    name: "Suja Gazi",
    role: "Video Editor",
    image: "https://lh3.googleusercontent.com/d/1Bc8tP0dGOQvHKgvTJf5Z8Kn6hMbF4Fpo",
    specialization: "Fashion Video Reel Editing & Motion Design",
  },
  {
    name: "Md. Sifat",
    role: "Product Design Engineer",
    image: "https://lh3.googleusercontent.com/d/1tUbJiyoOrOQL40vyEqCWosIKQYHPThsY",
    specialization: "Digital Product Architecture & UI/UX",
  },
  {
    name: "Md. Abu Sufian",
    role: "Full Stack Developer",
    image: "https://lh3.googleusercontent.com/d/1ex-ft3C9D057uxXfNT_ljfnJ8iYpahto",
    specialization: "Cloud Infrastructure & Full Stack Systems",
  },
  {
    name: "Mejbah",
    role: "Video Editor",
    image: "https://lh3.googleusercontent.com/d/1jqh7iMHzqCss1IM6jXGuO4nNXUAHy0zj",
    specialization: "Cinematic Video Editing & Post Production",
  },
];

// All Sections displayed sequentially on the Team page
export const teamSections: TeamSectionGroup[] = [
  {
    id: "director-bodies",
    heading: "Director Bodies",
    subheading: "Strategic merchandising coordination and operational order execution.",
    members: directorBodiesTeam,
  },
  {
    id: "merchandiser-team",
    heading: "Marchendiser Team",
    subheading: "Fabric sourcing, garment manufacturing oversight, quality audits, and international buyer liaison.",
    members: merchandiserTeam,
  },
  {
    id: "admin-finance",
    heading: "Admin & Finance",
    subheading: "Financial governance, accounting oversight, and administrative operations.",
    members: adminAndFinanceTeam,
  },
  {
    id: "creative-design-development-team",
    heading: "Creative Design & Development Team",
    subheading: "Digital product engineering, enterprise software systems, visual storytelling, and creative brand design.",
    members: creativeDesignAndDevTeam,
  },
];

// Team Culture & Standards Cards
export const teamCultureData: TeamCultureItem[] = [
  {
    icon: Sparkles,
    title: "Global Mindset, Local Mastery",
    description:
      "Our merchandisers and QA directors live where fabrics are woven and garments are crafted, maintaining direct communication lines with buyers across Europe, the US, and Asia.",
  },
  {
    icon: CheckCircle2,
    title: "Continuous Technical Audits",
    description:
      "Every senior technician undergoes regular certifications in automated patterning, AQL 2.5 defect minimization, and international workplace safety protocols.",
  },
  {
    icon: Award,
    title: "Institutional Accountability",
    description:
      "Direct executive-level oversight on all government defence uniforms and major international brand accounts guarantees complete transparency from purchase order to port handover.",
  },
];

// Team Page Call to Action
export const teamCtaData: TeamCtaData = {
  title: "Connect With Our Team",
  description:
    "Discuss bulk orders, tech pack evaluations, digital solutions, or merchandising inquiries directly with our team.",
  buttonText: "SCHEDULE CONSULTATION",
  buttonLink: "/contact",
};

// Consolidated export of all Team Page Data
export const teamPageData = {
  hero: teamHeroData,
  sections: teamSections,
  culture: teamCultureData,
  cta: teamCtaData,
};
