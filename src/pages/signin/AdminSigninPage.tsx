import {
  Thumbnail,
  CreateAdminButton,
  SigninHeader,
  SigninForm,
  UserTypeTag,
} from "@components/signin";
import { useSignin } from "@hooks/mutation";
import { SigninFormData } from "@models/signin";
import { Divider, Grid, Link, Stack, styled } from "@mui/material";
import RoutePath from "@routes/routePath";
import { useForm } from "react-hook-form";

export default function AdminSigninPage() {
  const form = useForm<SigninFormData>();
  const { mutate: signin } = useSignin();

  return (
    <Grid container>
      <Thumbnail isAdmin />
      <Container item xs>
        <Content>
          <SigninHeader />
          <UserTypeTag type="admin" />
          <SigninForm form={form} onSubmit={signin} />
          <CreateAdminButton />
        </Content>
        <Footer divider={<Divider orientation="vertical" />}>
          {/* Todo */}
          {/* <Link href="#" variant="h3">
            ID / PW 찾기
          </Link> */}
          <Link href={RoutePath.Signin} variant="h3">
            병동 계정 로그인
          </Link>
        </Footer>
      </Container>
    </Grid>
  );
}

/** styles */

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
