import { PageTransition } from "../components/common/PageTransition";
import { Link } from "react-router-dom";
import { ArrowRight, Tag } from "lucide-react";

export function Products() {
  const categories = [
    {
      title: "Premium Fabrics & Textiles",
      items: ["Egyptian & Pima Cotton", "Selvedge & Stretch Denim", "Merino & Cashmere Blends", "Recycled Polyester & Nylon", "Technical Waterproof Shells"],
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Garments & Apparel",
      items: ["Dresses & Evening Wear", "Structured Blazers & Suits", "Streetwear Hoodies & Tees", "Activewear & Compression", "Denim Pants & Jackets"],
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Accessories & Headwear",
      items: ["Embroidered Baseball Caps", "Luxury Canvas & Leather Bags", "Bucket Hats & Beanies", "Custom Woven Belts", "High-Tech Utility Backpacks"],
      image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Trims & Hardware",
      items: ["Engraved Metal Buttons", "Waterproof Coil Zippers", "Woven Brand Labels", "Leather & Rubber Patches", "Custom Aglets & Drawstrings"],
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <PageTransition>
      <div className="w-full bg-[#06090e] pt-32 pb-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#dfb277]">
              Product Portfolio
            </span>
            <h1 className="font-editorial mt-3 text-4xl sm:text-5xl lg:text-6xl font-light text-white">
              Materials & <span className="font-georgia text-[#dfb277]">Manufactured Lines</span>
            </h1>
            <p className="mt-6 text-base text-zinc-300 leading-relaxed">
              Explore our comprehensive range of custom manufacturing capabilities, certified raw materials, bespoke hardware, and precision garment collections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="group border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-white/30"
              >
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    className="w-full h-full object-cover filter brightness-75 transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06090e] via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-editorial text-2xl text-white mb-4">{cat.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-zinc-400">
                        <Tag className="h-3 w-3 text-[#dfb277]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] text-[#dfb277] hover:text-white transition-colors"
                  >
                    <span>REQUEST SPECIFICATIONS</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
