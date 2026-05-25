import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const [hoverType, setHoverType] = useState<"default" | "clickable" | "text" | "view">("default");
  const [isVisible, setIsVisible] = useState(false);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for lag follow effect
  const springConfig = { damping: 40, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const closestInteractable = target.closest("a, button, [role='button'], input, textarea, select, .interactive-card");
      if (closestInteractable) {
        if (closestInteractable.classList.contains("view-trigger")) {
          setHoverType("view");
        } else {
          setHoverType("clickable");
        }
      } else {
        setHoverType("default");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", handleHoverStart);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", handleHoverStart);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  const isClickable = hoverType === "clickable";
  const isView = hoverType === "view";

  return (
    <>
      {/* Outer ambient follow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full flex items-center justify-center font-mono select-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: isView 
            ? "rgba(197, 142, 55, 0.9)" 
            : isClickable 
            ? "rgba(214, 171, 82, 0.15)" 
            : "rgba(255, 255, 255, 0.03)",
          border: isView
            ? "1px solid rgba(255, 255, 255, 0.4)"
            : isClickable
            ? "1px solid rgba(214, 171, 82, 0.4)"
            : "1px solid rgba(255, 255, 255, 0.15)",
          width: isView ? 80 : isClickable ? 60 : 36,
          height: isView ? 80 : isClickable ? 60 : 36,
          boxShadow: isView 
            ? "0 0 20px rgba(197, 142, 55, 0.4)" 
            : isClickable 
            ? "0 0 15px rgba(214, 171, 82, 0.2)" 
            : "none",
        }}
        animate={{
          scale: 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isView && (
          <span className="text-[9px] font-bold text-black tracking-[0.15em] animate-pulse">
            VIEW
          </span>
        )}
      </motion.div>

      {/* Inner pinpoint dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-gold-400 rounded-full pointer-events-none z-[10000]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-3px",
          translateY: "-3px",
          boxShadow: "0 0 8px rgba(214, 171, 82, 0.8)",
        }}
        animate={{
          scale: isView ? 0 : isClickable ? 1.5 : 1,
        }}
      />
    </>
  );
}
