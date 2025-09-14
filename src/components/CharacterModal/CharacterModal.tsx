import { Character } from 'api/client.types';
import React from 'react';
import styles from './CharacterModal.module.css';

interface CharacterModalProps {
  character: Character;
}

export default function CharacterModal({ character }: CharacterModalProps) {
  return (
    <div className={styles.modal}>
      <img className={styles.avatar} src={character.image} alt={character.name} />
      <div className={styles.details}>
        <h3>Details:</h3>
        <span>
          <strong>Status:</strong> {character.status}
        </span>
        <span>
          <strong>Species:</strong> {character.species}
        </span>
        <span>
          <strong>Gender:</strong> {character.gender}
        </span>
        <span>
          <strong>No. of Episodes:</strong> {character.episode.length}
        </span>
      </div>
    </div>
  );
}
