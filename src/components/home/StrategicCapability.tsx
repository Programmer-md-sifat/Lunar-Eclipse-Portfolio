import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import bdNavyUniformImg from "../../assets/images/bd_navy_uniform_1787920153389.jpg";
import bdCoastGuardUniformImg from "../../assets/images/bd_coast_guard_uniform_1787920174774.jpg";

export function StrategicCapability() {
  const businessAreas = [
    "Bangladesh Coast Guard",
    "Bangladesh Navy",
    "Defence & Security Institutions",
    "Government & Institutional Requirements",
    "Maritime-Sector Requirements",
  ];

  return (
    <section
      id="strategic-capability-section"
      className="relative w-full bg-[#020509] py-24 sm:py-28 lg:py-36 text-white overflow-hidden border-t border-white/[0.05]"
      aria-label="Strategic Capability - Defence and Institutional Uniform Supply"
    >
      {/* Decorative Large Background Text (Insignia Watermark) */}
      <div className="absolute right-[-10%] top-[15%] pointer-events-none select-none z-0">
        <span className="font-editorial text-[10vw] sm:text-[12vw] font-bold text-white/[0.015] tracking-[0.15em] leading-none select-none uppercase" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.04)" }}>
          INSIGNIA
        </span>
      </div>

      {/* Decorative Ambient Radial Glow */}
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[500px] w-[500px] rounded-full bg-[#dfb277]/[0.02] blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-blue-900/[0.03] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Left Column: Sourcing and Capability Details */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Header / Eyebrow */}
            <div className="flex flex-col">
              <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase flex items-center gap-2">
                <span className="opacity-60">06</span>
                <span className="h-[1px] w-6 bg-[#dfb277]/60" />
                STRATEGIC CAPABILITY
              </span>
              
              <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mt-6 leading-[1.1]">
                Defence & <br />
                <span className="font-georgia italic font-normal text-[#dfb277]">Institutional</span> <br />
                Uniform Supply
              </h2>
            </div>

            {/* Core Descriptions */}
            <div className="mt-8 space-y-6 max-w-xl">
              <p className="text-base sm:text-lg text-zinc-200 font-light leading-relaxed">
                Specialized sourcing and supply for uniforms, rank badges, insignia and institutional requirements.
              </p>
              <p className="text-sm text-zinc-400 font-light leading-relaxed">
                As a buying house, Lunar Eclipse International sources and supplies uniforms, rank badges, insignia and related institutional products according to client requirements and specifications.
              </p>
            </div>

            {/* Current Business Areas */}
            <div className="mt-12">
              <h4 className="text-[10px] font-mono font-bold tracking-[0.2em] text-[#dfb277] uppercase mb-6">
                CURRENT BUSINESS AREAS
              </h4>
              
              <div className="border-t border-white/10 divide-y divide-white/10 max-w-xl">
                {businessAreas.map((area, index) => (
                  <motion.div
                    key={area}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-4 py-4 group"
                  >
                    <div className="flex-shrink-0">
                      <ShieldCheck className="h-5 w-5 text-[#dfb277] opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <span className="text-sm sm:text-base font-light text-zinc-300 group-hover:text-white transition-colors duration-300">
                      {area}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Beautiful Layered Interactive Image Layout with Border Radius */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[480px] sm:min-h-[580px] lg:min-h-[640px]">
            
            {/* Main Background Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-[85%] aspect-[4/5] sm:w-[75%] lg:w-[80%] left-[5%] lg:left-[10%] bottom-4 overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10 group z-10"
            >
              {/* Image */}
              <img
                src={bdNavyUniformImg}
                alt="Bangladesh Navy ceremonial dress uniform jacket with gold bullion insignia and anchor buttons"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Premium dark vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#020509]/80 via-transparent to-[#020509]/20" />
              
              {/* Absolute Corner Accents */}
              <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-[#dfb277]/60" />
              <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-[#dfb277]/60" />
            </motion.div>

            {/* Overlapping Smaller Foreground Image Container with Modern Curved Geometry */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="absolute left-[2%] sm:left-[8%] lg:left-[-2%] bottom-[-5%] sm:bottom-[-2%] lg:bottom-[4%] w-[48%] sm:w-[42%] lg:w-[45%] aspect-[3/4] overflow-hidden rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#dfb277]/20 group z-20"
            >
              {/* Image */}
              <img
                src={bdCoastGuardUniformImg}
                alt="Bangladesh Coast Guard tailored maritime service uniform jacket display"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Subtle dark filter */}
              <div className="absolute inset-0 bg-[#020509]/25 group-hover:bg-transparent transition-all duration-300" />
              
              {/* Captions label */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#020509]/85 backdrop-blur-md px-3 py-2 rounded-md border border-white/10">
                <span className="text-[9px] font-mono font-semibold tracking-wider text-[#dfb277] uppercase block">
                  COAST GUARD & DEFENCE
                </span>
              </div>
            </motion.div>

            {/* Elegant Floating Geometry Background Accent */}
            <div className="absolute -top-6 -right-6 w-16 h-16 border-t-2 border-r-2 border-white/5 pointer-events-none" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 border-b-2 border-l-2 border-[#dfb277]/5 pointer-events-none" />

          </div>

        </div>
      </div>
    </section>
  );
}
