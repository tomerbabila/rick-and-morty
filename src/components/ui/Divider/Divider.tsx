import styles from './Divider.module.css';

type DividerProps = {
  direction?: 'horizontal' | 'vertical';
  className?: string;
};

export default function Divider({ direction = 'horizontal' }: DividerProps) {
  return <div className={`${styles.divider} ${direction === 'vertical' ? styles.vertical : styles.horizontal}`} />;
}
