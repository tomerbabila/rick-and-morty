import React from 'react';
import styles from './CharacterCard.module.css';
import { Character } from 'api/client.types';
import { Modal, Icon } from 'ui';
import CharacterModal from 'components/CharacterModal/CharacterModal';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const [showModal, setShowModal] = React.useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleFavClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log('Favorite clicked for', character.name);
  };

  return (
    <>
      <div className={styles.card} onClick={openModal}>
        <img className={styles.img} src={character.image} alt={character.name} />
        <h3 className={styles.name}>{character.name}</h3>
        <button className={styles.favIcon} onClick={handleFavClick}>
          <Icon name='Star' color='gold' />
        </button>
      </div>
      <Modal isOpen={showModal} onClose={closeModal} title={character.name}>
        <CharacterModal character={character} />
      </Modal>
    </>
  );
}
