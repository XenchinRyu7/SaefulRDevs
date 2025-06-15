"use client";

import { Github, Linkedin, Twitter, CodeXml } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 text-muted-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center items-center mb-6">
          <Link href="/" className="flex items-center space-x-2" aria-label="Saeful Rohman Dev Home">
            <CodeXml className="h-8 w-8 text-primary" />
            <span className="font-bold text-2xl font-headline text-foreground">Saeful Rohman</span>
          </Link>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        
        <p className="text-sm">
          &copy; {currentYear} Saeful Rohman. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with Next.js and Tailwind CSS. Hosted on Firebase.
        </p>
      </div>
    </footer>
  );
};
