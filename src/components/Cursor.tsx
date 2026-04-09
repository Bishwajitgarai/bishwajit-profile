"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const dotConfig = { damping: 20, stiffness: 1200 };
  const ringConfig = { damping: 30, stiffness: 600 };
  
  const dotX = useSpring(cursorX, dotConfig);
  const dotY = useSpring(cursorY, dotConfig);
  const ringX = useSpring(cursorX, ringConfig);
  const ringY = useSpring(cursorY, ringConfig);

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A"
      );
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Ghost Ring */}
      <motion.div
        style={{
          translateX: ringX,
          translateY: ringY,
          left: -16,
          top: -16,
        }}
        className={`w-8 h-8 rounded-full border border-cyber-green/40 transition-transform duration-300 ${
          isPointer ? 'scale-[2.5] bg-cyber-green/5' : 'scale-100'
        }`}
      />
      
      {/* Core Dot */}
      <motion.div
        style={{
          translateX: dotX,
          translateY: dotY,
          left: -2,
          top: -2,
        }}
        className="w-1 h-1 bg-cyber-green rounded-full shadow-[0_0_10px_#00FF9D]"
      />
    </div>
  );
}
