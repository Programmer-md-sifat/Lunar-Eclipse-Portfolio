import { Link } from "react-router-dom";
import { MoonLogo } from "./MoonLogo";
import { footerData } from "../../data/common/navigation";
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="relative border-t border-white/10 bg-[#04060a] text-zinc-400"
    >
      {/* Background subtle glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[600px] -translate-x-1/2 bg-[#dfb277]/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-4">
            <MoonLogo size="lg" className="mb-6" />
            <p className="max-w-sm text-xs leading-relaxed text-zinc-400 sm:text-sm">
              {footerData.description}
            </p>

            {/* Certifications Badge row */}
            <div className="mt-8">
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#dfb277]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Global Compliance & Accreditations</span>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {footerData.compliance.map((cert) => (
                  <span
                    key={cert}
                    className="border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] tracking-wider text-zinc-400"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-display-modern mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs">
              {footerData.quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="transition-colors duration-200 hover:text-[#dfb277]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sourcing & Manufacturing Solutions */}
          <div className="lg:col-span-3">
            <h4 className="font-display-modern mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white">
              Capabilities
            </h4>
            <ul className="space-y-3 text-xs">
              {footerData.services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-white"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100 text-[#dfb277]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Presence */}
          <div className="lg:col-span-3">
            <h4 className="font-display-modern mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-white">
              Global Presence
            </h4>
            <div className="space-y-3 text-xs">
              {footerData.locations.map((loc) => (
                <div key={loc.city} className="border-b border-white/5 pb-2">
                  <div className="font-medium text-white">{loc.city}</div>
                  <div className="text-[11px] text-zinc-500">
                    {loc.role} • {loc.country}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row text-xs text-zinc-500">
          <p>© {currentYear} Lunar Eclipse International Group. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-zinc-300">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-zinc-300">
              Terms of Supply
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-zinc-300">
              Sourcing Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
