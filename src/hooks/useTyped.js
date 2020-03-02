import { useRef, useEffect } from 'react';
import Typed from 'typed.js';

export const useTyped = (ref, options) => {
  const instance = useRef(null);
  useEffect(() => {
    if (ref.current === null) return;
    instance.current = new Typed(ref.current, options);
    return () => instance.current.destroy();
  }, [ref]);
  return instance.current;
};
