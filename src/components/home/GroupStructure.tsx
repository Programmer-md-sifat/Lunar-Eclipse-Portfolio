import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Globe, Sparkles } from "lucide-react";

interface GroupEntity {
  id: string;
  name: string;
  brandName?: string;
  location: string;
  description: string;
  url: string;
  tag: string;
  position: {
    // Relative position for large desktop constellation view
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    transform?: string;
  };
  // Angle for radial connector line in degrees
  angle: number;
}

const groupEntities: GroupEntity[] = [
  {
    id: "international-hq",
    name: "LE Confidential Womens",
    brandName: "The Lunar Eclipse",
    location: "BANGLADESH",
    description: "Trading & manufacturing support for the export-oriented garment industry.",
    url: "https://www.thelunareclipse.com/",
    tag: "Global Trading HQ",
    position: {
      top: "4%",
      left: "50%",
      transform: "translateX(-50%)",
    },
    angle: 270, // Top
  },
  {
    id: "international-ltd",
    name: "LE Confidential Mens",
    brandName: "Lunar Eclipse Guard",
    location: "BANGLADESH",
    description: "Specialized defence, uniform supply & maritime-sector requirements.",
    url: "https://www.lunareclipseguard.com/",
    tag: "Defence & Institutional",
    position: {
      top: "42%",
      right: "4%",
      transform: "translateY(-50%)",
    },
    angle: 15, // Right
  },
  {
    id: "hong-kong",
    name: "Lunar Eclipse 360 Degree Inceptions LTD",
    brandName: "Lunar Eclipse For Men",
    location: "HONG KONG SAR",
    description: "Bespoke apparel sourcing, offshore financing & international trade hub.",
    url: "https://www.lunareclipseformen.com/",
    tag: "Men's Apparel & Finance",
    position: {
      bottom: "4%",
      right: "12%",
    },
    angle: 65, // Bottom Right
  },
  {
    id: "wenzhou-china",
    name: "Lunar Eclipse Automotive Reintegrated Automation LTD",
    brandName: "Lunar Eclipse For Women",
    location: "WENZHOU · CHINA",
    description: "Fashion manufacturing, accessory supply chain & supply network hub.",
    url: "https://www.lunareclipseforwomen.com/",
    tag: "Women's Fashion & Supply",
    position: {
      bottom: "4%",
      left: "12%",
    },
    angle: 115, // Bottom Left
  },
  {
    id: "infotainment",
    name: "Lunar Eclipse Integrated Artistic Solution LTD",
    brandName: "Lunar Eclipse Book",
    location: "BANGLADESH",
    description: "Creative publications, intellectual literature, media & education.",
    url: "https://www.lunareclipsebook.com/",
    tag: "Publications & Media",
    position: {
      top: "42%",
      left: "4%",
      transform: "translateY(-50%)",
    },
    angle: 195, // Left
  },
];

export function GroupStructure() {
  const [hoveredEntity, setHoveredEntity] = useState<string | null>(null);

  return (
    <section
      id="group-structure-section"
      className="relative w-full bg-[#020509] py-24 sm:py-32 lg:py-40 text-white overflow-hidden border-t border-white/[0.05]"
      aria-label="The Lunar Eclipse Group Structure"
    >
      {/* Background Decorative Ambient Radial Lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[#dfb277]/[0.025] blur-[180px]" />
      <div className="pointer-events-none absolute left-[10%] top-1/4 h-[400px] w-[400px] rounded-full bg-blue-900/[0.02] blur-[140px]" />
      <div className="pointer-events-none absolute right-[10%] bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#dfb277]/[0.015] blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24 lg:mb-28">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.15]"
          >
            The <span className="font-georgia font-normal text-[#dfb277]">Lunar Eclipse</span> Group
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mt-5 max-w-2xl mx-auto"
          >
            A connected group of entities supporting international trading, manufacturing, and supply operations.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP CONSTELLATION / ORBITAL NETWORK VIEW (Visible on lg and above)   */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative w-full h-[720px] max-w-6xl mx-auto select-none">
          
          {/* Orbital Concentric Ring Lines (SVG Background) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Outer Orbit */}
            <div className="absolute w-[680px] h-[680px] rounded-full border border-white/[0.04]" />
            {/* Middle Orbit (Dashed) */}
            <div className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-[#dfb277]/[0.15] animate-[spin_120s_linear_infinite]" />
            {/* Inner Ring with Subtle Glow */}
            <div className="absolute w-[320px] h-[320px] rounded-full border border-white/[0.08] shadow-[0_0_60px_rgba(223,178,119,0.03)]" />
            
            {/* Dynamic Connecting Lines from Center Hub to Cards */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1152 720">
              <defs>
                <linearGradient id="orbitLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#dfb277" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              {/* Radial spoke lines to the 5 nodes */}
              {/* Top Node */}
              <line x1="576" y1="360" x2="576" y2="160" stroke="url(#orbitLineGrad)" strokeWidth="1" strokeDasharray="4 4" />
              {/* Right Node */}
              <line x1="576" y1="360" x2="860" y2="330" stroke="url(#orbitLineGrad)" strokeWidth="1" strokeDasharray="4 4" />
              {/* Bottom Right Node */}
              <line x1="576" y1="360" x2="780" y2="540" stroke="url(#orbitLineGrad)" strokeWidth="1" strokeDasharray="4 4" />
              {/* Bottom Left Node */}
              <line x1="576" y1="360" x2="372" y2="540" stroke="url(#orbitLineGrad)" strokeWidth="1" strokeDasharray="4 4" />
              {/* Left Node */}
              <line x1="576" y1="360" x2="292" y2="330" stroke="url(#orbitLineGrad)" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
          </div>

          {/* Central Glowing Lunar Eclipse Core Hub */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative group cursor-default"
            >
              {/* Pulsating Ambient Gold Aura */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#dfb277]/20 via-[#dfb277]/5 to-transparent blur-2xl group-hover:bg-[#dfb277]/30 transition-all duration-700" />
              
              {/* Center Core Circle Orb */}
              <div className="relative w-56 h-56 rounded-full bg-[#030710] border-2 border-[#dfb277]/80 shadow-[0_0_50px_rgba(223,178,119,0.25)] flex flex-col items-center justify-center p-20 text-center backdrop-blur-xl">
                {/* Core Brand Text */}
                <span className="font-editorial text-lg font-light tracking-[0.14em] text-white leading-tight whitespace-nowrap">
                  Lunar Eclipse
                </span>
                <span className="text-[10px] font-mono font-semibold tracking-[0.25em] text-[#dfb277] uppercase mt-3 whitespace-nowrap">
                  International Group
                </span>
              </div>
            </motion.div>
          </div>

          {/* 5 Orbiting Group Entity Interactive Cards */}
          {groupEntities.map((entity, index) => {
            const isHovered = hoveredEntity === entity.id;

            return (
              <div
                key={entity.id}
                style={{
                  position: "absolute",
                  top: entity.position.top,
                  bottom: entity.position.bottom,
                  left: entity.position.left,
                  right: entity.position.right,
                  transform: entity.position.transform,
                }}
                className="z-30"
              >
                <motion.a
                  href={entity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 * index }}
                  onMouseEnter={() => setHoveredEntity(entity.id)}
                  onMouseLeave={() => setHoveredEntity(null)}
                  className={`block w-[280px] p-5 rounded-2xl transition-all duration-400 group relative backdrop-blur-md ${
                    isHovered
                      ? "bg-[#050c1b] border-2 border-[#dfb277] shadow-[0_15px_40px_rgba(223,178,119,0.22)] -translate-y-1.5"
                      : "bg-[#030712]/90 border border-white/10 hover:border-[#dfb277]/60 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
                  }`}
                  aria-label={`Visit ${entity.name} (Opens in new tab)`}
                >
                  {/* Top Bar: External Link Icon */}
                  <div className="flex items-center justify-end gap-1.5 mb-2.5">
                    <span className="text-[8.5px] font-mono text-zinc-400 group-hover:text-[#dfb277] transition-colors">
                      VISIT
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#dfb277] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>

                  {/* Title & Brand Name */}
                  <h3 className="font-editorial text-lg font-light text-white group-hover:text-white transition-colors leading-snug">
                    {entity.name}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed group-hover:text-zinc-300 transition-colors">
                    {entity.description}
                  </p>

                  {/* Glowing Corner Accents */}
                  <div className={`absolute top-2 left-2 w-2 h-2 border-t border-l transition-colors duration-300 ${isHovered ? "border-[#dfb277]" : "border-white/10"}`} />
                  <div className={`absolute bottom-2 right-2 w-2 h-2 border-b border-r transition-colors duration-300 ${isHovered ? "border-[#dfb277]" : "border-white/10"}`} />
                </motion.a>
              </div>
            );
          })}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE & TABLET RESPONSIVE GRID (Visible below lg)                       */}
        {/* ========================================================================= */}
        <div className="lg:hidden flex flex-col items-center gap-8">
          
          {/* Central Core Circle on Mobile */}
          <div className="relative w-48 h-48 rounded-full bg-[#030712] border-2 border-[#dfb277]/80 shadow-[0_0_40px_rgba(223,178,119,0.15)] flex flex-col items-center justify-center p-6 text-center">
            <span className="font-editorial text-lg font-light tracking-[0.14em] text-white leading-tight whitespace-nowrap">
              Lunar Eclipse
            </span>
            <span className="text-[10px] font-mono font-semibold tracking-[0.25em] text-[#dfb277] uppercase mt-3 whitespace-nowrap">
              International Group
            </span>
          </div>

          {/* 5 Group Entity Cards Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {groupEntities.map((entity, index) => (
              <motion.a
                key={entity.id}
                href={entity.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl bg-[#030712] border border-white/10 hover:border-[#dfb277] hover:bg-[#050c1b] transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-end mb-3">
                    <ExternalLink className="w-4 h-4 text-zinc-400 group-hover:text-[#dfb277] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>

                  <h3 className="font-editorial text-xl font-light text-white group-hover:text-[#dfb277] transition-colors">
                    {entity.name}
                  </h3>

                  <p className="mt-2 text-xs text-zinc-400 font-light leading-relaxed">
                    {entity.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.08] flex items-center justify-end">
                  <span className="text-xs text-[#dfb277] font-mono flex items-center gap-1">
                    Visit Portal ↗
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02]">
            <Globe className="w-3.5 h-3.5 text-[#dfb277]" />
            <span className="text-xs text-zinc-400 font-light">
              Click any entity card to explore its official portal in a new tab
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
