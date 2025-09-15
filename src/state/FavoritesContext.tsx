import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { Character } from 'api/client.types';

const LOCAL_STORAGE_KEY = 'rick-and-morty-favorites';
const DEFAULT_COLOR = '#f9fbff';

type FavoritesMap = Record<number, Character>; // i.e. { [id]: Character }

type FavoritesState = {
  favorites: FavoritesMap;
  color: string;
};

type Action = { type: 'toggle'; character: Character } | { type: 'removeAll' } | { type: 'setColor'; color: string };

function reducer(state: FavoritesState, action: Action): FavoritesState {
  switch (action.type) {
    case 'toggle': {
      const { id } = action.character;
      const newFavorites = { ...state.favorites };

      if (newFavorites[id]) {
        delete newFavorites[id];
      } else {
        newFavorites[id] = action.character;
      }

      return { favorites: newFavorites, color: state.color };
    }
    case 'removeAll': {
      return { favorites: {}, color: state.color };
    }
    case 'setColor': {
      return { ...state, color: action.color };
    }
    default:
      return state;
  }
}

type CtxValue = {
  favorites: Character[];
  color: string;
  has: (id: number) => boolean;
  toggle: (c: Character) => void;
  removeAll: () => void;
  setColor: (hex: string) => void;
};

const Ctx = createContext<CtxValue>({
  favorites: [],
  color: DEFAULT_COLOR,
  has: () => false,
  toggle: () => {},
  removeAll: () => {},
  setColor: () => {},
});

export const FavoritesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { color: DEFAULT_COLOR, favorites: {} }, () => {
    // Load from local storage
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : { color: DEFAULT_COLOR, favorites: {} };
  });

  useEffect(() => {
    // Save to local storage
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value: CtxValue = {
    favorites: Object.values(state.favorites || {}),
    color: state.color || DEFAULT_COLOR,
    toggle: (c: Character) => dispatch({ type: 'toggle', character: c }),
    removeAll: () => dispatch({ type: 'removeAll' }),
    has: (id: number) => !!state.favorites[id],
    setColor: (hex: string) => dispatch({ type: 'setColor', color: hex }),
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useFavorites = () => useContext(Ctx);
