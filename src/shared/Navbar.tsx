import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NAV = [
  { id: "exmedia", label: "ExMedia", href: "/" },
  { id: "extechnology", label: "ExTechnology", href: "/extechnology" },
  { id: "exedu", label: "ExEdu", href: "/exedu" },
  { id: "exbot", label: "ExBot", href: "/exbot" },
  { id: "company", label: "Company", href: "/company" },
  { id: "contact", label: "Contact", href: "/contact" },
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const active = NAV.find((n) => n.href === pathname)?.id || "exmedia";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 rounded-none ${
          scrolled
            ? "border-b border-white/10 bg-background/90 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight rounded-none"
            aria-label="EX home"
          >
            <img src="/logo/ex-creative-logo.jpg" className="w-auto h-10 rounded-none" alt="" />
          </Link>

          {/* Sharp Brutalist Navigation Desktop */}
          <nav
            className="
              hidden md:flex
              items-center
              rounded-none
              border border-white/10
              bg-white/2
              backdrop-blur-xl
              p-1
            "
          >
            {NAV.map((n) => (
              <Link
                key={n.id}
                to={n.href}
                onClick={() => setOpen(false)}
                className="
                  relative
                  px-4
                  py-2
                  text-xs
                  font-mono
                  uppercase
                  tracking-wider
                  transition-colors
                  rounded-none
                "
              >
                {active === n.id && (
                  <motion.span
                    layoutId="brutalist-nav-indicator"
                    transition={{
                      type: "spring",
                      stiffness: 480,
                      damping: 38,
                      mass: 0.8,
                    }}
                    className="
                      absolute
                      inset-0
                      rounded-none
                      border
                      border-accent
                      bg-accent/10
                    "
                  />
                )}

                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    active === n.id
                      ? "text-accent font-semibold"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {n.label}
                </span>
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden p-2 border border-white/10 rounded-none hover:border-white transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu - Brutalist layout */}
        <div
          className={`md:hidden overflow-hidden border-t border-white/10 bg-background/95 backdrop-blur-xl transition-[max-height] duration-500 ${
            open ? "max-h-screen" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col gap-3 px-5 py-8 h-[calc(100vh-73px)] overflow-y-auto">
            {NAV.map((n) => (
              <Link
                key={n.id}
                to={n.href}
                onClick={scrollToTop}
                className={`flex items-center justify-between px-4 py-4 border transition-colors rounded-none font-mono text-xs uppercase tracking-wider ${
                  active === n.id 
                    ? "bg-accent/10 border-accent text-accent font-semibold" 
                    : "bg-white/2 border-white/10 text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{n.label}</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
