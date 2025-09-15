import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Character } from 'api/client.types';

const LOCAL_STORAGE_KEY = 'rick-and-morty-favorites';

type FavoritesState = Record<number, Character>; // i.e. { [id]: Character }
type Action =
  | { type: 'toggle'; character: Character }
  | { type: 'load'; payload: FavoritesState }
  | { type: 'removeAll' };

function reducer(state: FavoritesState, action: Action): FavoritesState {
  switch (action.type) {
    case 'load': {
      return { ...action.payload };
    }
    case 'toggle': {
      const { id } = action.character;
      const newState = { ...state };

      if (newState[id]) {
        delete newState[id];
      } else {
        newState[id] = action.character;
      }

      return newState;
    }
    case 'removeAll': {
      return {};
    }
    default:
      return state;
  }
}

const Ctx = createContext<{
  favorites: Character[];
  toggle: (c: Character) => void;
  removeAll: () => void;
  has: (id: number) => boolean;
}>({
  favorites: [],
  toggle: () => {},
  removeAll: () => {},
  has: () => false,
});

export const FavoritesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {}, () => {
    // Load from local storage
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  });

  useEffect(() => {
    // Save to local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = {
    favorites: Object.values(state),
    toggle: (c: Character) => dispatch({ type: 'toggle', character: c }),
    removeAll: () => dispatch({ type: 'removeAll' }),
    has: (id: number) => !!state[id],
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useFavorites = () => useContext(Ctx);
