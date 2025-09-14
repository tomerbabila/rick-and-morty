import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../api/client';
import { Page } from '../api/client.types';

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
      {(data?.results || []).map((c) => {
        return <div key={c.id}>{c.name}</div>;
      })}
    </div>
  );
}
