import { Character } from 'api/client.types';
import React from 'react';
import styles from './CharacterModal.module.css';
import { useLocation } from 'hooks/useLocation';
import CharacterModalDetail from './CharacterModalDetail';

interface CharacterModalProps {
  character: Character;
}

export default function CharacterModal({ character }: CharacterModalProps) {
  const { data: locationData, loading, error } = useLocation(character.origin.url);

  return (
    <div className={styles.modal}>
      <img className={styles.avatar} src={character.image} alt={character.name} />
      <div className={styles.info}>
        <div className={styles.details}>
          <h3>Details:</h3>
          <CharacterModalDetail title='Status' value={character.status} />
          <CharacterModalDetail title='Species' value={character.species} />
          <CharacterModalDetail title='Gender' value={character.gender} />
          <CharacterModalDetail title='No. of Episodes' value={character.episode.length} />
        </div>
        <div className={styles.details}>
          <h3>Origin:</h3>
          {loading && <div>Loading origin...</div>}
          {error && <div>Error loading origin: {error.message}</div>}
          {locationData && !loading && !error ? (
            <>
              <CharacterModalDetail title='Name' value={locationData?.name} />
              <CharacterModalDetail title='Type' value={locationData?.type} />
              <CharacterModalDetail title='Dimension' value={locationData?.dimension} />
            </>
          ) : (
            <div className={styles.details}>No origin data available.</div>
          )}
        </div>
      </div>
    </div>
  );
}
