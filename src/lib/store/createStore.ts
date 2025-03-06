export type Store<T> = {
  state: T;
  subscribers: Set<(state: T) => void>;
  subscribe: (callback: (state: T) => void) => () => void;
  setState: (newState: Partial<T>) => void;
};

export const createStore = <T>(initialState: T): Store<T> => {
  const store: Store<T> = {
    state: initialState,
    subscribers: new Set(),

    subscribe(callback) {
      store.subscribers.add(callback);
      callback(store.state);
      return () => store.subscribers.delete(callback);
    },

    setState(newState) {
      store.state = { ...store.state, ...newState };
      store.subscribers.forEach(callback => callback(store.state));
    },
  };

  return store;
};
