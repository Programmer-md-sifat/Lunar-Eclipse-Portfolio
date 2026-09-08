export interface ClientBrand {
  id: string;
  name: string;
  category: "Fast Fashion" | "Premium & Lifestyle" | "Sportswear & Outdoor" | "Department & Chains";
  country: string;
  headquarters: string;
  partnershipSince: string;
  sourcedCategories: string[];
  description: string;
  featured?: boolean;
}

export interface ClientCategoryFilter {
  id: string;
  label: string;
  count: number;
}

export interface ClientHeroData {
  sectionNumber: string;
  badge: string;
  title: string;
  titleHighlight: string;
  description: string;
}

export const clientHeroData: ClientHeroData = {
  sectionNumber: "01",
  badge: "GLOBAL CLIENT PORTFOLIO & NOMINATIONS",
  title: "Trusted by the World's Leading",
  titleHighlight: "Fashion Houses & Retailers",
  description:
    "For over two decades, Lunar Eclipse International has served as the nominated manufacturing and sourcing partner for global retail conglomerates, European fashion brands, and international department chains.",
};

export const clientMetrics = [
  { value: "18+", label: "Global Multinational Brands", subtext: "Tier-1 Nominated Vendor" },
  { value: "25M+", label: "Garments & Trims Shipped", subtext: "Annual Export Volume" },
  { value: "14", label: "Export Destination Markets", subtext: "Across EU, UK, USA & Asia" },
  { value: "99.4%", label: "On-Time Delivery Rate", subtext: "AQL 1.5 Quality Compliance" },
];

export const clientCategories: ClientCategoryFilter[] = [
  { id: "all", label: "All Global Clients", count: 18 },
  { id: "Fast Fashion", label: "Fast Fashion & Apparel", count: 7 },
  { id: "Premium & Lifestyle", label: "Premium & Lifestyle", count: 4 },
  { id: "Sportswear & Outdoor", label: "Sportswear & Outdoor", count: 2 },
  { id: "Department & Chains", label: "Department & Chains", count: 5 },
];

export const clientBrandsList: ClientBrand[] = [
  {
    id: "1xqivOJAAstqtCE34vSZycHwcqoZZ9K-h",
    name: "G-Star RAW",
    category: "Premium & Lifestyle",
    country: "Netherlands",
    headquarters: "Amsterdam, Netherlands",
    partnershipSince: "2018",
    sourcedCategories: ["Raw Denim", "Heavyweight Cotton", "Custom Metal Hardware", "Specialty Washes"],
    description: "Nominated supplier for premium raw denim weaves, specialized selvedge finishes, and bespoke matte black metal shank buttons.",
    featured: true,
  },
  {
    id: "1eqVHVQKGyOGAzcGk3NiqmYsUMxmjUQM7",
    name: "Zara",
    category: "Fast Fashion",
    country: "Spain",
    headquarters: "Arteixo, Spain",
    partnershipSince: "2015",
    sourcedCategories: ["Circular Knits", "Fast-Turn Tops", "Womenswear Fabrics", "Eco-Viscose Blends"],
    description: "High-velocity manufacturing partner delivering rapid-turnaround seasonal collections, circular knits, and sustainable cellulose blends.",
    featured: true,
  },
  {
    id: "17f-FFmpLYu253rJrrw0XGlBJBtjPYcv-",
    name: "Pull & Bear",
    category: "Fast Fashion",
    country: "Spain",
    headquarters: "Narón, Spain",
    partnershipSince: "2016",
    sourcedCategories: ["Streetwear Hoodies", "Casual Chinos", "Graphic Jersey", "Engineered Trims"],
    description: "Primary backward-linkage supplier for youth streetwear collections, heavyweight fleece hoodies, and dyed casual twill bottoms.",
    featured: false,
  },
  {
    id: "1uLAOfXIAkSCpO_DjWuxlqT6HGlR0Ba6_",
    name: "Mango",
    category: "Fast Fashion",
    country: "Spain",
    headquarters: "Barcelona, Spain",
    partnershipSince: "2017",
    sourcedCategories: ["Tailored Blouses", "Fine Woven Linings", "Structured Outerwear", "Dobby Fabrics"],
    description: "Sourcing partner for sophisticated European womenswear fabrics, tailored woven separates, and OEKO-TEX certified lining textiles.",
    featured: true,
  },
  {
    id: "1MoNPj8XBRndxMG_0g0VYLSlfJjbV6_pq",
    name: "Jack & Jones",
    category: "Fast Fashion",
    country: "Denmark",
    headquarters: "Brande, Denmark",
    partnershipSince: "2016",
    sourcedCategories: ["Mens Denim", "Casual Polo Knits", "Workwear Shirts", "Polyester Zippers"],
    description: "Long-standing manufacturing partner for men's casual essentials, garment-dyed twill pants, and heavy-duty polymer zippers.",
    featured: false,
  },
  {
    id: "1AFuRkudG0Wf1lLOjsUk3iyGYuMV8cNEb",
    name: "Tommy Hilfiger",
    category: "Premium & Lifestyle",
    country: "United States",
    headquarters: "Amsterdam / New York",
    partnershipSince: "2019",
    sourcedCategories: ["Combed Cotton Piqué", "Striped Wovens", "Embroidered Crest Badges", "Organic Jersey"],
    description: "Nominated supplier for fine combed cotton piqué polos, signature tape trims, and high-density precision embroidered crest badges.",
    featured: true,
  },
  {
    id: "12wVYG-CDuxS1qRN2cZxdSIfP7GjNQ2wr",
    name: "Calvin Klein",
    category: "Premium & Lifestyle",
    country: "United States",
    headquarters: "New York, USA",
    partnershipSince: "2018",
    sourcedCategories: ["Modal Intimates", "Ergonomic Waistbands", "Seamless Underwear", "Fine Rib Knits"],
    description: "Key development partner for ultra-breathable intimate apparel, customized woven jacquard elastics, and luxury modal loungewear.",
    featured: true,
  },
  {
    id: "1vWpjnQeMTmFEYHo5D0x255y9IHEYrB33",
    name: "Uniqlo",
    category: "Fast Fashion",
    country: "Japan",
    headquarters: "Tokyo, Japan",
    partnershipSince: "2020",
    sourcedCategories: ["Technical Basics", "Supima Cotton T-Shirts", "Anti-Pilling Fleece", "Fine Gauge Knits"],
    description: "Precision supplier adhering to Japanese zero-defect quality thresholds for everyday LifeWear essentials and high-tenacity sewing threads.",
    featured: true,
  },
  {
    id: "1RydntMalc5q6FOLkrcUKfKFOulGqlrZT",
    name: "H&M",
    category: "Fast Fashion",
    country: "Sweden",
    headquarters: "Stockholm, Sweden",
    partnershipSince: "2014",
    sourcedCategories: ["GOTS Organic Cotton", "Circular Knits", "Recycled Polyester Trims", "Basic Jersey"],
    description: "Strategic high-volume vendor providing organic cotton basics, BSCI-audited production, and circular closed-loop material sourcing.",
    featured: true,
  },
  {
    id: "1cqJD5J4BOBnDRm-9Z-MGY5ZpKQew8G57",
    name: "Next",
    category: "Department & Chains",
    country: "United Kingdom",
    headquarters: "Leicestershire, UK",
    partnershipSince: "2015",
    sourcedCategories: ["Formal Shirting", "Childrenswear Twills", "Suit Linings", "Corozo & Horn Buttons"],
    description: "Tier-1 nominated British retail partner delivering formal poplin shirting, durable childrenswear fabrics, and premium suit trims.",
    featured: true,
  },
  {
    id: "1qQJ-FP3TFCjecbP17SAU_D-D5uzK9Vhf",
    name: "Lindex",
    category: "Fast Fashion",
    country: "Sweden",
    headquarters: "Gothenburg, Sweden",
    partnershipSince: "2017",
    sourcedCategories: ["Women Lingerie", "French Lace Trims", "Soft Bamboo Loungewear", "Maternity Intimates"],
    description: "Dedicated Nordic intimates vendor delivering OEKO-TEX Standard 100 certified lingerie, delicate French lace trims, and maternity wear.",
    featured: false,
  },
  {
    id: "16Ua3xOZmZyoJLGbqD9xHucmKnqgVVH2i",
    name: "Puma",
    category: "Sportswear & Outdoor",
    country: "Germany",
    headquarters: "Herzogenaurach, Germany",
    partnershipSince: "2019",
    sourcedCategories: ["Moisture-Wicking Poly", "Seamless Leggings", "High-Density Silicone Badges", "Athletic Trims"],
    description: "Technical sportswear manufacturing partner delivering dryCELL moisture-wicking textiles and 3D dimensional silicone brand patches.",
    featured: true,
  },
  {
    id: "1s1FkgMh_PcqZxrF3vOm_Urc_5DcIywBP",
    name: "Decathlon",
    category: "Sportswear & Outdoor",
    country: "France",
    headquarters: "Villeneuve-d'Ascq, France",
    partnershipSince: "2018",
    sourcedCategories: ["Technical Ripstop", "Outdoor Jackets", "Waterproof Zippers", "Cord-Locks & Buckles"],
    description: "High-volume multisport equipment and apparel partner supplying UV-resistant technical ripstop fabrics and waterproof polymer trims.",
    featured: false,
  },
  {
    id: "1-etgNMoYp-RcTzS-80CrBEuegwyAsXYK",
    name: "Carrefour",
    category: "Department & Chains",
    country: "France",
    headquarters: "Massy, France",
    partnershipSince: "2016",
    sourcedCategories: ["Private Label Apparel", "Basic Knits", "Underwear Packs", "Packaging & Barcoding"],
    description: "European hypermarket supplier managing private-label textile programs, pre-barcoded retail packs, and direct-to-distribution center logistics.",
    featured: false,
  },
  {
    id: "1vZKuwTpH_4VLnJbOOhBBGDQ9FC1kSDIb",
    name: "Primark",
    category: "Department & Chains",
    country: "Ireland",
    headquarters: "Dublin, Ireland",
    partnershipSince: "2015",
    sourcedCategories: ["High-Volume Casualwear", "Cotton T-Shirts", "Sleepwear Knits", "Basic Accessories"],
    description: "Mass-scale ethical production partner executing high-efficiency volume runs with strict Sedex SMETA compliance and competitive landed costs.",
    featured: false,
  },
  {
    id: "1HMtOv6EUN14VhuqQGAVkQrS90rcVT6X7",
    name: "Marks & Spencer",
    category: "Department & Chains",
    country: "United Kingdom",
    headquarters: "London, UK",
    partnershipSince: "2013",
    sourcedCategories: ["Fine Supima Underwear", "Formal Non-Iron Shirting", "Lingerie Sets", "Bullion Epaulettes"],
    description: "Heritage UK client collaboration spanning fine combed cotton intimates, easy-care shirting, and luxury ceremonial institutional embellishments.",
    featured: true,
  },
  {
    id: "1N_6csoDD1JY9doTlQ2Z9ERXzFQjkqHqr",
    name: "ASOS",
    category: "Fast Fashion",
    country: "United Kingdom",
    headquarters: "London, UK",
    partnershipSince: "2019",
    sourcedCategories: ["Trend Capsule Collections", "Heavyweight Jersey", "Bespoke Wash Denim", "Custom Badges"],
    description: "Fast-track e-commerce supplier providing 14-day rapid sample development and short-run capsule manufacturing for global youth trends.",
    featured: false,
  },
  {
    id: "1iTRF4cvgvgjLCkg_5fXKdegVbyQq2622",
    name: "Target",
    category: "Department & Chains",
    country: "United States",
    headquarters: "Minneapolis, USA",
    partnershipSince: "2018",
    sourcedCategories: ["Private Label Loungewear", "Family Basics", "Organic Cotton Sleepwear", "Poly Buttons"],
    description: "US retail partner providing GOTS-certified family sleepwear, sustainable recycled polyester buttons, and full AQL 1.5 final inspections.",
    featured: true,
  },
];

export const partnershipModels = [
  {
    number: "01",
    title: "Nominated Supplier Status",
    subtitle: "Direct Mill & Trims Nomination",
    description:
      "We operate as the officially nominated supplier for global brand headquarters, providing lab-dip approvals, certified trims, and standardized fabric specs directly to their designated cut-and-sew factories worldwide.",
  },
  {
    number: "02",
    title: "Full-Package OEM / ODM Manufacturing",
    subtitle: "From Yarn to Pre-Packed Store Delivery",
    description:
      "Complete end-to-end manufacturing solutions including tech pack grading, raw yarn spinning, precision computerized cutting, sewing, wash treatment, barcoding, and CIF/DDP international delivery.",
  },
  {
    number: "03",
    title: "Fast-Track Capsule Prototyping",
    subtitle: "Rapid 7-Day Lab Dips & Sample Rooms",
    description:
      "Dedicated agile sampling lines engineered for fast-fashion houses and online retailers needing rapid trend replication, 7-day lab dip turnarounds, and low-MOQ test run validation.",
  },
  {
    number: "04",
    title: "Institutional & Defence Procurement",
    subtitle: "Strict Mil-Spec Tolerances & NDA Security",
    description:
      "High-security production lines dedicated to government defense ministries, military tactical camouflage uniforms, bullion heraldic rank badges, and aviation carrier contracts.",
  },
];
