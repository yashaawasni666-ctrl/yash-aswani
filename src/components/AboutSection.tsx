import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Terminal, Code2, Cpu, PenTool, Flame, ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"ideology" | "lighthouse" | "compiler">("ideology");
  const [codeLine, setCodeLine] = useState("");

  const premiumFeatures = [
    { title: "Pure Typography focus", description: "Configured with modern geometric and editorial paired serifs.", icon: PenTool },
    { title: "A-Grade Lighthouse Performance", description: "Ranked 100 on Mobile loading factors, zero rendering delays.", icon: Cpu },
    { title: "SEO Jodhpur Architectures", description: "Structured metadata configurations helping you occupy local spots.", icon: Code2 },
  ];

  // Simulated code compiler typing effect
  useEffect(() => {
    const fullCode = `const GrowthOnDeck = {
  ideology: "Pure Aesthetic Precision",
  origin: "Jodhpur, Rajasthan",
  performance: "100 Lighthouse score",
  customMade: true,
  whatsappSupport: "+91 8290800483"
};`;
    
    let index = 0;
    setCodeLine("");
    const interval = setInterval(() => {
      setCodeLine(fullCode.slice(0, index));
      index++;
      if (index > fullCode.length) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <section 
      id="about" 
      className="py-24 px-4 md:px-8 relative overflow-hidden bg-matte-900/60 border-y border-white/5 select-none"
    >
      <div className="absolute bottom-[10%] left-[5%] w-[400px] h-[400px] bg-radial-blur opacity-[0.06] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* About heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 glassmorphism px-3 py-1 rounded-full text-[9px] tracking-[0.2em] text-indigo-400 uppercase font-mono border border-white/10">
            <Sparkles className="w-3" /> INTRODUCING THE STUDIO
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight text-cream-100">
            We Design Luxury Code to <span className="font-serif italic text-indigo-400 font-normal text-glow-indigo">Grow Your Legacy</span>
          </h2>
          <p className="text-sm text-cream-300/60 leading-relaxed font-light">
            Growth On Deck was founded to solve a critical issue: generic templates. We construct luxurious, fully animated, responsive custom web experiences for high-end boutique brands and local services.
          </p>
        </div>

        {/* Story Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core information narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-4">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#818cf8]">DESIGN PHENOMENA</span>
              <h3 className="text-2xl font-serif text-cream-100 font-light leading-snug">
                Helping modern brands in Sardarpura, Shastri Nagar and beyond conquer internet real-estate.
              </h3>
              <p className="text-xs text-cream-300/60 leading-relaxed font-light">
                We believe a website is more than a digital brochure—it is your paramount trust-producing mechanism. Over 60+ clients across Jodhpur and India have chosen us to establish pristine online presence. We focus specifically on loading velocity, organic design fluidity, and direct CRM integrations like WhatsApp.
              </p>
            </div>

            {/* Core differentiators cards */}
            <div className="space-y-4 pt-4 border-t border-white/[0.04]">
              {premiumFeatures.map((feat, idx) => {
                const FeatIcon = feat.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/10 flex items-center justify-center text-indigo-400 shrink-0">
                      <FeatIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-cream-100 font-sans uppercase tracking-wider">{feat.title}</h4>
                      <p className="text-[11px] text-cream-200/50 mt-0.5 leading-relaxed">{feat.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Interactive Live Code Simulator */}
          <div className="lg:col-span-6 flex flex-col items-stretch">
            <div className="glassmorphism rounded-2xl border border-white/10 overflow-hidden shadow-2xl relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial-blur opacity-[0.2] blur-xl pointer-events-none" />
              
              {/* Custom Compiler header bar */}
              <div className="bg-matte-950 px-4 py-2.5 flex items-center justify-between border-b border-white/10 font-mono text-[10px] text-cream-100/40">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span>growth-on-deck_ide.ts</span>
                </div>
                <span className="text-green-400 font-bold tracking-widest uppercase text-[8px] animate-pulse">
                  ● INTERACTION OK
                </span>
              </div>

              {/* Live interactive UI toggle tabs inside compiler to render options */}
              <div className="bg-matte-900 border-b border-white/[0.03] px-4 py-2 flex gap-2 text-[10px] font-mono select-none">
                <button 
                  onClick={() => setActiveTab("ideology")}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeTab === "ideology" ? "bg-white/5 text-indigo-400 font-bold" : "text-cream-300/40"
                  }`}
                >
                  custom_params
                </button>
                <button
                  onClick={() => setActiveTab("lighthouse")}
                  className={`px-3 py-1 rounded transition-colors ${
                    activeTab === "lighthouse" ? "bg-white/5 text-indigo-400 font-bold" : "text-cream-300/40"
                  }`}
                >
                  seo_factors
                </button>
              </div>

              {/* Dynamic typing IDE layout area */}
              <div className="p-5 font-mono text-left bg-matte-950/80 min-h-[160px] text-xs leading-relaxed overflow-x-auto">
                <AnimatePresence mode="wait">
                  <motion.pre 
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-green-300/80"
                  >
                    <code>{codeLine}</code>
                    <span className="w-1.5 h-3.5 bg-indigo-500 inline-block align-middle ml-1 animate-pulse" />
                  </motion.pre>
                </AnimatePresence>
              </div>

              {/* Simulated render box */}
              <div className="bg-[#0b0c0d] p-4 border-t border-white/[0.03] flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <span className="font-mono text-[9px] text-cream-300/60 uppercase">Local Jodhpur Node Server</span>
                </div>
                <div className="flex gap-1">
                  <span className="bg-indigo-600 text-white font-bold text-[8px] px-2 py-0.5 rounded tracking-wide font-mono">
                    COMPILER ACTIVE
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
