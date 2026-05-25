import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ShowcaseSection from "./components/ShowcaseSection";
import VideoSection from "./components/VideoSection";
import TestimonialsSection from "./components/TestimonialsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative text-cream-100 min-h-screen bg-matte-950 font-sans selection:bg-indigo-500 selection:text-white antialiased overflow-x-hidden">
      {/* 1. Cinematic Luxury Loading Onboarding Sequence */}
      <LoadingScreen onComplete={() => setIsLoading(false)} />

      {!isLoading && (
        <>
          {/* 2. Custom Dual-Layer Pointer Spotlight Cursor (Desktop only) */}
          <CustomCursor />

          {/* 3. Slow-Moving Stardust & Halos Ambient Backdrop */}
          <ParticlesBackground />

          {/* 4. Glassmorphism Responsive Navigation Panel */}
          <Navbar />

          {/* 5. Main Cinematic Flow Segments */}
          <main>
            {/* Dramatic First Fold Banner with Live Simulator walk */}
            <HeroSection />

            {/* 12 Custom Tailored Website Service deliverables Matrix */}
            <ServicesSection />

            {/* Interactive Browser Device Exhibition Showcase */}
            <ShowcaseSection />

            {/* Simulated Desktop Screen Recording Walkthrough Reels */}
            <VideoSection />

            {/* Client feedback grids featuring Sharma/Verma/Mehta references */}
            <TestimonialsSection />

            {/* Workspace Storytelling & Real-time CSS compiler panels */}
            <AboutSection />

            {/* Interactive budget quote calculator planner & WhatsApp dispatcher */}
            <ContactSection />
          </main>

          {/* 6. Comprehensive Corporate Brand Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
