import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (window.getComputedStyle(target).cursor === "pointer" || target.tagName === "A" || target.tagName === "BUTTON") {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.addEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Don't render cursor on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[10000] mix-blend-difference flex items-center justify-center"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          width: isHovering ? 48 : 12,
          height: isHovering ? 48 : 12,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: isHovering ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 1)",
          border: isHovering ? "2px solid rgba(255, 255, 255, 1)" : "0px solid rgba(255, 255, 255, 0)",
        }}
        transition={{
          x: { type: "tween", duration: 0 },
          y: { type: "tween", duration: 0 },
          width: { type: "spring", stiffness: 400, damping: 25 },
          height: { type: "spring", stiffness: 400, damping: 25 },
          backgroundColor: { duration: 0.2 },
          border: { duration: 0.2 }
        }}
      >
        {/* Inner dot when hovering */}
        <motion.div 
          className="w-1.5 h-1.5 bg-white rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
    </>
  );
};
