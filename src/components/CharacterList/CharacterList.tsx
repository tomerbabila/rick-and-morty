import React, { useState } from 'react';
import styles from './CharacterList.module.css';
import CharacterCard from 'components/CharacterCard';
import { useCharacters } from 'hooks/useCharacters';

export default function CharacterList() {
  const [query, setQuery] = useState('');
  const { data, loading, error } = useCharacters(query);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };

  return (
    <>
      <input placeholder='Search by name...' value={query} onChange={handleSearchChange} />
      <div className={styles.list}>
        {loading && <div>Loading…</div>}
        {error && <div>Error: {error.message}</div>}
        {(data?.results || []).map((c) => (
          <CharacterCard character={c} key={c.id} />
        ))}
      </div>
    </>
  );
}
