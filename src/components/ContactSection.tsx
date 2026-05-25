import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Phone, MessageCircle, Instagram, MapPin, Sparkles, Mail, 
  Send, RefreshCw, Layers, Sliders, Volume2, HelpCircle 
} from "lucide-react";

export default function ContactSection() {
  // Budget / Requirement Estimator state
  const [siteType, setSiteType] = useState<"landing" | "standard" | "ecommerce" | "luxury">("standard");
  const [pagesCount, setPagesCount] = useState(5);
  const [includeWhatsapp, setIncludeWhatsapp] = useState(true);
  const [includeBooking, setIncludeBooking] = useState(false);
  const [includeSEO, setIncludeSEO] = useState(true);

  // Form states
  const [formName, setFormName] = useState("");
  const [formBusiness, setFormBusiness] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Calculated estimates in Rupees
  const basePrices = {
    landing: 4999,
    standard: 9999,
    ecommerce: 19999,
    luxury: 24999,
  };

  const getPrice = () => {
    let price = basePrices[siteType];
    // page adjustments
    price += (pagesCount - 1) * 800;
    if (includeWhatsapp) price += 500;
    if (includeBooking) price += 2500;
    if (includeSEO) price += 1500;
    return price;
  };

  // Compile estimates details and redirect to WhatsApp pre-populated URL
  const handleWhatsAppRedirect = (e: FormEvent) => {
    e.preventDefault();
    const typeLabel = siteType.toUpperCase();
    const message = `Hi Growth On Deck! I calculated an estimate on your website and would like to build a project with you:
- *Name*: ${formName || "Client"}
- *Business*: ${formBusiness || "Generic Industry"}
- *Website Format*: ${typeLabel} (${pagesCount} Pages)
- *Features*: ${includeWhatsapp ? "[WhatsApp Integrated] " : ""}${includeBooking ? "[Slots Booking] " : ""}${includeSEO ? "[SEO Pack Local]" : ""}
- *Calculated Budget*: ₹${getPrice().toLocaleString()}`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/918290800483?text=${encoded}`, "_blank");
    setIsSubmitted(true);
  };

  return (
    <section 
      id="contact" 
      className="py-24 px-4 md:px-8 relative overflow-hidden bg-matte-950"
    >
      {/* Glow ambient background elements */}
      <div className="absolute top-[20%] right-[-5%] w-[450px] h-[450px] bg-radial-blur opacity-[0.1] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-radial-purple opacity-[0.08] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Contact heading header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 glassmorphism px-3 py-1 rounded-full text-[9px] tracking-[0.2em] text-indigo-400 uppercase font-mono border border-white/10">
            <Sparkles className="w-3" /> DIRECT PROJECT ESTIMATOR & CONNECT
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight text-cream-100">
            Let's Start Your <span className="font-serif italic text-indigo-400 font-normal text-glow-indigo">Online Empire</span>
          </h2>
          <p className="text-sm text-cream-300/60 leading-relaxed font-light">
            No endless corporate email delays. Select your parameters below in our live visual budget estimator or direct message us on WhatsApp/Phone.
          </p>
        </div>

        {/* Dynamic columns grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Quick Coordinates & Social badging */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#818cf8] block text-left pl-1">
                STUDIO HEADQUARTERS
              </span>

              {/* Core contacts cards stack */}
              <div className="space-y-4 text-left">
                {/* Location */}
                <div className="glassmorphism p-4 rounded-xl border border-white/5 hover:border-indigo-400/20 transition-colors flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/[0.01] border border-white/10 flex items-center justify-center text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-sans text-cream-100 uppercase tracking-wider">Our Location</h4>
                    <p className="text-xs text-cream-200/50 mt-1">Jodhpur, Rajasthan, India</p>
                    <p className="text-[10px] text-indigo-400/40 font-mono mt-0.5">Sardarpura - Shastri Nagar - Paota</p>
                  </div>
                </div>

                {/* Direct Calling */}
                <a 
                  href="tel:+918290800483"
                  className="glassmorphism p-4 rounded-xl border border-white/5 hover:border-indigo-400/20 transition-all flex items-start gap-4 text-left block pointer-events-auto cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white/[0.01] border border-white/10 flex items-center justify-center text-indigo-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-sans text-cream-100 uppercase tracking-wider">Direct Phone Call</h4>
                    <p className="text-xs text-cream-200 mt-1 font-semibold hover:text-indigo-400 transition-colors">+91 8290800483</p>
                    <p className="text-[10px] text-cream-100/30 font-mono">Tap button to call instantly</p>
                  </div>
                </a>

                {/* Direct WhatsApp */}
                <a 
                  href="https://wa.me/918290800483"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glassmorphism p-4 rounded-xl border border-white/5 hover:border-amber-500/20 transition-all flex items-start gap-4 text-left block pointer-events-auto cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white/[0.01] border border-white/10 flex items-center justify-center text-green-400">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-sans text-cream-100 uppercase tracking-wider">WhatsApp Direct</h4>
                    <p className="text-xs text-cream-200 mt-1 font-semibold hover:text-green-400 transition-colors">+91 8290800483</p>
                    <p className="text-[10px] text-cream-100/30 font-mono">Get mockups inside 20 minutes</p>
                  </div>
                </a>

                {/* Direct Instagram */}
                <a 
                  href="https://instagram.com/Growth._On_.Deck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glassmorphism p-4 rounded-xl border border-white/5 hover:border-pink-500/20 transition-all flex items-start gap-4 text-left block pointer-events-auto cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-white/[0.01] border border-white/10 flex items-center justify-center text-pink-400">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold font-sans text-cream-100 uppercase tracking-wider">Instagram Sensation</h4>
                    <p className="text-xs text-cream-200 mt-1 font-semibold hover:text-pink-400 transition-colors">@Growth._On_.Deck</p>
                    <p className="text-[10px] text-cream-100/30 font-mono">View daily code walkthroughs</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Jodhpur geographical tag information */}
            <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl text-left text-[10px] font-sans text-cream-100/40">
              <span className="font-bold text-indigo-400 font-mono">SUPPORT AVAILABILITY:</span> High priority support dispatched 24/7 across Shastri Nagar, Sardarpura, Ratanada, Paota, Jodhpur, and global Indian locations.
            </div>
          </div>

          {/* Right: Awesome Estimate Calculator and compiler submit */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-matte-900 rounded-2xl border border-white/10 p-6 md:p-8 text-left relative overflow-hidden pointer-events-auto">
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/[0.03] pb-4">
                <div>
                  <h3 className="text-lg font-bold font-sans text-cream-100">Project Planner & Calculator</h3>
                  <p className="text-[11px] text-cream-300/40">Select options below. Prices are standard estimates in INR.</p>
                </div>
                <RefreshCw 
                  className="w-4 h-4 text-indigo-400/40 cursor-pointer hover:text-indigo-400 transition-colors"
                  onClick={() => {
                    setSiteType("standard");
                    setPagesCount(5);
                    setIncludeWhatsapp(true);
                    setIncludeBooking(false);
                    setIncludeSEO(true);
                  }}
                />
              </div>

              {/* Requirement: Site Format */}
              <div className="space-y-2">
                <span className="font-mono text-[9px] uppercase tracking-wider text-cream-100/40 block">01. Choose Website Architecture Scale</span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <button
                    onClick={() => { setSiteType("landing"); setPagesCount(1); }}
                    className={`py-2 px-1 rounded-lg border text-center transition-all ${
                      siteType === "landing" ? "bg-indigo-600 border-indigo-500 text-white font-bold" : "border-white/5 text-cream-100/60 hover:bg-white/5"
                    }`}
                  >
                    Landing Page
                  </button>
                  <button
                    onClick={() => { setSiteType("standard"); setPagesCount(5); }}
                    className={`py-2 px-1 rounded-lg border text-center transition-all ${
                      siteType === "standard" ? "bg-indigo-600 border-indigo-500 text-white font-bold" : "border-white/5 text-cream-100/60 hover:bg-white/5"
                    }`}
                  >
                    Business Site
                  </button>
                  <button
                    onClick={() => { setSiteType("ecommerce"); setPagesCount(8); }}
                    className={`py-2 px-1 rounded-lg border text-center transition-all ${
                      siteType === "ecommerce" ? "bg-indigo-600 border-indigo-500 text-white font-bold" : "border-white/5 text-cream-100/60 hover:bg-white/5"
                    }`}
                  >
                    E-Commerce
                  </button>
                  <button
                    onClick={() => { setSiteType("luxury"); setPagesCount(12); }}
                    className={`py-2 px-1 rounded-lg border text-center transition-all ${
                      siteType === "luxury" ? "bg-indigo-600 border-indigo-500 text-white font-bold" : "border-white/5 text-cream-100/60 hover:bg-white/5"
                    }`}
                  >
                    Luxury Portal
                  </button>
                </div>
              </div>

              {/* Requirement: Page Count Bar Slider */}
              <div className="space-y-2">
                <div className="flex justify-between font-mono text-[9px] uppercase text-cream-100/40">
                  <span>02. Scale of Pages</span>
                  <span className="text-indigo-400 font-bold">{pagesCount} Sections / Pages</span>
                </div>
                <input 
                  type="range"
                  min="1"
                  max="20"
                  value={pagesCount}
                  onChange={(e) => setPagesCount(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-matte-950 rounded"
                />
              </div>

              {/* Option checkboxes layout */}
              <div className="space-y-2.5">
                <span className="font-mono text-[9px] uppercase tracking-wider text-cream-100/40 block">03. Add Premium Integrations</span>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  {/* Whatsapp */}
                  <label className="flex items-center gap-2 bg-matte-950 p-2.5 rounded-lg border border-white/5 cursor-pointer hover:border-indigo-400/30 select-none">
                    <input 
                      type="checkbox" 
                      checked={includeWhatsapp} 
                      onChange={() => setIncludeWhatsapp(!includeWhatsapp)}
                      className="accent-indigo-500 h-4 w-4"
                    />
                    <div>
                      <p className="font-bold text-cream-100">WhatsApp Chat</p>
                      <p className="text-[9px] text-cream-350/40">Direct triggers</p>
                    </div>
                  </label>

                  {/* Booking scheduler */}
                  <label className="flex items-center gap-2 bg-matte-950 p-2.5 rounded-lg border border-white/5 cursor-pointer hover:border-indigo-400/30 select-none">
                    <input 
                      type="checkbox" 
                      checked={includeBooking} 
                      onChange={() => setIncludeBooking(!includeBooking)}
                      className="accent-indigo-500 h-4 w-4"
                    />
                    <div>
                      <p className="font-bold text-cream-100">Slots Booking</p>
                      <p className="text-[9px] text-cream-350/40">Integrated SMS calendaring</p>
                    </div>
                  </label>

                  {/* Local SEO pack */}
                  <label className="flex items-center gap-2 bg-matte-950 p-2.5 rounded-lg border border-white/5 cursor-pointer hover:border-indigo-400/30 select-none">
                    <input 
                      type="checkbox" 
                      checked={includeSEO} 
                      onChange={() => setIncludeSEO(!includeSEO)}
                      className="accent-indigo-500 h-4 w-4"
                    />
                    <div>
                      <p className="font-bold text-cream-100">Jodhpur SEO</p>
                      <p className="text-[9px] text-cream-350/40">Rank factor opt</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Estimator display */}
              <div className="bg-matte-950 p-4 rounded-xl border border-white/10 flex justify-between items-center">
                <div>
                  <p className="font-mono text-[8px] tracking-wider text-[#818cf8] uppercase font-bold">ESTIMATED INVESTMENT VALUE</p>
                  <p className="text-xl sm:text-2xl font-black text-cream-100 font-mono mt-0.5">
                    ₹{getPrice().toLocaleString()} <span className="text-[10px] text-cream-300/40 font-normal font-sans">INR onwards</span>
                  </p>
                </div>
                <span className="bg-gradient-to-r from-indigo-500/10 to-purple-500/20 text-indigo-400 border border-indigo-500/35 px-2.5 py-1 rounded text-[9px] font-bold uppercase select-none font-mono">
                  ★ No Hidden Fees
                </span>
              </div>

              {/* Direct message submission form */}
              <form onSubmit={handleWhatsAppRedirect} className="space-y-3.5 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Name" 
                    value={formName} 
                    onChange={(e) => setFormName(e.target.value)}
                    className="bg-matte-950 border border-white/5 focus:border-indigo-400 text-cream-100 rounded-lg p-2.5 text-xs outline-none"
                  />
                  <input 
                    type="text" 
                    required 
                    placeholder="Your Business / Concept" 
                    value={formBusiness} 
                    onChange={(e) => setFormBusiness(e.target.value)}
                    className="bg-matte-950 border border-white/5 focus:border-indigo-400 text-cream-100 rounded-lg p-2.5 text-xs outline-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold font-sans text-xs uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/20"
                >
                  <MessageCircle className="w-4 h-4" /> Submit Estimate & Chat on WhatsApp
                </button>
              </form>
            </div>

            <div className="mt-4 text-center">
              <span className="font-mono text-[7px] text-cream-110/30 uppercase tracking-[0.2em]">
                Growth On Deck Private Design Space © 2026
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
