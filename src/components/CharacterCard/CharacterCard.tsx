import React from 'react';
import styles from './CharacterCard.module.css';
import { Character } from 'api/client.types';

interface CharacterCardProps {
  character: Character;
  setShowModal: React.Dispatch<React.SetStateAction<Character | null>>;
}

export default function CharacterCard({ character, setShowModal }: CharacterCardProps) {
  return (
    <div className={styles.card} onClick={() => setShowModal(character)}>
      <img className={styles.img} src={character.image} alt={character.name} />
      <h3 className={styles.name}>{character.name}</h3>
    </div>
  );
}
