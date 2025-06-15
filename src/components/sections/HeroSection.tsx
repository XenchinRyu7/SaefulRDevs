"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const HeroSection = () => {
  const animProps = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] container mx-auto flex flex-col lg:flex-row items-center justify-center py-16 lg:py-24 px-4 sm:px-6 lg:px-8 text-center lg:text-left bg-gradient-to-br from-background to-secondary/30">
      <div {...animProps} className={`lg:w-1/2 lg:pr-12 ${animProps.className}`}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline mb-6">
          <span className="block text-primary">Saeful Rohman</span>
          Full-Stack Developer
        </h1>
        <p className="text-lg sm:text-xl text-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
          Passionate about crafting elegant and efficient solutions. Specializing in modern web technologies to build impactful digital experiences.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <Button size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
            <a href="#contact">
              Get in Touch
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow">
            <a href="/resume.pdf" download="SaefulRohman_Resume.pdf"> {/* Placeholder for resume */}
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </a>
          </Button>
        </div>
        <div className="mt-10 flex justify-center lg:justify-start space-x-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-foreground/70 hover:text-primary transition-colors">
            <Github className="h-8 w-8" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-foreground/70 hover:text-primary transition-colors">
            <Linkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
      <div className={`lg:w-1/2 mt-12 lg:mt-0 flex justify-center ${animProps.className}`} style={{transitionDelay: '0.2s'}}>
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-primary/50">
          <Image
            src="https://placehold.co/400x400.png"
            alt="Saeful Rohman"
            layout="fill"
            objectFit="cover"
            data-ai-hint="professional portrait"
            priority
          />
        </div>
      </div>
    </section>
  );
};
