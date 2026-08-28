export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  title: string;
  tagline: string;
  description: string;
}

export interface HeroContent {
  titlePart1: string;
  titleItalic: string;
  titlePart2: string;
  description: string;
  primaryCta: {
    label: string;
    link: string;
  };
  secondaryCta: {
    label: string;
    link: string;
  };
  slides: HeroSlide[];
}

export const heroData: HeroContent = {
  titlePart1: "Commitment ",
  titleItalic: "Eclipsed",
  titlePart2: " & Delivered!",
  description:
    "A global buying house and supply solutions company delivering fabrics, trims, uniforms, rank badges and insignia, logistics, sourcing and specialized institutional products across international markets.",
  primaryCta: {
    label: "EXPLORE OUR BUSINESS",
    link: "/services",
  },
  secondaryCta: {
    label: "WORK WITH US",
    link: "/contact",
  },
  slides: [
    {
      id: "slide-tailoring-craft",
      image:
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=2400&q=90",
      alt: "Atelier design studio with tailoring patterns, precision fabric cutting and garment construction",
      title: "Precision Tailoring & Garments",
      tagline: "Industrial Tailoring & Stitching",
      description: "Automated sewing lines, precision garment construction, and institutional uniform craft.",
    },
    {
      id: "slide-textile-loom",
      image:
        "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=2400&q=90",
      alt: "Flowing luxury woven silk textiles, fine yarn textures and premium fabric swatches",
      title: "Material Sourcing & Fabrics",
      tagline: "Global Textile Procurement",
      description: "Direct mill procurement of high-GSM woven fabrics, trims, yarns, and specialized textiles.",
    },
    {
      id: "slide-ocean-freight",
      image:
        "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=2400&q=90",
      alt: "Intercontinental container cargo vessel navigating ocean trade lanes at sunset",
      title: "International Supply Chain",
      tagline: "Maritime & Air Freight Logistics",
      description: "End-to-end cargo logistics, customs clearing, and direct intercontinental delivery corridors.",
    },
  ],
};



