export function useLocalStorage<T>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getLocalStorage<T>(key: string): T {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

export function removeLocalStorage(key: string) {
  localStorage.removeItem(key);
}

export function useSessionStorage<T>(key: string, value: T) {
  sessionStorage.setItem(key, JSON.stringify(value));
}

export function getSessionStorage<T>(key: string): T {
  const item = sessionStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

export function removeSessionStorage(key: string) {
  sessionStorage.removeItem(key);
}
