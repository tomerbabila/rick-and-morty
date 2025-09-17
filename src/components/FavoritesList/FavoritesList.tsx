import React from 'react';
import styles from './FavoritesList.module.css';
import { useFavorites } from 'state/FavoritesContext';
import CharacterCard from 'components/CharacterCard/CharacterCard';
import { Button, EmptyState } from 'components/ui';
import ColorPicker from 'components/ColorPicker/ColorPicker';

export default function FavoritesList() {
  const { favorites, removeAll } = useFavorites();

  return (
    <>
      <div className={styles.header}>
        <h2 className={styles.title}>Favorites</h2>
        <ColorPicker />
        <Button className={styles.removeAll} onClick={removeAll}>
          Remove All
        </Button>
      </div>
      <div className={styles.list}>
        {!favorites.length ? (
          <EmptyState message='No favorites yet' />
        ) : (
          favorites.map((c) => {
            return <CharacterCard character={c} key={c.id} />;
          })
        )}
      </div>
    </>
  );
}
