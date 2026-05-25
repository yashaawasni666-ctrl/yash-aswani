import { motion } from "motion/react";
import { Phone, MessageCircle, Instagram, Code2, ArrowUpCircle, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-matte-950 pt-20 pb-10 border-t border-gold-300/5 px-4 md:px-8 relative overflow-hidden select-none">
      {/* Background radial slow elements */}
      <div className="absolute bottom-[-10%] right-[5%] w-[300px] h-[300px] bg-radial-blur opacity-[0.08] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 border-b border-white/[0.03] pb-16">
          
          {/* Logo Slogan Column */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <a href="#home" className="inline-flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-full bg-gold-400 flex items-center justify-center font-serif text-black font-extrabold text-sm">
                G
              </div>
              <div>
                <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-cream-105 group-hover:text-gold-300 transition-colors uppercase">
                  Growth <span className="text-gold-300 font-bold">On</span> Deck
                </span>
                <p className="font-mono text-[8px] text-cream-100/30 leading-none mt-0.5">EST. 2026 // INDIA</p>
              </div>
            </a>

            <p className="text-xs text-cream-300/50 leading-relaxed font-light">
              We program premium, luxurious, high-speed, and functional web architectures. Creating unique visual statements that build concrete user-focus and rank locally across Jodhpur search frameworks.
            </p>

            <p className="font-serif italic text-gold-300 text-xs sm:text-sm tracking-widest pt-1">
              "Designed With Creativity & Precision"
            </p>
          </div>

          {/* Quick Sitemap Links Column */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-300 mb-4 font-bold">DIRECTORY</h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <a href="#home" className="text-cream-300/60 hover:text-gold-300 transition-colors uppercase tracking-wider text-[10px]">
                  Home Base
                </a>
              </li>
              <li>
                <a href="#services" className="text-cream-300/60 hover:text-gold-300 transition-colors uppercase tracking-wider text-[10px]">
                  What We Build
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-cream-300/60 hover:text-gold-300 transition-colors uppercase tracking-wider text-[10px]">
                  Exhibition Deck
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-cream-300/60 hover:text-gold-300 transition-colors uppercase tracking-wider text-[10px]">
                  Client Standings
                </a>
              </li>
              <li>
                <a href="#about" className="text-cream-300/60 hover:text-gold-300 transition-colors uppercase tracking-wider text-[10px]">
                  Studio Story
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick Index Column */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-300 mb-4 font-bold">AESTHETIC SCHEMAS</h4>
            <ul className="space-y-1.5 text-[10px] font-mono uppercase text-cream-100/40">
              <li>🦷 DENTIST BOOKING SOLUTIONS</li>
              <li>🥗 RESTAURANT DYNAMIC MENUS</li>
              <li>💼 CORPORATE BRAND PAGES</li>
              <li>🌴 ROYAL HOTEL WALKTHROUGHS</li>
              <li>💅 SALON & Wellness SCHEDULERS</li>
              <li>🏡 minimal ESTATE LISTINGS</li>
            </ul>
          </div>

          {/* Connect Coordinate Channel Column */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-300 mb-4 font-bold">CONNECT DIAL</h4>
            
            <div className="flex gap-2">
              <a 
                href="tel:+918290800483" 
                className="p-2 border border-gold-300/10 rounded-full text-gold-400 hover:bg-gold-500 hover:text-black transition-colors"
                aria-label="Direct Call"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/918290800483" 
                className="p-2 border border-gold-300/10 rounded-full text-green-400 hover:bg-green-500 hover:text-black transition-colors"
                aria-label="WhatsApp Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/Growth._On_.Deck" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 border border-gold-300/10 rounded-full text-pink-400 hover:bg-pink-500 hover:text-black transition-colors"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <div className="text-[9px] font-mono text-cream-100/30">
              <p>SUPPORT RING:</p>
              <p className="text-cream-200 mt-0.5">+91 8290800483</p>
            </div>
          </div>

        </div>

        {/* Bottom Credits copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-cream-100/20 gap-4">
          <div className="flex items-center gap-1">
            <span>GROWTH ON DECK INC © 2026.</span>
            <span>ALL RIGHTS SECURED GLOWING.</span>
          </div>

          {/* Slogan details and back to top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-[9px]">
              <span>Crafted with</span>
              <Heart className="w-3 h-3 text-red-500 fill-red-500 inline" />
              <span>& Code by elite creators</span>
            </div>
            <button 
              onClick={scrollToTop} 
              className="text-gold-300 hover:text-gold-400 font-bold flex items-center gap-1 group transition-colors uppercase tracking-wider text-[9px]"
            >
              Back to Flight <ArrowUpCircle className="w-4 h-4 group-hover:scale-115 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
