import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Monitor, Smartphone, Check, ArrowUpRight, ArrowRight } from "lucide-react";
import WebsiteSimulator from "./WebsiteSimulator";

export default function ShowcaseSection() {
  const [selectedProject, setSelectedProject] = useState("dentist");

  const projects = [
    {
      id: "dentist",
      name: "OrthoGrace Clinic",
      industry: "Dentistry & Wellness",
      tagline: "High-precision digital scheduler with pain-free treatment menus.",
      accent: "from-teal-600 to-teal-400",
      theme: "light",
      stats: ["99.7% Satisfaction", "Doctor Calendars", "SMS Alerts Integration"],
    },
    {
      id: "restaurant",
      name: "Umami Garden Restaurant",
      industry: "Fine Dining Gastronomy",
      tagline: "Gourmet dishes scrolling carousel & courtyard reservation panels.",
      accent: "from-amber-600 to-amber-400",
      theme: "dark",
      stats: ["Chef-curated Plates", "Interactive Courtyard Selector", "Ghee timeline"],
    },
    {
      id: "hotel",
      name: "Aura Haveli & Palace",
      industry: "Heritage Hospitality",
      tagline: "Royal room availability checkers & historical walkthrough guides.",
      accent: "from-gold-600 to-gold-400",
      theme: "gilded",
      stats: ["Check-in calendars", "Suite photo grids", "Private chauffeur check"],
    },
    {
      id: "gym",
      name: "Vigor Craft Gym",
      industry: "Athletics & Training",
      tagline: "High-octane block titles, pricing models & coach timetables.",
      accent: "from-yellow-500 to-amber-500",
      theme: "dark",
      stats: ["VIP subscription cards", "Coach sliders", "Performance tracking"],
    },
    {
      id: "salon",
      name: "Chic Studio Salon",
      industry: "Cosmetic Artistry",
      tagline: "Soft rose-gold luxury palettes, seat bookings & treatments list.",
      accent: "from-pink-500 to-rose-400",
      theme: "light",
      stats: ["Balayage catalogs", "Wellness spa menus", "Live seat booker"],
    },
    {
      id: "realestate",
      name: "Niche Abode Properties",
      industry: "Luxury Real Estate",
      tagline: "Modern minimal housing widgets, maps, & WhatsApp agents.",
      accent: "from-indigo-600 to-blue-500",
      theme: "light",
      stats: ["Crores pricing grids", "Interactive listings", "Virtual tours panel"],
    },
  ];

  return (
    <section 
      id="portfolio" 
      className="py-24 px-4 md:px-8 relative overflow-hidden bg-matte-950"
    >
      {/* Background radial soft light */}
      <div className="absolute top-[30%] right-[5%] w-[450px] h-[450px] bg-radial-purple opacity-[0.12] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-radial-blur opacity-[0.1] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl text-left">
            <div className="inline-flex items-center gap-1.5 glassmorphism px-3 py-1 rounded-full text-[9px] tracking-[0.2em] text-indigo-400 uppercase font-mono border border-white/10">
              <Sparkles className="w-3 h-3 text-indigo-400" /> DESIGN EXHIBITION
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight text-cream-100">
              Fully Animated <br />
              <span className="font-serif italic text-indigo-400 font-normal text-glow-indigo">Website Demos</span> & Mockups
            </h2>
            <p className="text-sm text-cream-300/60 font-light leading-relaxed">
              Explore our custom human-made designs. Below is our live simulation deck. Select any industry project category to preview responsive code walkthroughs in real-time.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <span className="bg-white/[0.02] border border-white/5 px-3.5 py-1.5 rounded-full text-xs text-cream-100/70 font-sans tracking-wide">
              ✦ Mobile responsive presets
            </span>
            <span className="bg-white/[0.02] border border-white/5 px-3.5 py-1.5 rounded-full text-xs text-cream-100/70 font-sans tracking-wide">
              ✦ Optimized codebases
            </span>
          </div>
        </div>

        {/* Master Exhibition Deck columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Projects lists selectors */}
          <div className="lg:col-span-5 space-y-3">
            <p className="font-mono text-[9px] uppercase text-cream-100/30 tracking-[0.2em] mb-3 text-left pl-2">
              SELECT PROTOTYPE INDUSTRY
            </p>
            
            <div className="space-y-3.5">
              {projects.map((proj) => {
                const isSelected = selectedProject === proj.id;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setSelectedProject(proj.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-start justify-between group select-none relative overflow-hidden ${
                      isSelected 
                        ? "bg-matte-900 border-indigo-500/30 shadow-2xl shadow-indigo-500/5 text-cream-100" 
                        : "bg-transparent border-white/[0.03] hover:border-indigo-500/10 hover:bg-white/[0.01] text-cream-300"
                    }`}
                  >
                    {/* Left dynamic gold strip indicator */}
                    {isSelected && (
                      <motion.div 
                        layoutId="active-showcase-strip"
                        className="absolute left-0 top-0 bottom-0 w-[3px] bg-indigo-500" 
                      />
                    )}

                    <div className="space-y-1 pr-4">
                      {/* Name and label */}
                      <span className="font-mono text-[8px] tracking-[0.15em] uppercase text-indigo-400">
                        {proj.industry}
                      </span>
                      <h3 className={`text-base font-bold font-sans transition-colors ${
                        isSelected ? "text-cream-100" : "text-cream-200/80 group-hover:text-indigo-400"
                      }`}>
                        {proj.name}
                      </h3>
                      <p className="text-xs text-cream-300/50 leading-relaxed font-light mt-1">
                        {proj.tagline}
                      </p>

                      {/* Animated specific stats tag */}
                      <div className="flex flex-wrap gap-1.5 pt-2.5">
                        {proj.stats.map((stat, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="bg-white/[0.02] border border-white/5 px-2 py-0.5 rounded text-[8px] font-sans text-cream-300/40"
                          >
                            ✓ {stat}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex h-10 items-center justify-center">
                      <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${
                        isSelected 
                          ? "bg-indigo-600 border-indigo-500 text-white" 
                          : "border-white/5 group-hover:border-indigo-500/30 group-hover:bg-white/5 text-cream-100/40 group-hover:text-cream-100"
                      }`}>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Live Interactive Device walkthrough simulator */}
          <div className="lg:col-span-7 flex flex-col items-center">
            {/* Context tag */}
            <div className="mb-4 bg-white/[0.03] border border-white/5 p-3 rounded-xl w-full flex items-center justify-between text-xs font-sans">
              <span className="text-cream-300/60 font-medium">Auto-Scrolling Demo walkthrough</span>
              <span className="font-mono text-indigo-450 font-bold select-none uppercase tracking-widest text-[10px] animate-pulse">
                ● LIVE VECTOR ENGINE
              </span>
            </div>

            {/* Simulated frame content container */}
            <div className="w-full aspect-[4/5] sm:aspect-auto max-w-[580px] h-[550px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedProject}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <WebsiteSimulator projectId={selectedProject} autoplay={true} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
