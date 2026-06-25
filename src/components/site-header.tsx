"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#now", label: "Now" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [active, setActive] = useState("");
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));

    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = root.classList.toggle("dark");
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav
        className="section-container flex min-h-[4.5rem] flex-wrap items-center justify-between gap-4 py-2 md:py-0"
        aria-label="Primary"
      >
        <Link
          href="#hero"
          className="text-base font-bold tracking-[0.08em] no-underline"
        >
          AN
        </Link>

        <ul className="no-scrollbar order-3 flex w-full gap-4 overflow-x-auto pb-1 md:order-none md:w-auto md:gap-5 md:pb-0 relative">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "group relative text-[0.95rem] text-muted-foreground no-underline transition-colors hover:text-foreground",
                  active === item.href.slice(1) && "text-foreground"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-200 ease-out group-hover:scale-x-100",
                    active === item.href.slice(1) && "scale-x-100"
                  )}
                />
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={toggleTheme}
          className="cursor-pointer rounded-lg border border-border bg-background px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Toggle dark mode (Press D)"
          title="Toggle dark mode (D)"
        >
          {isDark ? "Light" : "Dark"}
        </button>
      </nav>
    </header>
  );
}
