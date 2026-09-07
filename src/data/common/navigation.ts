export interface SubNavItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: string;
  highlight?: boolean;
  children?: SubNavItem[];
}

export const navigationItems: NavItem[] = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "/about",
    children: [
      {
        label: "EXPLORE US",
        href: "/about",
        description: "Company heritage, mission, strategic pillars & accreditations",
      },
      {
        label: "OUR TEAM",
        href: "/team",
        description: "Executive directors, technical specialists & department leads",
      },
    ],
  },
  { label: "PRODUCTS", href: "/products" },
  { label: "SERVICE", href: "/services" },
  { label: "GROUP", href: "/group" },
  { label: "CONTACT", href: "/contact" },
];

export const headerCta = {
  label: "WORK WITH US",
  href: "/contact",
};

export const footerData = {
  companyName: "LUNAR ECLIPSE",
  tagline: "INTERNATIONAL GROUP",
  description:
    "An international enterprise specializing in global apparel sourcing, precision manufacturing, and comprehensive export-import supply solutions for global retail brands and institutional defense clients.",
  quickLinks: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services & Sourcing", href: "/services" },
    { label: "Products & Materials", href: "/products" },
    { label: "Corporate Group", href: "/group" },
    { label: "Contact & Inquiries", href: "/contact" },
  ],
  services: [
    { label: "Global Fabric & Trim Sourcing", href: "/services#sourcing" },
    { label: "Custom Apparel Manufacturing", href: "/services#manufacturing" },
    { label: "Institutional & Uniform Contracts", href: "/uniforms" },
    { label: "Rank Badges & Military Insignia", href: "/uniforms#insignia" },
    { label: "Worldwide Export Logistics", href: "/services#export" },
  ],
  locations: [
    { city: "Dhaka", role: "Manufacturing & Sourcing HQ", country: "Bangladesh" },
    { city: "Hong Kong", role: "East Asia Trade Hub", country: "Hong Kong SAR" },
    { city: "London", role: "European Client Relations", country: "United Kingdom" },
    { city: "New York", role: "Americas Liaison Office", country: "United States" },
  ],
  compliance: [
    "OEKO-TEX Standard 100",
    "BSCI Certified",
    "ISO 9001:2015",
    "GOTS Organic Certified",
    "Sedex SMETA",
  ],
  contactInfo: {
    email: "contact@lunareclipsegroup.com",
    phone: "+1 (800) 586-2732",
    address: "Global Sourcing Hub, Level 14, Eclipse Tower",
  },
};
