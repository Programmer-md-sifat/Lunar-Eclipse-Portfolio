import type { LucideIcon } from "lucide-react";
import { Globe, Factory, Shield, FileCheck2 } from "lucide-react";

export interface AboutMetric {
  value: string;
  label: string;
  detail: string;
}

export interface AboutPillar {
  icon: LucideIcon;
  number: string;
  title: string;
  desc: string;
}

export interface AboutMilestone {
  year: string;
  title: string;
  desc: string;
}

export interface AboutCertification {
  name: string;
  category: string;
  desc: string;
}

export interface AboutLeader {
  name: string;
  role: string;
  experience: string;
  quote: string;
  image: string;
}

export interface ExecutiveMessage {
  designation: string;
  badge: string;
  name: string;
  title: string;
  experience: string;
  portrait: string;
  headlineQuote: string;
  messageParagraphs: string[];
  signatureNote: string;
  accentColor: string;
}

export interface AboutHeroData {
  sectionNumber: string;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface AboutPhilosophyData {
  badge: string;
  title: string;
  verticalSupplyBadge: {
    title: string;
    desc: string;
  };
  mission: string;
  vision: string;
  values: {
    title: string;
    desc: string;
  }[];
}

export interface AboutCtaData {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const aboutHeroData: AboutHeroData = {
  sectionNumber: "01",
  badge: "ABOUT LUNAR ECLIPSE GROUP",
  title: "Pioneering Global Sourcing &",
  titleHighlight: "Industrial Precision",
  description:
    "Lunar Eclipse International Group is a premier multi-tier apparel buying house, fabric procurement specialist, and industrial manufacturing enterprise. We bridge international fashion houses, global retail chains, and government defense ministries with certified production complexes worldwide.",
};

export const aboutMetrics: AboutMetric[] = [
  { value: "25+", label: "Years of Excellence", detail: "Established legacy since 1999" },
  { value: "35+", label: "Export Nations", detail: "Europe, Americas & Asia-Pacific" },
  { value: "12M+", label: "Annual Garment Capacity", detail: "Across 6 integrated production units" },
  { value: "100%", label: "Compliance Rate", detail: "OEKO-TEX, BSCI & ISO 9001 Certified" },
];

export const aboutPhilosophyData: AboutPhilosophyData = {
  badge: "OUR CORPORATE PHILOSOPHY",
  title: "Uncompromising Standards Across Every Thread",
  verticalSupplyBadge: {
    title: "INTEGRATED VERTICAL SUPPLY",
    desc: "Yarn spinning, high-capacity weaving, garment construction & export.",
  },
  mission:
    "Our mission is to empower global apparel brands and government institutions with an unassailable supply ecosystem — combining mill-direct fabric prices, zero-defect quality standards, and rapid sampling turnarounds.",
  vision:
    "To be the world’s most trusted international apparel procurement conglomerate, setting the gold standard for sustainability, technological precision, and institutional reliability across global retail and defense markets.",
  values: [
    {
      title: "Absolute Integrity",
      desc: "Transparent costing, certified labor compliance, and zero hidden surcharges.",
    },
    {
      title: "Technical Precision",
      desc: "Laser pattern grading, automated cutting, and spectral shade consistency.",
    },
    {
      title: "Global Agile Shipping",
      desc: "Multi-port FOB, CIF, and DDP export delivery directly to buyer distribution centers.",
    },
  ],
};

export const aboutPillars: AboutPillar[] = [
  {
    icon: Globe,
    number: "01",
    title: "Global Fabric Sourcing",
    desc: "Direct partnerships with certified yarn spinners, weaving mills, and dye houses across Asia and Europe ensuring competitive fabric tariffs and unbroken supply chain integrity.",
  },
  {
    icon: Factory,
    number: "02",
    title: "Precision Manufacturing",
    desc: "State-of-the-art automated cutting tables, laser pattern alignment, and high-velocity sewing lines calibrated for complex retail garments and specialized workwear.",
  },
  {
    icon: Shield,
    number: "03",
    title: "Defence & Institutional Tenders",
    desc: "High-security production lines dedicated to mil-spec apparel, flame-retardant textiles, embroidered rank epaulettes, and official government uniform tenders.",
  },
  {
    icon: FileCheck2,
    number: "04",
    title: "Zero-Defect Quality Assurance",
    desc: "Four-point fabric inspection systems, inline AQL 2.5/4.0 auditing protocols, color fastness testing, and lab-dipped spectral shade matching.",
  },
];

export const aboutMilestones: AboutMilestone[] = [
  {
    year: "1999",
    title: "Founding Era",
    desc: "Established as a specialized textile trading office in Dhaka, bridging local spinners with regional apparel buyers.",
  },
  {
    year: "2006",
    title: "Industrial Expansion",
    desc: "Commissioned first automated garment manufacturing unit with specialized knit and woven production lines.",
  },
  {
    year: "2012",
    title: "Defence & Insignia Division",
    desc: "Launched military uniform, rank badge, and tactical insignia production line for government procurement.",
  },
  {
    year: "2018",
    title: "Global Hub Integration",
    desc: "Incorporated trade liaison offices in Hong Kong SAR and London to streamline international logistics.",
  },
  {
    year: "2024",
    title: "Sustainable Textile Leadership",
    desc: "Achieved GOTS organic certification and closed-loop water treatment integration across main facilities.",
  },
];

export const aboutCertifications: AboutCertification[] = [
  {
    name: "OEKO-TEX Standard 100",
    category: "Eco-Safety",
    desc: "Guarantees raw materials free from harmful chemicals and heavy metals.",
  },
  {
    name: "BSCI Certified",
    category: "Social Compliance",
    desc: "Ensures ethical working conditions, fair wages, and worker safety.",
  },
  {
    name: "ISO 9001:2015",
    category: "Quality Management",
    desc: "Internationally verified quality management system across all operations.",
  },
  {
    name: "GOTS Organic",
    category: "Raw Materials",
    desc: "Certified organic cotton procurement and sustainable dyeing processes.",
  },
  {
    name: "Sedex SMETA",
    category: "Supply Chain",
    desc: "Audited labor standards, health, safety, and environmental stewardship.",
  },
  {
    name: "WRAP Certified",
    category: "Manufacturing",
    desc: "Worldwide Responsible Accredited Production certification.",
  },
];

export const executiveMessages: {
  managingDirector: ExecutiveMessage;
  ceo: ExecutiveMessage;
} = {
  managingDirector: {
    designation: "MANAGING DIRECTOR",
    badge: "MANAGING DIRECTOR'S ADDRESS",
    name: "Tariqul Islam Chowdhury",
    title: "Founder & Managing Director",
    experience: "28+ Years Textile Governance",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    headlineQuote: "Building enduring bridges between global fashion brands and ethical manufacturing excellence.",
    messageParagraphs: [
      "Since our inception, Lunar Eclipse has operated with an unshakeable conviction: that industrial scale and ethical integrity must reinforce one another. We built this enterprise on trust, technical precision, and absolute transparency.",
      "Our direct backward linkages across certified spinning mills, high-capacity weaving units, and automated manufacturing complexes enable our global partners to scale confidently with zero-defect quality and dependable lead times."
    ],
    signatureNote: "Managing Director, Lunar Eclipse Group",
    accentColor: "#dfb277",
  },
  ceo: {
    designation: "CHIEF EXECUTIVE OFFICER",
    badge: "CEO'S STRATEGIC VISION",
    name: "Victoria Lin",
    title: "Chief Executive Officer (CEO)",
    experience: "20+ Years Global Apparel Sourcing",
    portrait: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    headlineQuote: "Pioneering agile sourcing, sustainable innovation, and rapid market velocity for modern retail.",
    messageParagraphs: [
      "Today’s international fashion and defense procurement environments demand unmatched speed, verifiable sustainability, and end-to-end digital tracking. We have streamlined every stage of the sourcing lifecycle.",
      "From rapid 7-day lab-dip approvals and bespoke fabric development to sustainable circular fibers and precision logistics, our client-first methodology ensures our partners stay ahead in competitive global markets."
    ],
    signatureNote: "Chief Executive Officer, Lunar Eclipse Group",
    accentColor: "#dfb277",
  },
};

export const aboutLeadership: AboutLeader[] = [
  {
    name: "Tariqul Islam Chowdhury",
    role: "Group Chairman & Managing Director",
    experience: "28+ Years Textile Industry Veteran",
    quote:
      "Our founding commitment remains unchanged: delivering industrial precision without compromising on ethical integrity or material quality.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Victoria Lin",
    role: "Director of East Asia Procurement",
    experience: "Based in Hong Kong SAR Hub",
    quote:
      "By linking mill-direct fabric innovation with rapid prototyping, we shorten buyer lead times from months to days.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Arthur Pendelton",
    role: "European Brand Relations Director",
    experience: "Based in London Office",
    quote:
      "We provide European fashion houses and institutional clients with complete supply chain transparency from fiber to store front.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
];

export const aboutCtaData: AboutCtaData = {
  badge: "COMMENCE PARTNERSHIP",
  title: "Ready to Initiate Your Sourcing Program?",
  description:
    "Schedule a factory audit, request fabric swatches, or consult with our international merchandising directors.",
  buttonText: "CONTACT DIRECTORS",
  buttonLink: "/contact",
};
