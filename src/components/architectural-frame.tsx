export function ArchitecturalFrame() {
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
      <div className="absolute top-6 right-6 text-[8px] uppercase tracking-[0.3em] text-foreground/20 font-medium">
        SYS.REQ
      </div>
      <div className="absolute bottom-6 left-6 text-[8px] uppercase tracking-[0.3em] text-foreground/20 font-medium">
        SRM.INI
      </div>
    </div>
  );
}
