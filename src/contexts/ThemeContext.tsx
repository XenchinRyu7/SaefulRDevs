
"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

export type ThemeName = 'light' | 'dark' | 'retro' | 'cyberpunk' | 'paper' | 'aurora' | 'synthwave' | 'system';

export const THEME_CLASSES: Record<Exclude<ThemeName, 'light' | 'system' | 'dark'>, string> = {
  retro: 'theme-retro',
  cyberpunk: 'theme-cyberpunk',
  paper: 'theme-paper',
  aurora: 'theme-aurora',
  synthwave: 'theme-synthwave',
};

interface ThemeContextProps {
  selectedTheme: ThemeName;
  setSelectedTheme: (themeName: ThemeName) => void;
  effectiveTheme: 'light' | 'dark'; // Actual theme applied (system resolves to light/dark)
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTheme, setSelectedThemeState] = useState<ThemeName>('system');
  const [effectiveTheme, setEffectiveTheme] = useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = useState(false);

  const applyTheme = useCallback((newSelectedTheme: ThemeName) => {
    let finalTheme: 'light' | 'dark';
    const root = document.documentElement;

    Object.values(THEME_CLASSES).forEach(cls => root.classList.remove(cls));
    root.classList.remove('dark');

    if (newSelectedTheme === 'system') {
      const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      finalTheme = systemPrefersDark ? 'dark' : 'light';
      if (finalTheme === 'dark') {
        root.classList.add('dark');
      }
    } else if (newSelectedTheme === 'dark') {
      finalTheme = 'dark';
      root.classList.add('dark');
    } else if (THEME_CLASSES[newSelectedTheme as keyof typeof THEME_CLASSES]) {
      finalTheme = 'light'; // Most custom themes are light based, dark variations would need separate classes or intelligent variable inversion
      // For simplicity, we'll assume custom themes define their own light/dark nature via CSS vars.
      // Let's check if the custom theme is inherently dark by checking its background HSL lightness
      // This is a heuristic. A better way would be for themes to declare their base (light/dark).
      // For now, we rely on the CSS. If a custom theme sets a dark background, it's "dark-like".
      // This primarily affects components that might explicitly look for .dark class.
      // We will assume custom themes are self-contained.
      // Let's refine: custom themes like cyberpunk might be dark.
      // We will determine effectiveTheme based on whether the custom theme class itself is dark-like.
      // For now, custom themes are applied, and `effectiveTheme` will be 'light' unless the theme is 'dark' or 'system' resolves to dark.
      // This can be improved by theme metadata if needed.
      // For the purpose of this, let's assume custom themes might have dark backgrounds.
      // We'll set `effectiveTheme` based on a simple check for dark-like themes.
      if (newSelectedTheme === 'cyberpunk' || newSelectedTheme === 'aurora' || newSelectedTheme === 'synthwave') {
        finalTheme = 'dark'; // These are typically dark
         root.classList.add(THEME_CLASSES[newSelectedTheme as keyof typeof THEME_CLASSES]);
         root.classList.add('dark'); // Add dark class for components that rely on it
      } else if (newSelectedTheme === 'retro' || newSelectedTheme === 'paper') {
        finalTheme = 'light';
         root.classList.add(THEME_CLASSES[newSelectedTheme as keyof typeof THEME_CLASSES]);
      } else {
        // Default case for any other custom theme
        finalTheme = 'light';
        root.classList.add(THEME_CLASSES[newSelectedTheme as keyof typeof THEME_CLASSES]);
      }
    }
    else { // 'light'
      finalTheme = 'light';
    }
    
    setEffectiveTheme(finalTheme);
  }, []);


  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme') as ThemeName | null;
    const initialTheme = storedTheme || 'system';
    setSelectedThemeState(initialTheme);
    applyTheme(initialTheme);
  }, [applyTheme]);

  useEffect(() => {
    if (!mounted || selectedTheme !== 'system') {
      return;
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      applyTheme('system');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [selectedTheme, applyTheme, mounted]);

  const setSelectedTheme = useCallback((newThemeName: ThemeName) => {
    setSelectedThemeState(newThemeName);
    localStorage.setItem('theme', newThemeName);
    applyTheme(newThemeName);
  }, [applyTheme]);
  
  if (!mounted) {
    return null; // Avoid rendering until theme is determined to prevent flash
  }

  return (
    <ThemeContext.Provider value={{ selectedTheme, setSelectedTheme, effectiveTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
