import { useContext, useEffect } from 'react';
import type { DataTheme } from '../../global/types';
import { ThemeContext } from './ThemeContext';

export const useTheme = (value?: DataTheme) => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (value && theme !== value) {
      setTheme(value);
    }
  }, [value]);

  return { theme, setTheme };
};
