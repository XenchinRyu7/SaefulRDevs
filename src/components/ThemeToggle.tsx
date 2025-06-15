
"use client";

import React from 'react';
import { useTheme, type ThemeName } from '@/contexts/ThemeContext';
import { Moon, Sun, Palette, Zap, FileText, Sparkles, Music2, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

interface ThemeOption {
  name: string;
  value: ThemeName;
  icon: React.ElementType;
}

const themes: ThemeOption[] = [
  { name: 'Light', value: 'light', icon: Sun },
  { name: 'Dark', value: 'dark', icon: Moon },
  { name: 'Retro', value: 'retro', icon: Palette },
  { name: 'Cyberpunk', value: 'cyberpunk', icon: Zap },
  { name: 'Paper', value: 'paper', icon: FileText },
  { name: 'Aurora', value: 'aurora', icon: Sparkles },
  { name: 'Synthwave', value: 'synthwave', icon: Music2 },
  { name: 'System', value: 'system', icon: Laptop },
];

export const ThemeToggle = () => {
  const { selectedTheme, setSelectedTheme, effectiveTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9" disabled>
        <Sun className="h-[1.2rem] w-[1.2rem] animate-spin" />
      </Button>
    );
  }

  const currentIcon = () => {
    if (selectedTheme === 'system') {
      return effectiveTheme === 'dark' ? Moon : Sun;
    }
    const themeOption = themes.find(t => t.value === selectedTheme);
    return themeOption ? themeOption.icon : Sun;
  };

  const IconComponent = currentIcon();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={`Selected theme: ${selectedTheme}`}
          className="w-9 h-9 rounded-full hover:bg-accent/50 focus-visible:ring-1 focus-visible:ring-ring"
        >
          <IconComponent className="h-[1.2rem] w-[1.2rem] transition-all" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {/* Light and Dark themes (indices 0, 1) */}
        {themes.slice(0, 2).map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setSelectedTheme(theme.value)}
            className={cn(
              "flex items-center justify-between",
              selectedTheme === theme.value && "bg-accent"
            )}
          >
            <div className="flex items-center gap-2">
              <theme.icon className="h-4 w-4" />
              <span>{theme.name}</span>
            </div>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        {/* Retro, Cyberpunk, Paper, Aurora, Synthwave themes (indices 2 to 6) */}
        {themes.slice(2, 7).map((theme) => (
          <DropdownMenuItem
            key={theme.value}
            onClick={() => setSelectedTheme(theme.value)}
            className={cn(
              "flex items-center justify-between",
              selectedTheme === theme.value && "bg-accent"
            )}
          >
            <div className="flex items-center gap-2">
              <theme.icon className="h-4 w-4" />
              <span>{theme.name}</span>
            </div>
          </DropdownMenuItem>
        ))}

        <DropdownMenuSeparator />

        {/* System theme option (index 7) */}
        <DropdownMenuItem
            key={themes[7].value}
            onClick={() => setSelectedTheme(themes[7].value)}
            className={cn(
              "flex items-center justify-between",
              selectedTheme === themes[7].value && "bg-accent"
            )}
          >
            <div className="flex items-center gap-2">
              <themes[7].icon className="h-4 w-4" />
              <span>{themes[7].name}</span>
            </div>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
