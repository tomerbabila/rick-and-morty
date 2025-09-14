import { Character } from 'api/client.types';
import React from 'react';
import styles from './CharacterModal.module.css';
import { useLocation } from 'hooks/useLocation';

interface CharacterModalProps {
  character: Character;
}

export default function CharacterModal({ character }: CharacterModalProps) {
  const { data: locationData, loading, error } = useLocation(character.origin.url);

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
      {loading && <div>Loading location...</div>}
      {error && <div>Error loading location: {error.message}</div>}
      {locationData ? (
        <div className={styles.details}>
          <h3>Origin:</h3>
          <span>
            <strong>Name:</strong> {locationData?.name}
          </span>
          <span>
            <strong>Type:</strong> {locationData?.type}
          </span>
          <span>
            <strong>Dimension:</strong> {locationData?.dimension}
          </span>
        </div>
      ) : (
        <div className={styles.details}>No origin data available.</div>
      )}
    </div>
  );
}
