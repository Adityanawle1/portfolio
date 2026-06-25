import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeUp } from "@/components/fade-up";

const projects = [
  {
    index: "01",
    title: "Quantr",
    href: "https://quantr.vercel.app",
    description:
      "Indian stock research and screening platform with real-time screening, portfolio analytics, Bloomberg-style company pages, and AI explanations that lower the barrier for self-directed investors.",
    tech: "React · Vite · Financial APIs · AI Integration",
  },
  {
    index: "02",
    title: "RatioX",
    href: "https://ratiox.in",
    description:
      "Portfolio intelligence and wealth protection tool for drift tracking, precise rebalancing, fee auditing, and tax-aware decision support for long-term investors.",
    tech: "React · Supabase · Tailwind CSS · Three.js",
  },
  {
    index: "03",
    title: "Independent Equity Research",
    description:
      "Conducted independent fundamental analysis on NCL Industries and identified the company at Rs.72 before it appreciated to Rs.240, reinforcing a process-driven, long-term approach to stock research.",
  },
];

export function WorkSection() {
  return (
    <FadeUp id="work" className="py-24 md:py-32 flex flex-col items-center">
      <h2 className="mb-16 text-sm uppercase tracking-[0.3em] text-muted-foreground/60 font-semibold text-center">
        Selected Work
      </h2>
      <div className="w-full max-w-5xl grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.index}
            className="group relative flex flex-col justify-between border-t border-border/40 pt-8 pb-12"
          >
            <div className="relative z-10">
              <div className="mb-6 text-[10px] font-medium tracking-[0.2em] text-muted-foreground/40">
                {project.index}
              </div>
              
              {project.href ? (
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-medium tracking-wide no-underline transition-colors hover:text-primary dark:hover:text-purple-400"
                >
                  {project.title}
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              ) : (
                <h3 className="text-lg font-medium tracking-wide">{project.title}</h3>
              )}
              <p className="mt-4 text-xs leading-loose text-muted-foreground/80 font-light">
                {project.description}
              </p>
            </div>

            {project.tech && (
              <div className="relative z-10 mt-8 pt-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-medium mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {project.tech.split(' · ').map(tech => (
                    <span key={tech} className="text-[10px] font-medium text-muted-foreground/60">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </FadeUp>
  );
}
