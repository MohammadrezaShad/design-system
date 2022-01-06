import React, {FC, ReactNode} from 'react';

import defaultTheme, {DefaultTheme as Theme} from '../defaultTheme';
import ThemeProvider from '../ThemeProvider';

type ThemeInitializerProps = {
  children: ReactNode;
  theme?: Theme;
};

const ThemeInitializer: FC<ThemeInitializerProps> = ({
  children,
  theme = defaultTheme,
}) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default ThemeInitializer;
