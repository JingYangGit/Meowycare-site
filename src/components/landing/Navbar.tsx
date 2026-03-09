import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Snowflake, Flower2, Sun, Leaf, Menu, X } from "lucide-react";
import { useSeason, Season } from "@/contexts/SeasonContext";

const navItems = [
  { label: "Daily Accountability", path: "/" },
  { label: "In-moment Support", path: "/in-moment" },
];

const seasonIcons: Record<Season, { icon: typeof Snowflake; className: string; label: string }> = {
  winter: { icon: Snowflake, className: "w-4 h-4", label: "Switch to Spring" },
  spring: { icon: Flower2, className: "w-4 h-4 text-green-300/80", label: "Switch to Summer" },
  summer: { icon: Sun, className: "w-4 h-4 text-sky-300/80", label: "Switch to Autumn" },
  autumn: { icon: Leaf, className: "w-4 h-4 text-amber-300/80", label: "Switch to Winter" },
};

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { season, toggleSeason } = useSeason();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const { icon: SeasonIcon, className: iconClass, label } = seasonIcons[season];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#0D0A08]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <img src="/favicon-v2.svg" alt="MeowyCare" className="w-6 h-6 rounded-full" />
          <span className="text-sm font-medium tracking-wide">MeowyCare</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`relative px-3 py-1.5 text-sm rounded-full transition-all duration-200 ${
                  isActive ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-white/10 border border-white/10 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </button>
            );
          })}

          <button
            onClick={toggleSeason}
            className="ml-2 p-1.5 rounded-full text-white/40 hover:text-white/80 hover:bg-white/10 transition-all duration-200"
            aria-label={label}
            title={label}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={season}
                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
              >
                <SeasonIcon className={iconClass} />
              </motion.div>
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile: season toggle + hamburger */}
        <div className="flex sm:hidden items-center gap-1">
          <button
            onClick={toggleSeason}
            className="p-1.5 rounded-full text-white/40 hover:text-white/80 hover:bg-white/10 transition-all duration-200"
            aria-label={label}
          >
            <SeasonIcon className={iconClass} />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded-full text-white/60 hover:text-white/90 hover:bg-white/10 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="sm:hidden overflow-hidden border-t border-white/[0.06]"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setMobileOpen(false);
                    }}
                    className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all ${
                      isActive
                        ? "text-white bg-white/10"
                        : "text-white/50 hover:text-white/80 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
