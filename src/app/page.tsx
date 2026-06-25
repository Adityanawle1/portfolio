import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { WorkSection } from "@/components/sections/work-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { NowSection } from "@/components/sections/now-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <main id="main">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <NowSection />
      {/* <ThoughtsSection /> */}
      <ContactSection />
    </main>
  );
}
