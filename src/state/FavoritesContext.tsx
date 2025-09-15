import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Character } from 'api/client.types';

const LOCAL_STORAGE_KEY = 'rick-and-morty-favorites';

type FavoritesState = Record<number, Character>; // e.g. { [id]: Character }
type Action = { type: 'toggle'; character: Character } | { type: 'load'; payload: FavoritesState };

function reducer(state: FavoritesState, action: Action): FavoritesState {
  switch (action.type) {
    case 'load': {
      return action.payload;
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
    // TODO: add removeAll actions
    default:
      return state;
  }
}

const Ctx = createContext<{ favorites: Character[]; toggle: (c: Character) => void }>({
  favorites: [],
  toggle: () => {},
});

export const FavoritesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {});

  useEffect(() => {
    // Load from local storage
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    const payload = raw ? JSON.parse(raw) : {};
    dispatch({ type: 'load', payload });
  }, []);

  useEffect(() => {
    // Save to local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = {
    favorites: Object.values(state),
    toggle: (c: Character) => dispatch({ type: 'toggle', character: c }),
    // TODO: add removeAll, has functions
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useFavorites = () => useContext(Ctx);
