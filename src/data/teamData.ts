export interface TeamMember {
  name: string;
  role: string;
  department: string;
  experience: string;
  location: string;
  quote: string;
  image: string;
  specialization: string[];
}

export interface TeamDepartment {
  id: string;
  name: string;
  count: string;
  description: string;
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
    "Our multidisciplinary leadership team unites decades of international merchandising, yarn engineering, quality assurance compliance, and global trade logistics across Asia, Europe, and the Americas.",
};

export const teamDepartments: TeamDepartment[] = [
  { id: "all", name: "All Leadership", count: "8", description: "Complete executive and division heads" },
  { id: "executive", name: "Executive Board", count: "3", description: "Corporate strategy & international governance" },
  { id: "merchandising", name: "Merchandising & Sourcing", count: "3", description: "Fabric development & brand liaison" },
  { id: "technical", name: "Technical & Compliance", count: "2", description: "Zero-defect QA & social audit certification" },
];

export const teamMembersList: TeamMember[] = [
  {
    name: "Tariqul Islam Chowdhury",
    role: "Group Chairman & Managing Director",
    department: "executive",
    experience: "28+ Years Textile Industry Veteran",
    location: "Dhaka HQ, Bangladesh",
    quote: "Our founding commitment remains unchanged: delivering industrial precision without compromising on ethical integrity or material quality.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    specialization: ["Corporate Strategy", "Textile Manufacturing", "International Trade", "Government Tenders"],
  },
  {
    name: "Victoria Lin",
    role: "Director of East Asia Procurement",
    department: "executive",
    experience: "19+ Years Sourcing & R&D",
    location: "Hong Kong SAR Hub",
    quote: "By linking mill-direct fabric innovation with rapid prototyping, we shorten buyer lead times from months to days.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    specialization: ["Fabric Innovation", "Supply Chain Logistics", "East Asia Trade", "Polymer & Trims"],
  },
  {
    name: "Arthur Pendelton",
    role: "European Brand Relations Director",
    department: "executive",
    experience: "22+ Years Retail Account Governance",
    location: "London Office, UK",
    quote: "We provide European fashion houses and institutional clients with complete supply chain transparency from fiber to store front.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    specialization: ["EU Retail Accounts", "ESG Stewardship", "FOB/DDP Trade", "Contract Structuring"],
  },
  {
    name: "Farhana Yasmin",
    role: "Head of Fabric R&D & Raw Material Sourcing",
    department: "merchandising",
    experience: "15+ Years Textile Engineering",
    location: "Dhaka Sourcing Center",
    quote: "Every fiber composition undergoes rigorous tensile strength, spectral shade consistency, and GSM calibration before batch approval.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
    specialization: ["Woven & Knit Structures", "Lab Dip Formulations", "Organic GOTS Fibers", "GSM Calibration"],
  },
  {
    name: "Marcus Sterling",
    role: "VP of Americas Institutional & Defence Procurement",
    department: "merchandising",
    experience: "17+ Years Mil-Spec Procurement",
    location: "New York Liaison Office",
    quote: "Meeting the stringent tolerances of tactical defence uniforms and government tender specifications requires unrelenting diligence.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    specialization: ["Mil-Spec Textiles", "Uniform Tenders", "Tariff Optimization", "Tactical Insignia"],
  },
  {
    name: "Elena Rostova",
    role: "Senior Director of Intimate Apparel & Lingerie Merchandising",
    department: "merchandising",
    experience: "14+ Years Lingerie Development",
    location: "Paris / Dhaka Liaison",
    quote: "Lingerie craftsmanship demands micron-level precision in elastic tension, lace bonding, and ergonomic comfort ergonomics.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
    specialization: ["Intimate Apparel", "Seamless Molding", "French Lace Trims", "Ergonomic Fit Testing"],
  },
  {
    name: "Engr. Rafiqul Hassan",
    role: "Chief Technical Officer & Quality Assurance Director",
    department: "technical",
    experience: "24+ Years Industrial Manufacturing",
    location: "Gazipur Industrial Zone",
    quote: "Zero-defect isn't just an aspiration — it's an inline 4-point inspection system embedded across every sewing line.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    specialization: ["AQL 1.5 / 2.5 Auditing", "Automated Cutting Systems", "Factory Automation", "Lean Manufacturing"],
  },
  {
    name: "Dr. Ananya Sen",
    role: "Head of ESG & International Social Compliance",
    department: "technical",
    experience: "16+ Years Environmental & Labor Auditing",
    location: "Corporate Governance Unit",
    quote: "Sustainable industrial growth means empowering the workforce while preserving our environment with closed-loop water treatment.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
    specialization: ["OEKO-TEX Auditing", "BSCI Compliance", "Zero Carbon Tracking", "Worker Welfare Programs"],
  },
];
