export function getStoredItem(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) ?? fallback) : fallback;
  } catch {
    return fallback;
  }
}

export function saveStoredItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    console.warn('Local storage unavailable');
  }
}

export function removeStoredItem(key) {
  try {
    localStorage.removeItem(key);
  } catch {
    console.warn('Local storage unavailable');
  }
}
