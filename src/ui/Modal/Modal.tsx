import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';
import Icon from 'ui/Icon/Icon';
import Divider from 'ui/Divider/Divider';
import Button from 'ui/Button/Button';

interface ModalProps {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose, children, title }: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <Button onClick={onClose} variant='ghost'>
            <Icon name='Close' />
          </Button>
        </div>
        <Divider className='horizontal' />
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement
  );
}
