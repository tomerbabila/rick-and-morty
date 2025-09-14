// According to https://rickandmortyapi.com/documentation/#info-and-pagination
export interface PageInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface Page {
  info: PageInfo;
  results: Character[];
}

// According to https://rickandmortyapi.com/documentation/#character-schema
export interface Character {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  image: string;
  episode: string[];
  origin: { name: string; url: string };
}
