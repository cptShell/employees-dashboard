import { LegacyRef, useEffect, useRef } from 'react';

export const useOutsideClick = <T extends HTMLElement = HTMLElement>(
  callback: () => void
) => {
  const ref = useRef<T>();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);

  return ref as LegacyRef<T> | undefined;
};
