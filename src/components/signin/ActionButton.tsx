import { ArrowForwardIos as ArrowForwardIosIcon } from "@mui/icons-material";
import { Button, ButtonProps } from "@mui/material";

export default function ActionButton({ sx, ...props }: ButtonProps) {
  return (
    <Button
      endIcon={<ArrowForwardIosIcon />}
      sx={{
        fontSize: "20px",
        color: theme => theme.palette.primary.main,
        marginTop: "40px",
        ...sx,
      }}
      {...props}
    />
  );
}
