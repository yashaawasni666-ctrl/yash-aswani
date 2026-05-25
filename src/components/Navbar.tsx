import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSegment, setActiveSegment] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Reviews", href: "#reviews" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple intersection tracker to toggle active state
      const sections = ["home", "services", "portfolio", "reviews", "about", "contact"];
      const current = sections.find((sect) => {
        const el = document.getElementById(sect);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) {
        setActiveSegment(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3 px-4 sm:px-8" : "py-6 px-4"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between glassmorphism rounded-full px-6 py-2.5 sm:py-3.5 shadow-2xl transition-all border border-white/10">
          {/* Logo Brand Brand */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <span className="font-sans text-white font-extrabold text-sm">G</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-[0.2em] text-cream-100 group-hover:text-indigo-400 transition-colors uppercase">
                Growth <span className="text-indigo-400 font-bold">On</span> Deck
              </span>
              <span className="font-mono text-[7px] text-cream-100/40 tracking-[0.1em] uppercase leading-none mt-0.5">
                Creative Studio
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.02] border border-white/5 px-2 py-1 rounded-full">
            {navLinks.map((link) => {
              const isActive = activeSegment === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-medium tracking-wider uppercase transition-colors rounded-full ${
                    isActive ? "text-black font-semibold" : "text-cream-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-glow"
                      className="absolute inset-0 bg-indigo-650 rounded-full -z-1"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Call */}
            <a
              href="tel:+918290800483"
              className="px-3.5 py-1.5 rounded-full border border-white/10 text-[10px] font-semibold uppercase tracking-wider text-cream-105 hover:bg-white/5 transition-all flex items-center gap-2"
            >
              <Phone className="w-3 h-3 text-indigo-400" /> Phone Call
            </a>

            {/* Glowing WhatsApp link */}
            <a
              href="https://wa.me/918290800483?text=Hi%20Growth%20On%20Deck,%20I%20visited%20your%20website%20and%20want%20to%20collaborate%20on%20a%20website!"
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 rounded-full overflow-hidden flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-lg hover:shadow-indigo-500/20"
            >
              <MessageCircle className="w-3.5 h-3.5 text-white" /> WhatsApp Us
            </a>
          </div>

          {/* Mobile Right Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="https://wa.me/918290800483"
              className="p-2 rounded-full bg-indigo-600 text-white flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 border border-white/10 rounded-full hover:bg-white/5 text-stone-200"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-[99]"
          >
            {/* Background Glow Ring */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-radial-blur opacity-[0.15] blur-3xl pointer-events-none" />

            <div className="p-6 h-full flex flex-col justify-between">
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white font-sans">
                    G
                  </div>
                  <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-cream-100 uppercase">
                    Growth <span className="text-indigo-400 font-bold">On</span> Deck
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 border border-stone-850 rounded-full hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-cream-300" />
                </button>
              </div>

              {/* Vertical list of drawer links */}
              <nav className="flex flex-col gap-6 py-12 px-4">
                {navLinks.map((link, idx) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleMobileLinkClick(link.href)}
                    className="text-left font-serif text-2xl tracking-[0.05em] text-cream-100 hover:text-indigo-400 transition-colors uppercase flex items-center justify-between group"
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.08 }}
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-6 h-6 text-indigo-400/40 group-hover:text-indigo-400 transition-colors" />
                  </motion.button>
                ))}
              </nav>

              {/* Mobile CTA drawer buttons */}
              <div className="flex flex-col gap-3 px-4 pb-8">
                <a
                  href="tel:+918290800483"
                  className="py-3 px-6 rounded-full border border-white/10 text-center font-sans text-xs tracking-wider uppercase text-cream-200 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-indigo-400" /> Call Direct
                </a>
                <a
                  href="https://wa.me/918290800483"
                  className="py-3 px-6 rounded-full text-center font-sans text-xs tracking-wider uppercase text-white bg-indigo-600 hover:bg-indigo-500 font-bold transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/10"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp Chat
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
