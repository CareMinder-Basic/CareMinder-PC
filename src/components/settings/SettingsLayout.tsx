import SigninForm from "@components/signin/SigninForm";
import { useSignin } from "@hooks/mutation";
import { SigninFormData } from "@models/signin";
import { Grid, Divider, styled, Stack, Link } from "@mui/material";
import { useForm } from "react-hook-form";
import { Close } from "@mui/icons-material";
import { SettingsHeader } from ".";

type SettingsLayoutProps = {
  onClose: (event?: object, reason?: "backdropClick" | "escapeKeyDown") => void;
};

export default function SettingsLayout({ onClose }: SettingsLayoutProps) {
  const form = useForm<SigninFormData>();
  const { mutate: signin } = useSignin();

  return (
    <Container item xs>
      <Content>
        <CloseButton onClick={onClose} />
        <SettingsHeader />
        <SigninForm form={form} onSubmit={signin} />
      </Content>
      <Footer divider={<Divider orientation="vertical" />}>
        <Link href="#" variant="h3">
          ID / PW 찾기
        </Link>
      </Footer>
    </Container>
  );
}

const Container = styled(Grid)({
  position: "relative",
  minWidth: "fit-content",

  padding: "24px",
  paddingBottom: "50px",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const CloseButton = styled(Close)({
  position: "absolute",
  top: "0",
  right: "0",
  cursor: "pointer",
});

const Content = styled(Stack)({
  margin: "30px 0 30px 0",
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