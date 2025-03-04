// Color palette using Tailwind's built-in colors
import { IThemes } from "../models/ITheme";

export const colors = {
  primary: "red-900", // Deep red
  secondary: "pink-100", // Soft pink
  accent: "yellow-500", // Gold
  text: {
    primary: "white", // Deep gray
    secondary: "gray-600", // Medium gray
    light: "gray-50", // Off-white
  },
  background: {
    primary: "bg-red-900/30", // Include the 'bg-' prefix
    secondary: "bg-pink-500/30", // Light pink
    dark: "bg-gray-900", // Deep gray
  },
};

// Theme definitions
export const themes: IThemes = {
  primary: {
    background: colors.background.primary, // Using "bg-red-900/30"
    text: "text-white", // Always white text on red background
    subText: "text-gray-200", // Light gray for better readability
    button: {
      primary:
        "inline-block bg-white text-red-900 px-6 py-3 rounded-full hover:opacity-90 transition-all cursor-pointer w-fit",
      secondary:
        "border-2 border-white text-white px-6 py-3 rounded-full hover:bg-gray-100 transition-all w-fit",
    },
  },
  secondary: {
    background: colors.background.secondary, // Using "bg-pink-500/30"
    text: "text-white", // Keep white text for consistency
    subText: "text-gray-200", // Light gray for better readability
    button: {
      primary:
        "inline-block bg-pink-100 text-red-900 px-6 py-3 rounded-full hover:opacity-90 transition-all cursor-pointer w-fit",
      secondary:
        "border-2 border-pink-100 text-red-900 px-6 py-3 rounded-full hover:bg-gray-100 transition-all w-fit cursor-pointer",
    },
  },
};

export const styles = {
  padding: "sm:px-2 px-6 sm:py-2 py-10",
  flexCol: "flex flex-col gap-4",
  flexRow: "flex flex-row gap-8 items-center justify-between  ",
  // Padding utilities
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",

  // Container utilities
  container: "max-w-7xl mx-auto relative z-0",
  section: "sm:px-16 px-6 sm:py-16 py-10",

  // Hero section text styles
  heroHeadText:
    "font-serif font-bold text-gray-50 lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-gray-200 font-light lg:text-[30px] sm:text-[56px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  heroSection: "mb-[355px] gap-8 items-center mb-[355px]",

  nav: {
    container: "w-full  ",
    links: "flex-row gap-3",
    link: {
      primary: "hover:opacity-80 transition-all text-gray-50 text-lg",
      secondary: "hover:opacity-80 transition-all text-gray-200",
    },
    dropdown: "flex flex-col gap-2",
  },
  events: {
    container: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
    holder:
      "bg-white/10 backdrop-blur-xl rounded-lg p-6 hover:scale-105 transition-all",
    title: "text-2xl font-bold mb-2 text-center",
    p: "flex items-center gap-2",
    pHolder: "space-y-2",
  },
  services: {
    container: "flex p-10 gap-10 justify-center items-center flex-col ",
    holder:
      "bg-white/10 backdrop-blur-xl rounded-lg p-6 hover:scale-105 transition-all w-full",
    title: "text-2xl font-bold mb-2",
  },
  booking: {
    container: "flex p-10 gap-10 justify-center items-center flex-col ",
    title: "text-2xl font-bold mb-2",
    formHolder: "flex flex-col gap-4",
    form: "space-y-4",
    input: "p-2 rounded bg-white/30",
    buttonHolder: "flex items-center justify-center",
  },
};

// Media query breakpoints
export const breakpoints = {
  xs: "480px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};
