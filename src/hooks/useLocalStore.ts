export function useLocalStorage<T>(key: string, initialValue: T) {
  localStorage.setItem(key, JSON.stringify(initialValue));
}

export function getLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key)!);
}

export function removeLocalStorage(key:string){
  localStorage.removeItem(key)
}

export function useSessionStorage<T>(key: string, initialValue: T) {
  sessionStorage.setItem(key, JSON.stringify(initialValue));
}

export function getSessionStorage(key: string) {
  return JSON.parse(sessionStorage.getItem(key)!);
}

