import { useState } from "react";
import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import {
  Tag,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  SlidersHorizontal,
  FileSpreadsheet,
  Clock,
  Layers,
  FlaskConical,
  X,
} from "lucide-react";
import fabricRollsImg from "../assets/images/fabric_rolls_textiles_1788067226249.jpg";
import trimsAccessoriesImg from "../assets/images/trims_accessories_flatlay_1788067248377.jpg";
import navyUniformImg from "../assets/images/bd_navy_uniform_1787920153389.jpg";
import coastGuardUniformImg from "../assets/images/bd_coast_guard_uniform_1787920174774.jpg";

export type ProductCategory =
  | "ALL"
  | "WOVEN FABRICS"
  | "KNITWEAR & DENIM"
  | "GARMENTS"
  | "TRIMS & HARDWARE"
  | "DEFENCE & UNIFORMS"
  | "TECHNICAL & PPE";

export interface DetailedProduct {
  id: string;
  category: ProductCategory;
  categoryLabel: string;
  title: string;
  description: string;
  image: string;
  composition: string;
  gsm: string;
  moq: string;
  leadTime: string;
  tags: string[];
}

const CATEGORIES: ProductCategory[] = [
  "ALL",
  "WOVEN FABRICS",
  "KNITWEAR & DENIM",
  "GARMENTS",
  "TRIMS & HARDWARE",
  "DEFENCE & UNIFORMS",
  "TECHNICAL & PPE",
];

const PRODUCT_LIST: DetailedProduct[] = [
  {
    id: "woven-cotton-twill",
    category: "WOVEN FABRICS",
    categoryLabel: "WOVEN TEXTILES",
    title: "Organic Cotton Twill & Poplin",
    description: "High-density combed organic cotton woven textiles tailored for luxury shirting, trousers, and workwear.",
    image: fabricRollsImg,
    composition: "100% Organic Cotton / Stretch Elastane",
    gsm: "140 - 320 GSM",
    moq: "1,000 Yards",
    leadTime: "14 - 21 Days",
    tags: ["GOTS Certified", "High-Density", "Reactive Dye"],
  },
  {
    id: "selvedge-denim",
    category: "KNITWEAR & DENIM",
    categoryLabel: "DENIM & KNITS",
    title: "Raw Selvedge & Stretch Denim",
    description: "Authentic ring-spun selvedge denim in indigo and sulfur black with customizable wash treatments.",
    image: "https://images.unsplash.com/photo-1582418702059-97ebdfb35d09?q=80&w=800&auto=format&fit=crop",
    composition: "98% Cotton / 2% Spandex",
    gsm: "11.5 - 14.5 oz",
    moq: "1,500 Yards",
    leadTime: "21 Days",
    tags: ["Selvedge ID", "Laser Washing", "Eco-Dye"],
  },
  {
    id: "garment-trims-metal",
    category: "TRIMS & HARDWARE",
    categoryLabel: "TRIMS & ACCESSORIES",
    title: "Bespoke Engraved Metal Trims",
    description: "Die-cast brass buttons, anti-rust shank snaps, laser-engraved rivets, and custom metal pullers.",
    image: trimsAccessoriesImg,
    composition: "Solid Brass / Zinc Alloy",
    gsm: "Custom Gauge",
    moq: "5,000 Pcs",
    leadTime: "10 Days",
    tags: ["Oeko-Tex", "Nickel-Free", "Laser Engraved"],
  },
  {
    id: "heavyweight-fleece-hoodie",
    category: "GARMENTS",
    categoryLabel: "READY-MADE APPAREL",
    title: "Heavyweight French Terry Hoodies",
    description: "Pre-shrunk 450 GSM luxury French Terry hoodies with drop shoulders and double-needle topstitching.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=800&auto=format&fit=crop",
    composition: "100% Combed Cotton",
    gsm: "400 - 480 GSM",
    moq: "500 Pcs / Color",
    leadTime: "25 Days",
    tags: ["Streetwear Fit", "Custom Pigment Dye", "Heavyweight"],
  },
  {
    id: "tactical-naval-uniform",
    category: "DEFENCE & UNIFORMS",
    categoryLabel: "DEFENCE & MILITARY",
    title: "Mil-Spec Combat & Naval Wear",
    description: "Ripstop NIR camouflage utility uniforms with anti-tear weave and water-repellent DWR finish.",
    image: navyUniformImg,
    composition: "65% Polyester / 35% Cotton Ripstop",
    gsm: "220 GSM Mil-Spec",
    moq: "1,000 Sets",
    leadTime: "30 Days",
    tags: ["NIR Compliant", "Teflon DWR", "IR-Proof"],
  },
  {
    id: "maritime-coast-guard",
    category: "DEFENCE & UNIFORMS",
    categoryLabel: "MARITIME & SAFETY",
    title: "Naval & Maritime Duty Uniforms",
    description: "Weather-resistant maritime operational jackets, rank shoulder epaulettes, and gold bullion badges.",
    image: coastGuardUniformImg,
    composition: "High-Tenacity Nylon / Gore-Tex Shell",
    gsm: "280 GSM",
    moq: "500 Sets",
    leadTime: "25 Days",
    tags: ["Saltwater Resistant", "High-Vis", "Gold Bullion"],
  },
  {
    id: "industrial-fr-workwear",
    category: "TECHNICAL & PPE",
    categoryLabel: "INDUSTRIAL & SAFETY",
    title: "Flame-Retardant Industrial PPE",
    description: "EN ISO certified flame-resistant coveralls, arc-flash protective shirts, and anti-static utility attire.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    composition: "88% Cotton / 12% High-Tenacity Nylon FR",
    gsm: "300 GSM FR",
    moq: "1,000 Pcs",
    leadTime: "30 Days",
    tags: ["NFPA 2112", "Arc Flash Approved", "EN ISO 11612"],
  },
  {
    id: "tailored-blazers-suits",
    category: "GARMENTS",
    categoryLabel: "TAILORED APPAREL",
    title: "Structured Wool Blend Suits & Blazers",
    description: "Precision chest-canvas tailored suiting with luxury Bemberg lining for corporate aviation and retail.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    composition: "70% Australian Wool / 30% Silk",
    gsm: "260 GSM",
    moq: "300 Suits",
    leadTime: "35 Days",
    tags: ["Half Canvas", "Horn Buttons", "Corporate Fit"],
  },
];

const TESTING_METRICS = [
  { title: "Tensile & Tear Strength", standard: "ASTM D5034 / ISO 13934", desc: "Verifies fabric endurance under extreme mechanical stress." },
  { title: "Color Fastness to Washing", standard: "AATCC 61 / ISO 105-C06", desc: "Ensures shade retention after 50+ commercial wash cycles." },
  { title: "Dimensional Stability", standard: "AATCC 135 / ISO 6330", desc: "Guarantees less than 3% shrinkage after thermal drying." },
  { title: "Eco-Chemical Testing", standard: "OEKO-TEX / REACH Annex XVII", desc: "Zero formaldehyde, heavy metals, or banned azo dyes." },
];

export function Products() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("ALL");
  const [selectedProduct, setSelectedProduct] = useState<DetailedProduct | null>(null);

  const filteredProducts =
    activeCategory === "ALL"
      ? PRODUCT_LIST
      : PRODUCT_LIST.filter((p) => p.category === activeCategory);

  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white">

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 -top-40 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#dfb277]/[0.03] blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
            <div className="max-w-4xl">
              <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase flex items-center gap-2">
                <span className="opacity-60">02</span>
                <span className="h-[1px] w-6 bg-[#dfb277]/60" />
                PRODUCT & MATERIAL PORTFOLIO
              </span>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight mt-5 leading-[1.08]">
                Certified Textiles & <br />
                <span className="font-georgia text-[#dfb277]">Manufactured Lines</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                Discover our multi-category manufacturing inventory — spanning organic woven cottons, raw selvedge denim, custom die-cast trims, ready-made retail collections, and certified mil-spec defense apparel.
              </p>
            </div>

            {/* QUICK STATS BAR */}
            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10">
              <div className="bg-[#030712] border border-white/10 p-5 rounded-xl">
                <div className="font-editorial text-3xl text-[#dfb277]">500+</div>
                <div className="text-xs font-mono uppercase text-white mt-1">Active Fabric Swatches</div>
              </div>
              <div className="bg-[#030712] border border-white/10 p-5 rounded-xl">
                <div className="font-editorial text-3xl text-[#dfb277]">7 Days</div>
                <div className="text-xs font-mono uppercase text-white mt-1">Rapid Lab Dip Turnaround</div>
              </div>
              <div className="bg-[#030712] border border-white/10 p-5 rounded-xl">
                <div className="font-editorial text-3xl text-[#dfb277]">AQL 2.5</div>
                <div className="text-xs font-mono uppercase text-white mt-1">Inline Inspection Protocol</div>
              </div>
              <div className="bg-[#030712] border border-white/10 p-5 rounded-xl">
                <div className="font-editorial text-3xl text-[#dfb277]">100%</div>
                <div className="text-xs font-mono uppercase text-white mt-1">Custom Tech Pack Execution</div>
              </div>
            </div>
          </div>
        </section>

        {/* CATEGORY FILTER & CATALOG GRID */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar border-b border-white/10">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[10px] sm:text-xs font-mono tracking-[0.15em] uppercase px-4 sm:px-5 py-2.5 transition-all duration-300 shrink-0 border rounded-lg ${
                      isActive
                        ? "bg-[#dfb277] text-black font-bold border-[#dfb277] shadow-[0_0_15px_rgba(223,178,119,0.3)]"
                        : "bg-[#030712] text-zinc-400 border-white/10 hover:border-[#dfb277]/50 hover:text-white"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#030712] border border-white/10 rounded-2xl overflow-hidden hover:border-[#dfb277]/40 transition-all duration-500 group flex flex-col justify-between shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-90" />
                    
                    <span className="absolute top-4 left-4 bg-[#030712]/90 border border-white/15 text-[#dfb277] text-[9.5px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-md backdrop-blur-md">
                      {p.categoryLabel}
                    </span>
                  </div>

                  <div className="p-7 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-editorial text-2xl font-light text-white mb-2 group-hover:text-[#dfb277] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                        {p.description}
                      </p>

                      {/* Specs Badge Grid */}
                      <div className="bg-white/[0.02] border border-white/10 p-3.5 rounded-xl space-y-2 mb-6">
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-500 font-mono">Composition:</span>
                          <span className="text-zinc-200 font-light text-right">{p.composition}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-500 font-mono">Weight / GSM:</span>
                          <span className="text-[#dfb277] font-mono">{p.gsm}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-zinc-500 font-mono">Min. Order (MOQ):</span>
                          <span className="text-zinc-300 font-mono">{p.moq}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tag Pills & Modal Trigger */}
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-mono text-zinc-400 border border-white/10 px-2 py-0.5 rounded uppercase tracking-wider"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedProduct(p)}
                        className="w-full inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white py-2.5 text-xs font-mono font-bold tracking-widest uppercase rounded-lg hover:border-[#dfb277] hover:bg-[#dfb277]/10 hover:text-[#dfb277] transition-all"
                      >
                        <span>VIEW TECH SPECS</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* QUALITY LAB TESTING & STANDARDS */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] bg-[#030710] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase">
                MATERIAL ACCREDITATION
              </span>
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight mt-3">
                Laboratory Tested & Certified
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTING_METRICS.map((tm) => (
                <div key={tm.title} className="bg-[#030712] border border-white/10 p-7 rounded-2xl hover:border-[#dfb277]/40 transition-colors">
                  <FlaskConical className="h-7 w-7 text-[#dfb277] mb-4" />
                  <span className="text-[10px] font-mono text-[#dfb277] font-bold tracking-widest uppercase block mb-1">
                    {tm.standard}
                  </span>
                  <h3 className="font-editorial text-xl text-white font-light mb-2">{tm.title}</h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed">{tm.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODAL SPECIFICATIONS DIALOG */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#030712] border border-[#dfb277]/40 max-w-2xl w-full p-8 rounded-2xl relative shadow-2xl">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-5 right-5 text-zinc-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>

              <span className="text-[10px] font-mono text-[#dfb277] font-bold tracking-widest uppercase block mb-2">
                {selectedProduct.categoryLabel} SPECS
              </span>

              <h2 className="font-editorial text-3xl text-white font-light mb-4">{selectedProduct.title}</h2>
              <p className="text-sm text-zinc-300 font-light mb-6">{selectedProduct.description}</p>

              <div className="grid grid-cols-2 gap-4 bg-white/[0.03] border border-white/10 p-5 rounded-xl mb-6 text-xs">
                <div>
                  <div className="text-zinc-500 font-mono uppercase">Composition</div>
                  <div className="text-white font-medium mt-1">{selectedProduct.composition}</div>
                </div>
                <div>
                  <div className="text-zinc-500 font-mono uppercase">Weight Range</div>
                  <div className="text-[#dfb277] font-mono font-bold mt-1">{selectedProduct.gsm}</div>
                </div>
                <div>
                  <div className="text-zinc-500 font-mono uppercase">Minimum Order</div>
                  <div className="text-white font-medium mt-1">{selectedProduct.moq}</div>
                </div>
                <div>
                  <div className="text-zinc-500 font-mono uppercase">Estimated Lead Time</div>
                  <div className="text-white font-medium mt-1">{selectedProduct.leadTime}</div>
                </div>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/contact"
                  onClick={() => setSelectedProduct(null)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#dfb277] text-black py-3 text-xs font-mono font-bold tracking-widest uppercase rounded-lg hover:bg-white transition-colors"
                >
                  <span>REQUEST SWATCH SAMPLE</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* BULK CATALOG CTA */}
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
            <div className="bg-[#030712] border border-[#dfb277]/30 p-12 sm:p-16 rounded-3xl relative">
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight">
                Require Custom Mill Weaving or Specialized Tech Packs?
              </h2>
              <p className="text-sm text-zinc-400 font-light max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
                Our fabric engineering division custom-develops blends, thread counts, and specialized dye recipes to your brand’s exact commercial guidelines.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#dfb277] text-black px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
              >
                <span>SUBMIT TECH SPECIFICATIONS</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
