import React from 'react';
import styles from './Pagination.module.css';
import { Icon } from 'ui';

interface PaginationProps {
  hasPrevious: boolean;
  hasNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Pagination({ hasNext, hasPrevious, onNext, onPrevious }: PaginationProps) {
  return (
    <div className={styles.container}>
      <button disabled={!hasPrevious} onClick={onPrevious}>
        <Icon name='ChevronLeft' />
      </button>
      <button disabled={!hasNext} onClick={onNext}>
        <Icon name='ChevronRight' />
      </button>
    </div>
  );
}
