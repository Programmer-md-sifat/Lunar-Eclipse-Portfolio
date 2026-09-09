export interface TeamMember {
  name: string;
  role: string;
  image: string;
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
  badge: "EXECUTIVE & TECHNICAL LEADERSHIP",
  title: "The Minds Driving Global",
  titleHighlight: "Textile Excellence",
  description:
    "Our multidisciplinary leadership team unites decades of international merchandising, fabric engineering, custom enterprise software architecture, and creative fashion design across Asia, Europe, and the Americas.",
};

export const executiveDirectors: TeamMember[] = [
  {
    name: "Tariqul Islam Chowdhury",
    role: "Managing Director & Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Victoria Lin",
    role: "Executive Director - Global Supply Chain & Strategy",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Arthur Pendelton",
    role: "Executive Director - European Operations",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Shahriar Ahmed",
    role: "Executive Director - Finance & Compliance",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Mahmudur Rahman",
    role: "Executive Director - Industrial Manufacturing",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Robert Sterling",
    role: "Executive Director - Americas & Global Trade",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Claire Dupont",
    role: "Executive Director - International Brand Partnerships",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
];

export const merchandisers: TeamMember[] = [
  {
    name: "Farhana Yasmin",
    role: "Chief Merchandising Officer (CMO)",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Marcus Vance",
    role: "Senior Merchandiser - Denim & Outerwear",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Elena Rostova",
    role: "Senior Merchandiser - Intimate Apparel & Lingerie",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Tanvir Hossain",
    role: "Lead Merchandiser - Activewear & Knitwear",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sophie Martin",
    role: "Senior Merchandiser - Sustainable & Circular Textiles",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Asif Iqbal",
    role: "Merchandising Specialist - Trims & Accessories",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Rebecca Thornton",
    role: "Lead Merchandiser - Fast Fashion & Retail Accounts",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Kazi Nazmul Huda",
    role: "Senior Merchandiser - Defence & Institutional Uniforms",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=800&auto=format&fit=crop",
  },
];

export const softwareTeam: TeamMember[] = [
  {
    name: "Engr. Rafiqul Hassan",
    role: "Head of Technology & Enterprise Architecture",
    image: "https://images.unsplash.com/photo-1531891437562-4301cf093177?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "David Chen",
    role: "Lead ERP & Supply Chain Systems Architect",
    image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Nusrat Jahan",
    role: "Senior Software Engineer & Supply Chain Systems Analyst",
    image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=800&auto=format&fit=crop",
  },
];

export const creativeTeam: TeamMember[] = [
  {
    name: "Maya Al-Mansoor",
    role: "Global Creative Director & Trend Forecaster",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Julian Vance",
    role: "Senior Apparel & Tech-Pack Designer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Anika Tabassum",
    role: "Lead 3D Fashion Designer & Virtual Prototyper",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Lucas Moreau",
    role: "Visual Branding & Textile Pattern Specialist",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
  },
];

export const teamSections: TeamSectionGroup[] = [
  {
    id: "executive-director",
    heading: "Executive Director",
    subheading: "Corporate strategy, international governance, and global supply chain leadership.",
    members: executiveDirectors,
  },
  {
    id: "marchendiser",
    heading: "Marchendiser",
    subheading: "Yarn development, fabric sourcing, production merchandising, and retail brand management.",
    members: merchandisers,
  },
  {
    id: "software-team",
    heading: "Software Team",
    subheading: "Enterprise resource planning, digital order tracking, and supply chain automation.",
    members: softwareTeam,
  },
  {
    id: "creative-team",
    heading: "Creative Team",
    subheading: "Apparel concept styling, 3D digital tech-packs, and seasonal trend forecasting.",
    members: creativeTeam,
  },
];
