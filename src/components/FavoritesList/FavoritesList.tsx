import React from 'react';
import styles from './FavoritesList.module.css';
import { useFavorites } from 'state/FavoritesContext';
import CharacterCard from 'components/CharacterCard/CharacterCard';

export default function FavoritesList() {
  const { favorites } = useFavorites();

  return (
    <div className={styles.list}>
      {!favorites.length ? (
        <div>No favorites yet</div>
      ) : (
        favorites.map((c) => {
          return <CharacterCard character={c} key={c.id} />;
        })
      )}
    </div>
  );
}
