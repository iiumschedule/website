import { useColorMode } from '@docusaurus/theme-common';
import { createTheme, ThemeProvider } from "@mui/material";

// Make MUI components respects docusaurus's colour mode
export default function MUIThemeWrapper({ children }) {
  const darkTheme = createTheme({ palette: { mode: useColorMode().colorMode } });

  return (
    <ThemeProvider theme={darkTheme}>
      {children}
    </ThemeProvider>
  );
};