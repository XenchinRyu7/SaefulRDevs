"use client";

import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';
import { CodeXml } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import React from 'react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Skills', href: '/skills' },
  { name: 'Experience', href: '/experience' },
  { name: 'Career', href: '/career' },
  { name: 'Contributions', href: '/contributions' },
  { name: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[hsl(var(--background)/0.95)] backdrop-blur supports-[backdrop-filter]:bg-[hsl(var(--background)/0.6)]">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center space-x-2" aria-label="Saeful Rohman Dev Home">
          <CodeXml className="h-7 w-7 text-[hsl(var(--primary))]" />
          <span className="font-bold text-xl font-headline text-[hsl(var(--foreground))]">Saeful Rohman</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[hsl(var(--foreground)/0.8)] hover:text-[hsl(var(--primary))] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6 text-[hsl(var(--primary))]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] p-6 bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
                <SheetHeader>
                  <SheetTitle>
                    <span className="sr-only">Main Navigation</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6">
                  <Link href="/" className="flex items-center space-x-2 mb-4" onClick={() => setIsSheetOpen(false)}>
                    <CodeXml className="h-7 w-7 text-[hsl(var(--primary))]" />
                    <span className="font-bold text-xl font-headline text-[hsl(var(--foreground))]">Saeful Rohman</span>
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
