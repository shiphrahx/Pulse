import { createContext, useContext, useEffect, useState } from 'react';

const ColorContext = createContext();

export const useColor = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColor must be used within ColorProvider');
  }
  return context;
};

// Predefined color schemes
export const colorSchemes = {
  blue: {
    name: 'Blue',
    primary: '#0ea5e9',
    primaryHover: '#0284c7',
    gradient: 'linear-gradient(to right, #0284c7, #38bdf8)',
  },
  purple: {
    name: 'Purple',
    primary: '#a855f7',
    primaryHover: '#9333ea',
    gradient: 'linear-gradient(to right, #9333ea, #c084fc)',
  },
  green: {
    name: 'Green',
    primary: '#10b981',
    primaryHover: '#059669',
    gradient: 'linear-gradient(to right, #059669, #34d399)',
  },
  orange: {
    name: 'Orange',
    primary: '#f97316',
    primaryHover: '#ea580c',
    gradient: 'linear-gradient(to right, #ea580c, #fb923c)',
  },
  pink: {
    name: 'Pink',
    primary: '#ec4899',
    primaryHover: '#db2777',
    gradient: 'linear-gradient(to right, #db2777, #f472b6)',
  },
  red: {
    name: 'Red',
    primary: '#ef4444',
    primaryHover: '#dc2626',
    gradient: 'linear-gradient(to right, #dc2626, #f87171)',
  },
  teal: {
    name: 'Teal',
    primary: '#14b8a6',
    primaryHover: '#0d9488',
    gradient: 'linear-gradient(to right, #0d9488, #2dd4bf)',
  },
  yellow: {
    name: 'Yellow',
    primary: '#eab308',
    primaryHover: '#ca8a04',
    gradient: 'linear-gradient(to right, #ca8a04, #facc15)',
  },
};

export const ColorProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState(() => {
    const savedColor = localStorage.getItem('pulse-color');
    return savedColor || 'blue';
  });

  useEffect(() => {
    const colors = colorSchemes[colorScheme];
    const root = document.documentElement;

    // Update CSS variables
    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-primary-hover', colors.primaryHover);
    root.style.setProperty('--color-gradient', colors.gradient);

    // Save to localStorage
    localStorage.setItem('pulse-color', colorScheme);
  }, [colorScheme]);

  const changeColor = (color) => {
    setColorScheme(color);
  };

  return (
    <ColorContext.Provider value={{ colorScheme, changeColor, colors: colorSchemes }}>
      {children}
    </ColorContext.Provider>
  );
};
