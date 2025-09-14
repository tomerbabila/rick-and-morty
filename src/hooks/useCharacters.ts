import { fetchCharacters } from 'api/client';
import { Page } from 'api/client.types';
import { useEffect, useState } from 'react';

export function useCharacters(query: string, page?: number) {
  const [data, setData] = useState<Page | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  // TODO: implement 404

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchCharacters({ page, name: query })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
        console.error('Error fetching characters:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, query]);

  return { data, loading, error };
}
