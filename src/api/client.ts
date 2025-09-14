const BASE = 'https://rickandmortyapi.com/api';

export async function fetchCharacters(params: { page?: number; name?: string } = {}): Promise<any> {
  const url = new URL(`${BASE}/character`);
  if (params.page) url.searchParams.set('page', String(params.page));
  if (params.name) url.searchParams.set('name', params.name);

  const res = await fetch(url.toString());
  if (!res.ok) {
    if (res.status === 404) {
      return { info: { count: 0, pages: 0, next: null, prev: null }, results: [] };
    }
    throw new Error(`Failed to fetch characters (HTTP ${res.status})`);
  }
  return res.json();
}
