import React, { useState } from 'react';
import styles from './CharacterList.module.css';
import CharacterCard from 'components/CharacterCard';
import { useCharacters } from 'hooks/useCharacters';

export default function CharacterList() {
  const [query, setQuery] = useState('');
  const { data } = useCharacters(query);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <>
      <input placeholder='Search by name...' value={query} onChange={handleSearchChange} />
      <div className={styles.list}>
        {(data?.results || []).map((c) => (
          <CharacterCard character={c} key={c.id} />
        ))}
      </div>
    </>
  );
}
