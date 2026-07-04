import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NAV = [
  { id: "exmedia", label: "ExMedia", href: "/" },
  { id: "extechnology", label: "ExTechnology", href: "/extechnology" },
  { id: "exbot", label: "ExBot", href: "/exbot" },
  { id: "exedu", label: "ExEdu", href: "/exedu" },
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

  const handleRipple = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add("bubble");

    const existingBubble = button.querySelector(".bubble");
    if (existingBubble) {
      existingBubble.remove();
    }
    button.appendChild(circle);
  };

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            to="/"
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight"
            aria-label="EX home"
          >
            <img src="/logo/ex-creative-logo.jpg" className="w-auto h-10" alt="" />
          </Link>

          <nav
            className="
    hidden md:flex
    items-center
    rounded-full
    border border-white/10
    bg-white/5
    backdrop-blur-2xl
    p-1.5
    shadow-lg
  "
          >
            {NAV.map((n) => (
              <Link
                key={n.id}
                to={n.href}
                className="
        relative
        px-5
        py-2.5
        text-sm
        font-medium
        transition-colors
      "
              >
                {active === n.id && (
                  <motion.span
                    layoutId="liquid-nav"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 35,
                      mass: 0.7,
                    }}
                    className="
            absolute
            inset-0
            rounded-full
            overflow-hidden
            border
            border-white/20
            bg-white/15
            backdrop-blur-3xl
            shadow-[0_8px_30px_rgba(255,255,255,.08)]
          "
                  >
                    {/* Top highlight */}
                    <span
                      className="
              absolute
              inset-x-1
              top-1
              h-1/2
              rounded-full
              bg-linear-to-b
              from-white/40
              via-white/10
              to-transparent
            "
                    />

                    {/* Moving reflection */}
                    <span
                      className="
              absolute
              -left-1/2
              top-0
              h-full
              w-1/3
              rotate-12
              bg-linear-to-r
              from-transparent
              via-white/40
              to-transparent
              animate-glass
            "
                    />
                  </motion.span>
                )}

                <span
                  className={`relative z-10 transition-colors duration-300 ${
                    active === n.id
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {n.label}
                </span>
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden border-t border-border  bg-background/95 backdrop-blur-xl transition-[max-height] duration-500 ${
            open ? "max-h-full" : "max-h-0"
          }`}
        >
          <nav className="flex h-screen content-center relative top-24 flex-col gap-4 px-5 ">
            {NAV.map((n) => (
              <Link
                key={n.id}
                to={n.href}
                onClick={(e) => {
                  setOpen(false);
                  handleRipple(e);
                }}
                className={`liquid-glass-nav-item flex items-center justify-between px-4 py-4 text-left text-base font-medium ${
                  active === n.id ? "text-foreground" : "text-muted-foreground"
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
