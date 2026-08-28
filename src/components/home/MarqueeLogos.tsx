import { motion } from "motion/react";

const PARTNERS = [
  { name: "BANGLADESH OFFICE", type: "Sourcing & Logistics" },
  { name: "CAMBODIA LOGISTICS", type: "Forward Linkage" },
  { name: "CHINA MANUFACTURING", type: "Technical Support" },
  { name: "VIETNAM PRODUCTION", type: "Export Operations" },
  { name: "TURKEY SOURCING", type: "Global Supply" },
  { name: "ETHIOPIA TEXTILES", type: "Emerging Markets" },
  { name: "MAURITIUS SUPPLY", type: "Institutional Procurement" },
  { name: "GERMANY LOGISTICS", type: "Europe Hub" },
  { name: "INDIA MERCHANDISING", type: "Fabric Sourcing" },
  { name: "PORTUGAL WEAVING", type: "Premium Yarn" },
];

export function MarqueeLogos() {
  // Duplicate partners to ensure continuous seamless loop
  const duplicatedPartners = [...PARTNERS, ...PARTNERS, ...PARTNERS];

  return (
    <section
      id="marquee-logos-section"
      className="relative w-full overflow-hidden bg-[#020509] py-14 sm:py-16 border-y border-white/[0.05]"
      aria-label="Global Sourcing Partners & Hubs"
    >
      {/* Self-contained CSS for high performance infinite hardware-accelerated marquee */}
      <style>{`
        @keyframes marquee-slide {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee-slide 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#020509] via-transparent to-[#020509] z-10" />

      <div className="relative w-full">
        {/* Infinite scrolling wrapper */}
        <div className="overflow-hidden">
          <div className="animate-marquee">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center mx-8 sm:mx-12 lg:mx-16 whitespace-nowrap group"
              >
                {/* Decorative Diamond Dot */}
                <span className="inline-block h-2 w-2 rotate-45 bg-[#dfb277]/40 group-hover:bg-[#dfb277] group-hover:scale-125 transition-all duration-300 mr-8 sm:mr-12 lg:mr-16" />
                
                {/* Text Content */}
                <div className="flex flex-col text-left">
                  <span className="font-editorial text-lg sm:text-xl font-light text-white/80 tracking-widest group-hover:text-white transition-colors duration-300">
                    {partner.name}
                  </span>
                  <span className="text-[9px] font-mono tracking-widest text-[#dfb277]/60 group-hover:text-[#dfb277]/90 uppercase mt-0.5 transition-colors duration-300">
                    {partner.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
