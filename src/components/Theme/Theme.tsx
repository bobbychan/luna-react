import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { defaultTheme } from '../../global/constants';
import type { DataTheme, IComponentBaseProps } from '../../global/types';
import { ThemeContext } from './ThemeContext';

export const getThemeFromClosestAncestor = (
  ref: React.RefObject<HTMLElement>,
) => {
  if (!ref.current) return;
  const matches = ref.current.closest('[data-theme]');
  if (matches) return matches.getAttribute('data-theme');
};

export type ThemeProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onChange'
> &
  IComponentBaseProps & {
    onChange?: (theme: DataTheme) => void;
  };

const Theme = React.forwardRef<HTMLDivElement, ThemeProps>(
  ({ children, dataTheme, onChange, className, ...props }, ref) => {
    const themeRef = useRef<HTMLDivElement>(
      (ref as MutableRefObject<HTMLDivElement>)?.current,
    );

    const closestAncestorTheme = getThemeFromClosestAncestor(themeRef);
    const [theme, setTheme] = useState<DataTheme>(
      dataTheme || closestAncestorTheme || defaultTheme,
    );

    const handleThemeChange = useCallback(
      (theme: DataTheme) => {
        // Fire custom onChange, if provided. ie, user provided function to store theme in session/local storage
        onChange && onChange(theme);
        // Update state/context
        setTheme(theme);
      },
      [onChange],
    );

    // Properly handle changes to theme prop on Theme component
    useEffect(() => {
      if (dataTheme !== theme) {
        dataTheme && handleThemeChange(dataTheme);
      }
    }, [dataTheme, handleThemeChange, theme]);

    return (
      <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange }}>
        <div {...props} data-theme={theme} className={className} ref={themeRef}>
          {children}
        </div>
      </ThemeContext.Provider>
    );
  },
);

Theme.displayName = 'Theme';

export default Theme;
