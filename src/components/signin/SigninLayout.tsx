import { SigninHeader } from "@components/signin";
import SigninForm from "@components/signin/SigninForm";
import UserTypeTag from "@components/signin/UserTypeTag";
import { useSignin } from "@hooks/mutation";
import { SigninFormData } from "@models/signin";
import { UserType } from "@models/user";
import { Grid, Divider, styled, Stack } from "@mui/material";
import { ReactElement } from "react";
import { useForm } from "react-hook-form";

type SigninLayoutProps = {
  type: UserType;
  footer?: ReactElement;
  options?: ReactElement;
};
export default function SigninLayout({ type, footer, options }: SigninLayoutProps) {
  const form = useForm<SigninFormData>();
  const { mutate: signin } = useSignin();

  return (
    <Container item xs>
      <Content>
        <SigninHeader />
        <UserTypeTag type={type} />
        <SigninForm form={form} onSubmit={signin} />
        {options}
      </Content>
      {footer && (
        <Footer divider={<Divider orientation="vertical" />}>
          {/* Todo */}
          {/* <Link href="#" variant="h3">
            ID / PW 찾기
          </Link> */}
          {footer}
        </Footer>
      )}
    </Container>
  );
}

/** styles */

const Container = styled(Grid)({
  minWidth: "fit-content",

  padding: "24px",
  paddingBottom: "50px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const Content = styled(Stack)({
  margin: "30px 0 60px 0",
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
