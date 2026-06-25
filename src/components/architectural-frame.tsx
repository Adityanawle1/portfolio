"use client";

import { useEffect, useState } from "react";

export function ArchitecturalFrame() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }) + " IST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 hidden md:block">
      {/* 1px border frame */}
      <div className="absolute inset-4 border border-foreground/[0.03] dark:border-foreground/[0.05]" />
      
      {/* Micro-typography in corners */}
      <div className="absolute top-6 left-6 text-[8px] uppercase tracking-[0.3em] text-foreground/20 font-medium rotate-90 origin-left translate-x-2">
        EST. 2026
      </div>
      <div className="absolute bottom-6 right-6 text-[8px] uppercase tracking-[0.3em] text-foreground/20 font-medium -rotate-90 origin-right -translate-x-2">
        VERSION 1.0
      </div>
      <div className="absolute top-6 right-6 text-[8px] uppercase tracking-[0.3em] text-foreground/20 font-medium flex items-center gap-2">
        <span className="w-1 h-1 rounded-full bg-green-500/50 animate-pulse" />
        INDIA — {time || "LOADING..."}
      </div>
      <div className="absolute bottom-6 left-6 text-[8px] uppercase tracking-[0.3em] text-foreground/20 font-medium">
        SRM.INI
      </div>
    </div>
  );
}
