import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { heroData } from "../../data/home/heroData";

export function Hero() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Preload slide images to ensure instant, zero-delay rendering
  useEffect(() => {
    heroData.slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Strict 3-second automatic slide rotation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % heroData.slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentSlideIndex]);

  const activeSlide = heroData.slides[currentSlideIndex];

  return (
    <section
      id="hero-section"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#06090e] pt-28 pb-16 lg:pt-32 lg:pb-24"
      aria-label="Lunar Eclipse Introduction"
    >
      {/* Background Slides with continuous, silky smooth cinematic motion & crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {heroData.slides.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          return (
            <motion.div
              key={slide.id}
              initial={false}
              animate={{
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 10 : 0,
              }}
              transition={{
                duration: 0.75,
                ease: "easeInOut",
              }}
              className="absolute inset-0 overflow-hidden will-change-[opacity,transform]"
            >
              <motion.img
                src={slide.image}
                alt={slide.alt}
                animate={
                  isActive
                    ? {
                        scale: [1.02, 1.08],
                      }
                    : {
                        scale: 1.02,
                      }
                }
                transition={{
                  duration: 3.2,
                  ease: "easeOut",
                }}
                className="h-full w-full object-cover object-center filter brightness-[0.62] contrast-[1.05] will-change-transform"
              />
            </motion.div>
          );
        })}

        {/* Sophisticated Dark Gradient Overlays for centered presentation & high contrast */}
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#06090e]/60 via-[#06090e]/35 to-[#06090e]/85" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,_transparent_25%,_rgba(6,9,14,0.65)_100%)]" />

        {/* Eclipse & Astronomical Orbit Ring Watermarks */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.04] opacity-70" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.03] opacity-60" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-[980px] w-[980px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.02] opacity-50" />
      </div>

      {/* Hero Foreground Content - Centered Layout */}
      <div className="relative z-30 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center xl:max-w-5xl">
          {/* Main Display Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mb-8"
          >
            <h1
              id="hero-main-title"
              className="font-gilmer text-3xl font-bold leading-[1.04] tracking-[-0.03em] text-white sm:text-4xl md:text-5xl lg:text-[78px] xl:text-[72px] mt-16"
            >
              <span className="block drop-shadow-sm">
                <span>{heroData.titlePart1}</span>
                <span className="font-gilmer font-bold text-gold-accent">
                  {heroData.titleItalic}
                </span>
              </span>
              <span className="block drop-shadow-sm text-white/95">
                <span>{heroData.titlePart2}</span>
              </span>
            </h1>
          </motion.div>

          {/* Subtitle / Description Text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            id="hero-description"
            className="mx-auto mb-10 max-w-2xl text-sm font-normal leading-relaxed text-zinc-300 sm:text-base md:text-lg lg:max-w-3xl text-balance"
          >
            {heroData.description}
          </motion.p>

          {/* CTA Action Buttons with 8px border radius */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {/* Primary Action Button */}
            <Link
              to={heroData.primaryCta.link}
              id="hero-primary-cta"
              className="group inline-flex items-center justify-center gap-3 rounded-[8px] bg-white px-7 py-4 text-xs font-semibold tracking-[0.22em] text-zinc-950 transition-all duration-300 hover:bg-[#dfb277] hover:text-black hover:shadow-lg hover:shadow-white/10 sm:text-[13px]"
            >
              <span>{heroData.primaryCta.label}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Action Button */}
            <Link
              to={heroData.secondaryCta.link}
              id="hero-secondary-cta"
              className="group inline-flex items-center justify-center gap-3 rounded-[8px] border border-white/20 bg-black/40 px-7 py-4 text-xs font-medium tracking-[0.22em] text-white backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-white/10 sm:text-[13px]"
            >
              <span>{heroData.secondaryCta.label}</span>
              <ArrowUpRight className="h-4 w-4 text-zinc-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </Link>
          </motion.div>

          {/* 3-Second Cinematic Slide Indicators & Active Slide Metadata */}
          <div className="mt-14 flex flex-col items-center gap-4 sm:mt-16">
            <div className="flex items-center justify-center gap-3">
              {heroData.slides.map((slide, index) => {
                const isActive = index === currentSlideIndex;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => setCurrentSlideIndex(index)}
                    className="group relative flex h-7 items-center focus:outline-none"
                    aria-label={`Switch to slide ${index + 1}: ${slide.tagline}`}
                  >
                    <div className="relative h-[3px] w-14 overflow-hidden rounded-full bg-white/20 transition-all group-hover:bg-white/40">
                      {isActive && (
                        <motion.div
                          key={`progress-${currentSlideIndex}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{
                            duration: 3,
                            ease: "linear",
                          }}
                          className="h-full bg-[#dfb277]"
                        />
                      )}
                    </div>
                  </button>
                );
              })}
              <span className="ml-2 font-mono text-[10px] font-medium tracking-[0.25em] text-[#dfb277]">
                0{currentSlideIndex + 1} / 0{heroData.slides.length}
              </span>
            </div>

            {/* Current Active Slide Category Tag */}
            <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-zinc-400">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#dfb277]" />
              <span>{activeSlide.tagline}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Elegant Hairline Divider at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
    </section>
  );
}


