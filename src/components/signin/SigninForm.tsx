import { SigninFormData } from "@models/signin";
import { styled } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import TextField from "./TextField";
import CButton from "@components/common/atom/C-Button";

type SigninFormProps = {
  form: UseFormReturn<SigninFormData>;
  onSubmit: (data: SigninFormData) => void;
};

export default function SigninForm({ form, onSubmit }: SigninFormProps) {
  const { handleSubmit } = form;

  const handleFormSubmit = (data: SigninFormData) => {
    console.log(data);
    onSubmit(data);
  };

  return (
    <Container>
      <TextField label="ID" name="id" form={form} />
      <TextField label="PW" name="password" form={form} />
      <CButton
        buttonType="login"
        style={{ marginTop: "43.22px" }}
        onClick={handleSubmit(handleFormSubmit)}
      >
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
