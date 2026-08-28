import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface Capability {
  number: string;
  title: string;
  description: string;
  imageUrl: string;
}

const CAPABILITIES: Capability[] = [
  {
    number: "01",
    title: "Thread's for Sewing & Decoration",
    description: "Premium selection of high-tenacity sewing threads, embroidery threads, and decorative yarns designed for high-speed industrial manufacturing.",
    imageUrl: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "02",
    title: "Defence Uniform & Accessories",
    description: "Heavy-duty, tactical apparel fabrics, camouflage textiles, and rugged gear trims engineered to withstand rigorous military and security performance criteria.",
    imageUrl: "https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "03",
    title: "Mens Lingerie",
    description: "Ultra-breathable, ergonomic intimate apparel, briefs, and sophisticated loungewear fabricated from premium combed cotton, fine modal, and soft silk blends.",
    imageUrl: "https://images.unsplash.com/photo-1582845512747-e426d1fc95f0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "04",
    title: "Womens Lingerie",
    description: "Delicate, elegant sleepwear, lace intimates, and premium bodywear featuring soft French lace, fine satins, and advanced seamless comfort fit technologies.",
    imageUrl: "https://images.unsplash.com/photo-1616150638538-ffb0679a3fc4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "05",
    title: "Fabric's of Any Density & Composition",
    description: "Sourcing and supply of high-grade woven, knit, and technical textiles of varied weights, structures, and fiber compositions to match precise brand nominations.",
    imageUrl: "https://images.unsplash.com/photo-1584184924103-e310d9dc82fc?auto=format&fit=crop&w=1200&q=80",
  },
  {
    number: "06",
    title: "Badges & Patches",
    description: "Exquisite embroidered, woven, silicone, and leather patches and badges that elevate branding with precise dimensional craftsmanship.",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
  },
];

export function WhatWeDo() {
  return (
    <section
      id="what-we-do-section"
      className="relative w-full bg-[#04070c] py-24 sm:py-28 lg:py-36 text-white overflow-hidden"
      aria-label="What We Do - Our Core Business"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-20">
          <div className="flex flex-col">
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase flex items-center gap-2">
              <span className="opacity-60">02</span>
              <span className="h-[1px] w-4 bg-[#dfb277]/60" />
              OUR CORE BUSINESS
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mt-4 leading-none">
              What We <span className="font-georgia italic font-normal text-[#dfb277]">Do</span>
            </h2>
          </div>
          
          <div className="max-w-md md:text-right">
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Six interconnected capabilities — one integrated supply operation serving the garment industry and beyond.
            </p>
          </div>
        </div>

        {/* Outer grid boundary box matching reference image precisely */}
        <div className="border border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y divide-x divide-white/10 overflow-hidden rounded-sm">
          {CAPABILITIES.map((cap, index) => {
            // Need to adjust standard CSS grid border-collapse so we don't get double borders
            return (
              <motion.div
                key={cap.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative min-h-[380px] sm:min-h-[420px] p-8 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Background Image with Dark Vignette Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={cap.imageUrl}
                    alt={cap.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
                  />
                  {/* Precise dark rich overlay mimicking reference screenshot */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04070c] via-[#04070c]/85 to-[#04070c]/55 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-[#04070c]/40 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Card Content - Top Section */}
                <div className="relative z-10 flex items-start justify-between">
                  <span className="font-mono text-xs tracking-widest text-[#dfb277]/80 font-semibold">
                    {cap.number}
                  </span>
                  
                  {/* Hover Accent Action Box */}
                  <div className="h-10 w-10 bg-[#dfb277] text-[#04070c] flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 rounded-[2px] shadow-lg">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                {/* Card Content - Bottom Section */}
                <div className="relative z-10 flex flex-col">
                  {/* Gold Divider Line */}
                  <div className="w-12 h-[1.5px] bg-[#dfb277] mb-5 transform origin-left transition-all duration-300 group-hover:w-20" />
                  
                  {/* Card Title */}
                  <h3 className="font-editorial text-2xl sm:text-3xl font-light tracking-tight text-white mb-3 group-hover:text-[#dfb277] transition-colors duration-300 leading-snug">
                    {cap.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-sm line-clamp-3 group-hover:text-zinc-300 transition-colors duration-300">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
