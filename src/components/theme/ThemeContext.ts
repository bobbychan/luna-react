import React from 'react';
import type { DataTheme } from '../../utils/system';

export interface IThemeContext {
  theme: DataTheme;
  setTheme: (theme: DataTheme) => void;
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: 'light',
  setTheme: () => {},
});
