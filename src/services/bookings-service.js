import { apiClient } from './api-client';
import { getCompanyById } from '../constants/companies';

function unwrap(data) {
  return data?.value ?? data?.data ?? data;
}

function normalizeBooking(booking) {
  const trip = booking.trip || {};
  const origin = booking.origin || trip.origin;
  const destination = booking.destination || trip.destination;
  const company = booking.company || trip.company;
  const companyId = company?.id || booking.companyId || trip.companyId;
  const companyName =
    company?.name ||
    company?.title ||
    booking.companyName ||
    trip.companyName;
  const fallbackCompany = getCompanyById(companyId, { name: companyName });
  const normalizedCompany = {
    ...fallbackCompany,
    ...(company || {}),
    id: company?.id || companyId || fallbackCompany.id,
    name: companyName || fallbackCompany.name,
    short:
      company?.short ||
      (companyName || fallbackCompany.name).trim().slice(0, 1),
  };

  return {
    ...booking,
    id: booking.id || booking.code,
    origin: origin?.id || booking.originId || trip.originId,
    destination: destination?.id || booking.destinationId || trip.destinationId,
    originName: origin?.name || origin?.title || booking.originName,
    destinationName:
      destination?.name || destination?.title || booking.destinationName,
    companyId,
    company: normalizedCompany,
    date: booking.date || trip.date || trip.departureAt?.slice(0, 10),
    departure:
      booking.departure ||
      trip.departure ||
      (trip.departureAt
        ? new Date(trip.departureAt).toLocaleTimeString('ar-SY', {
            hour: '2-digit',
            minute: '2-digit',
          })
        : ''),
    arrive:
      booking.arrive ||
      trip.arrive ||
      (trip.arrivalAt
        ? new Date(trip.arrivalAt).toLocaleTimeString('ar-SY', {
            hour: '2-digit',
            minute: '2-digit',
          })
        : ''),
    seats: (booking.seats || booking.seatNumbers || []).map((seat) =>
      typeof seat === 'object'
        ? seat.seatNumber ?? seat.number ?? seat.code
        : seat
    ),
    total: booking.total ?? booking.totalPrice ?? booking.amount ?? 0,
  };
}

export async function createBooking({ tripId, seats, passengers }) {
  const { data } = await apiClient.post('/bookings', {
    tripId: Number(tripId),
    seats: seats.map((seat, index) => ({
      seatNumber: Number(String(seat).replace(/\D/g, '')) || 3,
      passengerName: passengers[index]?.name || '',
      passengerPhone: passengers[index]?.phone || '',
    })),
  });
  return unwrap(data);
}

export async function fetchMyBookings() {
  const { data } = await apiClient.get('/bookings/me');
  const bookings = unwrap(data);
  return (Array.isArray(bookings) ? bookings : bookings?.items || []).map(
    normalizeBooking
  );
}

export async function fetchBookingById(id) {
  const { data } = await apiClient.get(`/bookings/${id}`);
  return normalizeBooking(unwrap(data));
}

export async function cancelBooking(id) {
  const { data } = await apiClient.post(`/bookings/${id}/cancel`);
  return unwrap(data);
}
