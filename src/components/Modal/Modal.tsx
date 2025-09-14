import React from 'react';
import styles from './Modal.module.css';
import { Character } from 'api/client.types';

interface ModalProps {
  character: Character | null;
  setShowModal: React.Dispatch<React.SetStateAction<Character | null>>;
}

export default function Modal({ character, setShowModal }: ModalProps) {
  console.log(character);
  return (
    <div className={styles.overlay} onClick={() => setShowModal(null)}>
      <div className={styles.modal}>{character?.name}</div>
    </div>
  );
}
