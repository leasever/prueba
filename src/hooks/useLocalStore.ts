export function useLocalStorage<T>(key: string, initialValue: T) {
  localStorage.setItem(key, JSON.stringify(initialValue));
}

export function getLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key)!);
}
