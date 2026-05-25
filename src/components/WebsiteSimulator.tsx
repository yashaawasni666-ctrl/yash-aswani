import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Smartphone, Monitor, ChevronRight, Check, Star, Calendar, ShoppingBag, MapPin, Coffee, Volume2 } from "lucide-react";

interface SimulatorProps {
  projectId: string;
  autoplay?: boolean;
}

export default function WebsiteSimulator({ projectId, autoplay = true }: SimulatorProps) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");
  const [activeTab, setActiveTab] = useState<"home" | "services" | "booking" | "menu">("home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // States for interactive simulations inside the mockups
  const [bookingStep, setBookingStep] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [activeProperty, setActiveProperty] = useState(0);

  // Trigger scroll simulation
  useEffect(() => {
    if (!autoplay) return;
    setScrollProgress(0);
    const interval = setInterval(() => {
      setScrollProgress((p) => {
        if (p >= 100) {
          // Stay at end briefly, then loop back
          return 0;
        }
        return p + 0.35; // smooth auto-scroller speed
      });
    }, 40);

    return () => clearInterval(interval);
  }, [projectId, autoplay]);

  // Handle manual interaction that pauses or resets autoplay
  const handleScrollManual = (e: any) => {
    // Optional manual scrolling
  };

  // Switch tabs reset
  useEffect(() => {
    setBookingStep(1);
  }, [projectId]);

  // Define realistic content templates for each industry
  const renderMockupContent = () => {
    switch (projectId) {
      case "dentist":
        return (
          <div className="text-slate-800 bg-[#f9fbfb] min-h-full font-sans transition-all duration-500">
            {/* Nav */}
            <div className="bg-white/80 backdrop-blur-md sticky top-0 px-4 py-2 flex justify-between items-center border-b border-teal-100/50 text-xs z-10">
              <span className="font-bold text-teal-800 flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500" /> OrthoGrace
              </span>
              <div className="flex gap-3 text-[10px] text-slate-500 font-medium">
                <span className={activeTab === "home" ? "text-teal-600" : ""}>Home</span>
                <span className={activeTab === "services" ? "text-teal-600" : ""}>Treatments</span>
                <span className={activeTab === "booking" ? "text-teal-600 font-bold" : ""}>Specialists</span>
              </div>
              <button 
                onClick={() => setBookingStep(b => b === 3 ? 1 : b + 1)}
                className="bg-teal-600 hover:bg-teal-700 text-white text-[9px] font-bold px-2 py-1 rounded"
              >
                Book Slot
              </button>
            </div>

            {/* Inner body wrapper to emulate vertical scroll */}
            <div 
              className="px-4 py-3 transition-transform duration-[1200ms] ease-out"
              style={{ transform: `translateY(-${scrollProgress * 0.45}%)` }}
            >
              {/* Hero */}
              <div className="py-6 text-center bg-gradient-to-b from-teal-50/40 to-white rounded-lg px-2 mb-4">
                <span className="bg-teal-100/60 text-teal-800 text-[8px] font-semibold uppercase px-2 py-0.5 rounded-full">
                  ★ Jodhpur's Elite Dental Clinic
                </span>
                <h1 className="text-base font-bold text-slate-900 mt-2 tracking-tight">
                  Recreate Your Smile with Elite Dental Orthodontics
                </h1>
                <p className="text-[10px] text-slate-500 mt-1 max-w-[240px] mx-auto">
                  Providing pain-free dentistry treatments utilizing advanced laser tools in a luxurious environment.
                </p>
                <div className="mt-4 flex justify-center gap-2">
                  <span className="bg-teal-600 text-white text-[9px] px-2 py-1 rounded shadow-sm">
                    Book Treatment
                  </span>
                  <span className="border border-slate-200 text-slate-600 text-[9px] px-2 py-1 rounded">
                    Our Experts
                  </span>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                <div className="bg-white p-2 rounded-lg border border-teal-50 shadow-sm">
                  <p className="text-xs font-bold text-teal-700">99.7%</p>
                  <p className="text-[8px] text-slate-400">Success Rate</p>
                </div>
                <div className="bg-white p-2 rounded-lg border border-teal-50 shadow-sm">
                  <p className="text-xs font-bold text-teal-700">12k+</p>
                  <p className="text-[8px] text-slate-400">Smiles Crafted</p>
                </div>
                <div className="bg-white p-2 rounded-lg border border-teal-50 shadow-sm">
                  <p className="text-xs font-bold text-teal-700">15+</p>
                  <p className="text-[8px] text-slate-400">Awards Won</p>
                </div>
              </div>

              {/* Services grid */}
              <div className="mb-4">
                <h2 className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Treatments</h2>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white p-2.5 rounded-lg border border-slate-100 hover:border-teal-300 transition-colors">
                    <span className="text-base">🦷</span>
                    <h3 className="text-[10px] font-bold mt-1 text-slate-800">Laser Orthodontics</h3>
                    <p className="text-[8px] text-slate-400">Invisible high-precision braces.</p>
                  </div>
                  <div className="bg-white p-2.5 rounded-lg border border-slate-100 hover:border-teal-300 transition-colors">
                    <span className="text-base">✨</span>
                    <h3 className="text-[10px] font-bold mt-1 text-slate-800">Teeth Whitening</h3>
                    <p className="text-[8px] text-slate-400">Premium porcelain veneer finish.</p>
                  </div>
                </div>
              </div>

              {/* Booking flow simulation */}
              <div className="bg-white p-3 rounded-xl border border-teal-100 shadow-sm">
                <span className="text-[8px] font-semibold text-teal-600 uppercase">Interactive Scheduler</span>
                <h3 className="text-xs font-bold text-slate-800 mt-1">Book Your Comfort Slot</h3>
                
                {bookingStep === 1 && (
                  <div className="mt-2 space-y-1">
                    <p className="text-[9px] text-slate-500">Step 1: Select Dental Specialty</p>
                    <div 
                      onClick={() => setBookingStep(2)} 
                      className="border border-teal-100 bg-teal-50/30 p-2 rounded text-[9px] font-medium flex justify-between items-center cursor-pointer hover:bg-teal-50"
                    >
                      Teeth Alignment (Dental Aligners) <ChevronRight className="w-3 h-3 text-teal-600" />
                    </div>
                    <div className="border border-slate-100 p-2 rounded text-[9px] text-slate-600">
                      Standard Scale, Polish & Fillings
                    </div>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div className="mt-2 space-y-2">
                    <p className="text-[9px] text-slate-500">Step 2: Choose Specialist Date</p>
                    <div className="grid grid-cols-3 gap-1 text-center">
                      <div onClick={() => setBookingStep(3)} className="bg-teal-600 text-white rounded p-1 text-[8px] cursor-pointer">
                        <p className="font-bold">Mon, 28th</p>
                        <p className="opacity-80">9:30 AM</p>
                      </div>
                      <div className="bg-slate-50 hover:bg-teal-50 rounded p-1 text-[8px] text-slate-600">
                        <p className="font-bold">Tue, 29th</p>
                        <p className="text-slate-400">11:00 AM</p>
                      </div>
                      <div className="bg-slate-50 hover:bg-teal-50 rounded p-1 text-[8px] text-slate-600">
                        <p className="font-bold">Wed, 30th</p>
                        <p className="text-slate-400">4:30 PM</p>
                      </div>
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <div className="mt-2 text-center py-2">
                    <div className="w-6 h-6 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mx-auto mb-1">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <p className="text-[10px] font-bold text-slate-800">Slot Securely Booked!</p>
                    <p className="text-[8px] text-slate-400 mt-0.5">SMS confirmation with map pin dispatched.</p>
                    <button onClick={() => setBookingStep(1)} className="text-[8px] text-teal-600 underline font-medium mt-1">
                      Reset Demo
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        );

      case "restaurant":
        return (
          <div className="text-cream-100 bg-[#0f0e0c] min-h-full font-serif transition-all duration-500">
            {/* Header */}
            <div className="px-4 py-3 flex justify-between items-center border-b border-[#2e2b25]/80 text-[10px] font-sans">
              <span className="font-serif italic font-bold text-gold-300 tracking-wider">Umami Garden</span>
              <div className="flex gap-3 text-[9px] text-cream-300/60 lowercase">
                <span>heritage</span>
                <span className="text-gold-300 font-semibold">menu</span>
                <span>reserve</span>
              </div>
            </div>

            {/* Content wrapper */}
            <div 
              className="px-4 py-3 transition-transform duration-[1200ms] ease-out"
              style={{ transform: `translateY(-${scrollProgress * 0.45}%)` }}
            >
              <div className="text-center py-6">
                <p className="text-[8px] font-mono tracking-[0.2em] text-gold-300 uppercase mb-2">Modern Indian Gastronomy</p>
                <h1 className="text-lg font-normal tracking-tight leading-snug">
                  Experience Culinary Gold Handcrafted by Masters
                </h1>
                <div className="w-8 h-[1px] bg-gold-400/40 mx-auto my-3" />
                <p className="text-[9px] font-sans text-cream-300/50 leading-relaxed max-w-[220px] mx-auto">
                  A sanctuary of rich spices, local Jodhpur ingredients, and contemporary plates.
                </p>
              </div>

              {/* Dynamic Menu Selection Interaction */}
              <div className="bg-[#181613] p-3 rounded-lg border border-gold-300/10 mb-4 font-sans">
                <div className="flex justify-between items-center mb-2.5">
                  <span className="text-[9px] font-mono uppercase text-gold-300 tracking-wider">Today's Gourmet Plates</span>
                  <span className="text-[8px] bg-gold-400/20 text-gold-300 px-1.5 py-0.5 rounded">Chef's Pick</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between py-1 border-b border-[#c58e37]/10">
                    <div>
                      <h4 className="text-[10px] font-bold text-cream-100 flex items-center gap-1">
                        Saffron Paneer Glaze <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      </h4>
                      <p className="text-[8px] text-cream-200/50">Slow cooked with dry fruits and saffron petals.</p>
                    </div>
                    <span className="font-serif italic text-gold-300 text-[10px]">₹480</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-[#c58e37]/10">
                    <div>
                      <h4 className="text-[10px] font-bold text-cream-100 flex items-center gap-1">
                        Smoked Daal Baati <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      </h4>
                      <p className="text-[8px] text-cream-200/50">Infused with applewood smoke and rich Jodhpur ghee.</p>
                    </div>
                    <span className="font-serif italic text-gold-300 text-[10px]">₹540</span>
                  </div>
                </div>
              </div>

              {/* Booking simulation */}
              <div className="bg-[#24211a] p-3 rounded-lg border border-gold-300/15 text-center">
                <h4 className="font-serif italic text-gold-300 text-xs">Table Reservation</h4>
                <p className="text-[9px] font-sans text-cream-300/70 mt-1 mb-2">Reserve your candle-lit courtyard space.</p>
                <div className="grid grid-cols-2 gap-2 text-[9px] font-sans">
                  <div className="bg-[#181613] p-1 rounded text-gold-300 border border-gold-400/20">
                    Courtyard: 7 PM
                  </div>
                  <div className="bg-[#181613] p-1 rounded text-cream-300 opacity-60">
                    Roof Lounge: 9 PM
                  </div>
                </div>
                <button className="bg-gold-400 hover:bg-gold-500 text-black text-[9px] font-bold tracking-wider uppercase py-1.5 w-full rounded mt-3.5">
                  Confirm Booking (No Fee)
                </button>
              </div>
            </div>
          </div>
        );

      case "hotel":
        return (
          <div className="text-[#3a342a] bg-[#fdfbfa] min-h-full font-serif transition-all duration-500">
            {/* Elegant luxury navbar */}
            <div className="px-4 py-2 bg-[#f6f2ee] flex justify-between items-center text-[9px] uppercase tracking-wider">
              <span className="font-bold tracking-widest text-[#5c4a37]">AURA HAVELI</span>
              <span>Rooms</span>
            </div>

            {/* Scroll Container wrapper */}
            <div 
              className="px-4 py-3 transition-transform duration-[1200ms] ease-out"
              style={{ transform: `translateY(-${scrollProgress * 0.4}%)` }}
            >
              <div className="py-6 text-center">
                <span className="font-sans text-[8px] tracking-[0.2em] text-gold-600 block mb-2">THE SOUL OF RAJASTHAN</span>
                <h1 className="text-lg font-light text-slate-800 tracking-wide">
                  A Restored 18th Century Palace Awaiting Your Arrival
                </h1>
                <p className="font-sans text-[9px] text-slate-500 mt-2 max-w-[210px] mx-auto leading-relaxed">
                  Bask in architectural arches, rich hand-woven tapestries, and premium private pools in historical elegance.
                </p>
              </div>

              {/* Carousel Room Showcase with Dynamic Selector feedback */}
              <div className="bg-[#fcfbf9] p-2 border border-slate-100 rounded shadow-sm mb-4">
                <div className="h-24 bg-[#eae4d3] rounded relative overflow-hidden flex items-end">
                  {/* Mock image replacement */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-1" />
                  <div className="absolute top-2 right-2 bg-white/90 text-gold-700 text-[8px] font-bold px-1.5 py-0.5 rounded tracking-wider uppercase">
                    ★ 5.0 Rating
                  </div>
                  <div className="p-2 relative z-10 text-white font-sans">
                    <h4 className="font-serif italic text-gold-300 text-xs text-white">The Maharaja Heritage Suite</h4>
                    <p className="text-[8px] text-slate-300">Equipped with a private sun-deck & heritage archways.</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-2 font-sans text-[9px]">
                  <span className="font-bold text-slate-700">₹14,500 <span className="text-[7px] text-slate-400 font-normal">/ Night</span></span>
                  <button className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-3 py-1 rounded">
                    Book Suite
                  </button>
                </div>
              </div>

              {/* Highlights List */}
              <div className="space-y-1 bg-amber-50/20 p-2.5 rounded border border-amber-200/25">
                <h3 className="font-bold font-sans text-[9px] text-amber-900 uppercase tracking-wider">Aura Luxuries</h3>
                <div className="flex items-center gap-1.5 text-[8.5px] font-sans text-amber-800">
                  <Check className="w-2.5 h-2.5 text-gold-600" /> Complimentary Premium Welcome Drink
                </div>
                <div className="flex items-center gap-1.5 text-[8.5px] font-sans text-amber-800">
                  <Check className="w-2.5 h-2.5 text-gold-600" /> Private Royal Chauffeur on Request
                </div>
              </div>
            </div>
          </div>
        );

      case "gym":
        return (
          <div className="text-[#eeeeee] bg-[#0c0d0d] min-h-full font-mono transition-all duration-500">
            {/* Header */}
            <div className="px-3 py-2 bg-black flex justify-between items-center text-[10px] border-b border-yellow-500/25">
              <span className="font-bold tracking-tighter text-yellow-400">⚡ VIGOR CRAFT</span>
              <span className="text-[8px] bg-yellow-500 text-black px-1.5 font-bold uppercase">JOIN ATHLETE CLUB</span>
            </div>

            {/* Scroll Container wrapper */}
            <div 
              className="px-4 py-3 transition-transform duration-[1200ms] ease-out"
              style={{ transform: `translateY(-${scrollProgress * 0.45}%)` }}
            >
              <div className="py-5 text-left border-l-2 border-yellow-400 pl-3 mb-4">
                <h1 className="text-base font-black tracking-tight uppercase leading-none text-white">
                  REFORGE YOUR LIMITS. UNLEASH RAW HUMAN STRENGTH.
                </h1>
                <p className="font-sans text-[9px] text-gray-400 mt-1 max-w-[200px]">
                  Premium science-backed athletic training, hyper-modern barbells, and elite coaching arrays in Jodhpur.
                </p>
              </div>

              {/* Dynamic Interactive Price matrix multiplier */}
              <div className="bg-[#141516] p-3 border border-gray-800 rounded-lg mb-4">
                <p className="text-[8px] text-yellow-400 tracking-wider font-bold">VIP MEMBERSHIP PLAN</p>
                <div className="flex justify-between items-end mt-1">
                  <div>
                    <h3 className="text-xs font-bold text-white">Gold Elite Core</h3>
                    <p className="text-[8px] text-gray-400">24/7 Access + Bio-tracking</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-white">₹1,999</span>
                    <span className="text-[7px] text-gray-500 block">/ month</span>
                  </div>
                </div>
                <button 
                  onClick={() => setCartCount(c => c + 1)} 
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-[9px] w-full py-1.5 rounded mt-3 uppercase tracking-tighter"
                >
                  SECURE PASS ({cartCount} requested)
                </button>
              </div>

              {/* Metric widgets */}
              <div className="grid grid-cols-2 gap-2 text-center text-[9px]">
                <div className="bg-[#1d1f21] p-2 rounded">
                  <p className="font-bold text-white">450+ SQ. FT.</p>
                  <p className="text-gray-500 text-[8px]">Cardio Deck</p>
                </div>
                <div className="bg-[#1d1f21] p-2 rounded">
                  <p className="font-bold text-white">1ON1 VIP</p>
                  <p className="text-gray-500 text-[8px]">Personal Coach</p>
                </div>
              </div>
            </div>
          </div>
        );

      case "salon":
        return (
          <div className="text-zinc-800 bg-[#FAF7F2] min-h-full font-serif transition-all duration-500">
            {/* Elegant Header */}
            <div className="px-4 py-2 bg-[#F2ECE2] flex justify-between items-center text-[10px] font-sans tracking-widest border-b border-amber-800/5">
              <span className="font-normal uppercase text-amber-900">CHIC STUDIO</span>
              <span className="text-[8px] border border-amber-900/40 px-2 py-0.5 rounded">Menu</span>
            </div>

            {/* Scroll Container */}
            <div 
              className="px-4 py-3 transition-transform duration-[1200ms] ease-out"
              style={{ transform: `translateY(-${scrollProgress * 0.45}%)` }}
            >
              <div className="py-6 text-center">
                <span className="font-sans text-[8px] tracking-[0.25em] text-amber-800 uppercase block mb-1">HAIR, SPA & BEAUTY DESIGN</span>
                <h1 className="text-lg font-normal text-amber-950 font-serif lowercase tracking-tight">
                  elevating your natural aesthetic glow.
                </h1>
                <p className="font-sans text-[8.5px] text-zinc-500 mt-2 max-w-[210px] mx-auto leading-relaxed">
                  Bespoke hair therapy, facial dermaceutics, and holistic ayurvedic massage rituals.
                </p>
              </div>

              {/* Service pricing list */}
              <div className="bg-white p-3 rounded-lg border border-[#ece3d3] mb-4 font-sans text-xs">
                <h4 className="font-serif italic text-amber-900 text-[10px] mb-2 uppercase text-center">Service Menu</h4>
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[9px] border-b border-zinc-100 pb-1 text-zinc-700">
                    <span>Royal Balayage Tinting</span>
                    <span className="font-bold">₹1,800+</span>
                  </div>
                  <div className="flex justify-between text-[9px] border-b border-zinc-100 pb-1 text-zinc-700">
                    <span>Aromatherapy Rejuvenation (60m)</span>
                    <span className="font-bold">₹2,400</span>
                  </div>
                </div>
              </div>

              {/* Booking simulation box */}
              <div className="bg-[#ebd9cb]/30 p-2.5 rounded border border-[#ebd9cb] text-center font-sans">
                <p className="text-[9px] font-bold text-amber-900 uppercase">Secure Lounge Appointment</p>
                <div className="flex gap-1 justify-center mt-2">
                  <span className="bg-[#cbd0b9]/40 text-amber-950 text-[8px] rounded px-1.5 py-0.5">Hair Spa</span>
                  <span className="bg-amber-950 text-white text-[8px] rounded px-1.5 py-0.5 font-bold">Book Slots</span>
                </div>
              </div>
            </div>
          </div>
        );

      case "realestate":
        return (
          <div className="text-slate-900 bg-white min-h-full font-sans transition-all duration-500">
            {/* Modern header */}
            <div className="px-4 py-2 border-b border-slate-100 flex justify-between items-center text-xs">
              <span className="font-bold tracking-tight text-slate-900 flex items-center gap-1">
                <span className="w-2.5 h-2.5 bg-indigo-600 rounded-sm" /> Niche Abode
              </span>
              <span className="text-[8px] uppercase tracking-widest text-[#6366f1] font-bold">Listings</span>
            </div>

            {/* Scroll Container */}
            <div 
              className="px-4 py-3 transition-transform duration-[1200ms] ease-out"
              style={{ transform: `translateY(-${scrollProgress * 0.4}%)` }}
            >
              <div className="py-5 text-left">
                <span className="text-[8px] font-bold uppercase tracking-wider text-indigo-600">LUXURY RESIDENCES</span>
                <h1 className="text-base font-black text-slate-900 tracking-tight leading-tighter mt-1">
                  Find Architectural Masterpieces Constructed in Premium Landscapes.
                </h1>
                <p className="text-[10px] text-slate-500 mt-1 max-w-[220px]">
                  Discover bespoke Jodhpur high-ceiling villas and luxury apartments customized to client specifications.
                </p>
              </div>

              {/* Dynamic Property interactive slider selector */}
              <div className="bg-slate-50 border border-slate-150 rounded-xl p-2.5 mb-2.5">
                <div className="h-24 bg-slate-200 rounded-lg relative overflow-hidden flex items-end">
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-white">
                    <span className="text-[8px] bg-indigo-600 text-white font-bold px-1.5 py-0.5 rounded uppercase">Exclusive Villa</span>
                    <h4 className="text-[10px] font-bold mt-1 text-white">The Indigo Oasis (Jodhpur)</h4>
                    <p className="text-[7.5px] text-slate-300">6 BHK • Infinity Pool • Heritage Arches</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <span className="text-[8px] text-slate-400 font-medium">Market Value</span>
                    <p className="text-[10px] font-bold text-slate-800">₹4.8 Crores</p>
                  </div>
                  <button className="bg-indigo-600 text-white font-bold text-[9px] px-2.5 py-1 rounded-md">
                    Inquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case "portfolio":
      default:
        return (
          <div className="text-stone-300 bg-[#0c0c0e] min-h-full font-sans transition-all duration-500">
            {/* Header */}
            <div className="px-3 py-2 border-b border-stone-800 flex justify-between items-center text-[10px]">
              <span className="font-mono text-white text-[9px] tracking-widest uppercase">Aero Creative</span>
              <span className="text-[8px] text-stone-500 uppercase">Work</span>
            </div>

            {/* Scroll Wrapper */}
            <div 
              className="px-4 py-3 transition-transform duration-[1200ms] ease-out"
              style={{ transform: `translateY(-${scrollProgress * 0.45}%)` }}
            >
              <div className="py-6 text-left">
                <span className="font-mono text-[8px] text-stone-500 block mb-1">DESIGN & DEV DIRECTORY</span>
                <h1 className="text-base font-medium tracking-tight text-white">
                  We turn architectural complex code equations into organic user flow.
                </h1>
              </div>

              {/* Minimal grids */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <div className="bg-[#141417] p-2 rounded-md border border-stone-850">
                  <div className="h-10 bg-stone-800 rounded mb-1" />
                  <p className="text-[9px] font-bold text-white">01. Zenith Co</p>
                  <p className="text-[7px] text-stone-500">Fintech Dashboard</p>
                </div>
                <div className="bg-[#141417] p-2 rounded-md border border-stone-850">
                  <div className="h-10 bg-stone-800 rounded mb-1" />
                  <p className="text-[9px] font-bold text-white">02. Quartz</p>
                  <p className="text-[7px] text-stone-500">Luxury Brand SPA</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  // Human-like mock navigation bar for the browser URL
  const getMockUrl = () => {
    switch (projectId) {
      case "dentist": return "https://orthograce.growthondeck.com";
      case "restaurant": return "https://umamigarden.com";
      case "hotel": return "https://aurahaveli.com";
      case "gym": return "https://vigorcraft.in";
      case "salon": return "https://chicstudio.growthondeck.com";
      case "realestate": return "https://nicheabode.co";
      case "portfolio": return "https://aerofolio.dev";
      default: return "https://growthondeck.com";
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      {/* Devices Swapping Selector */}
      <div className="flex bg-matte-900/80 p-1 rounded-full border border-gold-300/10 mb-3 text-xs pointer-events-auto">
        <button
          onClick={() => setDevice("desktop")}
          className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 font-sans font-medium transition-all ${
            device === "desktop"
              ? "bg-gold-500 text-black shadow-lg shadow-gold-500/10"
              : "text-cream-300/60 hover:text-white"
          }`}
        >
          <Monitor className="w-3.5 h-3.5" /> Desktop Review
        </button>
        <button
          onClick={() => setDevice("mobile")}
          className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 font-sans font-medium transition-all ${
            device === "mobile"
              ? "bg-gold-500 text-black shadow-lg shadow-gold-500/10"
              : "text-cream-300/60 hover:text-white"
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" /> Mobile View
        </button>
      </div>

      {/* Main device frame container */}
      <div className="w-full flex-1 flex items-center justify-center min-h-[300px] pointer-events-auto">
        <AnimatePresence mode="wait">
          {device === "desktop" ? (
            /* Luxury Laptop Browser Window Chassis */
            <motion.div
              key="desktop-mockup"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-full max-w-[620px] bg-matte-900 rounded-xl border border-gold-400/20 overflow-hidden shadow-2xl flex flex-col opacity-100 relative view-trigger"
            >
              {/* Browser Header Tab Frame */}
              <div className="bg-matte-950 px-4 py-2 flex items-center justify-between border-b border-gold-400/10 select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 border border-red-500/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 border border-yellow-500/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 border border-green-500/20" />
                </div>
                {/* Simulated Address Bar */}
                <div className="bg-matte-900 border border-gold-400/5 px-4 py-0.5 rounded text-[10px] text-gold-300/40 font-mono tracking-wider w-[50%] text-center">
                  {getMockUrl()}
                </div>
                {/* Connection Status indicator */}
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-mono text-[7px] text-cream-100/30">SIM-SECURE</span>
                </div>
              </div>

              {/* Virtual Browser Viewport */}
              <div 
                ref={containerRef}
                onScroll={handleScrollManual}
                className="w-full flex-1 overflow-y-hidden select-none touch-auto relative"
              >
                {/* Scroll Indicator Overlay */}
                <div className="absolute right-1 top-1 bottom-1 w-1 bg-gold-400/5 rounded-full z-[8] select-none">
                  <motion.div 
                    className="w-full bg-gold-400/60 rounded-full"
                    style={{ 
                      height: "25%",
                      transform: `translateY(${scrollProgress * 3}%)`
                    }}
                  />
                </div>
                {renderMockupContent()}
              </div>
            </motion.div>
          ) : (
            /* Gorgeous Smartphone Chassis Frame */
            <motion.div
              key="mobile-mockup"
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-[280px] h-[500px] bg-matte-900 rounded-[30px] border-[5px] border-gold-400/20 overflow-hidden shadow-2xl flex flex-col relative relative view-trigger"
            >
              {/* Speaker Speaker & camera notch */}
              <div className="absolute top-2 left-[50%] transform translate-x-[-50%] w-24 h-4 bg-black rounded-full z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-matte-700 rounded-full" />
              </div>

              {/* Virtual Smartphone Screen Body */}
              <div className="w-full h-full overflow-y-hidden select-none relative pt-6 bg-matte-950">
                {renderMockupContent()}
              </div>

              {/* Soft Home Button Indicator at bottom */}
              <div className="absolute bottom-1 left-[50%] transform translate-x-[-50%] w-[35%] h-1 bg-gold-300/30 rounded-full z-20" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
