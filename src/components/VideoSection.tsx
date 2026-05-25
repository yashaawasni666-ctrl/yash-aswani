import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Play, Pause, Volume2, VolumeX, RotateCcw, Monitor, 
  Smartphone, MousePointerClick, Maximize2, Sparkles, Check, Flame, Award
} from "lucide-react";

interface VideoScene {
  id: string;
  title: string;
  template: string;
  durationString: string;
  steps: Array<{
    timestamp: number;
    action: string;
    description: string;
    selectorX: number; // custom mouse simulator coordinate (%)
    selectorY: number;
    activeScreen: string;
  }>;
}

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [activeVideoId, setActiveVideoId] = useState("cafe-reel");
  const [isMuted, setIsMuted] = useState(true);
  const [zoomLevel, setZoomLevel] = useState<"norm" | "close" | "wide">("norm");

  const scenes: Record<string, VideoScene> = {
    "cafe-reel": {
      id: "cafe-reel",
      title: "Umami Garden UI Flow Walkthrough",
      template: "Gourmet Cafe & Kitchen Concept",
      durationString: "0:12",
      steps: [
        { timestamp: 0, action: "Scroll Trigger", description: "Seamless fade-in of the header hero block", selectorX: 50, selectorY: 20, activeScreen: "hero" },
        { timestamp: 3, action: "Cursor hover state", description: "Interactive gourmet food menu card expands with gold spotlight glow", selectorX: 30, selectorY: 65, activeScreen: "menu" },
        { timestamp: 7, action: "Click Trigger", description: "Table reservation slide-over slot booker transitions in", selectorX: 75, selectorY: 80, activeScreen: "booking" },
        { timestamp: 11, action: "Success state", description: "Golden validation mark render", selectorX: 50, selectorY: 50, activeScreen: "success" },
      ],
    },
    "dentist-scroll": {
      id: "dentist-scroll",
      title: "OrthoGrace Calm Booking Pipeline",
      template: "Premium Clinic & Dentist Solution",
      durationString: "0:12",
      steps: [
        { timestamp: 0, action: "Intro Sequence", description: "Laser treatment banners sliding smoothly on load", selectorX: 20, selectorY: 25, activeScreen: "intro" },
        { timestamp: 3, action: "Choose Expert", description: "Hovering over specialty pediatric doctor cards", selectorX: 45, selectorY: 50, activeScreen: "partners" },
        { timestamp: 7, action: "Schedule Appointment", description: "Securing the Monday 9:30 AM dental slot", selectorX: 80, selectorY: 75, activeScreen: "booking" },
        { timestamp: 11, action: "System Dispatch", description: "Loading success notification prompt", selectorX: 50, selectorY: 50, activeScreen: "complete" },
      ],
    },
    "gym-matrix": {
      id: "gym-matrix",
      title: "Vigor Craft High-Octane Interactions",
      template: "Athletic Weightlifting & Fitness Club",
      durationString: "0:12",
      steps: [
        { timestamp: 0, action: "Load Page", description: "Neon yellow slash line clips block typography", selectorX: 10, selectorY: 15, activeScreen: "load" },
        { timestamp: 3, action: "Hover Grid", description: "Tilt card scale transition on training timetables", selectorX: 55, selectorY: 45, activeScreen: "grids" },
        { timestamp: 7, action: "Checkout trigger", description: "Gold subscription pass counts updating", selectorX: 85, selectorY: 85, activeScreen: "pricing" },
        { timestamp: 11, action: "Loop Finished", description: "Reset timeline benchmarks", selectorX: 50, selectorY: 50, activeScreen: "reset" },
      ],
    },
  };

  const activeVideo = scenes[activeVideoId];

  // Auto playback timeline driver
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTime((t) => {
        if (t >= 12) {
          return 0; // loops back
        }
        return Number((t + 0.1).toFixed(1));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, activeVideoId]);

  // Find the active step based on current simulation timestamp
  const currentStep = activeVideo.steps.reduce((prev, curr) => {
    if (currentTime >= curr.timestamp) {
      return curr;
    }
    return prev;
  }, activeVideo.steps[0]);

  return (
    <section 
      id="videos" 
      className="py-24 px-4 md:px-8 relative overflow-hidden bg-matte-900 border-b border-white/5"
    >
      {/* Absolute aura halos */}
      <div className="absolute top-[10%] left-[-5%] w-[350px] h-[350px] bg-radial-blur opacity-[0.1] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] bg-radial-purple opacity-[0.12] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header titles */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 glassmorphism px-3 py-1 rounded-full text-[9px] tracking-[0.2em] text-indigo-400 uppercase font-mono border border-white/10">
            <Sparkles className="w-3 h-3 text-indigo-400" /> CINEMATIC WORKWALKS & PLAY-REEL
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-light tracking-tight text-cream-100">
            Interactive UI <span className="font-serif italic text-indigo-400 font-normal text-glow-indigo">Walkthrough Reels</span>
          </h2>
          <p className="text-sm text-cream-300/60 leading-relaxed font-light">
            Press play to watch simulated screen-recordings. Witness how the cursor navigates pages, expands subfolders, schedules dates, and changes layout sizes flawlessly. 
          </p>
        </div>

        {/* Cinematic Video Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Playlist selector cards */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <p className="font-mono text-[9px] uppercase text-cream-100/35 tracking-[0.2em] mb-2 text-left pl-1">
                CINEMA REEL DIRECTORY
              </p>
              
              {Object.values(scenes).map((sc) => {
                const isActive = activeVideoId === sc.id;
                return (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setActiveVideoId(sc.id);
                      setCurrentTime(0);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all select-none relative overflow-hidden flex items-center gap-4 ${
                      isActive 
                        ? "bg-matte-950 border-indigo-400/30 text-cream-100" 
                        : "bg-transparent border-white/[0.02] hover:border-indigo-550/20 text-cream-300/60"
                    }`}
                  >
                    {/* Left amber tag */}
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-indigo-500" />
                    )}

                    <div className="w-8 h-8 rounded-full border border-indigo-300/20 flex items-center justify-center bg-white/[0.01]">
                      <Play className="w-3.5 h-3.5 text-indigo-400 fill-indigo-900/10" />
                    </div>

                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-wider text-indigo-400">
                        {sc.template}
                      </span>
                      <h4 className="text-xs font-bold font-sans mt-0.5 text-cream-100">
                        {sc.title}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Simulated diagnostic specification log */}
            <div className="bg-matte-950 p-4 rounded-xl border border-white/10 text-left font-mono space-y-2 text-[9px]">
              <p className="text-indigo-400 font-bold uppercase tracking-widest text-[8px] border-b border-white/10 pb-1">
                STUDIO PLAYBACK DIAGNOSTICS:
              </p>
              <div className="flex justify-between">
                <span className="text-cream-300/40">RESOLUTION:</span>
                <span className="text-cream-100">60 FPS VECTOR FULL-HD</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cream-300/40">ACTIVE COMPILER:</span>
                <span className="text-cream-100">VITE + REACT 19 + MOTION</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cream-300/40">CAMERA SCOPE:</span>
                <span className="text-cream-100">{zoomLevel.toUpperCase()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cream-300/40">RENDER STYLE:</span>
                <span className="text-cream-100">LUXURY AESTHETIC CHROME</span>
              </div>
            </div>
          </div>

          {/* Right Column: High fidelity movie frame walkthrough canvas */}
          <div className="lg:col-span-8 flex flex-col justify-between bg-matte-950 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            
            {/* Top Chrome header bar */}
            <div className="bg-matte-900 px-4 py-2 flex items-center justify-between border-b border-white/10">
              <div className="flex items-center gap-1.5 font-mono text-[9px] text-cream-100/50">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span>PLAY REEL • AUTO_REVOLVER_PLAYBACK.BIN</span>
              </div>
              <div className="bg-matte-950 border border-white/10 px-3.5 py-0.5 rounded text-[8px] font-mono text-indigo-400 flex items-center gap-1">
                <span>SCENE STEP:</span> <span className="font-bold text-white uppercase">{currentStep.action}</span>
              </div>
            </div>

            {/* Central Simulated Walkthrough Viewport */}
            <div className="flex-1 bg-matte-950 min-h-[320px] p-6 relative flex flex-col items-center justify-center overflow-hidden">
              <div className="absolute inset-0 bg-radial-blur opacity-[0.05] pointer-events-none" />

              {/* Dynamic simulated browser frame with scale transition */}
              <motion.div 
                className="w-full max-w-[420px] bg-white rounded-xl shadow-2xl relative border border-white/10 overflow-hidden flex flex-col text-slate-800 font-sans"
                animate={{
                  scale: zoomLevel === "close" ? 1.15 : zoomLevel === "wide" ? 0.88 : 1,
                  rotateX: zoomLevel === "close" ? 2 : 0,
                }}
                transition={{ type: "spring", stiffness: 100, damping: 18 }}
              >
                {/* Micro site top mockup bar */}
                <div className="bg-slate-50 px-3 py-1 border-b border-slate-200/50 flex justify-between items-center text-[8px] tracking-wide text-slate-400 select-none">
                  <div className="flex gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  </div>
                  <span>{activeVideoId === "cafe-reel" ? "umamigarden.com" : activeVideoId === "gym-matrix" ? "vigorcraft.in" : "orthograce.com"}</span>
                  <div className="w-3" />
                </div>

                {/* Render screen changes dynamically based on simulated time */}
                <div className="h-44 flex flex-col p-4 bg-slate-50 relative select-none">
                  
                  {activeVideoId === "cafe-reel" && (
                    <div className="flex-1 flex flex-col justify-between text-left h-full">
                      {currentStep.activeScreen === "hero" && (
                        <div className="space-y-2 animate-fade-in">
                          <span className="bg-yellow-100 text-yellow-800 text-[7px] font-bold px-1 rounded uppercase">EST. 2026</span>
                          <h2 className="text-xs font-serif italic text-amber-900 leading-tight">Umami Kitchen heritage</h2>
                          <p className="text-[9px] text-slate-500 font-light">Spiced Jodhpur recipes crafted with contemporary plates.</p>
                          <div className="bg-amber-600 w-12 h-4 rounded text-white text-[7px] flex items-center justify-center font-bold">Book Table</div>
                        </div>
                      )}

                      {currentStep.activeScreen === "menu" && (
                        <div className="space-y-1.5 animate-fade-in">
                          <span className="text-[7px] font-mono text-amber-600 block">DISH COMBINATIONS</span>
                          <div className="border border-gold-400/20 bg-amber-50/50 p-2 rounded-lg flex justify-between items-center scale-105 transition-transform">
                            <div>
                              <h4 className="text-[9px] font-bold">Saffron Paneer Glaze</h4>
                              <p className="text-[7.5px] text-slate-400">Infused with applewood smoke and rich ghee.</p>
                            </div>
                            <span className="text-xs text-amber-700 font-serif italic">₹480</span>
                          </div>
                        </div>
                      )}

                      {currentStep.activeScreen === "booking" && (
                        <div className="space-y-2 animate-fade-in relative z-2">
                          <h4 className="text-[9px] font-bold text-slate-800">Secure Table Reservation</h4>
                          <div className="grid grid-cols-2 gap-1 text-[8px]">
                            <div className="bg-amber-600 text-white p-1 rounded text-center font-bold">COURTYARD - 7PM</div>
                            <div className="bg-slate-200 text-slate-500 p-1 rounded text-center">ROOF BAR - 9PM</div>
                          </div>
                        </div>
                      )}

                      {currentStep.activeScreen === "success" && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-1">
                          <div className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto mb-1">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <p className="text-[9px] font-bold text-green-800">Reservation Complete!</p>
                          <p className="text-[7px] text-slate-400">Calendar synchronizing dispatched.</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeVideoId === "dentist-scroll" && (
                    <div className="flex-1 flex flex-col justify-between text-left h-full">
                      {currentStep.activeScreen === "intro" && (
                        <div className="space-y-2 animate-fade-in">
                          <span className="bg-teal-100 text-teal-800 text-[6px] font-bold px-1 rounded uppercase">JODHPUR DENTAL</span>
                          <h2 className="text-xs font-bold text-teal-900 leading-tight">OrthoGrace Laser Treatments</h2>
                          <p className="text-[8px] text-slate-400">Providing painless dentistry diagnostics.</p>
                        </div>
                      )}

                      {currentStep.activeScreen === "partners" && (
                        <div className="space-y-1 animate-fade-in">
                          <span className="text-[7px] text-slate-400 font-bold block uppercase">Our Registered Doctor</span>
                          <div className="border border-slate-200.5 bg-white p-1.5 rounded flex items-center gap-1.5">
                            <span className="text-sm">👩‍⚕️</span>
                            <div>
                              <h4 className="text-[8.5px] font-bold text-slate-700">Dr. Priya Verma</h4>
                              <p className="text-[7px] text-teal-600">Orthodontic Specialist (12y experience)</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {currentStep.activeScreen === "booking" && (
                        <div className="bg-teal-50/50 p-2.5 rounded border border-teal-100 flex justify-between items-center scale-105 transition-transform animate-fade-in">
                          <div>
                            <p className="text-[7px] text-teal-600 font-bold">MONDAY SLOT LOCKED</p>
                            <h4 className="text-[9px] font-bold text-slate-800">Dental Aligner check</h4>
                          </div>
                          <span className="bg-teal-600 text-white text-[8px] font-bold px-2 py-0.5 rounded">9:30 AM</span>
                        </div>
                      )}

                      {currentStep.activeScreen === "complete" && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-1">
                          <span className="text-sm leading-none">📱</span>
                          <p className="text-[9px] font-bold text-teal-800">Booking Dispatched!</p>
                          <p className="text-[7px] text-slate-400">SMS with map marker dispatched.</p>
                        </div>
                      )}
                    </div>
                  )}

                  {activeVideoId === "gym-matrix" && (
                    <div className="flex-1 flex flex-col justify-between text-left h-full">
                      {currentStep.activeScreen === "load" && (
                        <div className="space-y-2 animate-fade-in text-[#eeeeee] bg-[#0c0d0d] p-3 rounded-lg h-full border border-yellow-500/25">
                          <h2 className="text-xs font-black italic tracking-tighter text-yellow-400">⚡ VIGOR CRAFT</h2>
                          <p className="text-[8px] text-gray-500 font-mono">REFORGE YOUR LIMITS. JOIN ATHLETES.</p>
                        </div>
                      )}

                      {currentStep.activeScreen === "grids" && (
                        <div className="grid grid-cols-2 gap-1.5 animate-fade-in text-[#eeeeee] bg-[#0c0d0d] p-3 rounded-lg h-full">
                          <div className="bg-[#1d1f21] p-1.5 rounded text-[7px]">
                            <p className="font-bold text-white">450+ SQ. FT.</p>
                            <p className="text-gray-500 text-[6px]">Cardio Deck</p>
                          </div>
                          <div className="bg-yellow-400 p-1.5 rounded text-black text-[7px] font-bold">
                            <p>1ON1 VIP</p>
                            <p className="text-slate-800 text-[6px]">Coach Setup</p>
                          </div>
                        </div>
                      )}

                      {currentStep.activeScreen === "pricing" && (
                        <div className="space-y-1 animate-fade-in text-[#eeeeee] bg-[#0c0d0d] p-3 rounded-lg h-full flex flex-col justify-center">
                          <div className="bg-[#141516] p-1.5 border border-gray-800 rounded flex justify-between items-center">
                            <div>
                              <h4 className="text-[7.5px] text-white font-mono">Gold Elite core</h4>
                              <p className="text-[6.5px] text-gray-500">24/7 Access</p>
                            </div>
                            <span className="text-[8px] font-bold text-yellow-400">₹1,999/mo</span>
                          </div>
                        </div>
                      )}

                      {currentStep.activeScreen === "reset" && (
                        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-1 text-[#eeeeee] bg-[#0c0d0d] p-3 rounded-lg h-full">
                          <p className="text-[9px] font-mono text-yellow-500">Demo Walkthrough Resetting...</p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Simulated mouse cursor follow overlay */}
                  <motion.div 
                    className="absolute pointer-events-none z-10 w-4 h-4 text-indigo-500/80 filter drop-shadow"
                    animate={{
                      left: `${currentStep.selectorX}%`,
                      top: `${currentStep.selectorY}%`,
                    }}
                    transition={{ type: "spring", stiffness: 85, damping: 14 }}
                  >
                    <MousePointerClick className="w-4 h-4 stroke-[2.5]" />
                  </motion.div>

                </div>
              </motion.div>

              {/* Dynamic Action Sub-Description overlays */}
              <div className="absolute bottom-4 left-6 right-6 text-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentTime}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-black/80 px-4 py-2 rounded-xl text-[10px] text-cream-200 md:text-xs tracking-wide max-w-sm mx-auto border border-white/10 shadow-2xl"
                  >
                    <span className="font-bold text-indigo-400 font-mono text-[9px] block uppercase mb-0.5">
                      🎥 STEP AT {currentTime}s:
                    </span>
                    {currentStep.description}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Cinematic Control Deck and Timelines */}
            <div className="bg-matte-900 px-6 py-4 border-t border-white/10 flex flex-col md:flex-row gap-4 justify-between items-center">
              
              {/* Play / timeline progress seek items */}
              <div className="flex items-center gap-4 w-full md:w-[60%] select-none">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.01] hover:bg-white/5 flex items-center justify-center text-indigo-400"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-indigo-900/15" />}
                </button>

                <div className="flex-1 flex flex-col">
                  {/* Timeline tracking bar */}
                  <div className="h-1 bg-matte-950 rounded-full w-full overflow-hidden relative cursor-pointer">
                    <div 
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                      style={{ width: `${(currentTime / 12) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-1.5 font-mono text-[8px] text-cream-100/35">
                    <span>{currentTime} / 12.0 seconds</span>
                    <span>{activeVideo.durationString} MIN REEL</span>
                  </div>
                </div>
              </div>

              {/* Sub features toggle actions */}
              <div className="flex items-center gap-2">
                
                {/* Cameras Zoom */}
                <button
                  onClick={() => setZoomLevel((z) => z === "norm" ? "close" : z === "close" ? "wide" : "norm")}
                  className="px-3.5 py-1.5 rounded-lg border border-white/10 hover:border-white/20 font-mono text-[8px] tracking-wider uppercase text-cream-100/80 flex items-center gap-2"
                >
                  <Maximize2 className="w-3.5 h-3.5" /> ZOOM: {zoomLevel.toUpperCase()}
                </button>

                {/* Sound status indicator */}
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1.5 rounded-lg border border-white/10 hover:border-white/20 text-cream-100/60"
                  aria-label="Toggle Volume Simulation"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-indigo-400" />}
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
