import Link from "next/link";
import { FadeUp } from "@/components/fade-up";

const contacts = [
  {
    label: "Email",
    value: "nawleaditya195@gmail.com",
    href: "mailto:nawleaditya195@gmail.com",
  },
  {
    label: "Screener",
    value: "quantr.vercel.app",
    href: "https://quantr.vercel.app",
  },
  {
    label: "GitHub",
    value: "github.com/Adityanawle1",
    href: "https://github.com/Adityanawle1",
  },
  {
    label: "RatioX",
    value: "ratiox.in",
    href: "https://ratiox.in",
  },
  {
    label: "Location",
    value: "India",
  },
];

export function ContactSection() {
  return (
    <FadeUp id="contact" className="pb-32">
      <div className="flex flex-col items-center text-center">
        <h2 className="mb-6 text-3xl font-cursive text-foreground/80 font-medium">
          Let's get in touch
        </h2>
        <p className="max-w-[40ch] text-xs leading-relaxed text-muted-foreground/60 mb-16 tracking-wide">
          Whether you have a question about my work, want to discuss equity markets, or simply say hello, feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 w-full">
          {contacts.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2 group">
              <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground/40 font-semibold">
                {item.label}
              </span>
              {item.href ? (
                <Link
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="text-sm font-medium tracking-wide text-foreground/80 no-underline transition-all duration-300 hover:text-primary dark:hover:text-purple-400 group-hover:-translate-y-0.5"
                >
                  {item.value}
                </Link>
              ) : (
                <span className="text-sm font-medium tracking-wide text-foreground/80">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </FadeUp>
  );
}
