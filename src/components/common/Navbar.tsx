import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { MoonLogo } from "./MoonLogo";
import { navigationItems, headerCta } from "../../data/common/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#06090e]/90 backdrop-blur-md py-2 sm:py-2.5 shadow-2xl shadow-black/50"
          : "bg-gradient-to-b from-black/60 to-transparent py-3.5 sm:py-4 lg:py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Inset */}
        <MoonLogo isScrolled={isScrolled} showText={true} />

        {/* Desktop Navigation Links */}
        <nav
          id="desktop-nav-menu"
          aria-label="Main Navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                className={`group relative text-[11px] font-medium tracking-[0.24em] transition-colors duration-300 ${
                  isActive
                    ? "text-[#dfb277]"
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                <span>{item.label}</span>
                {/* Active Indicator underline */}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-[1.5px] w-full bg-[#dfb277]" />
                )}
                <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA Action Button */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            to={headerCta.href}
            id="nav-cta-button"
            className="group inline-flex items-center gap-2 border border-white/20 bg-black/30 px-5 py-2 text-[11px] font-medium tracking-[0.22em] text-white backdrop-blur-sm transition-all duration-300 hover:border-[#dfb277] hover:bg-[#dfb277]/10 hover:text-white"
          >
            <span>{headerCta.label}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-zinc-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#dfb277]" />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            to={headerCta.href}
            className="border border-white/20 bg-white/5 px-3 py-1.5 text-[10px] tracking-[0.18em] text-white"
          >
            CONTACT
          </Link>
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-white/20 bg-black/40 text-zinc-300 hover:text-white"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="border-b border-white/10 bg-[#06090e]/95 backdrop-blur-xl px-6 py-6 shadow-2xl lg:hidden animate-in fade-in slide-in-from-top-4 duration-300"
        >
          <div className="flex flex-col space-y-4">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center justify-between border-b border-white/5 py-2.5 text-xs font-medium tracking-[0.24em] ${
                    isActive ? "text-[#dfb277]" : "text-zinc-300"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#dfb277]" />}
                </Link>
              );
            })}

            <div className="pt-3">
              <Link
                to={headerCta.href}
                className="flex w-full items-center justify-center gap-2 border border-[#dfb277] bg-[#dfb277]/10 py-3 text-center text-xs font-medium tracking-[0.22em] text-[#dfb277]"
              >
                <span>{headerCta.label}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
