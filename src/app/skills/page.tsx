import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SkillsSection } from '@/components/sections/SkillsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills - Saeful Rohman',
  description: 'Technical skills and expertise of Saeful Rohman.',
};

export default function SkillsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <SkillsSection />
      </main>
      <Footer />
    </div>
  );
}
