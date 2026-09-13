import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowUp } from "lucide-react";
import { MoonLogo } from "./MoonLogo";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      id="main-footer"
      className="relative bg-[#03060a] text-zinc-400 border-t border-white/[0.06] overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pt-16 sm:pt-24 pb-12">
        {/* Top Header Section: Headline & CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
          <div className="max-w-2xl">
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-[58px] font-light text-white tracking-tight leading-[1.12]">
              Your Trusted & <span className="font-georgia italic text-[#dfb277]">Loyal</span>
              <br />
              Business Partner.
            </h2>
          </div>

          <div className="shrink-0 pb-2">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3.5 text-xs sm:text-[13px] font-mono tracking-[0.22em] text-[#dfb277] hover:text-white transition-colors"
            >
              <span className="uppercase">START A CONVERSATION</span>
              <div className="h-8 w-8 sm:h-9 sm:w-9 border border-white/20 flex items-center justify-center group-hover:border-[#dfb277] group-hover:bg-[#dfb277]/10 transition-all">
                <ArrowUpRight className="h-4 w-4 text-[#dfb277] group-hover:text-white transition-colors" />
              </div>
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.08] my-12 sm:my-16" />

        {/* Main 5 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <div className="mb-6">
              <MoonLogo size="sm" showText={true} />
            </div>

            <p className="text-xs sm:text-[13px] font-light text-zinc-400 leading-relaxed max-w-sm">
              Global buying house, trading and supply solutions group — fabrics, trims, logistics, technical support, and specialized uniform, insignia and institutional supply.
            </p>
          </div>

          {/* Column 2: COMPANY */}
          <div className="lg:col-span-2">
            <h4 className="text-[10.5px] font-mono font-medium tracking-[0.28em] text-zinc-500 uppercase mb-5">
              COMPANY
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px] font-light">
              <li>
                <Link to="/about" className="text-zinc-300 hover:text-[#dfb277] transition-colors">
                  Explore Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-zinc-300 hover:text-[#dfb277] transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/message-from-md" className="text-zinc-300 hover:text-[#dfb277] transition-colors">
                  Message from MD
                </Link>
              </li>
              <li>
                <Link to="/message-from-ceo" className="text-zinc-300 hover:text-[#dfb277] transition-colors">
                  Message from CEO
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-zinc-300 hover:text-[#dfb277] transition-colors">
                  Our Business
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-zinc-300 hover:text-[#dfb277] transition-colors">
                  Global Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: SOLUTIONS */}
          <div className="lg:col-span-2">
            <h4 className="text-[10.5px] font-mono font-medium tracking-[0.28em] text-zinc-500 uppercase mb-5">
              SOLUTIONS
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px] font-light">
              <li>
                <Link to="/products" className="text-zinc-300 hover:text-[#dfb277] transition-colors">
                  Textile & Garment
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-300 hover:text-[#dfb277] transition-colors">
                  Trading
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-300 hover:text-[#dfb277] transition-colors">
                  Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: BUSINESS */}
          <div className="lg:col-span-2">
            <h4 className="text-[10.5px] font-mono font-medium tracking-[0.28em] text-zinc-500 uppercase mb-5">
              BUSINESS
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px] font-light">
              <li>
                <Link to="/products" className="text-zinc-300 hover:text-[#dfb277] transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-zinc-300 hover:text-[#dfb277] transition-colors">
                  Sourcing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-zinc-300 hover:text-[#dfb277] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: CONTACT */}
          <div className="lg:col-span-2">
            <h4 className="text-[10.5px] font-mono font-medium tracking-[0.28em] text-zinc-500 uppercase mb-5">
              CONTACT
            </h4>
            <div className="space-y-4 text-xs sm:text-[13px] font-light">
              <p className="text-zinc-400 leading-relaxed">
                Base: <span className="text-zinc-200 font-normal">Bangladesh</span>
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Inquiries:{" "}
                <Link
                  to="/contact"
                  className="text-[#dfb277] hover:underline font-medium"
                >
                  Business Form
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright, Tagline & Back to Top */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-zinc-500 uppercase">
          <div>© 2026 LUNAR ECLIPSE INTERNATIONAL GROUP</div>
          <div className="hidden md:block text-center text-zinc-500">
            CONNECTING GLOBAL SUPPLY — DELIVERING TRUSTED SOLUTIONS
          </div>
          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>BACK TO TOP</span>
            <div className="h-6 w-6 border border-white/20 flex items-center justify-center group-hover:border-[#dfb277] group-hover:text-[#dfb277] transition-colors">
              <ArrowUp className="h-3 w-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
