import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Experience - Saeful Rohman',
  description: 'Work experience of Saeful Rohman.',
};

export default function ExperiencePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
}
