"use client";

import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-14 right-4 z-10 flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-border bg-background text-foreground transition-opacity duration-200 hover:text-foreground ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      ↑
    </button>
  );
}
