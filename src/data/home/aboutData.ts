export interface AboutStat {
  targetValue: number;
  suffix: string;
  label: string;
}

export interface AboutSectionData {
  badge: string;
  number: string;
  title: string;
  titleItalic: string;
  mainTextPart1: string;
  mainTextItalic: string;
  mainTextPart2: string;
  supportingText: string;
  stats: AboutStat[];
}

export interface QuoteData {
  badge: string;
  quoteText: string;
  highlightedPhrase: string;
  supportingText?: string;
  continuationText?: string;
  author: string;
  role?: string;
  organization: string;
}

export const homeAboutData: AboutSectionData = {
  badge: "ABOUT LUNAR ECLIPSE",
  number: "01",
  title: "Built Around",
  titleItalic: "Partnership.",
  mainTextPart1: "Lunar Eclipse International operates as a trading and manufacturing company, providing ",
  mainTextItalic: "backward-linkage services",
  mainTextPart2: " to the 100% export-oriented readymade garment industry.",
  supportingText: "The company supplies fabrics, trims, logistics support, technical support and trading solutions — engaging through direct or indirect nominations from renowned international brands and companies. Business activity spans Bangladesh, Cambodia, China, India, Pakistan and Vietnam, with expansion into Ethiopia, Mauritius, Myanmar and Turkey.",
  stats: [
    {
      targetValue: 10,
      suffix: "+",
      label: "YEARS EXPERIENCE",
    },
    {
      targetValue: 6,
      suffix: "+",
      label: "CORE PILLARS",
    },
    {
      targetValue: 5,
      suffix: "+",
      label: "GROUP ENTITIES",
    },
  ],
};

export const homeQuoteData: QuoteData = {
  badge: "THE MD'S PHILOSOPHY",
  quoteText: "\"We build sustainable business relationships",
  highlightedPhrase: " — not one-time transactions.\"",
  supportingText:
    "For us, every business relationship is an opportunity to create lasting value, earn trust, and grow together. We believe that successful partnerships are built through commitment, transparency, and consistent delivery.",
  author: "Mohammad Saidur Rahman",
  role: "Managing Director",
  organization: "Lunar Eclipse International Group",
};
