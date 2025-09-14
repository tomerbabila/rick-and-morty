import { fetchCharacters } from 'api/client';
import { Page } from 'api/client.types';
import { useEffect, useState } from 'react';
import { useDebounce } from './useDebounce';

export function useCharacters(query: string, page: number) {
  const [data, setData] = useState<Page | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const debounced = useDebounce(query, 300);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchCharacters({ page, name: debounced || undefined })
      .then((data) => {
        setData(data);
      })
      .catch((error: Error) => {
        setError(error);
        console.error('Error fetching characters:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [page, debounced]);

  return { data, loading, error };
}
