import { SigninFormData } from "@models/signin";

import { Button, styled } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import TextField from "./TextField";
import CButton from "@components/common/atom/C-Button";

type SigninFormProps = {
  form: UseFormReturn<SigninFormData>;
  onSubmit: (data: SigninFormData) => void;
};

export default function SigninForm({ form, onSubmit }: SigninFormProps) {
  const { handleSubmit } = form;

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <TextField label="ID" name="id" form={form} />
      <TextField label="PW" name="password" form={form} />
      <CButton buttonType="login" style={{ marginTop: "43.22px" }}>
        로그인
      </CButton>
    </Container>
  );
}

/** styles */

const Container = styled("form")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "400px",
});
