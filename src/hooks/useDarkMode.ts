import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { ISSERVER, KEYS } from '@/constants/constants';

export const useDarkMode = (): [string, Dispatch<SetStateAction<string>>] => {
  const defaultColor = 'dark';
  const [theme, setTheme] = useState(defaultColor);
  if (!ISSERVER) {
    const storedTheme = window.localStorage.getItem(KEYS.COLOR);
    if (storedTheme) {
      if (theme !== storedTheme) {
        setTheme(storedTheme);
      }
    } else {
      window.localStorage.setItem(KEYS.COLOR, defaultColor);
    }
  }
  const colorTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);
  return [colorTheme, setTheme];
};
