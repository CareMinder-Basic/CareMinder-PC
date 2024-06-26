import { PropsWithChildren } from "react";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { typography, palette, components } from "@styles/index";

const theme = createTheme({
  typography,
  palette,
  components,
});

export default function MuiSetting({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
