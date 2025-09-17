import React from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant; // i.e. primary, secondary, ghost
  disabled?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function Button({ children, variant = 'primary', disabled = false, className, onClick }: ButtonProps) {
  return (
    <button disabled={disabled} className={`${styles.button} ${styles[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
