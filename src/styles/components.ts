import { Components, Theme } from "@mui/material";
import palette from "@styles/palette";

const components: Components<Omit<Theme, "components">> = {
  MuiButton: {
    defaultProps: {
      disableRipple: true,
      disableElevation: true,
    },
    variants: [
      {
        props: { variant: "text" },
        style: {
          color: palette.primary.light,
        },
      },
      {
        props: { variant: "outlined" },
        style: {
          borderColor: palette.primary.main,
        },
      },
      {
        props: { variant: "contained" },
        style: {
          "backgroundColor": palette.primary.main,
          "color": palette.primary.contrastText,
          "&:hover": {
            backgroundColor: palette.primary.main,
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        fontWeight: 700,
      },
    },
  },
};

export default components;