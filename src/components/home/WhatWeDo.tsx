import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { capabilitiesList, whatWeDoHeaderData } from "../../data";

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
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white leading-none">
              {whatWeDoHeaderData.titleLine1} <span className="font-georgia font-normal text-[#dfb277]">{whatWeDoHeaderData.titleHighlight}</span>
            </h2>
          </div>
          
          <div className="max-w-md md:text-right">
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              {whatWeDoHeaderData.subtitle}
            </p>
          </div>
        </div>

        {/* Outer grid boundary box matching reference image precisely */}
        <div className="border border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y divide-x divide-white/10 overflow-hidden rounded-sm">
          {capabilitiesList.map((cap, index) => {
            return (
              <motion.div
                key={cap.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group relative min-h-[380px] sm:min-h-[420px] p-8 flex flex-col justify-between overflow-hidden"
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
                  <Link
                    to="/products"
                    aria-label={`Explore ${cap.title}`}
                    className="h-10 w-10 bg-[#dfb277] text-[#04070c] flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 rounded-[2px] shadow-lg hover:bg-white"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
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

