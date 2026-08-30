import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SupplyStage {
  number: string;
  title: string;
  description: string;
}

const stages: SupplyStage[] = [
  {
    number: "01",
    title: "Requirement",
    description: "Understand the client's requirement — product, specification, quantity and context.",
  },
  {
    number: "02",
    title: "Sourcing",
    description: "Identify appropriate suppliers and products from the group network.",
  },
  {
    number: "03",
    title: "Evaluation",
    description: "Review quality, specification and commercial requirements.",
  },
  {
    number: "04",
    title: "Procurement",
    description: "Coordinate purchasing, production alignment and documentation.",
  },
  {
    number: "05",
    title: "Quality",
    description: "Verify products against specification and quality standards before dispatch.",
  },
  {
    number: "06",
    title: "Logistics",
    description: "Coordinate freight, international customs clearance, transit tracking, and warehouse arrival.",
  },
  {
    number: "07",
    title: "Delivery",
    description: "Final handover, inspection sign-off, client feedback, and continuous after-service support.",
  },
];

export function SupplyProcess() {
  const [activeStage, setActiveStage] = useState(2); // default to 03 (index 2) as in reference screenshot
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

    // Calculate approximate active stage from scroll position
    const cardWidth = 360; // approximate card + gap
    const currentIndex = Math.min(
      stages.length - 1,
      Math.max(0, Math.round(scrollLeft / cardWidth))
    );
    setActiveStage(currentIndex);
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToStage = (index: number) => {
    setActiveStage(index);
    if (!scrollContainerRef.current) return;
    const cardWidth = 360;
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const next = Math.min(stages.length - 1, activeStage + 1);
    scrollToStage(next);
  };

  const handlePrev = () => {
    const prev = Math.max(0, activeStage - 1);
    scrollToStage(prev);
  };

  // Progress percentage
  const progressPercent = ((activeStage + 1) / stages.length) * 100;

  return (
    <section
      id="supply-process-section"
      className="relative w-full bg-[#020509] py-24 sm:py-28 lg:py-36 text-white overflow-hidden border-t border-white/[0.05]"
      aria-label="Supply Process - From Requirement to Delivery"
    >
      {/* Decorative Subtle Ambient Glows */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-[#dfb277]/[0.015] blur-[150px]" />
      <div className="pointer-events-none absolute right-[-10%] bottom-1/4 h-[500px] w-[500px] rounded-full bg-blue-900/[0.02] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Header Grid matching uploaded reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 sm:mb-20">
          <div className="lg:col-span-8">
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase flex items-center gap-2">
              <span className="opacity-60">08</span>
              <span className="h-[1px] w-6 bg-[#dfb277]/60" />
              SUPPLY PROCESS
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mt-6 leading-[1.1]">
              From Requirement <br />
              to <span className="font-georgia font-normal text-[#dfb277]">Delivery.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-md lg:text-right">
              Seven controlled stages govern every engagement — continue scrolling to move through the process.
            </p>
            
            {/* Desktop Navigation Arrows */}
            <div className="hidden sm:flex items-center gap-3 mt-6">
              <button
                onClick={handlePrev}
                disabled={!canScrollLeft && activeStage === 0}
                aria-label="Previous supply stage"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#dfb277] hover:bg-[#dfb277]/10 disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                disabled={!canScrollRight && activeStage === stages.length - 1}
                aria-label="Next supply stage"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-[#dfb277] hover:bg-[#dfb277]/10 disabled:opacity-30 disabled:pointer-events-none transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Process Cards Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing -mx-6 px-6 sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {stages.map((stage, index) => {
            const isActive = activeStage === index;
            return (
              <motion.div
                key={stage.number}
                onClick={() => scrollToStage(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`flex-shrink-0 w-[290px] sm:w-[320px] lg:w-[340px] h-[260px] sm:h-[280px] lg:h-[300px] p-6 sm:p-8 rounded-none flex flex-col justify-between transition-all duration-500 snap-start select-none cursor-pointer relative group ${
                  isActive
                    ? "bg-[#040a16] border border-[#dfb277]/90 shadow-[0_10px_40px_rgba(223,178,119,0.08)]"
                    : "bg-[#030710] border border-white/[0.07] hover:border-white/20 hover:bg-[#040914]"
                }`}
              >
                {/* Top Section: Large Outline Number & Line */}
                <div className="flex items-start justify-between">
                  <span
                    className={`font-editorial text-4xl sm:text-5xl font-light tracking-tight transition-colors duration-500 ${
                      isActive
                        ? "text-[#dfb277]"
                        : "text-[#dfb277]/60 group-hover:text-[#dfb277]"
                    }`}
                    style={{
                      fontVariantNumeric: "lining-nums",
                    }}
                  >
                    {stage.number}
                  </span>

                  <span
                    className={`w-12 sm:w-16 h-[1px] mt-4 transition-all duration-500 ${
                      isActive
                        ? "bg-[#dfb277]"
                        : "bg-white/10 group-hover:bg-white/30"
                    }`}
                  />
                </div>

                {/* Bottom Section: Title and Description */}
                <div className="mt-auto pt-2">
                  <h3
                    className={`font-editorial text-xl sm:text-2xl font-light tracking-tight transition-colors duration-300 ${
                      isActive ? "text-white" : "text-zinc-200 group-hover:text-white"
                    }`}
                  >
                    {stage.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {stage.description}
                  </p>
                </div>

                {/* Active Indicator Accent Corner */}
                {isActive && (
                  <motion.div
                    layoutId="activeSupplyIndicator"
                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-[#dfb277]"
                  />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Progress Bar & Indicator */}
        <div className="mt-12 sm:mt-16 flex items-center gap-6 max-w-full">
          <span className="text-xs font-mono font-medium tracking-widest text-[#dfb277] whitespace-nowrap">
            {String(activeStage + 1).padStart(2, "0")} — 07
          </span>

          <div className="relative flex-1 h-[1px] bg-white/10 overflow-hidden">
            <motion.div
              className="absolute top-0 bottom-0 left-0 bg-[#dfb277]"
              initial={{ width: "14%" }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
