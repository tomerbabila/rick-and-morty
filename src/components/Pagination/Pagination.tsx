import React from 'react';
import styles from './Pagination.module.css';

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
        Previous
      </button>
      <button disabled={!hasNext} onClick={onNext}>
        Next
      </button>
    </div>
  );
}
