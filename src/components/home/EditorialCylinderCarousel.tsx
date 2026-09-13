import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { productsList } from "../../data/productsData";

interface ShowcaseImageItem {
  id: string;
  title: string;
  image: string;
  alt: string;
}

const SHOWCASE_IMAGES: ShowcaseImageItem[] = [
  {
    id: "fabrics",
    title: "Fabric's",
    image: productsList[0]?.image,
    alt: "Fabric's — Export-Grade Mill Textiles & Weaves",
  },
  {
    id: "badges",
    title: "Badges & Insignia",
    image: productsList[1]?.image,
    alt: "Badges & Insignia — Bullion Wire & Crests",
  },
  {
    id: "zips-chain",
    title: "Zips & Chain",
    image: productsList[2]?.image,
    alt: "Zips & Chain — Metallic & Coil Fasteners",
  },
  {
    id: "metal-buttons",
    title: "Metal Button's",
    image: productsList[3]?.image,
    alt: "Metal Button's — Die-Cast Brass & Antique Shanks",
  },
  {
    id: "polyester-plastic",
    title: "Polyester & Plastic",
    image: productsList[4]?.image,
    alt: "Polyester & Plastic — Pearl Buttons & Technical Buckles",
  },
  {
    id: "defence-uniform",
    title: "Defence Uniform",
    image: productsList[5]?.image,
    alt: "Defence Uniform — Mil-Spec Tactical Duty Apparel",
  },
  {
    id: "women-lingerie",
    title: "Women Lingerie",
    image: productsList[6]?.image,
    alt: "Women Lingerie — Fine Lace & Seamless Intimates",
  },
  {
    id: "men-lingerie",
    title: "Men Undergarments",
    image: productsList[7]?.image,
    alt: "Men Lingerie — Combed Cotton & Modal Essentials",
  },
];

const AUTO_SLIDE_DELAY = 2000; // ms (slides every 2 seconds automatically)

export function EditorialCylinderCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const stageRef = useRef<HTMLDivElement>(null);

  const total = SHOWCASE_IMAGES.length;

  // Responsive width listener for optical card spacing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
    setProgress(0);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
    setProgress(0);
  }, [total]);

  const selectSlide = (idx: number) => {
    setActiveIndex(idx);
    setProgress(0);
  };

  // Timer-driven smooth auto slide
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const intervalStep = 50; // ms
    const increment = (intervalStep / AUTO_SLIDE_DELAY) * 100;

    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          nextSlide();
          return 0;
        }
        return old + increment;
      });
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered, nextSlide]);

  // Touch / Drag Navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    const deltaX = e.changedTouches[0].clientX - dragStartX;
    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    }
    setDragStartX(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX === null) return;
    const deltaX = e.clientX - dragStartX;
    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    }
    setDragStartX(null);
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") nextSlide();
    if (e.key === "ArrowLeft") prevSlide();
  };

  // Safe circular offset calculation
  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  };

  // Optical spacing based on viewport width
  const stepX = windowWidth < 640 ? 200 : windowWidth < 1024 ? 260 : 300;

  return (
    <section
      className="relative py-20 sm:py-28 bg-[#020509] border-b border-white/[0.06] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label="Commercial Products Showcase"
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[1000px] rounded-full bg-[#dfb277]/[0.035] blur-[180px]" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-950/[0.08] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* SECTION HEADER */}
        <div className="mb-10 sm:mb-14 text-center sm:text-left">
          <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight leading-[1.1]">
            Our Complete <span className="font-georgia text-[#dfb277]">Product Lines</span>
          </h2>
          <p className="mt-3 text-sm text-zinc-400 font-light max-w-xl mx-auto sm:mx-0">
            Inspect our high-capacity manufacturing lines — from mill textiles and military hardware to retail intimates.
          </p>
        </div>

        {/* PROGRESS INDICATOR BAR */}
        <div className="w-full bg-white/5 h-[2px] rounded-full mb-8 overflow-hidden">
          <div
            className="bg-[#dfb277] h-full transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* 3D CAROUSEL STAGE */}
        <div>
          <div
            ref={stageRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className="relative h-[340px] sm:h-[410px] md:h-[450px] lg:h-[480px] w-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
            style={{ perspective: "1400px" }}
          >
            {SHOWCASE_IMAGES.map((item, index) => {
              const offset = getOffset(index);
              const isCenter = offset === 0;

              // Placement coordinates:
              const xPos = offset * stepX;
              const scale = isCenter ? 1.0 : Math.abs(offset) === 1 ? 0.90 : 0.80;
              const rotateY = isCenter ? 0 : offset > 0 ? -15 : 15;
              // High visibility on side cards so they don't look dark or recessed
              const opacity = isCenter ? 1 : Math.abs(offset) === 1 ? 0.85 : 0.45;
              const zIndex = isCenter ? 40 : 30 - Math.abs(offset) * 10;

              // Hidden cards that wrap around move with 0ms duration to prevent flying across the screen
              const isOffstage = Math.abs(offset) > 2;

              return (
                <motion.div
                  key={item.id}
                  onClick={() => {
                    if (!isCenter) selectSlide(index);
                  }}
                  animate={{
                    x: isOffstage ? (offset > 0 ? 900 : -900) : xPos,
                    scale: isOffstage ? 0.7 : scale,
                    rotateY: isOffstage ? 0 : rotateY,
                    opacity: isOffstage ? 0 : opacity,
                  }}
                  transition={{
                    duration: isOffstage ? 0 : 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    position: "absolute",
                    zIndex,
                    pointerEvents: isOffstage ? "none" : "auto",
                  }}
                  className={`w-[260px] sm:w-[320px] md:w-[360px] lg:w-[380px] h-[320px] sm:h-[380px] md:h-[420px] lg:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden bg-zinc-950 border ${
                    isCenter
                      ? "border-[#dfb277]/70 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_40px_rgba(223,178,119,0.25)] ring-1 ring-[#dfb277]/50"
                      : "border-white/15 shadow-xl hover:border-white/35 cursor-pointer"
                  } transition-colors duration-300 relative group select-none`}
                >
                  {/* FULL-FRAME PRODUCT PHOTOGRAPHY */}
                  <img
                    src={item.image}
                    alt={item.alt}
                    referrerPolicy="no-referrer"
                    draggable={false}
                    className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.04] transition-transform duration-700 select-none pointer-events-none"
                  />

                  {/* ONLY ON MIDDLE CARD: SHOW THE IMAGE-RELATED TITLE */}
                  <AnimatePresence>
                    {isCenter && (
                      <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="absolute inset-x-0 bottom-0 pt-16 pb-5 sm:pb-6 px-6 bg-gradient-to-t from-black/90 via-black/45 to-transparent flex flex-col items-center justify-center text-center pointer-events-none"
                      >
                        <h3 className="font-editorial text-2xl sm:text-3xl md:text-4xl text-white font-light tracking-wide drop-shadow-md">
                          {item.title}
                        </h3>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Minimal Elegant Pagination Indicator */}
          <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2">
            {SHOWCASE_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => selectSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "w-8 bg-[#dfb277]"
                    : "w-2 bg-white/20 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
