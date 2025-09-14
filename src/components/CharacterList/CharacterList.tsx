import React, { useEffect, useState } from 'react';
import styles from './CharacterList.module.css';
import { fetchCharacters } from 'api/client';
import { Page } from 'api/client.types';
import CharacterCard from 'components/CharacterCard';

export default function CharacterList() {
  const [data, setData] = useState<Page | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetchCharacters({ name: query })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, [query]);

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
