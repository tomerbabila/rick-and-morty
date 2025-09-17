import React from 'react';
import styles from './Loader.module.css';
import { Icon } from 'components/ui';

export default function Loader() {
  return (
    <div className={styles.container}>
      <Icon name='Loader' className={styles.spinner} />
    </div>
  );
}
