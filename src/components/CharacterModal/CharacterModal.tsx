import { Character } from 'api/client.types';
import React from 'react';
import styles from './CharacterModal.module.css';
import { useOrigin } from 'hooks/useOrigin';
import CharacterModalDetail from './CharacterModalDetail';

interface CharacterModalProps {
  character: Character;
}

export default function CharacterModal({ character }: CharacterModalProps) {
  const { data: originData, loading, error } = useOrigin(character.origin.url);

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
          {originData && !loading && !error ? (
            <>
              <CharacterModalDetail title='Name' value={originData?.name} />
              <CharacterModalDetail title='Type' value={originData?.type} />
              <CharacterModalDetail title='Dimension' value={originData?.dimension} />
            </>
          ) : (
            <div className={styles.details}>No origin data available.</div>
          )}
        </div>
      </div>
    </div>
  );
}
