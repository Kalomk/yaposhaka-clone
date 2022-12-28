import { useEffect, useRef, useState } from 'react';

export const useClickOutside = (initialIsVisible) => {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref = useRef<HTMLDivElement>(null);
  const handleClickOutside = (e: MouseEvent) => {
    const event = e as MouseEvent & {
      path: Node[];
    };
    if (ref.current && !event.path.includes(ref.current)) {
      setIsComponentVisible(false);
      console.log('1');
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', handleClickOutside, true);
    return () => {
      document.body.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return [ref, isComponentVisible, setIsComponentVisible];
};
