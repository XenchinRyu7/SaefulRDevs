import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContributionsSection } from '@/components/sections/ContributionsSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contributions & Projects - Saeful Rohman',
  description: 'Open source contributions and projects by Saeful Rohman.',
};

export default function ContributionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <ContributionsSection />
      </main>
      <Footer />
    </div>
  );
}
