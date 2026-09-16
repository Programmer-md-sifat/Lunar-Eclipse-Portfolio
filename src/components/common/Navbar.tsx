import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import { MoonLogo } from "./MoonLogo";
import { navigationItems, headerCta } from "../../data/common/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({
    ABOUT: true,
  });
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
    setOpenDropdown(null);
  }, [location.pathname]);

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#06090e]/95 backdrop-blur-md py-2 sm:py-2.5 shadow-2xl shadow-black/50"
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
            const hasChildren = item.children && item.children.length > 0;
            const isChildActive =
              hasChildren &&
              item.children?.some((child) => location.pathname === child.href);
            const isCurrentActive = location.pathname === item.href;
            const isActive = isCurrentActive || isChildActive;

            if (hasChildren) {
              return (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <div className="flex items-center gap-1.5 cursor-pointer py-2">
                    <Link
                      to={item.href}
                      className={`text-[11px] font-medium tracking-[0.24em] transition-colors duration-300 ${
                        isActive
                          ? "text-[#dfb277]"
                          : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                    </Link>
                    <ChevronDown
                      className={`h-3 w-3 transition-transform duration-300 ${
                        openDropdown === item.label
                          ? "rotate-180 text-[#dfb277]"
                          : "text-zinc-400 group-hover:text-white"
                      }`}
                    />
                  </div>

                  {/* Underline Indicator */}
                  {isActive && (
                    <span className="absolute bottom-1 left-0 h-[1.5px] w-full bg-[#dfb277]" />
                  )}

                  {/* Dropdown Menu Container */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-300 ${
                      openDropdown === item.label
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2 pointer-events-none"
                    }`}
                  >
                    <div className="w-72 bg-[#030712]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-3 shadow-2xl shadow-black/80">
                      <div className="space-y-1">
                        {item.children?.map((child) => {
                          const isSubActive = location.pathname === child.href;
                          return (
                            <Link
                              key={child.label}
                              to={child.href}
                              className={`block p-3 rounded-xl transition-all ${
                                isSubActive
                                  ? "bg-[#dfb277]/10 border border-[#dfb277]/30"
                                  : "hover:bg-white/5 border border-transparent"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span
                                  className={`text-xs font-mono font-bold uppercase tracking-wider ${
                                    isSubActive
                                      ? "text-[#dfb277]"
                                      : "text-white group-hover:text-[#dfb277]"
                                  }`}
                                >
                                  {child.label}
                                </span>
                                {isSubActive && (
                                  <span className="h-1.5 w-1.5 rounded-full bg-[#dfb277]" />
                                )}
                              </div>
                              {child.description && (
                                <p className="text-[11px] text-zinc-400 font-light mt-1 line-clamp-2 leading-relaxed">
                                  {child.description}
                                </p>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

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
        <div className="hidden items-center gap-5 lg:flex">
          <Link
            to="/login"
            className="text-[11px] font-mono tracking-[0.2em] text-zinc-400 hover:text-[#dfb277] transition-colors flex items-center gap-1.5"
            title="Executive Portal Login"
          >
            <span>PORTAL</span>
          </Link>
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
            className="inline-flex h-9 w-9 items-center justify-center rounded border border-white/20 bg-black/40 text-zinc-300 hover:text-white cursor-pointer"
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
          <div className="flex flex-col space-y-3">
            {navigationItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isChildActive =
                hasChildren &&
                item.children?.some((child) => location.pathname === child.href);
              const isCurrentActive = location.pathname === item.href;
              const isActive = isCurrentActive || isChildActive;

              if (hasChildren) {
                const isExpanded = mobileExpanded[item.label] ?? false;
                return (
                  <div key={item.label} className="border-b border-white/5 pb-2">
                    <div className="flex items-center justify-between py-2">
                      <Link
                        to={item.href}
                        className={`text-xs font-medium tracking-[0.24em] ${
                          isActive ? "text-[#dfb277]" : "text-zinc-300"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggleMobileSubmenu(item.label)}
                        className="p-1.5 text-zinc-400 hover:text-white"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-300 ${
                            isExpanded ? "rotate-180 text-[#dfb277]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="pl-4 pt-1 pb-2 space-y-2 border-l border-[#dfb277]/30 ml-2">
                        {item.children?.map((child) => {
                          const isSubActive = location.pathname === child.href;
                          return (
                            <Link
                              key={child.label}
                              to={child.href}
                              className={`block py-1.5 text-[11px] font-mono tracking-wider ${
                                isSubActive
                                  ? "text-[#dfb277] font-bold"
                                  : "text-zinc-400 hover:text-white"
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span>{child.label}</span>
                                {isSubActive && (
                                  <span className="h-1 w-1 rounded-full bg-[#dfb277]" />
                                )}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`flex items-center justify-between border-b border-white/5 py-2.5 text-xs font-medium tracking-[0.24em] ${
                    isActive ? "text-[#dfb277]" : "text-zinc-300"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#dfb277]" />
                  )}
                </Link>
              );
            })}

            <div className="pt-3 space-y-2">
              <Link
                to={headerCta.href}
                className="flex w-full items-center justify-center gap-2 border border-[#dfb277] bg-[#dfb277]/10 py-3 text-center text-xs font-medium tracking-[0.22em] text-[#dfb277]"
              >
                <span>{headerCta.label}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                to="/login"
                className="flex w-full items-center justify-center gap-2 border border-white/10 bg-white/5 py-2.5 text-center text-[11px] font-mono tracking-[0.2em] text-zinc-400 hover:text-white"
              >
                <span>EXECUTIVE PORTAL LOGIN</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

