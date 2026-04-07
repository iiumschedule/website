import { useColorMode } from '@docusaurus/theme-common';
import { createTheme, ThemeProvider } from "@mui/material";

// Make MUI components respects docusaurus's colour mode
export default function MUIThemeWrapper({ children }) {
  let colorMode = 'light';

  try {
    colorMode = useColorMode().colorMode;
  } catch (e) {
    // When hook failed (likely during SSG). Use default light theme.
    colorMode = 'light';
  }

  const darkTheme = createTheme({ palette: { mode: colorMode } });

  return (
    <ThemeProvider theme={darkTheme}>
      {children}
    </ThemeProvider>
  );
};