import { create } from 'zustand';
import { getStoredItem, saveStoredItem, removeStoredItem } from '../lib/storage';

export const useAuthStore = create((set) => ({
  token: getStoredItem('masar-token', null),
  user: getStoredItem('masar-user', null),
  afterAuthRoute: null,

  login: ({ token, user, name, email }) => {
    const resolvedUser = user || { name, email };
    if (token) saveStoredItem('masar-token', token);
    saveStoredItem('masar-user', resolvedUser);
    set({ token: token || null, user: resolvedUser });
  },

  logout: () => {
    removeStoredItem('masar-token');
    removeStoredItem('masar-user');
    set({ token: null, user: null });
  },

  setAfterAuthRoute: (route) => set({ afterAuthRoute: route }),
  clearAfterAuthRoute: () => set({ afterAuthRoute: null }),
}));
