"use client";

import { useEffect, useState } from "react";

export function PageLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 700);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed left-0 top-0 z-[100] h-0.5 w-full origin-left animate-[load_700ms_ease_forwards] bg-foreground"
    />
  );
}
