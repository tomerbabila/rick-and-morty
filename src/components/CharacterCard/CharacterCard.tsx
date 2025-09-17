import React from 'react';
import styles from './CharacterCard.module.css';
import { Character } from 'api/client.types';
import { Modal, Icon, Button } from 'components/ui';
import CharacterModal from 'components/CharacterModal/CharacterModal';
import { useFavorites } from 'state/FavoritesContext';

interface CharacterCardProps {
  character: Character;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const [showModal, setShowModal] = React.useState(false);
  const { toggle, has } = useFavorites();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleFavClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggle(character);
  };

  return (
    <>
      <div className={styles.card} onClick={openModal}>
        <img className={styles.img} src={character.image} alt={character.name} />
        <h3 className={styles.name}>{character.name}</h3>
        <Button className={styles.favIcon} onClick={handleFavClick} variant='ghost'>
          <Icon name='Star' color={has(character.id) ? 'var(--color-gold)' : ''} />
        </Button>
      </div>
      <Modal isOpen={showModal} onClose={closeModal} title={character.name}>
        <CharacterModal character={character} />
      </Modal>
    </>
  );
}
