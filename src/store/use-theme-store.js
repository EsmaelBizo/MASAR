import { create } from 'zustand';
import { getStoredItem, saveStoredItem } from '../lib/storage';

const initialTheme = getStoredItem('masar-theme', 'light');
if (typeof document !== 'undefined') {
  document.documentElement.dataset.theme = initialTheme;
}

export const useThemeStore = create((set) => ({
  theme: initialTheme,
  toggleTheme: () =>
    set((state) => {
      const nextTheme = state.theme === 'light' ? 'dark' : 'light';
      saveStoredItem('masar-theme', nextTheme);
      if (typeof document !== 'undefined') {
        document.documentElement.dataset.theme = nextTheme;
      }
      return { theme: nextTheme };
    }),
  setTheme: (theme) =>
    set(() => {
      saveStoredItem('masar-theme', theme);
      if (typeof document !== 'undefined') {
        document.documentElement.dataset.theme = theme;
      }
      return { theme };
    }),
}));
