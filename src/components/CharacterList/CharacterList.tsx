import React, { useState } from 'react';
import styles from './CharacterList.module.css';
import { useCharacters } from 'hooks/useCharacters';

import CharacterCard from 'components/CharacterCard/CharacterCard';
import Pagination from 'components/Pagination/Pagination';
import { Character } from 'api/client.types';

export default function CharacterList({
  setShowModal,
}: {
  setShowModal: React.Dispatch<React.SetStateAction<Character | null>>;
}) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const { data, loading, error } = useCharacters(query, page);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setPage(1);
  };

  const handlePreviousPage = () => {
    setPage((p) => Math.max(p - 1, 1));
  };

  const handleNextPage = () => {
    setPage((p) => p + 1);
  };

  return (
    <>
      <div className={styles.controls}>
        <input placeholder='Search by name...' value={query} onChange={handleSearchChange} />
        <Pagination
          hasPrevious={!!data?.info.prev}
          hasNext={!!data?.info.next}
          onPrevious={handlePreviousPage}
          onNext={handleNextPage}
        />
      </div>
      <div className={styles.list}>
        {loading && <div>Loading…</div>}
        {error && <div>Error: {error.message}</div>}
        {(data?.results || []).map((c) => (
          <CharacterCard character={c} key={c.id} setShowModal={setShowModal} />
        ))}
      </div>
      {/* TODO: implement empty state */}
      {/* TODO: design loading component */}
    </>
  );
}
