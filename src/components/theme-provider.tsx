"use client";

import { useEffect, useState } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    // Default to dark mode if no theme is saved, or if saved theme is dark
    if (saved === "dark" || saved === null) {
      document.documentElement.classList.add("dark");
      if (saved === null) {
        localStorage.setItem("theme", "dark");
      }
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        event.key.toLowerCase() === "d" &&
        !["INPUT", "TEXTAREA"].includes(
          (event.target as HTMLElement)?.tagName ?? ""
        )
      ) {
        event.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return <>{children}</>;
}

export function useThemeToggle() {
  const toggleTheme = () => {
    const root = document.documentElement;
    const isDark = root.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  const isDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  return { toggleTheme, isDark };
}
