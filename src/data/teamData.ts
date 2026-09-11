export interface TeamMember {
  name: string;
  role: string;
  image: string;
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

export const teamHeroData: TeamHeroData = {
  sectionNumber: "01",
  badge: "OUR SPECIALIZED TEAMS",
  title: "The Minds Behind",
  titleHighlight: "Lunar Eclipse",
  description:
    "Meet the dedicated professionals powering our software engineering, creative direction, and global apparel merchandising operations.",
};

// 1. Software Team
export const softwareTeam: TeamMember[] = [
  {
    name: "Nishat Ahmed",
    role: "Front-End Developer",
    image: "https://lh3.googleusercontent.com/d/16L-gvboNvWhbwAD7jvuDaCQXId-h4gwE",
  },
  {
    name: "Md. Sifat",
    role: "Product Design Engineer",
    image: "https://lh3.googleusercontent.com/d/1tUbJiyoOrOQL40vyEqCWosIKQYHPThsY",
  },
  {
    name: "Md. Abu Sufian",
    role: "Full Stack Developer",
    image: "https://lh3.googleusercontent.com/d/1ex-ft3C9D057uxXfNT_ljfnJ8iYpahto",
  },
];

// 2. Creative Team
export const creativeTeam: TeamMember[] = [
  {
    name: "Mejbah",
    role: "Video Editor",
    image: "https://lh3.googleusercontent.com/d/1jqh7iMHzqCss1IM6jXGuO4nNXUAHy0zj",
  },
  {
    name: "Shawon",
    role: "Creative Designer",
    image: "https://lh3.googleusercontent.com/d/16yHv6GahJPpThH9Y7O7N4g-Wna-L6xdW",
  },
  {
    name: "Suja Gazi",
    role: "Video Editor",
    image: "https://lh3.googleusercontent.com/d/1Bc8tP0dGOQvHKgvTJf5Z8Kn6hMbF4Fpo",
  },
];

// 3. Merchandiser Team
export const merchandiserTeam: TeamMember[] = [
  {
    name: "Abul Kashem",
    role: "Marchendiser",
    image: "https://lh3.googleusercontent.com/d/1bMM9FhvKfgE73-2QnmOQ0VTIAkj2Evs-",
  },
  {
    name: "Jannat",
    role: "Marchendiser",
    image: "https://lh3.googleusercontent.com/d/1CMmOoZuc2l3kpwsthGYQb9d0qedXRy7W",
  },
];

// 4. Executive
export const executiveTeam: TeamMember[] = [
  {
    name: "Nazrul",
    role: "Marchendiser",
    image: "https://lh3.googleusercontent.com/d/1DPPbhvcXr3ocJQFVSV6K4QUMrao69i0o",
  },
];

export const teamSections: TeamSectionGroup[] = [
  {
    id: "executives",
    heading: "Executives",
    subheading: "Strategic merchandising coordination and operational order execution.",
    members: executiveTeam,
  },
  {
    id: "merchandiser-team",
    heading: "Marchendiser Team",
    subheading: "Fabric sourcing, garment manufacturing oversight, quality audits, and international buyer liaison.",
    members: merchandiserTeam,
  },
  {
    id: "software-team",
    heading: "Software Team",
    subheading: "Frontend architectures, digital product engineering, and enterprise supply chain software systems.",
    members: softwareTeam,
  },
  {
    id: "creative-team",
    heading: "Creative Team",
    subheading: "Brand aesthetics, high-impact video editing, visual storytelling, and fashion design.",
    members: creativeTeam,
  },
];
