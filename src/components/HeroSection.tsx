import { motion } from "motion/react";
import { ArrowRight, Phone, MessageCircle, Star, BadgeCheck, ShieldAlert, Sparkles, MapPin } from "lucide-react";
import WebsiteSimulator from "./WebsiteSimulator";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 px-4 md:px-8 overflow-hidden flex items-center"
    >
      {/* Absolute Backdrop Lights */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-radial-blur opacity-[0.15] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-radial-purple opacity-[0.2] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Visual Column: Typography copy & actions */}
        <motion.div 
          className="lg:col-span-7 flex flex-col space-y-6 text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Studio Tagline Badge */}
          <motion.div 
            variants={itemVariants}
            className="self-start glassmorphism px-3 py-1 rounded-full flex items-center gap-2 border border-white/10 hover:border-white/20 shadow-lg text-[10px] tracking-[0.2em] text-indigo-300 uppercase font-semibold font-sans pointer-events-auto"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span> Premium Studio based in Jodhpur
          </motion.div>

          {/* Core Master Headline */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-3xl sm:text-[46px] lg:text-[45px] xl:text-[52px] leading-[1.05] font-sans font-light tracking-tight text-cream-100">
              Crafting <span className="font-serif italic font-normal text-indigo-400 text-glow-indigo">Cinematic</span> Websites <br />
              That Scale and Convert.
            </h1>
            
            <p className="text-sm font-light text-cream-300/70 sm:text-base max-w-xl leading-relaxed">
              We design aesthetic, modern, cinematic, and high-converting websites for dentist clinics, restaurants, real estate, spas, and portfolios in Jodhpur and across India. 
            </p>
          </motion.div>

          {/* Actions grid */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col sm:flex-row gap-3 pt-2"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-xl hover:shadow-indigo-500/15 pointer-events-auto"
            >
              Start Your Website
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] hover:border-indigo-400/25 text-cream-100 text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all pointer-events-auto"
            >
              View Portfolio
            </a>

            <a
              href="tel:+918290800483"
              className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-indigo-400/30 text-indigo-400 text-xs font-semibold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all pointer-events-auto"
            >
              <Phone className="w-3.5 h-3.5" /> Call Now
            </a>
          </motion.div>

          {/* Badges / Social proof inline slider */}
          <motion.div 
            variants={itemVariants}
            className="pt-6 border-t border-gold-300/10 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-cream-100 font-mono">60+</span>
              <span className="text-[10px] text-cream-300/50 uppercase tracking-widest mt-0.5">Happy Clients</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-cream-100 font-mono flex items-center gap-1">
                60+ <Star className="w-3.5 h-3.5 fill-yellow-500 text-yellow-500 inline" />
              </span>
              <span className="text-[10px] text-cream-300/50 uppercase tracking-widest mt-0.5">5-Star Reviews</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-cream-100 font-mono">100%</span>
              <span className="text-[10px] text-cream-300/50 uppercase tracking-widest mt-0.5">Response Rate</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold text-cream-100 font-mono">100%</span>
              <span className="text-[10px] text-cream-300/50 uppercase tracking-widest mt-0.5">Aesthetic Focus</span>
            </div>
          </motion.div>

          {/* Callout Trust Badges Slider */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap gap-2 pt-2"
          >
            <span className="bg-white/[0.01] border border-white/5 px-2.5 py-1 rounded text-[9px] text-cream-100/60 uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
              <BadgeCheck className="w-3.5 h-3.5 text-indigo-400" /> Trusted Website Agency
            </span>
            <span className="bg-white/[0.01] border border-white/5 px-2.5 py-1 rounded text-[9px] text-cream-100/60 uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
              <BadgeCheck className="w-3.5 h-3.5 text-indigo-400" /> Premium Design Quality
            </span>
            <span className="bg-white/[0.01] border border-white/5 px-2.5 py-1 rounded text-[9px] text-cream-100/60 uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" /> Jodhpur Based Creative Studio
            </span>
          </motion.div>

          {/* Ultra luxury floating contact banner */}
          <motion.div 
            variants={itemVariants}
            className="glassmorphism p-4 rounded-2xl border border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-2xl relative overflow-hidden pointer-events-auto"
          >
            {/* Soft backdrop glow to make it stand out */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-transparent pointer-events-none" />
            <div>
              <p className="text-[10px] uppercase font-semibold text-indigo-300 tracking-[0.15em] mb-0.5">Need a Professional Website?</p>
              <h4 className="text-xs text-cream-200/80">Connect directly with Jodhpur's finest design engineers.</h4>
            </div>
            <div className="flex gap-2">
              <a 
                href="https://wa.me/918290800483" 
                className="p-2 rounded-full border border-white/10 text-cream-105 hover:bg-white/5 transition-colors"
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href="tel:+918290800483" 
                className="p-2 rounded-full bg-indigo-650 text-white hover:bg-indigo-500 transition-colors"
                aria-label="Direct Phone Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

        </motion.div>

        {/* Right Visual Column: Live interactive browser walkthrough simulation */}
        <motion.div 
          className="lg:col-span-5 w-full flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          {/* Simulated walkthrough selector header */}
          <div className="mb-4 text-center">
            <h3 className="text-xs font-mono uppercase text-indigo-400/60 tracking-[0.2em] mb-1">LIVE SIMULATION ENVIRONMENT</h3>
            <p className="text-[10px] text-cream-100/40 font-serif italic">Witness live render of our customized Dentist template</p>
          </div>

          <div className="w-full aspect-[4/5] sm:aspect-auto max-w-[480px]">
            <WebsiteSimulator projectId="dentist" autoplay={true} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
