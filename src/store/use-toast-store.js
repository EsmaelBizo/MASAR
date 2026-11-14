import { create } from 'zustand';

let toastTimeout = null;

export const useToastStore = create((set) => ({
  toast: null,
  showToast: (message, type = 'info') => {
    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }
    set({ toast: { message, type, id: Date.now() } });
    toastTimeout = setTimeout(() => {
      set({ toast: null });
    }, 3600);
  },
  hideToast: () => {
    if (toastTimeout) {
      clearTimeout(toastTimeout);
    }
    set({ toast: null });
  },
}));
