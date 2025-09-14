import React from 'react';
import styles from './CharacterCard.module.css';
import { Character } from 'api/client.types';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={character.image} alt={character.name} />
      <h3 className={styles.name}>{character.name}</h3>
    </div>
  );
}
