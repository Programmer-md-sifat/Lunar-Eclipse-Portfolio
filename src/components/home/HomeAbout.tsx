import { useEffect, useState, useRef } from "react";
import { homeAboutData } from "../../data/home/aboutData";

function AnimatedCounter({ targetValue, suffix }: { targetValue: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    let animationFrameId: number;

    const startCount = () => {
      const startTime = performance.now();
      const duration = 1500; // Smooth 1.5 second animation duration

      const updateCount = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Quadratic ease-out formula
        const easeOutQuad = (t: number) => t * (2 - t);
        const currentCount = Math.floor(easeOutQuad(progress) * targetValue);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(updateCount);
        } else {
          setCount(targetValue);
        }
      };

      animationFrameId = requestAnimationFrame(updateCount);
    };

    if (elementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            startCount();
            observer.disconnect(); // Trigger animation once
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(elementRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [targetValue]);

  return (
    <span ref={elementRef} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export function HomeAbout() {
  return (
    <section
      id="home-about-section"
      className="relative w-full overflow-hidden bg-[#04070c] pt-24 sm:pt-28 lg:pt-36 pb-12 sm:pb-16 lg:pb-20 text-white"
      aria-label="About Lunar Eclipse"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16 xl:gap-24 items-start">
          
          {/* Left Column */}
          <div className="relative lg:col-span-5 flex flex-col justify-between h-full">
            <div className="relative">
              {/* Main Heading */}
              <h2
                id="about-section-heading"
                className="font-editorial relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-light leading-[1.08] tracking-tight text-white"
              >
                {homeAboutData.title}
                <span className="block font-georgia font-normal text-[#dfb277] mt-1">
                  {homeAboutData.titleItalic}
                </span>
              </h2>
            </div>

            {/* Horizontal Divider & Stats Row */}
            <div className="mt-16 sm:mt-24 w-full">
              <div className="border-t border-white/10 w-full mb-8" />
              
              {/* 3-Column Stats Grid */}
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {homeAboutData.stats.map((stat, index) => (
                  <div key={stat.label} id={`about-stat-${index + 1}`} className="flex flex-col">
                    <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-none">
                      <AnimatedCounter targetValue={stat.targetValue} suffix={stat.suffix} />
                    </span>
                    <span className="mt-3 text-[10px] sm:text-[11px] font-semibold tracking-[0.16em] text-zinc-400 uppercase leading-relaxed">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 lg:pt-16 xl:pt-20">
            {/* Main Headline Text */}
            <p className="font-editorial text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-light leading-[1.4] tracking-wide text-zinc-200">
              {homeAboutData.mainTextPart1}
              <span className="font-georgia font-normal text-[#dfb277]">
                {homeAboutData.mainTextItalic}
              </span>
              {homeAboutData.mainTextPart2}
            </p>

            {/* Supporting Body Narrative */}
            <p className="mt-8 text-sm sm:text-base leading-relaxed text-zinc-400 font-light max-w-2xl">
              {homeAboutData.supportingText}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
