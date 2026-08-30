import { useState } from "react";
import { motion } from "motion/react";
import fabricRollsImg from "../../assets/images/fabric_rolls_textiles_1788067226249.jpg";
import trimsAccessoriesImg from "../../assets/images/trims_accessories_flatlay_1788067248377.jpg";

interface JourneyStep {
  number: string;
  title: string;
  description: string;
}

const journeySteps: JourneyStep[] = [
  {
    number: "01",
    title: "Raw Materials",
    description: "Specification and source identification",
  },
  {
    number: "02",
    title: "Fabrics",
    description: "Quality textiles for export-oriented production",
  },
  {
    number: "03",
    title: "Trims",
    description: "Reliable trims and garment accessories",
  },
  {
    number: "04",
    title: "Logistics",
    description: "Coordinated movement of materials",
  },
  {
    number: "05",
    title: "Garment Manufacturing",
    description: "Technical support through production",
  },
  {
    number: "06",
    title: "Export",
    description: "Onward delivery to global buyers",
  },
];

export function GarmentTextile() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section
      id="garment-textile-section"
      className="relative w-full bg-[#020509] py-24 sm:py-28 lg:py-36 text-white overflow-hidden border-t border-white/[0.05]"
      aria-label="Garment & Textile - Backward Linkage Journey"
    >
      {/* Background Decorative Radial Glows */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[500px] w-[500px] rounded-full bg-[#dfb277]/[0.02] blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-blue-900/[0.03] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-start">
          
          {/* Left Column: Heading, Description & Layered Image Display */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            
            {/* Section Eyebrow */}
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase flex items-center gap-2">
              <span className="opacity-60">04</span>
              <span className="h-[1px] w-6 bg-[#dfb277]/60" />
              GARMENT & TEXTILE
            </span>

            {/* Main Section Heading */}
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mt-6 leading-[1.1]">
              Supporting the <br />
              <span className="font-georgia font-normal text-[#dfb277]">Global Garment</span> Industry.
            </h2>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed mt-6 max-w-xl">
              From fabrics and trims to logistics and technical support — backward-linkage services for the 100% export-oriented readymade garment industry.
            </p>

            {/* Attractive Layered Images with Smooth Border Radius */}
            <div className="relative mt-12 w-full min-h-[420px] sm:min-h-[500px] lg:min-h-[540px] flex items-center justify-start">
              
              {/* Primary Background Image: Fabric Rolls */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-[82%] aspect-[4/3] sm:w-[78%] overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10 group z-10"
              >
                <img
                  src={fabricRollsImg}
                  alt="Stacked rolls of premium denim and woven textiles"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#020509]/80 via-transparent to-[#020509]/20" />
                
                {/* Decorative Frame Corner Brackets */}
                <div className="absolute top-5 left-5 w-6 h-6 border-t-2 border-l-2 border-[#dfb277]/60" />
                <div className="absolute bottom-5 right-5 w-6 h-6 border-b-2 border-r-2 border-[#dfb277]/60" />
              </motion.div>

              {/* Overlapping Foreground Image: Trims & Accessories */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
                className="absolute right-0 sm:right-[4%] bottom-[2%] sm:bottom-[6%] w-[52%] sm:w-[46%] aspect-square overflow-hidden rounded-[2rem] shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-[#dfb277]/30 group z-20"
              >
                <img
                  src={trimsAccessoriesImg}
                  alt="Flatlay of brass zippers, buttons, buckles, and ribbons"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Soft ambient overlay */}
                <div className="absolute inset-0 bg-[#020509]/20 group-hover:bg-transparent transition-colors duration-300" />

                {/* Caption Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#020509]/85 backdrop-blur-md px-3.5 py-2 rounded-md border border-white/10">
                  <span className="text-[9px] font-mono font-semibold tracking-wider text-[#dfb277] uppercase block text-center">
                    TRIMS & ACCESSORIES
                  </span>
                </div>
              </motion.div>

              {/* Subtle Decorative Backdrop Bracket Elements */}
              <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-white/5 pointer-events-none" />
              <div className="absolute -bottom-4 right-1/3 w-12 h-12 border-b-2 border-r-2 border-[#dfb277]/10 pointer-events-none" />

            </div>

          </div>

          {/* Right Column: Backward-Linkage Journey Timeline */}
          <div className="lg:col-span-6 flex flex-col justify-start lg:pl-6 pt-2">
            
            {/* Timeline Header Label */}
            <div className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277]/80 uppercase mb-8">
              THE BACKWARD-LINKAGE JOURNEY
            </div>

            {/* Vertical Timeline Structure */}
            <div className="relative border-l border-white/10 ml-4 pl-8 sm:pl-10 space-y-8 sm:space-y-10">
              {journeySteps.map((step, index) => {
                const isHovered = activeStep === index;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onMouseEnter={() => setActiveStep(index)}
                    onMouseLeave={() => setActiveStep(null)}
                    className="relative group cursor-pointer"
                  >
                    {/* Step Number Box pinned on the vertical timeline line */}
                    <div
                      className={`absolute -left-[calc(2rem+17px)] sm:-left-[calc(2.5rem+17px)] top-0.5 w-8 h-8 rounded-none border flex items-center justify-center text-[10px] font-mono font-bold transition-all duration-300 bg-[#020509] ${
                        isHovered
                          ? "border-[#dfb277] text-[#dfb277] shadow-[0_0_15px_rgba(223,178,119,0.3)]"
                          : "border-white/20 text-zinc-400 group-hover:border-white/50 group-hover:text-zinc-200"
                      }`}
                    >
                      {step.number}
                    </div>

                    {/* Step Content */}
                    <div className="pb-6 border-b border-white/[0.06] group-last:border-b-0 transition-colors duration-300">
                      <h3
                        className={`font-editorial text-2xl sm:text-3xl font-light tracking-tight transition-colors duration-300 ${
                          isHovered ? "text-[#dfb277]" : "text-white group-hover:text-zinc-200"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-light mt-1.5 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
