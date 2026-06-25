import { FadeUp } from "@/components/fade-up";

export function ThoughtsSection() {
  return (
    <FadeUp id="thoughts">
      <h2 className="mb-5 text-[clamp(2rem,5vw,3.2rem)] leading-tight">
        Thoughts
      </h2>
      <div className="max-w-[72ch] space-y-4 text-muted-foreground">
        <p>Technology should simplify complicated problems.</p>
        <p>
          I believe good software is invisible—it quietly solves real problems
          without unnecessary complexity.
        </p>
        <p>
          My goal is not simply to write code, but to build products people
          genuinely enjoy using.
        </p>
      </div>
    </FadeUp>
  );
}
