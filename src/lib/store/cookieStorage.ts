import { createStore } from './createStore';

export const setCookie = (name: string, value: string, days: number) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

export const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

export const createPersistentStore = <T>(
  name: string,
  initialState: T,
  expiryDays: number = 30
) => {
  const loadState = (): T => {
    const savedState = getCookie(name);
    if (savedState) {
      try {
        return JSON.parse(savedState);
      } catch (e) {
        console.warn(`Failed to parse state from cookie ${name}:`, e);
      }
    }
    return initialState;
  };

  const store = createStore(loadState());

  // Override setState to persist changes
  const originalSetState = store.setState;
  store.setState = (newState: Partial<T>) => {
    originalSetState(newState);
    setCookie(name, JSON.stringify(store.state), expiryDays);
  };

  return store;
};
