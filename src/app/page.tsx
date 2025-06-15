import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { CareerSection } from '@/components/sections/CareerSection';
import { ContributionsSection } from '@/components/sections/ContributionsSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <CareerSection />
        <ContributionsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
