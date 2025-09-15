import React, { createContext, useContext, useReducer } from 'react';
import { Character } from 'api/client.types';

type FavoritesState = Record<number, Character>; // e.g. { [id]: Character }
type Action = { type: 'toggle'; character: Character };

function reducer(state: FavoritesState, action: Action): FavoritesState {
  switch (action.type) {
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
    // TODO: add load, remove actions
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

  const value = {
    favorites: Object.values(state),
    toggle: (c: Character) => dispatch({ type: 'toggle', character: c }),
    // TODO: add load, remove, has functions
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useFavorites = () => useContext(Ctx);
