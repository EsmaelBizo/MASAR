import { apiClient } from './api-client';

function unwrap(data) {
  return data?.value ?? data?.data ?? data;
}

function normalizeAuthResponse(data, credentials) {
  const payload = unwrap(data);
  const token =
    payload?.token ||
    payload?.accessToken ||
    payload?.access_token ||
    data?.token ||
    data?.accessToken;
  const user =
    payload?.user ||
    payload?.profile ||
    data?.user ||
    (payload?.email || payload?.name
      ? { name: payload.name || credentials.name, email: payload.email || credentials.email }
      : { name: credentials.name, email: credentials.email });

  return { token, user };
}

export async function registerUser({ name, email, password }) {
  const credentials = { name, email, password };
  const { data } = await apiClient.post('/auth/register', credentials);
  return normalizeAuthResponse(data, credentials);
}

export async function loginUser({ email, password }) {
  const credentials = { email, password };
  const { data } = await apiClient.post('/auth/login', credentials);
  return normalizeAuthResponse(data, credentials);
}

export async function fetchCurrentUser() {
  const { data } = await apiClient.get('/auth/me');
  return unwrap(data);
}
