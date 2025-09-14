import { fetchCharacters } from 'api/client';
import { Page } from 'api/client.types';
import { useEffect, useState } from 'react';

export function useCharacters(query: string, page?: number) {
  const [data, setData] = useState<Page | null>(null);
  // TODO: implement loading and error states
  // TODO: implement 404

  useEffect(() => {
    fetchCharacters({ page, name: query })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching characters:', error);
      });
  }, [page, query]);

  return { data };
}
