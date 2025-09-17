import React from 'react';
import styles from './EmptyState.module.css';
import { Icon } from 'components/ui';

interface EmptyStateProps {
  message?: string;
}

export default function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className={styles.container}>
      <Icon name='EmptyState' className={styles.image} />
      <h3>{message}</h3>
    </div>
  );
}
