import React from 'react';
import { Character } from '../api/client.types';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <div>
      <img src={character.image} alt={character.name} />
      <div>
        <h3>{character.name}</h3>
      </div>
    </div>
  );
}
