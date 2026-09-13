import fabricsImg from "../../assets/images/pure_fabric_rolls_textiles_1788780174893.jpg";
import defenceUniformImg from "../../assets/images/bd_navy_uniform_1787920153389.jpg";
import womenLingerieImg from "../../assets/images/women_lingerie_1788510944111.jpg";
import menLingerieImg from "../../assets/images/men_lingerie_1788510970060.jpg";
import badgesImg from "../../assets/images/badges_insignia_1788510849474.jpg";
import polyesterPlasticImg from "../../assets/images/polyester_plastic_1788510919616.jpg";

export interface Capability {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface WhatWeDoHeader {
  sectionNumber: string;
  tag: string;
  titleLine1: string;
  titleHighlight: string;
  subtitle: string;
}

export const whatWeDoHeaderData: WhatWeDoHeader = {
  sectionNumber: "02",
  tag: "OUR CORE BUSINESS",
  titleLine1: "What We",
  titleHighlight: "Do",
  subtitle: "Six interconnected capabilities — one integrated supply operation serving the garment industry and beyond.",
};

export const capabilitiesList: Capability[] = [
  {
    number: "01",
    title: "Fabrics",
    description: "Sourcing and supply of high-grade woven, knit, and technical textiles across varied weights, structures, and specialized fiber compositions.",
    imageUrl: fabricsImg,
  },
  {
    number: "02",
    title: "Defence Uniform",
    description: "Heavy-duty tactical apparel, camouflage textiles, and rugged institutional gear engineered to meet strict military and defence performance criteria.",
    imageUrl: defenceUniformImg,
  },
  {
    number: "03",
    title: "Women Lingerie",
    description: "Delicate intimate apparel, French lace trims, seamless sleepwear, and premium bodywear engineered with advanced comfort fit technologies.",
    imageUrl: womenLingerieImg,
  },
  {
    number: "04",
    title: "Men Undergarments",
    description: "Ultra-breathable ergonomic intimates, fine combed cotton briefs, and luxury modal loungewear designed for daily performance and durability.",
    imageUrl: menLingerieImg,
  },
  {
    number: "05",
    title: "Badges",
    description: "High-precision embroidered, woven, high-density silicone, and embossed leather badges and patches for brand identity and uniforms.",
    imageUrl: badgesImg,
  },
  {
    number: "06",
    title: "Polyester & Plastic",
    description: "Engineered polyester buttons, polymer cord-locks, technical plastic toggles, and eco-certified recycled accessories for modern apparel.",
    imageUrl: polyesterPlasticImg,
  },
];
