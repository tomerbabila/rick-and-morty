import React from 'react';
import styles from './FavoritesList.module.css';
import { useFavorites } from 'state/FavoritesContext';
import CharacterCard from 'components/CharacterCard/CharacterCard';
import { Button } from 'ui';

export default function FavoritesList() {
  const { favorites, removeAll } = useFavorites();

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>Favorites</h2>
        <Button className={styles.removeAll} onClick={removeAll}>
          Remove All
        </Button>
      </div>
      <div className={styles.list}>
        {!favorites.length ? (
          <div>No favorites yet</div>
        ) : (
          favorites.map((c) => {
            return <CharacterCard character={c} key={c.id} />;
          })
        )}
      </div>
    </>
  );
}
