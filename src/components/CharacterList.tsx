import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api/client';
import { Page } from '../api/client.types';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [data, setData] = useState<Page | null>(null);

  useEffect(() => {
    fetchCharacters()
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, []);

  return (
    <div>
      {(data?.results || []).map((c) => (
        <CharacterCard character={c} key={c.id} />
      ))}
    </div>
  );
}
