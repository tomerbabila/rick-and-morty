import React, { useState } from 'react';
import styles from './Home.module.css';
import { CharacterList, Modal } from '../../components';
import { Character } from 'api/client.types';

export default function Home() {
  const [character, setShowModal] = useState<Character | null>(null);
  return (
    <div className={styles.home}>
      <h1 className={styles.title}>Rick & Morty App</h1>
      <div className={styles.content}>
        <div className={styles.panel}>
          <CharacterList setShowModal={setShowModal} />
        </div>
        <div className={styles.panel}>
          {/* Favorites placeholder */}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae harum corrupti facilis reiciendis nulla ab
          ut iste maiores repellendus voluptatum est corporis doloremque, omnis, dignissimos fugiat esse delectus,
          facere neque.
        </div>
      </div>
      {!!character && <Modal character={character} setShowModal={setShowModal} />}
    </div>
  );
}
