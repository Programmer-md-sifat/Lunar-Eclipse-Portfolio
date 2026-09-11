import { motion } from "motion/react";
import { Globe, Package, Wrench, Network, Handshake, Boxes } from "lucide-react";

interface ReasonItem {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const reasons: ReasonItem[] = [
  {
    number: "01",
    title: "International Perspective",
    description: "Orientation toward international trading and manufacturing markets.",
    icon: Globe,
  },
  {
    number: "02",
    title: "Supply Expertise",
    description: "Working knowledge of fabrics, trims, logistics and manufacturing support.",
    icon: Package,
  },
  {
    number: "03",
    title: "Technical Support",
    description: "Capability that extends beyond simple product supply.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Global Connections",
    description: "Access to international sourcing and manufacturing networks.",
    icon: Network,
  },
  {
    number: "05",
    title: "Reliable Partnership",
    description: "Built around the company's long-standing \"loyal partner\" philosophy.",
    icon: Handshake,
  },
  {
    number: "06",
    title: "Diversified Capability",
    description: "Textile, trading, institutional and specialized supply under one group.",
    icon: Boxes,
  },
];

export function WhyLunarEclipse() {
  return (
    <section
      id="why-lunar-eclipse-section"
      className="relative w-full bg-[#020509] py-24 sm:py-28 lg:py-36 text-white overflow-hidden border-t border-white/[0.05]"
      aria-label="Why Work With Us"
    >
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute right-[-10%] top-1/3 h-[500px] w-[500px] rounded-full bg-[#dfb277]/[0.015] blur-[150px]" />
      <div className="pointer-events-none absolute left-[-10%] bottom-1/3 h-[500px] w-[500px] rounded-full bg-blue-900/[0.02] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-[1.1]">
            Why Work With <span className="font-georgia font-normal text-[#dfb277]">Us?</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-xl mt-5">
            Six reasons international buyers, manufacturers and institutions choose to work with the group.
          </p>
        </div>

        {/* Elegant Flat Grid Layout with Inside Borders */}
        <div className="border border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            
            // Build visual boundaries like a master grid
            const borderClasses = `
              p-8 sm:p-10 lg:p-12 relative group transition-all duration-500 hover:bg-[#040915] min-h-[260px] flex flex-col justify-between
              ${index < 3 ? "lg:border-b lg:border-white/10" : ""}
              ${index < 4 ? "md:border-b md:border-white/10" : ""}
              ${index % 3 !== 2 ? "lg:border-r lg:border-white/10" : ""}
              ${index % 2 !== 1 ? "md:border-r md:border-white/10" : ""}
              ${index > 0 ? "border-t border-white/10 md:border-t-0" : ""}
            `.trim();

            return (
              <motion.div
                key={reason.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={borderClasses}
              >
                {/* Top Row: Mini Number & Visual Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest text-[#dfb277]/60 group-hover:text-[#dfb277] transition-colors duration-300">
                    {reason.number}
                  </span>
                  
                  <div className="p-2 rounded-full border border-white/5 bg-white/[0.01] text-zinc-400 group-hover:text-[#dfb277] group-hover:border-[#dfb277]/30 group-hover:bg-[#dfb277]/5 transition-all duration-500">
                    <IconComponent className="w-5 h-5 stroke-[1.25]" />
                  </div>
                </div>

                {/* Bottom Row: Content Details */}
                <div className="mt-12 sm:mt-16">
                  <h3 className="font-editorial text-xl sm:text-2xl font-light tracking-tight text-white group-hover:text-[#dfb277] transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 font-light mt-3 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {reason.description}
                  </p>
                </div>

                {/* Subtle Interactive corner accents inside */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-transparent group-hover:border-[#dfb277] transition-colors duration-300" />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-transparent group-hover:border-[#dfb277] transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
