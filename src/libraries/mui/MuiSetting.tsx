import { PropsWithChildren } from "react";

import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";
import { typography, palette } from "@styles/index";

const theme = createTheme({
  typography,
  palette,
});

export default function MuiSetting({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
