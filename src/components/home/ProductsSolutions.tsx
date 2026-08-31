import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import fabricRollsImg from "../../assets/images/fabric_rolls_textiles_1788067226249.jpg";
import trimsAccessoriesImg from "../../assets/images/trims_accessories_flatlay_1788067248377.jpg";
import navyUniformImg from "../../assets/images/bd_navy_uniform_1787920153389.jpg";
import coastGuardUniformImg from "../../assets/images/bd_coast_guard_uniform_1787920174774.jpg";

export type CategoryType =
  | "ALL"
  | "TEXTILE"
  | "GARMENT"
  | "GOVERNMENT"
  | "DEFENCE"
  | "MARITIME"
  | "INDUSTRIAL"
  | "SAFETY";

export interface ProductItem {
  id: string;
  categoryLabel: string;
  title: string;
  description: string;
  image: string;
  categories: CategoryType[];
  tags: string[];
}

const CATEGORIES: CategoryType[] = [
  "ALL",
  "TEXTILE",
  "GARMENT",
  "GOVERNMENT",
  "DEFENCE",
  "MARITIME",
  "INDUSTRIAL",
  "SAFETY",
];

const PRODUCTS: ProductItem[] = [
  {
    id: "woven-knit-fabrics",
    categoryLabel: "TEXTILE & GARMENT",
    title: "Woven & Knit Fabrics",
    description:
      "Quality textile materials supplied for export-oriented garment manufacturing.",
    image: fabricRollsImg,
    categories: ["TEXTILE", "GARMENT"],
    tags: ["TEXTILE", "GARMENT"],
  },
  {
    id: "garment-trims",
    categoryLabel: "TEXTILE & GARMENT",
    title: "Garment Trims",
    description:
      "Reliable supply of trims and related materials to buyer specification.",
    image: trimsAccessoriesImg,
    categories: ["TEXTILE", "GARMENT"],
    tags: ["GARMENT", "TEXTILE"],
  },
  {
    id: "garment-accessories",
    categoryLabel: "TEXTILE & GARMENT",
    title: "Garment Accessories",
    description:
      "Accessory and presentation requirements coordinated for garment programs.",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop",
    categories: ["TEXTILE", "GARMENT"],
    tags: ["GARMENT"],
  },
  {
    id: "tactical-uniforms",
    categoryLabel: "DEFENCE & GOVERNMENT",
    title: "Tactical & Operational Apparel",
    description:
      "Specialized military and defense force apparel designed to extreme specifications.",
    image: navyUniformImg,
    categories: ["DEFENCE", "GOVERNMENT"],
    tags: ["DEFENCE", "GOVERNMENT"],
  },
  {
    id: "maritime-duty-wear",
    categoryLabel: "MARITIME & SAFETY",
    title: "Naval & Marine Duty Wear",
    description:
      "Weather-resistant marine gear and specialized maritime safety garments.",
    image: coastGuardUniformImg,
    categories: ["MARITIME", "SAFETY"],
    tags: ["MARITIME", "SAFETY"],
  },
  {
    id: "industrial-workwear",
    categoryLabel: "INDUSTRIAL & SAFETY",
    title: "Industrial Workwear & PPE",
    description:
      "Flame-resistant textiles, anti-static workwear, and heavy-duty industrial protective clothing.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop",
    categories: ["INDUSTRIAL", "SAFETY"],
    tags: ["INDUSTRIAL", "SAFETY"],
  },
  {
    id: "government-uniform-programs",
    categoryLabel: "GOVERNMENT & INSTITUTIONAL",
    title: "Government Uniform Programs",
    description:
      "Turnkey procurement solutions for public sector agencies, police, and civil service personnel.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1000&auto=format&fit=crop",
    categories: ["GOVERNMENT", "DEFENCE"],
    tags: ["GOVERNMENT", "DEFENCE"],
  },
  {
    id: "high-vis-safety-gear",
    categoryLabel: "SAFETY & PROTECTION",
    title: "High-Visibility Safety Gear",
    description:
      "Certified reflective safety apparel, fire-retardant wear, and protective safety accessories.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1000&auto=format&fit=crop",
    categories: ["SAFETY", "INDUSTRIAL"],
    tags: ["SAFETY", "INDUSTRIAL"],
  },
];

export function ProductsSolutions() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("ALL");

  const filteredProducts =
    activeCategory === "ALL"
      ? PRODUCTS
      : PRODUCTS.filter((product) =>
          product.categories.includes(activeCategory)
        );

  return (
    <section
      id="products-solutions-section"
      className="relative w-full bg-[#020509] py-24 sm:py-28 lg:py-32 text-white border-t border-white/[0.06] overflow-hidden"
      aria-label="Our Products & Supply Solutions"
    >
      {/* Background Decorative Radial Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-[#dfb277]/[0.02] blur-[160px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-blue-900/[0.03] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16">
          {/* Left Title */}
          <div>
            <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase flex items-center gap-2">
              <span className="opacity-60">07</span>
              <span className="h-[1px] w-6 bg-[#dfb277]/60" />
              PRODUCTS & SOLUTIONS
            </span>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mt-4 leading-[1.1]">
              Our Products & <br />
              <span className="font-georgia italic text-[#dfb277]">Supply</span>{" "}
              Solutions
            </h2>
          </div>

          {/* Right Subtitle */}
          <div className="max-w-md lg:pb-2">
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              A diversified supply ecosystem — every program is sourced to
              client requirement and specification.
            </p>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 sm:mb-12 no-scrollbar">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`text-[10px] sm:text-xs font-mono tracking-[0.15em] uppercase px-4 sm:px-5 py-2 sm:py-2.5 transition-all duration-300 shrink-0 border ${
                  isActive
                    ? "bg-[#dfb277] text-[#020509] font-bold border-[#dfb277] shadow-[0_0_15px_rgba(223,178,119,0.3)]"
                    : "bg-[#030712]/70 text-zinc-400 border-white/10 hover:border-[#dfb277]/50 hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-[#030712] border border-white/10 rounded-2xl overflow-hidden hover:border-[#dfb277]/40 transition-all duration-500 group flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-[#dfb277]/5 relative"
              >
                {/* Image Section */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#070d18]">
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-90 contrast-105"
                  />
                  {/* Subtle Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90" />
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Category Label */}
                    <span className="text-[9.5px] font-mono font-bold tracking-[0.2em] text-[#dfb277] uppercase block mb-2.5">
                      {product.categoryLabel}
                    </span>

                    {/* Card Title */}
                    <h3 className="font-editorial text-2xl sm:text-[26px] font-light text-white tracking-tight mb-3 group-hover:text-[#dfb277] transition-colors leading-tight">
                      {product.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  {/* Footer Tag Pills */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center gap-2 flex-wrap">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-mono text-zinc-400 border border-white/10 px-2.5 py-1 uppercase tracking-wider rounded-md group-hover:border-[#dfb277]/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Corner Decorative Accents */}
                <div className="absolute top-3 left-3 w-2 h-2 border-t border-l border-white/20 group-hover:border-[#dfb277] transition-colors" />
                <div className="absolute top-3 right-3 w-2 h-2 border-t border-r border-white/20 group-hover:border-[#dfb277] transition-colors" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
