import { Button, ButtonProps, styled } from "@mui/material";

type ModalActionButtonProps = {
  color?: "primary" | "secondary";
} & Omit<ButtonProps, "color">;

const ModalActionButton = styled(
  (props: ButtonProps) => <Button variant="contained" {...props} />,
  {
    shouldForwardProp: prop => prop !== "variant",
  },
)<ModalActionButtonProps>(({ color = "primary", theme }) => ({
  borderRadius: "100px",
  minWidth: "108px",
  padding: "6px 16px",
  height: "36px",
  fontSize: "16px",
  lineHeight: "24px",
  ...(color === "primary" && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  }),
  ...(color === "secondary" && {
    "color": theme.palette.text.primary,
    "backgroundColor": theme.palette.primary.contrastText,
    "borderColor": theme.palette.divider,
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  }),
}));

export default ModalActionButton;
