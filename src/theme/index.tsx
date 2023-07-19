import { useMemo, ReactNode } from 'react';
import { CssBaseline } from '@mui/material';
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
// Color Palettes
import { palette } from '@src/theme/palette';

interface ThemeProviderProps {
  children: ReactNode;
}

export const CustomTheme = ({ children }: ThemeProviderProps) => {
  const themeOptions = useMemo(
    () => ({
      palette,
    }),
    []
  );
  const theme = createTheme(themeOptions);
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
