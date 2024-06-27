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
            backgroundColor: palette.primary.light,
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        fontWeight: 600,
        padding: "6px 16px",
        borderRadius: "6px",
        fontSize: "14px",
        lineHeight: "20px",
        letterSpacing: "-0.03em",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: palette.primary.dark,
        position: "relative",
        fontWeight: 600,
        transform: "none",
        fontSize: "14px",
      },
    },
  },
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        "fontSize": "22px",
        "borderRadius": "12px",
        "&.Mui-disabled": {
          ".MuiOutlinedInput-notchedOutline": {
            color: palette.text.primary,
            borderColor: palette.action.disabled,
          },
          "backgroundColor": palette.background.default,
        },
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        textDecoration: "none",
        color: palette.text.primary,
        opacity: 0.6,
      },
    },
  },
  MuiFormControlLabel: {
    styleOverrides: {
      root: { margin: 0, marginTop: "24px", display: "flex", justifyContent: "center", gap: "8px" },
    },
  },
  MuiCheckbox: {
    defaultProps: {
      disableRipple: true,
      size: "large",
    },
    styleOverrides: {
      root: { padding: 0, borderRadius: "4px" },
    },
  },
};

export default components;
