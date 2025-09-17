import React, { useEffect, useRef, useState } from 'react';
import { SketchPicker, ColorResult } from 'react-color';
import styles from './ColorPicker.module.css';
import { useFavorites } from 'state/FavoritesContext';
import { Button } from 'components/ui';

export default function ColorPicker() {
  const [open, setOpen] = useState(false);
  const { color, setColor } = useFavorites();
  const pickerRef = useRef<HTMLDivElement>(null);

  const handleChange = (newColor: ColorResult) => setColor(newColor.hex);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [open]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} ref={pickerRef}>
      <Button variant='secondary' onClick={() => setOpen(!open)}>
        Change Color
      </Button>

      {open && (
        <div className={styles.popover}>
          <SketchPicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
}
