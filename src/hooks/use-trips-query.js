import { useQuery } from '@tanstack/react-query';
import { fetchCities, fetchCompanies, fetchTrips } from '../services/trips-service';

export const TRIP_QUERY_KEYS = {
  all: ['trips'],
  search: (params) => ['trips', 'search', params.origin, params.destination, params.date],
  seats: (tripId) => ['trips', 'seats', tripId],
  cities: ['cities'],
  companies: ['companies'],
};

export function useTripsQuery({ origin, destination, date }) {
  return useQuery({
    queryKey: TRIP_QUERY_KEYS.search({ origin, destination, date }),
    queryFn: () => fetchTrips({ origin, destination, date }),
  });
}

export function useCitiesQuery() {
  return useQuery({
    queryKey: TRIP_QUERY_KEYS.cities,
    queryFn: fetchCities,
  });
}

export function useCompaniesQuery() {
  return useQuery({
    queryKey: TRIP_QUERY_KEYS.companies,
    queryFn: fetchCompanies,
  });
}
