import { create } from 'zustand';
import { removeStoredItem } from '../lib/storage';
import { getNextDate } from '../lib/formatters';

removeStoredItem('masar-bookings');

export const useBookingStore = create((set) => ({
  search: {
    origin: 'damascus',
    destination: 'aleppo',
    date: getNextDate(),
    people: 1,
  },
  companyFilter: 'all',
  timeFilter: 'all',
  sortBy: 'earliest',

  selectedTrip: null,
  selectedSeats: [],
  bookingStep: 'seats',
  passengers: [],
  paymentMethod: 'office',

  lastBooking: null,
  trackId: null,
  activeTicketModal: null,

  setSearch: (nextSearch) =>
    set((state) => ({
      search: { ...state.search, ...nextSearch },
      companyFilter: 'all',
      timeFilter: 'all',
      sortBy: 'earliest',
    })),

  swapCities: () =>
    set((state) => ({
      search: {
        ...state.search,
        origin: state.search.destination,
        destination: state.search.origin,
      },
    })),

  selectDestinationFromHome: (destinationId) =>
    set((state) => {
      const origin = state.search.origin === destinationId ? 'homs' : state.search.origin;
      return {
        search: {
          ...state.search,
          origin,
          destination: destinationId,
        },
      };
    }),

  setCompanyFilter: (companyFilter) => set({ companyFilter }),
  setTimeFilter: (timeFilter) => set({ timeFilter }),
  setSortBy: (sortBy) => set({ sortBy }),
  clearFilters: () =>
    set({
      companyFilter: 'all',
      timeFilter: 'all',
      sortBy: 'earliest',
    }),

  selectTrip: (trip) =>
    set({
      selectedTrip: trip,
      selectedSeats: [],
      passengers: [],
      bookingStep: 'seats',
    }),

  toggleSeat: (seatCode) =>
    set((state) => {
      const exists = state.selectedSeats.includes(seatCode);
      if (exists) {
        return {
          selectedSeats: state.selectedSeats.filter((s) => s !== seatCode),
        };
      }
      return {
        selectedSeats: [...state.selectedSeats, seatCode],
      };
    }),

  setBookingStep: (bookingStep) => set({ bookingStep }),
  setPassengers: (passengers) => set({ passengers }),
  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),

  addBooking: (bookingData) =>
    set({ lastBooking: bookingData, trackId: bookingData.id }),

  setTrackId: (trackId) => set({ trackId }),
  openTicketModal: (booking) => set({ activeTicketModal: booking }),
  closeTicketModal: () => set({ activeTicketModal: null }),
}));
