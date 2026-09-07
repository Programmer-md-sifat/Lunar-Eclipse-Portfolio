import type { LucideIcon } from "lucide-react";
import { Layers, Scissors, ShieldCheck, Truck } from "lucide-react";
import fabricRollsImg from "../assets/images/pure_fabric_rolls_textiles_1788780174893.jpg";
import garmentApparelImg from "../assets/images/humanless_garment_apparel_1788780208373.jpg";
import defenceUniformImg from "../assets/images/humanless_defence_uniform_1788780191909.jpg";

export interface ServiceItem {
  number: string;
  icon: LucideIcon;
  title: string;
  category: string;
  description: string;
  capabilities: string[];
  image: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServicesHeroData {
  sectionNumber: string;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface ServicesCtaData {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const servicesHeroData: ServicesHeroData = {
  sectionNumber: "03",
  badge: "OUR BUSINESS & SOLUTIONS",
  title: "End-to-End Apparel &",
  titleHighlight: "Supply Chain Lifecycle",
  description:
    "From fiber selection and bulk weaving to automated cutting, precision stitching, mil-spec testing, and international freight delivery — we manage every link of the global garment supply chain.",
};

export const servicesList: ServiceItem[] = [
  {
    number: "01",
    icon: Layers,
    title: "Global Fabric & Raw Materials Sourcing",
    category: "RAW MATERIAL PROCUREMENT",
    description:
      "Direct procurement of certified foreign and domestic woven fabrics, circular knits, indigo denims, custom dye lots, luxury interlinings, and bespoke metal accessories with full spectral shade reports.",
    capabilities: [
      "Organic GOTS & BCI Cotton",
      "High-GSM Technical Weaves",
      "Die-Cast Brass & Zinc Trims",
      "Lab-Dipped Shade Approvals",
      "Anti-Pilling & Color Fastness Reports",
    ],
    image: fabricRollsImg,
  },
  {
    number: "02",
    icon: Scissors,
    title: "Custom Garment & Apparel Manufacturing",
    category: "INDUSTRIAL SEWING & CUTTING",
    description:
      "High-velocity production lines specializing in ready-made garments, dresses, hoodies, caps, activewear, tailored outerwear, and private label collections for international retail brands.",
    capabilities: [
      "Automated Gerber Pattern Cutting",
      "7-Day Prototyping & Sample Dip",
      "Inline AQL 2.5/4.0 Auditing",
      "Custom Embroidery & Screen Printing",
      "Steam Pressing & Retail Barcoding",
    ],
    image: garmentApparelImg,
  },
  {
    number: "03",
    icon: ShieldCheck,
    title: "Uniforms, Insignia & Defence Tenders",
    category: "INSTITUTIONAL & MIL-SPEC",
    description:
      "Specialized high-security contracts for government ministries, defense forces, aviation carriers, rank badges, bullion epaulettes, tactical ripstop uniforms, and healthcare workwear.",
    capabilities: [
      "Flame-Retardant & Anti-Static Finishes",
      "Bullion Wire & Jacquard Epaulettes",
      "NIR Camouflage & Teflon Coating",
      "Confidential Tender NDA Compliance",
      "Mil-Spec Standard Fabric Testing",
    ],
    image: defenceUniformImg,
  },
  {
    number: "04",
    icon: Truck,
    title: "Global Freight & Supply Chain Logistics",
    category: "INTERNATIONAL TRADE LOGISTICS",
    description:
      "Comprehensive sea and air freight forwarding, customs clearance, bonded warehousing, multi-port container consolidation, and door-to-door delivery across Europe, Americas, and Asia.",
    capabilities: [
      "Flexible FOB / CIF / DDP Incoterms",
      "Bonded Warehouse Inventory Management",
      "Real-Time Container Tracking",
      "Customs Duty & Tariff Clearance",
      "Multi-Country Consignment Split",
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop",
  },
];

export const workflowSteps: WorkflowStep[] = [
  {
    step: "01",
    title: "Tech Pack Analysis",
    desc: "Our merchandising team evaluates your tech pack, fabric compositions, GSM specs, and target FOB pricing.",
  },
  {
    step: "02",
    title: "Rapid Sampling (7 Days)",
    desc: "Lab dips, fabric swatches, and pre-production sample prototypes are dispatched via express courier for sign-off.",
  },
  {
    step: "03",
    title: "Mill Weaving & Bulk Sewing",
    desc: "Automated pattern cutting and high-velocity sewing commence with inline AQL 2.5 quality control checks.",
  },
  {
    step: "04",
    title: "Final Audit & Packaging",
    desc: "Pre-shipment inspection, needle detector screening, steam pressing, and retail-ready polybag packing.",
  },
  {
    step: "05",
    title: "Port Freight Delivery",
    desc: "Container loading, bill of lading issuance, customs clearance, and multi-port shipment to your warehouse.",
  },
];

export const servicesCtaData: ServicesCtaData = {
  title: "Discuss Your Procurement Requirements",
  description:
    "Connect directly with our senior merchandising directors for a formal cost quotation, fabric lab dips, or technical feasibility report.",
  buttonText: "INITIATE PROJECT INQUIRY",
  buttonLink: "/contact",
};
