import { SigninFormData } from "@models/signin";

import { Button, Stack, styled } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import TextField from "./TextField";

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
      <SigninButton variant="contained">login</SigninButton>
    </Container>
  );
}

/** styles */

const Container = styled(Stack)({
  alignItems: "center",
  width: "400px",
});

const SigninButton = styled(Button)({
  marginTop: "30px",

  width: "330px",
  height: "70px",

  padding: "14px 52px",

  borderRadius: "100px",
  fontSize: "28px",
});
