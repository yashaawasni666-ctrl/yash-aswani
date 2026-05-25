import { motion } from "motion/react";
import { 
  HeartPulse, Utensils, Coffee, Scissors, Hotel, Dumbbell, 
  Home, ShoppingCart, User, CalendarDays, Rocket, Building, Check, Sparkles 
} from "lucide-react";

export default function ServicesSection() {
  const servicesList = [
    {
      id: "dentist",
      title: "Dentist Websites",
      category: "Healthcare",
      icon: HeartPulse,
      description: "Designed with calming organic colors, laser surgery portfolios, automated appointment schedulers, and doctor profiles.",
      features: ["Custom slot booking", "SMS appointment dispatch", "Treatment pricing tables"],
      glow: "from-teal-500/10 to-transparent",
    },
    {
      id: "restaurant",
      title: "Restaurant Websites",
      category: "Food & Dining",
      icon: Utensils,
      description: "Rich chocolate & candle-lit tones. Built with high-resolution food carousels, menu sections, and booking systems.",
      features: ["Horizontal dish sliders", "Table table reservations", "Instagram gallery sync"],
      glow: "from-amber-600/10 to-transparent",
    },
    {
      id: "cafe",
      title: "Café Websites",
      category: "Food & Retail",
      icon: Coffee,
      description: "Crafted with dynamic warm latte gradients, brewing heritage timelines, and quick digital QR code menus.",
      features: ["Aesthetic QR menus", "Local maps integration", "Order for pick-up setup"],
      glow: "from-amber-500/10 to-transparent",
    },
    {
      id: "salon",
      title: "Salon & Spa Websites",
      category: "Aesthetics",
      icon: Scissors,
      description: "Cosmetics look with pale-pink and matte-dark tones, interactive hairdressing catalogs, and session schedulers.",
      features: ["Treatments checklist", "Stylist portfolios", "Lounge seat bookings"],
      glow: "from-pink-500/10 to-transparent",
    },
    {
      id: "hotel",
      title: "Hotel Websites",
      category: "Luxury Travel",
      icon: Hotel,
      description: "Imperial look. Fully optimized booking systems, high-ceiling room walkthrough portals, and local attraction maps.",
      features: ["Availability checklist", "Visual Suite carousels", "Chauffeur booking forms"],
      glow: "from-yellow-600/10 to-transparent",
    },
    {
      id: "gym",
      title: "Gym Websites",
      category: "Fitness & Sport",
      icon: Dumbbell,
      description: "Hyper-modern charcoal and neon yellow. Includes training arrays, pricing matrices, and membership registration panels.",
      features: ["Time-table sliders", "VIP subscription matrices", "Coach session sign-ups"],
      glow: "from-red-600/10 to-transparent",
    },
    {
      id: "realestate",
      title: "Real Estate Websites",
      category: "Properties",
      icon: Home,
      description: "Slate grey minimal architecture grids, real estate maps, property tour loops, and high-converting lead forms.",
      features: ["3D property specs", "Agent WhatsApp callouts", "Filters & search templates"],
      glow: "from-indigo-600/10 to-transparent",
    },
    {
      id: "ecommerce",
      title: "E-Commerce Websites",
      category: "Digital Retail",
      icon: ShoppingCart,
      description: "Elite boutique store setups with integrated shipping calculations, checkout buttons, and cart fly-outs.",
      features: ["Luxury catalog displays", "Stripe payment integration", "Orders notification loops"],
      glow: "from-purple-600/10 to-transparent",
    },
    {
      id: "portfolio",
      title: "Portfolio Websites",
      category: "Personal Brand",
      icon: User,
      description: "Ultra-high design aesthetic, minimalist tracking labels, case studies, and modern calligraphy overlays.",
      features: ["Typography entry animations", "Curriculum vitae downloads", "Dribbble & GitHub embeds"],
      glow: "from-teal-600/10 to-transparent",
    },
    {
      id: "booking",
      title: "Booking Websites",
      category: "SaaS Utilities",
      icon: CalendarDays,
      description: "Synchronized date-picker engines, payment checkout integrations, and automated email confirmation notifications.",
      features: ["Live calendar syncing", "Cancellation policies setup", "Client profile accounts"],
      glow: "from-cyan-600/10 to-transparent",
    },
    {
      id: "landing",
      title: "Landing Pages",
      category: "Marketing",
      icon: Rocket,
      description: "Ultra conversions. Staggered titles, clear floating social proof boxes, and glowing direct call buttons.",
      features: ["A-Grade speed performance", "Direct WhatsApp triggers", "Local SEO optimization"],
      glow: "from-emerald-600/10 to-transparent",
    },
    {
      id: "business",
      title: "Business Websites",
      category: "Corporate",
      icon: Building,
      description: "Trustworthy corporate identity layouts, team slides, product listings, and geographic Indian map configurations.",
      features: ["Client logos carousels", "Career forms setups", "Official GST invoice tags"],
      glow: "from-blue-600/10 to-transparent",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  return (
    <section 
      id="services" 
      className="py-24 px-4 md:px-8 relative overflow-hidden bg-matte-900/40 border-y border-gold-300/5"
    >
      {/* Background radial soft light */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[600px] h-[600px] bg-radial-blur opacity-[0.08] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading Titles */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 glassmorphism px-3 py-1 rounded-full text-[9px] tracking-[0.2em] text-indigo-400 uppercase font-mono border border-white/10">
            <Sparkles className="w-3 h-3 text-indigo-400" /> WHAT WE BUILD
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight text-cream-100">
            Premium Tailored Website <span className="font-serif italic text-indigo-400 font-normal text-glow-indigo">Architectures</span>
          </h2>
          <p className="text-sm text-cream-300/60 leading-relaxed font-light">
            We do not compromise with clumsy builders or laggy templates. We program bespoke high-performance, responsive codebases that are tailored to convert visiting traffic into dedicated paying customers.
          </p>
        </div>

        {/* Dynamic Card Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden animate-on-scroll"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesList.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative bg-[#0e0e12] rounded-2xl p-5 border border-white/5 hover:border-indigo-500/35 transition-all duration-300 flex flex-col justify-between shadow-xl overflow-hidden interactive-card select-none"
              >
                {/* Embedded localized backdrop glows */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.glow} opacity-[0.2] group-hover:opacity-[0.4] blur-xl transition-opacity duration-500`} />

                <div>
                  {/* Category + Icon Frame */}
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-[8px] tracking-[0.2em] text-cream-100/40 uppercase">
                      {service.category}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white/[0.02] border border-white/15 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <IconComponent className="w-4 h-4 stroke-[1.8]" />
                    </div>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base font-semibold font-sans text-cream-100 mb-2 group-hover:text-indigo-455 transition-colors">
                    {service.title}
                  </h3>

                  {/* Body Text */}
                  <p className="text-xs text-cream-300/50 leading-relaxed mb-4 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Specific features checklist */}
                <div className="space-y-1.5 pt-3 border-t border-white/[0.03] text-left">
                  {service.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[9px] text-cream-300/70">
                      <Check className="w-3 h-3 text-indigo-400 stroke-[2.5]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Local SEO Callout Info Box */}
        <div className="mt-16 text-center max-w-xl mx-auto p-4 rounded-xl bg-white/[0.01] border border-white/5 shadow-inner">
          <p className="text-[10px] font-mono tracking-[0.1em] text-cream-100/30">
            LOCAL RANK FACTOR: Highly optimized for "Best Website Designer in Jodhpur", "Website Maker Jodhpur", "Dentist Website Developer India".
          </p>
        </div>

      </div>
    </section>
  );
}
