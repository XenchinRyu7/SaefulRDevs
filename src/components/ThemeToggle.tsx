"use client";

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    // Render a placeholder or null to avoid hydration mismatch for the icon
    return <Button variant="ghost" size="icon" className="w-9 h-9" disabled><Sun className="h-[1.2rem] w-[1.2rem] animate-spin" /></Button>;
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={toggleTheme} 
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="w-9 h-9 rounded-full hover:bg-accent/50 focus-visible:ring-1 focus-visible:ring-ring"
    >
      {theme === 'light' ? (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all transform " />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all transform " />
      )}
    </Button>
  );
};
