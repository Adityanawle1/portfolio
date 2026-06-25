export function AnimatedNoise() {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] dark:opacity-[0.04] mix-blend-overlay">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </div>
  );
}
