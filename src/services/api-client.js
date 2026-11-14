import axios from 'axios';
import { getStoredItem } from '../lib/storage';

export const apiClient = axios.create({
  baseURL:
    import.meta.env.VITE_WEBSITE_API_BASE_URL ||
    import.meta.env.VITE_API_BASE_URL ||
    'https://sairna.abdulrahman-hares.com/api/v1/website',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

apiClient.interceptors.request.use((config) => {
  const token = getStoredItem('masar-token', null);
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('masar-token');
      localStorage.removeItem('masar-user');
    }
    return Promise.reject(error);
  }
);
