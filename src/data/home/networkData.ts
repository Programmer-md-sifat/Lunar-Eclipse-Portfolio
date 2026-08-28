export interface NetworkNode {
  id: string;
  name: string;
  code: string;
  country: string;
  city: string;
  coordinates: [number, number]; // [longitude, latitude]
  role: string;
  specialty: string;
  type: "hub" | "active" | "partner";
  tradeType: string;
  transitTime: string;
  volumeShare: string;
  details: string;
  established: string;
}

export interface NetworkRoute {
  id: string;
  from: string;
  to: string;
  label: string;
  leadTime: string;
  transportMode: string;
  tradeType: string;
  volume: string;
}

export interface GlobalNetworkData {
  badge: string;
  titlePart1: string;
  titleItalic: string;
  titlePart2: string;
  subtitle: string;
  hubName: string;
  coordinates: string;
  nodes: NetworkNode[];
  routes: NetworkRoute[];
}

export const globalNetworkData: GlobalNetworkData = {
  badge: "MARKETS & MANUFACTURING NETWORK — GLOBAL SOURCING CORRIDORS",
  titlePart1: "Global Reach. ",
  titleItalic: "Local",
  titlePart2: " Understanding.",
  subtitle:
    "Integrated sourcing, high-capacity apparel manufacturing, and direct trade corridors linking our Dhaka primary hub to key material and precision machinery partners worldwide.",
  hubName: "HUB — BANGLADESH",
  coordinates: "90.41° E · 23.81° N — DHAKA",
  nodes: [
    {
      id: "bangladesh",
      name: "BANGLADESH",
      code: "DAC",
      country: "Bangladesh",
      city: "Dhaka",
      coordinates: [90.4125, 23.8103],
      role: "Primary Global Manufacturing & Export Hub",
      specialty: "High-Volume Apparel, Woven & Knitwear, Institutional Uniforms & Military Insignia",
      type: "hub",
      tradeType: "Central Production & Global Export",
      transitTime: "Primary Assembly Origin",
      volumeShare: "Central Hub",
      details:
        "Central export headquarters overseeing certified industrial garment manufacturing facilities, automated cutting ateliers, and multi-tier quality assurance laboratories.",
      established: "1998",
    },
    {
      id: "china",
      name: "CHINA",
      code: "PVG",
      country: "China",
      city: "Shanghai / Guangzhou",
      coordinates: [118.5, 31.2],
      role: "Textiles, High-GSM Wovens & Custom Hardware",
      specialty: "Technical Fabrics, Luxury Zippers, Molded Buttons, Synthetic Blends & Trims",
      type: "active",
      tradeType: "Hardware, Trims & Specialized Fabrics",
      transitTime: "3–5 Days Sea / Air",
      volumeShare: "38% Trims & Raw Fabrics",
      details:
        "Direct mill partnerships securing high-tenacity woven fabrics, premium metal accessories, and custom packaging for seamless manufacturing integration.",
      established: "2004",
    },
    {
      id: "japan",
      name: "JAPAN",
      code: "NRT",
      country: "Japan",
      city: "Tokyo / Osaka",
      coordinates: [139.6917, 35.6895],
      role: "High-Tech Fibers & Advanced Dyestuffs",
      specialty: "Microfiber Innovations, Eco-Dyestuffs, High-Performance Moisture Wicking",
      type: "active",
      tradeType: "Performance Polymers & Technical Chemistry",
      transitTime: "4–6 Days Express Air",
      volumeShare: "14% Technical Ingest",
      details:
        "Strategic technological alliance providing high-performance water-repellent coatings, bio-synthetic threads, and OEKO-TEX Eco-Passport certified dyes.",
      established: "2011",
    },
    {
      id: "germany",
      name: "GERMANY",
      code: "FRA",
      country: "Germany",
      city: "Frankfurt / Hamburg",
      coordinates: [9.5, 51.0],
      role: "Precision Engineering & European Distribution",
      specialty: "Industrial Machinery Calibration, EU Compliance Verification & Direct Logistics",
      type: "active",
      tradeType: "Finished Garment Distribution & Tech Audits",
      transitTime: "Express Cargo & Direct Sea Transit",
      volumeShare: "Central European Gateway",
      details:
        "European compliance headquarters overseeing CE/ISO quality benchmarks, retail distribution logistics, and automated machinery servicing.",
      established: "2008",
    },
    {
      id: "pakistan",
      name: "PAKISTAN",
      code: "KHI",
      country: "Pakistan",
      city: "Karachi / Lahore",
      coordinates: [68.0, 27.5],
      role: "Raw Cotton & Heavy Twill Procurement",
      specialty: "Long-Staple Combed Cotton, Greige Yarn, Heavy Duty Twill & Denim Base",
      type: "active",
      tradeType: "Natural Fibers & Denim Greige",
      transitTime: "2–4 Days Dedicated Freight",
      volumeShare: "22% Natural Fiber Ingest",
      details:
        "Direct agricultural and spinning mill sourcing ensuring continuous, high-grade organic cotton supplies and heavy-duty twill weaves for industrial uniforms.",
      established: "2006",
    },
  ],
  routes: [
    {
      id: "bd-china",
      from: "bangladesh",
      to: "china",
      label: "Fabric & Trims Corridor",
      leadTime: "3–5 Days Sea/Air",
      transportMode: "Maritime & Air Cargo",
      tradeType: "Hardware, Trims & Specialized Fabrics",
      volume: "High-Frequency Daily Inbound",
    },
    {
      id: "bd-japan",
      from: "bangladesh",
      to: "japan",
      label: "Technical Fiber Link",
      leadTime: "4–6 Days Air Express",
      transportMode: "Dedicated Air Freight",
      tradeType: "Performance Polymers & Bio-Dyes",
      volume: "Bi-Weekly Specialized Shipments",
    },
    {
      id: "bd-germany",
      from: "bangladesh",
      to: "germany",
      label: "EU Export & Standards Gateway",
      leadTime: "Direct Maritime & Air Express",
      transportMode: "Multi-Modal Intercontinental",
      tradeType: "Finished Garments & Compliance QA",
      volume: "Continuous Export Stream",
    },
    {
      id: "bd-pakistan",
      from: "bangladesh",
      to: "pakistan",
      label: "Raw Cotton & Twill Corridor",
      leadTime: "2–4 Days Direct Transit",
      transportMode: "Dedicated Coastal & Freight Express",
      tradeType: "Organic Cotton Yarns & Denim Fabric",
      volume: "Scheduled Bulk Ingest",
    },
  ],
};
