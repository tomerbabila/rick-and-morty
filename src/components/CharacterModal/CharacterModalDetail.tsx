import React from 'react';

interface CharacterModalDetailProps {
  title: string;
  value: string | number | undefined;
}

export default function CharacterModalDetail({ title, value }: CharacterModalDetailProps) {
  return (
    <span>
      <strong>{title}:</strong> {value}
    </span>
  );
}
