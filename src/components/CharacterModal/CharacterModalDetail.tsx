import React from 'react';

interface CharacterModalDetailProps {
  title: string;
  value: string | number | undefined;
}

export default function CharacterModalDetail({ title, value }: CharacterModalDetailProps) {
  return (
    <p>
      <strong>{title}:</strong> <span style={{ color: 'var(--color-text-secondary)' }}>{value}</span>
    </p>
  );
}
