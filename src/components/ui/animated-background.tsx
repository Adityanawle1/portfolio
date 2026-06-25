"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-background">
      {/* Dark mode glowing orbs */}
      <div className="absolute inset-0 hidden dark:block opacity-40">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[20%] -left-[10%] h-[50vw] w-[50vw] rounded-full bg-purple-900/30 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[20%] -right-[10%] h-[40vw] w-[40vw] rounded-full bg-blue-900/20 blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 50, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-[20%] left-[20%] h-[60vw] w-[60vw] rounded-full bg-emerald-900/10 blur-[120px]"
        />
      </div>

      {/* Light mode glowing orbs */}
      <div className="absolute inset-0 block dark:hidden opacity-30">
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-[10%] -left-[10%] h-[40vw] w-[40vw] rounded-full bg-blue-200/50 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-[30%] -right-[10%] h-[45vw] w-[45vw] rounded-full bg-purple-200/40 blur-[100px]"
        />
      </div>
      {/* Subtle grid overlay could be added here if needed */}
    </div>
  );
}
