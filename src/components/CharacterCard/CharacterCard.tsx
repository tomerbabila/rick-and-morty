import React from 'react';
import styles from './CharacterCard.module.css';
import { Character } from 'api/client.types';
import Modal from 'ui/Modal/Modal';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className={styles.card} onClick={openModal}>
        <img className={styles.img} src={character.image} alt={character.name} />
        <h3 className={styles.name}>{character.name}</h3>
      </div>
      <Modal isOpen={showModal} onClose={closeModal} title={character.name}>
        <div>{character.name}</div>
      </Modal>
    </>
  );
}
