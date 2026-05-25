import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [stageText, setStageText] = useState("Initializing Design Engine...");
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Stepped progressive load for cinematic tension
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 800); // Allow exit block to finish
          }, 400);
          return 100;
        }

        // Stepped text based on loading stages
        const next = prev + Math.floor(Math.random() * 8) + 3;
        const capped = Math.min(next, 100);

        if (capped < 30) {
          setStageText("Unpacking 3D Graphics Rig...");
        } else if (capped < 60) {
          setStageText("Synchronizing Aesthetic Variables...");
        } else if (capped < 85) {
          setStageText("Assembling Luxury Component Tree...");
        } else {
          setStageText("Launching Growth On Deck...");
        }

        return capped;
      });
    }, 90);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 bg-matte-950 z-[99999] flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            opacity: 0,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
          }}
        >
          {/* Central Radial Light Aura */}
          <div className="absolute w-[400px] h-[400px] bg-radial-blur opacity-[0.25] blur-[80px] pointer-events-none" />

          {/* Core typographic box resembling a high-end designer tag */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Elegant luxury emblem outline */}
            <motion.div
              className="mb-8 w-16 h-16 rounded-full border border-indigo-500/25 flex items-center justify-center relative overflow-hidden"
              initial={{ rotate: 0, scale: 0.8, opacity: 0 }}
              animate={{ rotate: 360, scale: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              {/* Spinning subtle double ring */}
              <div className="absolute inset-1 rounded-full border-t border-b border-indigo-500/60 animate-spin" />
              <span className="font-serif text-lg font-bold text-indigo-400">G</span>
            </motion.div>

            {/* Split character layout or expanding letters for title */}
            <motion.h1
              className="text-2xl sm:text-4xl font-sans tracking-[0.25em] text-cream-100 uppercase font-light leading-none mb-3"
              initial={{ letterSpacing: "0.1em", opacity: 0 }}
              animate={{ letterSpacing: "0.25em", opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              GROWTH <span className="text-indigo-400 font-medium">ON</span> DECK
            </motion.h1>

            {/* Aesthetic serif slogan */}
            <motion.p
              className="font-serif italic text-indigo-400/80 text-xs sm:text-sm tracking-widest mb-16"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Designed with Creativity & Precision
            </motion.p>

            {/* Progress counter structure */}
            <div className="w-[180px] sm:w-[240px] relative mb-4">
              {/* Backbar */}
              <div className="h-[2px] bg-matte-700 w-full rounded-full overflow-hidden">
                {/* Active segment */}
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="absolute -top-7 right-0 text-right">
                <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-indigo-400">
                  {progress}%
                </span>
              </div>
            </div>

            {/* Diagnostic/Stage indicator */}
            <motion.p
              key={stageText}
              className="font-mono text-[9px] sm:text-[10px] uppercase text-cream-300/40 tracking-[0.2em] h-4"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {stageText}
            </motion.p>
          </div>

          {/* Minimalist studio watermark */}
          <div className="absolute bottom-8 font-mono text-[8px] tracking-[0.3em] uppercase text-cream-100/20">
            JODHPUR // EST. 2026 // INDIA
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
