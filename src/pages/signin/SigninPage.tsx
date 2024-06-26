import { Thumbnail, SigninHeader, SigninForm } from "@components/signin";
import { useSignin } from "@hooks/mutation";
import { SigninFormData } from "@models/signin";
import { Divider, Grid, Link, Stack, styled, Typography } from "@mui/material";
import RoutePath from "@routes/routePath";
import { useForm } from "react-hook-form";

export default function SigninPage() {
  const form = useForm<SigninFormData>();
  const loginMutation = useSignin();

  return (
    <Grid container>
      <Thumbnail isAdmin />
      <Container item xs>
        <Content>
          <SigninHeader />
          <UserType variant="h1">병동</UserType>
          <SigninForm form={form} onSubmit={loginMutation.mutate} />
        </Content>
        <Footer divider={<Divider orientation="vertical" />}>
          {/* Todo */}
          {/* <Link href="#" variant="h3">
            ID / PW 찾기
          </Link> */}
          <Link href={RoutePath.AdminSignin} variant="h3">
            어드민 계정 로그인
          </Link>
        </Footer>
      </Container>
    </Grid>
  );
}

const Container = styled(Grid)({
  minWidth: "720px",

  height: "100vh",

  padding: "24px",
  paddingBottom: "50px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const UserType = styled(Typography)(({ theme }) => ({
  marginTop: "60px",
  marginBottom: "30px",
  color: theme.palette.primary.main,
}));

const Content = styled(Stack)({
  flex: 1,

  alignItems: "center",
  justifyContent: "center",
});

const Footer = styled(Stack)({
  height: "24px",
  gap: "14px",

  flexDirection: "row",

  justifyContent: "center",
  alignItems: "center",
});
