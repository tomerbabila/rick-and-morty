import React from 'react';
import styles from './Home.module.css';
import { CharacterList, FavoritesList } from 'components';
import { Icon } from 'ui';

export default function Home() {
  return (
    <div className={styles.home}>
      <Icon className={styles.logo} name='Logo' />
      <div className={styles.content}>
        <div className={styles.panel}>
          <CharacterList />
        </div>
        <div className={styles.panel}>
          <FavoritesList />
        </div>
      </div>
    </div>
  );
}
