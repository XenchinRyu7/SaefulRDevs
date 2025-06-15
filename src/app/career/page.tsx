import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CareerSection } from '@/components/sections/CareerSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career Highlights - Saeful Rohman',
  description: 'Career highlights and achievements of Saeful Rohman.',
};

export default function CareerPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <CareerSection />
      </main>
      <Footer />
    </div>
  );
}
