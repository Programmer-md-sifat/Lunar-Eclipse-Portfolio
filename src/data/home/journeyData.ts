export interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

export const companyJourneyData: JourneyStep[] = [
  {
    number: "01",
    title: "Established Business",
    description: "Lunar Eclipse International establishes operations as a trading and manufacturing company.",
  },
  {
    number: "02",
    title: "International Trading",
    description: "Trading activities connect suppliers, manufacturers and buyers across markets.",
  },
  {
    number: "03",
    title: "Garment Industry Support",
    description: "Backward-linkage services support the 100% export-oriented readymade garment industry with fabrics, trims, logistics and technical support.",
  },
  {
    number: "04",
    title: "International Market Expansion",
    description: "Business activity extends across Bangladesh, Cambodia, China, India, Pakistan and Vietnam — with emerging-market reach into Ethiopia, Mauritius, Myanmar and Turkey.",
  },
  {
    number: "05",
    title: "Diversified Supply Solutions",
    description: "The group broadens into government, defence, maritime and institutional supply: uniforms, rank badges, insignia and specialized procurement.",
  },
];
