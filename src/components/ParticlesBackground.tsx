import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "motion/react";

export default function ParticlesBackground() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Distribute parallax translations differently for 3D depth
  const bgX = useTransform(smoothX, [-300, 300], [-25, 25]);
  const bgY = useTransform(smoothY, [-300, 300], [-25, 25]);
  const foregroundX = useTransform(smoothX, [-300, 300], [-45, 45]);
  const foregroundY = useTransform(smoothY, [-300, 300], [-45, 45]);

  useEffect(() => {
    // Generate static stardust stars with randomized values
    const generatedParticles = Array.from({ length: 45 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * -10,
    }));
    setParticles(generatedParticles);

    const handleMouseMove = (e: MouseEvent) => {
      // Calculate relative coordinate from window center
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-matte-950">
      {/* Dynamic Ambient Blur Glows - Purple, Blue, Gold */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[65vw] h-[65vw] rounded-full bg-radial-purple opacity-45 blur-[120px]"
        style={{ x: bgX, y: bgY }}
      />
      
      <motion.div 
        className="absolute bottom-[-15%] right-[-5%] w-[60vw] h-[60vw] rounded-full bg-radial-blue opacity-35 blur-[100px]"
        style={{ x: foregroundX, y: foregroundY }}
      />

      <motion.div 
        className="absolute top-[35%] left-[40%] w-[45vw] h-[45vw] rounded-full bg-radial-blur opacity-[0.12] blur-[90px]"
        style={{ x: bgX, y: bgY }}
      />

      {/* Floating Stardust Particles */}
      <svg className="absolute inset-0 w-full h-full opacity-60">
        {particles.map((p) => (
          <motion.circle
            key={p.id}
            cx={`${p.x}%`}
            cy={`${p.y}%`}
            r={p.size}
            fill="#818cf8"
            animate={{
              y: ["0%", "8%", "-8%", "0%"],
              opacity: [0.15, 0.75, 0.45, 0.15],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), 
                            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />
    </div>
  );
}
