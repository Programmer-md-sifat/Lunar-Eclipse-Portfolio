import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  productsHeroData,
  productsList,
  productsCtaData,
} from "../data/productsData";

export function Products() {
  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white min-h-screen">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute left-1/2 -top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#dfb277]/[0.03] blur-[160px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
            <div className="max-w-3xl">
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
                {productsHeroData.title} <br />
                <span className="font-georgia text-[#dfb277]">
                  {productsHeroData.titleHighlight}
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl">
                {productsHeroData.description}
              </p>
            </div>
          </div>
        </section>

        {/* PRODUCT CATALOG GRID */}
        <section className="py-16 sm:py-24 relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {productsList.map((p) => (
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
                {productsCtaData.title}
              </h2>
              <p className="text-sm text-zinc-400 font-light max-w-2xl mx-auto mt-3 mb-8 leading-relaxed">
                {productsCtaData.description}
              </p>
              <Link
                to={productsCtaData.buttonLink}
                className="inline-flex items-center gap-3 bg-[#dfb277] text-black px-8 py-3.5 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
              >
                <span>{productsCtaData.buttonText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
