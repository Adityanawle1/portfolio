"use client";

import Link from "next/link";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { FadeUp } from "@/components/fade-up";
import { motion } from "framer-motion";

const cycleWords = [
  "equity research.",
  "portfolio drift.",
  "hidden fees.",
  "tax decisions.",
  "market clarity.",
];

export function HeroSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <FadeUp
      id="hero"
      className="flex min-h-[calc(100svh-4.5rem)] flex-col justify-center border-t-0 pt-20 pb-32"
    >
      <motion.div variants={container} initial="hidden" animate="show" className="z-10 relative w-full max-w-2xl mx-auto flex flex-col items-center text-center">
        
        <motion.p variants={item} className="mb-8 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60 font-medium">
          Aditya Nawle
        </motion.p>

        <motion.h1 variants={item} className="text-2xl md:text-3xl font-medium tracking-wide text-foreground/90 mb-4">
          FinTech Builder &bull; AI Student
        </motion.h1>

        <motion.div variants={item} className="text-xl md:text-2xl font-cursive text-muted-foreground mb-8">
          building tools for{" "}
          <span className="text-foreground">
            <AnimatedTextCycle
              words={cycleWords}
              interval={3000}
              className="inline-block"
            />
          </span>
        </motion.div>

        <motion.p variants={item} className="text-xs md:text-sm text-muted-foreground/80 leading-loose max-w-[50ch] mb-12">
          Third-year B.Tech student at SRM. I focus on equity markets, AI-assisted research, and product building. I create practical tools that make complex investment decisions clearer for retail investors.
        </motion.p>

        <motion.div variants={item} className="flex gap-6 items-center">
          <Link
            href="#work"
            className="text-xs uppercase tracking-[0.2em] font-medium text-foreground hover:text-primary dark:hover:text-purple-400 transition-colors relative group"
          >
            View Work
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-foreground/20 group-hover:bg-primary dark:group-hover:bg-purple-400 transition-colors" />
          </Link>
          <Link
            href="#contact"
            className="text-xs uppercase tracking-[0.2em] font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
          >
            Contact
            <span className="absolute -bottom-2 left-0 w-full h-[1px] bg-transparent group-hover:bg-foreground/20 transition-colors" />
          </Link>
        </motion.div>

      </motion.div>
    </FadeUp>
  );
}
