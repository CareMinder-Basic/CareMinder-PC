import { Stack, Typography, styled } from "@mui/material";

export default function Header() {
  return (
    <Container>
      <Title variant="h1">careminder</Title>
      <Subtitle variant="h2">케어마인더에 오신 것을 환영합니다.</Subtitle>
    </Container>
  );
}

/** styles */

const Container = styled(Stack)({
  alignItems: "center",
});

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  textTransform: "uppercase",
  lineHeight: "102px",
  letterSpacing: "0.2em",
  fontSize: "52px",
  fontWeight: 700,
}));

const Subtitle = styled(Typography)({
  lineHeight: "34px",
  fontSize: "22px",
  fontWeight: 500,
});
