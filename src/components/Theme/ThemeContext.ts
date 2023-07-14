import React from 'react';
import type { DataTheme } from '../..//global/types';

export interface IThemeContext {
  theme: DataTheme;
  setTheme: (theme: DataTheme) => void;
}

export const ThemeContext = React.createContext<IThemeContext>({
  theme: 'light',
  setTheme: () => {},
});
