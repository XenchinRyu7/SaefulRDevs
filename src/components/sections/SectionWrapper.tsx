"use client";

import type { LucideIcon } from 'lucide-react';
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  id: string;
  title: string;
  icon?: LucideIcon;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

export const SectionWrapper = ({ id, title, icon: Icon, children, className, titleClassName, contentClassName }: SectionWrapperProps) => {
  const animProps = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <section id={id} className={cn("py-16 sm:py-24 bg-background", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div {...animProps} className={animProps.className}>
          <div className="text-center mb-12 sm:mb-16">
            {Icon && <Icon className="h-12 w-12 text-primary mx-auto mb-4" />}
            <h2 className={cn("text-3xl sm:text-4xl font-bold font-headline text-foreground", titleClassName)}>
              {title}
            </h2>
            <div className="mt-3 h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className={cn(contentClassName)}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
