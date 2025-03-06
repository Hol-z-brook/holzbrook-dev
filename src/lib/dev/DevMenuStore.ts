import { createPersistentStore } from '../store/cookieStorage';

export interface DevMenuState {
  isOpen: boolean;
  position: {
    x: number;
    y: number;
    count?: number;
  };
}

const initialState: DevMenuState = {
  isOpen: false,
  position: { x: 20, y: 20, count: 0 },
};

// Create and export the store
export const devMenuStore = createPersistentStore<DevMenuState>('dev_menu_state', initialState);

// Initialize the store if it hasn't been initialized yet
if (typeof window !== 'undefined') {
  const state = devMenuStore.state;
  console.log('Initial store state:', state);
  devMenuStore.setState(state);
}

// Add logging to track state changes
devMenuStore.subscribe(state => {
  console.log('Store state changed:', state);
});
