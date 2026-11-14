import { apiClient } from './api-client';
import { CITIES, getCityById } from '../constants/cities';
import { COMPANIES, getCompanyById } from '../constants/companies';

function unwrap(data) {
  return data?.value ?? data?.data ?? data;
}

function normalizeCity(city, id) {
  const cityName = city?.name || city?.title;
  const fallback =
    CITIES.find(
      (item) =>
        String(item.id) === String(id) ||
        item.name === id ||
        item.name === cityName ||
        item.slug === id
    ) || getCityById(id);
  return {
    ...fallback,
    ...(city || {}),
    id: city?.id ?? id ?? fallback.id,
    slug: city?.slug || city?.code || fallback.id,
    name: city?.name || city?.title || fallback.name,
  };
}

function normalizeCompany(company, id) {
  const fallback =
    COMPANIES.find(
      (item) =>
        String(item.id) === String(id) ||
        item.name === company?.name
    ) || COMPANIES[0];
  return {
    ...fallback,
    ...(company || {}),
    id: company?.id ?? id ?? fallback.id,
    name: company?.name || company?.title || fallback.name,
    rating: company?.rating ?? fallback.rating,
    features: company?.features || fallback.features || [],
    logoUrl: company?.logoUrl || null,
    short:
      fallback.id === company?.id
        ? fallback.short
        : (company?.name || 'ش').trim().slice(0, 1),
  };
}

export async function fetchCities() {
  const { data } = await apiClient.get('/cities');
  const cities = unwrap(data);
  return (Array.isArray(cities) ? cities : cities?.items || []).map((city) =>
    normalizeCity(city, city.id)
  );
}

export async function fetchCompanies() {
  const { data } = await apiClient.get('/companies');
  const companies = unwrap(data);
  return (Array.isArray(companies) ? companies : companies?.items || []).map(
    (company) => normalizeCompany(company, company.id)
  );
}

export async function fetchTrips({ origin, destination, companyId, date }) {
  const cities = await fetchCities();
  const resolveCityId = (value) => {
    const city = cities.find(
      (item) =>
        String(item.id) === String(value) ||
        item.slug === value ||
        item.code === value ||
        item.name === value
    );
    return city?.id ?? value;
  };

  const { data } = await apiClient.get('/trips', {
    params: {
      originId: resolveCityId(origin),
      destinationId: resolveCityId(destination),
      companyId,
      date,
    },
  });
  const trips = unwrap(data);
  return (Array.isArray(trips) ? trips : trips?.items || []).map((trip) => {
    const departure = new Date(trip.departureAt || trip.departure);
    const arrival = new Date(trip.arrivalAt || trip.arrive || trip.arrival);
    const hasDateTimes =
      !Number.isNaN(departure.getTime()) && !Number.isNaN(arrival.getTime());
    const duration = hasDateTimes
      ? Math.max(0, Math.round((arrival.getTime() - departure.getTime()) / 60000))
      : trip.duration || 0;

    return {
      ...trip,
      id: trip.code || String(trip.id),
      backendId: trip.id,
      origin: normalizeCity(trip.origin, trip.originId || origin),
      destination: normalizeCity(trip.destination, trip.destinationId || destination),
      company: normalizeCompany(trip.company, trip.companyId || companyId),
      departure: hasDateTimes
        ? departure.toLocaleTimeString('ar-SY', { hour: '2-digit', minute: '2-digit' })
        : trip.departure,
      arrive: hasDateTimes
        ? arrival.toLocaleTimeString('ar-SY', { hour: '2-digit', minute: '2-digit' })
        : trip.arrive || trip.arrival,
      duration,
      price: trip.price ?? trip.fare ?? 0,
      seats: trip.availableSeats ?? trip.seats ?? 0,
      busClass: trip.busClass || trip.class || trip.company?.busClass || 'standard',
      classLabel: trip.classLabel || trip.busClass || 'بولمان سياحي (2+2)',
    };
  });
}

export async function fetchTripSeats(tripId) {
  const { data } = await apiClient.get(`/trips/${tripId}/seats`);
  return unwrap(data);
}