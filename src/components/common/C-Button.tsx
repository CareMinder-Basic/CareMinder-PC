import { FC } from "react";
import { Button, ButtonProps, colors, styled } from "@mui/material";

export type CustomButtonProps = {
  buttonType:
    | "primary"
    | "primarySpaure"
    | "primarySpaureWhite"
    | "login"
    | "primaryWhite"
    | "primarySpaureLong";
} & ButtonProps;

const CButton: FC<CustomButtonProps> = ({ children, buttonType, ...props }) => {
  return (
    <StyledButton buttonType={buttonType} {...props}>
      {children}
    </StyledButton>
  );
};

export default CButton;

/** styled */

const StyledButton = styled(Button)<CustomButtonProps>(({ buttonType, theme }) => ({
  ...(buttonType === "primary" && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: "100px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "700",
  }),
  ...(buttonType === "primaryWhite" && {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.dark,
    borderRadius: "100px",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: "700",
    border: "1px solid #ECECEC",
  }),
  ...(buttonType === "primarySpaure" && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }),
  ...(buttonType === "primarySpaureLong" && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: "338px",
  }),
  ...(buttonType === "primarySpaureWhite" && {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
  }),
  ...(buttonType === "login" && {
    "backgroundImage": "linear-gradient(#5D6DBE,#607AFF)",
    "color": theme.palette.primary.contrastText,
    "border": `1px solid ${theme.palette.primary.main}`,
    "borderRadius": "141.95px",
    "fontSize": "28px",
    "lineHeight": "42px",
    "fontWeight": "700",
    "width": "329.33px",
    "height": "70.98px",
    "&:disabled": {
      backgroundImage: "none",
      backgroundColor: theme.palette.action.disabled,
      color: theme.palette.primary.contrastText,
      border: "none",
    },
  }),
}));
