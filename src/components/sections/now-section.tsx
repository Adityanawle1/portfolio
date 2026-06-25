import { FadeUp } from "@/components/fade-up";

const nowItems = [
  { label: "Building", value: "My Portfolio" },
  { label: "Learning", value: "Generative AI" },
  { label: "Reading", value: "Hacker News" },
  { label: "Listening", value: "Frank Ocean" },
  { label: "Fuel", value: "Iced Coffee" },
];

export function NowSection() {
  return (
    <FadeUp id="now" className="py-24 md:py-32 flex flex-col items-center">
      <h2 className="mb-16 text-sm uppercase tracking-[0.3em] text-muted-foreground/60 font-semibold text-center">
        Now
      </h2>
      <dl className="w-full max-w-4xl grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5 text-center">
        {nowItems.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center"
          >
            <dt className="mb-3 text-[10px] uppercase tracking-[0.2em] text-foreground/40 font-medium">
              {item.label}
            </dt>
            <dd className="text-sm font-light text-foreground/80">
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </FadeUp>
  );
}
