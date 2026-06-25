import { FadeUp } from "@/components/fade-up";

export function AboutSection() {
  return (
    <FadeUp id="about" className="py-24 md:py-32 flex flex-col items-center text-center">
      <h2 className="mb-8 text-sm uppercase tracking-[0.3em] text-muted-foreground/60 font-semibold">
        About
      </h2>
      <p className="max-w-[60ch] text-sm md:text-base leading-loose text-foreground/80 font-light">
        I&apos;m a third-year B.Tech Artificial Intelligence student at SRM
        Institute of Science and Technology, Ramapuram. My work sits at the
        intersection of AI, finance, product building, entrepreneurship, and
        continuous learning through execution.
      </p>
    </FadeUp>
  );
}
