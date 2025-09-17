import React from 'react';
import styles from './Pagination.module.css';
import { Button, Icon } from 'components/ui';

interface PaginationProps {
  hasPrevious: boolean;
  hasNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Pagination({ hasNext, hasPrevious, onNext, onPrevious }: PaginationProps) {
  return (
    <div className={styles.container}>
      <Button disabled={!hasPrevious} onClick={onPrevious}>
        <Icon name='ChevronLeft' />
      </Button>
      <Button disabled={!hasNext} onClick={onNext}>
        <Icon name='ChevronRight' />
      </Button>
    </div>
  );
}
