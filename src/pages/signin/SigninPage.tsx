import { Thumbnail, SigninHeader, SigninForm, UserTypeTag } from "@components/signin";
import { useSignin } from "@hooks/mutation";
import { SigninFormData } from "@models/signin";
import { Divider, Grid, Link, Stack, styled } from "@mui/material";
import RoutePath from "@routes/routePath";
import { useForm } from "react-hook-form";

export default function SigninPage() {
  const form = useForm<SigninFormData>();
  const loginMutation = useSignin();

  return (
    <Grid container>
      <Thumbnail />
      <Container item xs>
        <Content>
          <SigninHeader />
          <UserTypeTag type="main" />
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
