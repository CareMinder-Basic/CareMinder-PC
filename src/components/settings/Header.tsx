import { Stack, Typography, styled } from "@mui/material";

export default function Header() {
  return (
    <Container>
      <Title variant="h1">careminder</Title>
    </Container>
  );
}

const Container = styled(Stack)({
  alignItems: "center",
});

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  textTransform: "uppercase",
  lineHeight: "102px",
  letterSpacing: "0.2em",
  fontSize: "42px",
  fontWeight: 700,
}));
