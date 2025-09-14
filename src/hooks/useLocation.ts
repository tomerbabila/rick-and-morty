import { fetchLocationByUrl } from 'api/client';
import { Location } from 'api/client.types';
import { useEffect, useState } from 'react';

export function useLocation(url: string) {
  const [data, setData] = useState<Location | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchLocationByUrl(url)
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
  }, [url]);

  return { data, loading, error };
}
