import { motion } from "motion/react";
import { companyJourneyData } from "../../data/home/journeyData";

export function CompanyJourney() {
  return (
    <section
      id="company-journey-section"
      className="relative w-full overflow-hidden bg-[#04070c] pt-12 sm:pt-16 lg:pt-20 pb-24 sm:pb-28 lg:pb-36 text-white"
      aria-label="Company Journey Timeline"
    >
      {/* Visual background details */}
      <div className="pointer-events-none absolute -right-48 top-1/4 h-[500px] w-[500px] rounded-full border border-white/[0.02] opacity-30" />
      <div className="pointer-events-none absolute -left-32 bottom-12 h-[600px] w-[600px] rounded-full border border-white/[0.01] opacity-20" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white">
            Company <span className="font-georgia text-[#dfb277]">Journey</span>
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Central Vertical Line (hidden on small screen, showing on md+) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

          {/* Steps list */}
          <div className="space-y-16 md:space-y-24">
            {companyJourneyData.map((step, index) => {
              const isEven = index % 2 === 1; // index 0, 2, 4 are left; 1, 3 are right
              
              return (
                <motion.div
                  key={step.number}
                  id={`journey-step-${index + 1}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`relative flex flex-col md:flex-row items-stretch ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Left Side (or right side depending on index) */}
                  <div className={`w-full md:w-1/2 flex flex-col justify-center ${
                    isEven
                      ? "pl-12 pr-0 md:pl-16 md:pr-0"
                      : "pl-12 pr-0 md:pr-16 md:pl-0"
                  }`}>
                    <div className={`flex flex-col ${isEven ? "md:items-start text-left" : "md:items-end md:text-right"}`}>
                      {/* Step Number & Title */}
                      <div className={`flex items-baseline gap-3 mb-2 ${isEven ? "" : "md:flex-row-reverse"}`}>
                        <span className="text-xs font-mono font-medium tracking-wider text-[#dfb277]/80">
                          {step.number}
                        </span>
                        <h3 className="font-editorial text-2xl sm:text-3xl font-light text-white tracking-tight leading-tight">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className={`text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-xl ${
                        isEven ? "md:text-left" : "md:text-right"
                      }`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Central Node Dot */}
                  <div className="absolute left-4 md:left-1/2 top-4 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full border-2 border-[#dfb277] bg-[#04070c] shadow-[0_0_10px_rgba(223,178,119,0.3)] transition-all duration-300 hover:scale-125" />
                  </div>

                  {/* Empty Spacer Column for Desktop */}
                  <div className="hidden md:block w-1/2" />

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
