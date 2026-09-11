import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import { Shield, Award, CheckCircle2, ArrowRight, FileCheck2, Lock, Flame } from "lucide-react";
import navyUniformImg from "../assets/images/bd_navy_uniform_1787920153389.jpg";
import coastGuardUniformImg from "../assets/images/bd_coast_guard_uniform_1787920174774.jpg";

export function Uniforms() {
  const tenderCapabilities = [
    {
      title: "Tactical & Camouflage Uniforms",
      desc: "NIR-compliant combat fatigues, flame-retardant flight overalls, ripstop trousers, and weather-proof outer shells engineered for modern defense forces.",
      specs: "65/35 Poly-Cotton Ripstop • Teflon DWR • Infra-Red Proof",
      image: navyUniformImg,
    },
    {
      title: "Rank Epaulettes & Gold Bullion Insignia",
      desc: "Hand-crafted bullion wire badges, high-density jacquard rank epaulettes, die-cast enamel medals, and metallic crests for naval, air force, and army officers.",
      specs: "Hand-Embroidered Metallic Wire • High-Density Weave",
      image: coastGuardUniformImg,
    },
    {
      title: "Aviation & Police Duty Workwear",
      desc: "Tailored pilot suiting, cabin crew attire, anti-static security shirts, and high-visibility traffic officer utility jackets.",
      specs: "Anti-Static Finish • Stain Repellent • Ergonomic Fit",
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=800&auto=format&fit=crop",
    },
  ];

  return (
    <PageTransition>
      <div className="w-full bg-[#020509] text-white">

        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-white/[0.06] overflow-hidden">
          <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#dfb277]/[0.03] blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
            <div className="max-w-4xl">
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.08]">
                Uniforms, Badges & <br />
                <span className="font-georgia text-[#dfb277]">Military Insignia</span>
              </h1>

              <p className="mt-8 text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-3xl">
                Specialized high-security manufacturing contracts for government ministries, defense forces, aviation carriers, and law enforcement agencies requiring mil-spec textiles and precision heraldry.
              </p>
            </div>
          </div>
        </section>

        {/* TENDER PRODUCTS SHOWCASE */}
        <section className="py-20 sm:py-28 border-b border-white/[0.06] relative">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tenderCapabilities.map((item) => (
                <div key={item.title} className="bg-[#030712] border border-white/10 rounded-2xl overflow-hidden hover:border-[#dfb277]/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="aspect-[4/3] overflow-hidden bg-zinc-900 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
                    </div>

                    <div className="p-7">
                      <h3 className="font-editorial text-2xl text-white font-light mb-2">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-4">{item.desc}</p>
                    </div>
                  </div>

                  <div className="p-7 pt-0">
                    <div className="bg-white/[0.03] border border-white/10 p-3 rounded-xl text-[10px] font-mono text-[#dfb277]">
                      {item.specs}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TENDER COMPLIANCE CTA */}
        <section className="py-20 sm:py-24 relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
            <div className="bg-[#030712] border border-[#dfb277]/30 p-12 sm:p-16 rounded-3xl relative">
              <Lock className="h-10 w-10 text-[#dfb277] mx-auto mb-4" />
              <h2 className="font-editorial text-3xl sm:text-5xl font-light text-white tracking-tight">
                Government Tender & NDA Inquiry Portal
              </h2>
              <p className="text-sm text-zinc-400 font-light max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
                Submit formal RFP documentation, military textile specifications, or rank heraldry artwork for strict confidential review.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-[#dfb277] text-black px-8 py-4 text-xs font-mono font-bold tracking-[0.2em] uppercase rounded-xl hover:bg-white transition-all shadow-[0_0_25px_rgba(223,178,119,0.3)]"
              >
                <span>SUBMIT TENDER SPECIFICATION</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
