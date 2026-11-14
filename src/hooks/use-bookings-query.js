import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  cancelBooking,
  createBooking,
  fetchBookingById,
  fetchMyBookings,
} from '../services/bookings-service';
import { useAuthStore } from '../store/use-auth-store';
import { TRIP_QUERY_KEYS } from './use-trips-query';

export const BOOKING_QUERY_KEYS = {
  all: ['bookings'],
  me: ['bookings', 'me'],
  detail: (id) => ['bookings', 'detail', id],
};

export function useMyBookingsQuery() {
  const token = useAuthStore((state) => state.token);

  return useQuery({
    queryKey: BOOKING_QUERY_KEYS.me,
    queryFn: fetchMyBookings,
    enabled: Boolean(token),
  });
}

export function useBookingByIdQuery(id) {
  const token = useAuthStore((state) => state.token);

  return useQuery({
    queryKey: BOOKING_QUERY_KEYS.detail(id),
    queryFn: () => fetchBookingById(id),
    enabled: Boolean(token && id),
  });
}

export function useCreateBookingMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createBooking,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({ queryKey: BOOKING_QUERY_KEYS.me });
      if (variables?.tripId) {
        queryClient.invalidateQueries({
          queryKey: TRIP_QUERY_KEYS.seats(variables.tripId),
        });
      }
    },
  });
}

export function useCancelBookingMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelBooking,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: BOOKING_QUERY_KEYS.me });
    },
  });
}
