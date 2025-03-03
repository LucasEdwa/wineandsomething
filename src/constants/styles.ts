// Color palette using Tailwind's built-in colors
import { IThemes } from '../models/ITheme';

export const colors = {
  primary: 'red-900',     // Deep red
  secondary: 'pink-100',  // Soft pink
  accent: 'yellow-500',   // Gold
  text: {
    primary: 'gray-900',    // Deep gray
    secondary: 'gray-600',  // Medium gray
    light: 'gray-50',       // Off-white
  },
  background: {
    primary: 'bg-red-900/30',     // Include the 'bg-' prefix
    secondary: 'bg-pink-500/30',   // Light pink
    dark: 'bg-gray-900',       // Deep gray
  }
};


// Theme definitions
export const themes: IThemes = {
  primary: {
    background: colors.background.primary,    // Using "bg-red-900/30"
    text: colors.text.primary,
    subText: colors.text.secondary,
    button: {
      primary: "inline-block bg-red-900 text-white px-6 py-3 rounded-full hover:opacity-90 transition-all cursor-pointer w-fit",
      secondary: "border-2 border-red-900 text-yellow-500 px-6 py-3 rounded-full hover:bg-gray-100 transition-all w-fit",
    },
  },
  secondary: {
    background: colors.background.secondary,  // Now using "bg-pink-50/30"
    text: "text-gray-500",
    subText: "text-gray-300",
    button: {
      primary: "inline-block bg-pink-100 text-red-900 px-6 py-3 rounded-full hover:opacity-90 transition-all cursor-pointer w-fit",
      secondary: "border-2 border-pink-100 text-red-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-all w-fit",
    },
  },
};

export const styles = {
  padding: "sm:px-16 px-6 sm:py-16 py-10",
  flexCol: "flex flex-col",
  flexRow: "flex flex-row gap-8 items-center justify-between  ",
  // Padding utilities
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",

  // flex utilities
  // Container utilities
  container: "max-w-7xl mx-auto relative z-0",
  section: "sm:px-16 px-6 sm:py-16 py-10",

  // Hero section text styles
  heroHeadText:
    "font-serif font-bold text-gray-50 lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-gray-200 font-light lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  
  
  nav: {
    container: "w-full py-4 px-4 sm:px-16 ",
    links: "flex-row gap-3",
    link: {
      primary: "hover:opacity-80 transition-all text-gray-50 text-lg",
      secondary: "hover:opacity-80 transition-all text-gray-200",
    }
  }
};

// Media query breakpoints
export const breakpoints = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
}; 