"use client";

import { FadeUp } from "@/components/fade-up";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Finance",
    items: [
      "Fundamental Analysis",
      "Equity Valuation",
      "Portfolio Construction",
      "LTCG / STCG Tax Rules",
    ],
  },
  {
    title: "Technology",
    items: ["React", "Vite", "Supabase", "Tailwind CSS", "Git / GitHub"],
  },
  {
    title: "AI / Data",
    items: [
      "Generative AI",
      "NLP",
      "Agentic AI",
      "AI-Powered Product Development",
    ],
  },
];

export function SkillsSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemAnim = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4, type: "spring" as const } },
  };

  return (
    <FadeUp id="skills" className="py-24 md:py-32 flex flex-col items-center">
      <h2 className="mb-16 text-sm uppercase tracking-[0.3em] text-muted-foreground/60 font-semibold text-center">
        Skills
      </h2>
      <div className="w-full max-w-4xl grid grid-cols-1 gap-12 sm:grid-cols-3">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="flex flex-col items-center text-center"
          >
            <h3 className="mb-6 text-xs uppercase tracking-[0.2em] font-medium text-foreground/80">{group.title}</h3>
            
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-3 relative z-10"
            >
              {group.items.map((item) => (
                <motion.span 
                  key={item} 
                  variants={itemAnim}
                  className="text-sm font-light text-muted-foreground/80"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </article>
        ))}
      </div>
    </FadeUp>
  );
}
