import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import { Character } from 'api/client.types';

interface ModalProps {
  isOpen: boolean;
  character: Character | null;
  onClose: () => void;
}

export default function Modal({ isOpen, character, onClose }: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {character?.name}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
}
