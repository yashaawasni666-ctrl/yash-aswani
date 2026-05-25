import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Star, Quote, ShieldCheck, Sparkles } from "lucide-react";

export default function TestimonialsSection() {
  const reviewsList = [
    {
      id: "rev-1",
      name: "Ramesh Sharma",
      role: "Founder, OrthoGrace Clinic",
      location: "Shastri Nagar, Jodhpur",
      rating: 5,
      text: "The dentist slot scheduler is phenomenal! Patients are booking treatments directly from WhatsApp. Our Jodhpur traffic has surged by 120% in just two months. Unmatched design premium aesthetics.",
      avatarLetter: "R",
    },
    {
      id: "rev-2",
      name: "Priya Verma",
      role: "Managing Director, Chic Studio Salon",
      location: "Paota, Jodhpur",
      rating: 5,
      text: "Our previous site looked extremely generic. Growth On Deck built an elegant rose-gold beauty menu and booked calendar. The entire Jodhpur client base has praised the cinematic feel.",
      avatarLetter: "P",
    },
    {
      id: "rev-3",
      name: "Rahul Mehta",
      role: "Owner, Umami Garden fine dining",
      location: "Sardarpura, Jodhpur",
      rating: 5,
      text: "Masterful culinary scrolling dish slides. The automatic table reservation slot has drastically simplified our candle-lit evening rush. Highly professional website development India.",
      avatarLetter: "R",
    },
    {
      id: "rev-4",
      name: "Suresh Patel",
      role: "Marketing Head, Niche Abode",
      location: "Chopasni Road, Jodhpur",
      rating: 5,
      text: "As real estate developers, visual trust is everything. The luxury high-ceiling layout and direct WhatsApp click triggers have multiplied our high-value property buyer inquiries tenfold.",
      avatarLetter: "S",
    },
    {
      id: "rev-5",
      name: "Arjun Singh",
      role: "Head Coach, Vigor Craft Gym",
      location: "Pal Link Road, Jodhpur",
      rating: 5,
      text: "Amazing high-octane neon yellow contrast template. The athletic coaching slots and membership options are secure and incredibly fast. These guys are the best website designers in Jodhpur.",
      avatarLetter: "A",
    },
    {
      id: "rev-6",
      name: "Vikram Rathore",
      role: "Director, Rathore Heritage Inn",
      location: "Mandore, Jodhpur",
      rating: 5,
      text: "The Availability Checker has completely filled our royal heritage suites. Growth On Deck produces human-made, custom, Apple-level design models.",
      avatarLetter: "V",
    },
  ];

  // Auto-slide indicator tracker
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % reviewsList.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [reviewsList.length]);

  return (
    <section 
      id="reviews" 
      className="py-24 px-4 md:px-8 relative overflow-hidden bg-matte-950 border-b border-white/5"
    >
      {/* Background soft glow halos */}
      <div className="absolute top-[40%] left-[-10%] w-[450px] h-[450px] bg-radial-blur opacity-[0.08] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title sections */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4 animate-on-scroll">
          <div className="inline-flex items-center gap-1.5 glassmorphism px-3 py-1 rounded-full text-[9px] tracking-[0.2em] text-indigo-400 uppercase font-mono border border-white/10">
            <Sparkles className="w-3" /> CLIENT FEEDBACK & RATINGS
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight text-cream-100">
            60+ Reviews, <span className="font-serif italic text-indigo-400 font-normal text-glow-indigo">Trusted Website Agency</span> in Jodhpur
          </h2>
          <p className="text-sm text-cream-300/60 leading-relaxed font-light">
            Read real-world feedback from local business owners of Sardarpura, Shastri Nagar, and across Rajasthan who successfully transformed their digital operations.
          </p>
        </div>

        {/* Testimonials Slide deck layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Overall aggregate bento grid card and trust factors */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="glassmorphism p-6 rounded-2xl border border-white/10 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial-blur opacity-[0.15] blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              <h3 className="text-xl font-bold font-sans text-cream-100">
                ★★★★★ Jodhpur's Highest Rated Creative Agency
              </h3>

              <p className="text-xs text-cream-300/60 leading-relaxed">
                Empowering businesses since inception. We design secure code structures that satisfy both corporate standards and local Jodhpur search engines for outstanding ROI.
              </p>

              <div className="space-y-2 border-t border-white/[0.04] pt-4">
                <div className="flex items-center gap-2 text-xs text-cream-100/80">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" /> 60+ Active Clients
                </div>
                <div className="flex items-center gap-2 text-xs text-cream-100/80">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" /> Zero Delayed Shipments
                </div>
                <div className="flex items-center gap-2 text-xs text-cream-100/80">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" /> 5-Star Certified Jodhpur Designer
                </div>
              </div>
            </div>

            {/* Micro selector bars for manual jumping */}
            <div className="flex gap-2 justify-center lg:justify-start">
              {reviewsList.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-1 rounded-full transition-all ${
                    activeIdx === idx ? "w-8 bg-indigo-500" : "w-3 bg-white/10"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right: Active floating scrolling card layout */}
          <div className="lg:col-span-7 h-[300px] flex items-center justify-center relative relative">
            
            <div className="w-full max-w-lg relative h-full flex items-center justify-center">
              {/* Carousel transition container */}
              {reviewsList.map((rev, idx) => {
                const isActive = activeIdx === idx;
                const offset = idx - activeIdx;

                if (Math.abs(offset) > 1 && idx !== 0 && idx !== reviewsList.length - 1) return null;

                return (
                  <motion.div
                    key={rev.id}
                    className="absolute w-full"
                    style={{
                      zIndex: isActive ? 10 : 1,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                    initial={{ opacity: 0, scale: 0.9, x: 50 }}
                    animate={{
                      opacity: isActive ? 1 : 0,
                      scale: isActive ? 1 : 0.9,
                      x: isActive ? 0 : offset > 0 ? 60 : -60,
                    }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  >
                    <div className="bg-[#0f0e12] p-6 rounded-2xl border border-white/5 hover:border-indigo-400/30 shadow-2xl relative select-none">
                      
                      {/* Gilded Quote Emblem background */}
                      <Quote className="absolute right-6 top-6 w-12 h-12 text-indigo-400/5 rotate-180" />

                      <div className="flex items-center gap-4 mb-4 text-left">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#1d1f21] to-indigo-500/20 flex items-center justify-center text-indigo-400 border border-white/10 font-bold font-serif text-lg">
                          {rev.avatarLetter}
                        </div>
                        <div>
                          <h4 className="font-bold text-cream-100 text-sm font-sans">{rev.name}</h4>
                          <p className="text-[10px] text-indigo-400/80">{rev.role}</p>
                          <p className="text-[9px] text-[#818cf8] font-mono">{rev.location}</p>
                        </div>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-3 text-left">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>

                      {/* Review text */}
                      <p className="text-xs sm:text-sm text-cream-200/80 leading-relaxed font-light italic">
                        "{rev.text}"
                      </p>

                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
