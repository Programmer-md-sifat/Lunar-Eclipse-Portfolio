import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import fabricsImg from "../assets/images/fabric_rolls_textiles_1788067226249.jpg";
import badgesImg from "../assets/images/badges_insignia_1788510849474.jpg";
import zipsChainImg from "../assets/images/zips_and_chains_1788510869610.jpg";
import metalButtonsImg from "../assets/images/metal_buttons_1788510889840.jpg";
import polyesterPlasticImg from "../assets/images/polyester_plastic_1788510919616.jpg";
import defenceUniformImg from "../assets/images/bd_navy_uniform_1787920153389.jpg";
import womenLingerieImg from "../assets/images/women_lingerie_1788510944111.jpg";
import menLingerieImg from "../assets/images/men_lingerie_1788510970060.jpg";

export interface ProductItem {
  id: string;
  title: string;
  image: string;
  description: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: "fabrics",
    title: "Fabric's",
    image: fabricsImg,
    description:
      "Export-grade woven, knit, and blended textile rolls supplied in custom yarn counts, densities, and certified dye finishes.",
  },
  {
    id: "badges",
    title: "Badges",
    image: badgesImg,
    description:
      "Precision-embroidered, bullion wire, and woven insignia patches engineered for military, security, and corporate uniform specifications.",
  },
  {
    id: "zips-chain",
    title: "Zips & Chain",
    image: zipsChainImg,
    description:
      "Heavy-duty metallic, molded plastic, and nylon coil zippers with smooth-glide pullers and continuous zipper chains.",
  },
  {
    id: "metal-buttons",
    title: "Metal Button's",
    image: metalButtonsImg,
    description:
      "Die-cast brass, zinc alloy, and antique-finish metal buttons, shank fasteners, rivets, and engraved custom branded hardware.",
  },
  {
    id: "polyester-plastic",
    title: "Polyester & Plastic",
    image: polyesterPlasticImg,
    description:
      "Chalk and pearl polyester shirt buttons, heavy-duty side-release buckles, cord stoppers, and injection-molded garment accessories.",
  },
  {
    id: "defence-uniform",
    title: "Defence Uniform",
    image: defenceUniformImg,
    description:
      "Mil-spec tactical duty uniforms, NIR camouflage apparel, and naval combat wear meeting strict government procurement standards.",
  },
  {
    id: "women-lingerie",
    title: "Women Lingerie",
    image: womenLingerieImg,
    description:
      "Fine lace, silk, and seamless microfiber intimates tailored for delicate comfort, contouring fit, and international retail standards.",
  },
  {
    id: "men-lingerie",
    title: "Men Lingerie",
    image: menLingerieImg,
    description:
      "Breathable combed cotton and modal boxer briefs, trunks, and base layers crafted with ergonomic support and elastic waistbands.",
  },
];

export function Products() {
  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white min-h-screen">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 -top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#dfb277]/[0.03] blur-[160px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
            <div className="max-w-3xl">
              <span className="text-[11px] font-mono font-bold tracking-[0.25em] text-[#dfb277] uppercase flex items-center gap-2">
                <span className="opacity-60">02</span>
                <span className="h-[1px] w-6 bg-[#dfb277]/60" />
                PRODUCT CATALOG
              </span>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight mt-5 leading-[1.08]">
                Manufactured Lines & <br />
                <span className="font-georgia text-[#dfb277]">
                  Supply Categories
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
                Explore our commercial product lines — spanning premium textiles,
                precision garment trims and hardware, mil-spec defence uniforms,
                and retail apparel collections.
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCT CATALOG GRID */}
        <section className="py-16 sm:py-24 relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {PRODUCTS.map((p) => (
                <div
                  key={p.id}
                  className="bg-[#030712] border border-white/10 rounded-2xl overflow-hidden hover:border-[#dfb277]/50 transition-all duration-500 group flex flex-col justify-between shadow-xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-900">
                    <img
                      src={p.image}
                      alt={p.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80 pointer-events-none" />
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-start">
                    <h2 className="font-editorial text-2xl font-light text-white mb-2.5 group-hover:text-[#dfb277] transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INQUIRY CTA SECTION */}
        <section className="pb-24 pt-4 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
            <div className="bg-[#030712] border border-[#dfb277]/30 p-10 sm:p-14 rounded-3xl relative">
              <h2 className="font-editorial text-3xl sm:text-4xl font-light text-white tracking-tight">
                Require Custom Specifications or Bulk Tender Quotations?
              </h2>
              <p className="text-sm text-zinc-400 font-light max-w-2xl mx-auto mt-3 mb-8 leading-relaxed">
                Connect directly with our merchandising and technical team to request
                custom swatches, tech-pack matching, or bulk export pricing.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#dfb277] text-black px-8 py-3.5 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
              >
                <span>CONTACT FOR INQUIRY</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
