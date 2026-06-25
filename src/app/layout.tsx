import type { Metadata } from "next";
import { Space_Grotesk, Caveat } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BackToTop } from "@/components/back-to-top";
import { PageLoader } from "@/components/page-loader";
import { ThemeProvider } from "@/components/theme-provider";
import { SmoothScroll } from "@/components/smooth-scroll";
import { AnimatedNoise } from "@/components/animated-noise";
import { ArchitecturalFrame } from "@/components/architectural-frame";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-cursive",
});

export const metadata: Metadata = {
  title: "Aditya Nawle — Portfolio",
  description:
    "FinTech Builder & B.Tech AI Student focused on equity markets, AI-assisted research, and product building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${caveat.variable} font-sans antialiased bg-background text-foreground selection:bg-primary selection:text-primary-foreground`}>
        <ThemeProvider>
          <SmoothScroll>
            <AnimatedNoise />
            <ArchitecturalFrame />
            <PageLoader />
            <a
              href="#main"
              className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:border focus:border-border focus:bg-background focus:px-3 focus:py-2"
            >
              Skip to content
            </a>
            <div className="relative z-10 flex min-h-screen flex-col">
              <SiteHeader />
              {children}
              <SiteFooter />
              <BackToTop />
              <p
                aria-hidden="true"
                className="fixed bottom-4 right-4 hidden text-xs text-muted-foreground md:block"
              >
                Press D to toggle dark mode
              </p>
            </div>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
