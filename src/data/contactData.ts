import type { LucideIcon } from "lucide-react";
import { Clock, ShieldCheck, FileCheck2, Mail, Phone, MapPin } from "lucide-react";

export interface ContactHeroData {
  sectionNumber: string;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export interface ContactSlaBadge {
  icon: LucideIcon;
  title: string;
  detail: string;
}

export interface DirectContactChannel {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  subtext: string;
  badge: string;
}

export interface ContactFaq {
  q: string;
  a: string;
}

export interface ContactFormConfig {
  title: string;
  subtitle: string;
  successTitle: string;
  successMessage: string;
}

export const contactHeroData: ContactHeroData = {
  sectionNumber: "05",
  badge: "GLOBAL MERCHANDISING & INQUIRIES",
  title: "Initiate Commercial",
  titleHighlight: "Inquiry & Tenders",
  description:
    "Connect directly with our senior merchandising leads, fabric procurement directors, and defense tender specialists for instant cost quotations, factory audits, or material swatches.",
};

export const contactSlaBadges: ContactSlaBadge[] = [
  {
    icon: Clock,
    title: "24-Hour Response SLA",
    detail: "Guaranteed feedback on tech packs",
  },
  {
    icon: ShieldCheck,
    title: "Confidential NDAs",
    detail: "Secure government tender handling",
  },
  {
    icon: FileCheck2,
    title: "7-Day Express Sampling",
    detail: "Rapid lab dips & prototypes",
  },
];

export const directContactChannels: DirectContactChannel[] = [
  {
    icon: Mail,
    label: "Commercial Email",
    value: "contact@lunareclipsegroup.com",
    href: "mailto:contact@lunareclipsegroup.com",
    subtext: "24-hour turnaround on tech packs",
    badge: "Inquiries Desk",
  },
  {
    icon: Phone,
    label: "Direct Hotline",
    value: "+88 (017) 586-2732",
    href: "tel:+880175862732",
    subtext: "Mon–Fri, 9:00 AM – 6:00 PM (GMT+6)",
    badge: "Voice & WhatsApp",
  },
  {
    icon: MapPin,
    label: "Corporate Complex",
    value: "Eclipse Tower, Level 14",
    subtext: "Global Sourcing Hub, Dhaka",
    badge: "Headquarters",
  },
];

export const contactFaqs: ContactFaq[] = [
  {
    q: "What is your standard turnaround time for fabric lab dips and sample prototypes?",
    a: "Lab dips, shade swatches, and pre-production garment prototypes are dispatched via express international courier within 7 business days of receiving your tech pack or reference swatch.",
  },
  {
    q: "What payment and commercial terms does Lunar Eclipse Group accept?",
    a: "We support flexible Incoterms including FOB Dhaka/Chittagong, CIF destination port, and DDP direct warehouse delivery. Commercial payment options include Irrevocable L/C at Sight, 90-day Usance L/C, and Wire Transfer (T/T).",
  },
  {
    q: "Can your defence division handle confidential government tenders under NDAs?",
    a: "Yes. Our institutional division operates isolated production lines for mil-spec uniforms, NIR camouflage textiles, and rank insignia. All tender documentation is managed under strict non-disclosure protocols.",
  },
  {
    q: "Do you supply certified eco-friendly and organic textiles?",
    a: "All organic cotton and recycled polyester lines carry GOTS (Global Organic Textile Standard) and OEKO-TEX Standard 100 certifications, complete with full supply chain transaction certificates.",
  },
];

export const contactFormConfig: ContactFormConfig = {
  title: "Commercial Specification Form",
  subtitle: "Fields marked with an asterisk (*) are required for quotation.",
  successTitle: "Inquiry Successfully Registered",
  successMessage:
    "Thank you for contacting Lunar Eclipse International Group. A senior Merchandising Director has been assigned to your request and will follow up within 24 hours.",
};
