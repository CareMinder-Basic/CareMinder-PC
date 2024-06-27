import type { AdminUserField, NewAdminUser } from "./CreateAdminModal";

import { FormControl, FormHelperText, InputLabel, TextField } from "@mui/material";
import { validateBusinessNumber } from "@utils/signin";
import { Controller, UseFormReturn } from "react-hook-form";

type InputFieldProps = { form: UseFormReturn<NewAdminUser>; field: AdminUserField };

export default function InputField({ field, form }: InputFieldProps) {
  const { name, label, placeholder } = field;

  const {
    control,
    formState: { errors },
  } = form;

  return (
    <FormControl key={name} error={Boolean(errors[name])} sx={{ gap: "3px" }}>
      <InputLabel htmlFor={name} required>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        rules={validationRules[name]}
        render={({ field }) => (
          <TextField
            {...field}
            id={name}
            placeholder={placeholder}
            type={inputTypes[name] || "text"}
            error={Boolean(errors[name])}
          />
        )}
      />
      {errors[name] && <FormHelperText>{errors[name]?.message}</FormHelperText>}
    </FormControl>
  );
}

/** utils */

const validationRules = {
  name: { required: "이름을 입력해주세요." },
  hospitalName: { required: "병원명을 입력해주세요." },
  hospitalAddress: { required: "병원 주소를 입력해주세요." },
  registrationNumber: {
    required: "사업자등록번호를 입력해주세요.",
    validate: (value: string) =>
      validateBusinessNumber(value) || "올바른 사업자등록번호를 입력해주세요.",
  },
  username: { required: "아이디를 입력해주세요." },
  password: {
    required: "비밀번호를 입력해주세요.",
    minLength: { value: 8, message: "비밀번호는 최소 8자 이상이어야 합니다." },
  },
  confirmPassword: {
    required: "비밀번호를 재입력해주세요.",
    validate: (value: string, { password }: NewAdminUser) =>
      value === password || "비밀번호가 일치하지 않습니다.",
  },
  phoneNumber: {
    required: "전화번호를 입력해주세요.",
    pattern: { value: /^\d{3}-\d{4}-\d{4}$/, message: "올바른 전화번호 형식을 입력해주세요." },
  },
  email: {
    required: "이메일을 입력해주세요.",
    pattern: {
      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: "올바른 이메일을 입력해주세요.",
    },
  },
};

const inputTypes: { [key in keyof NewAdminUser]: string } = {
  name: "text",
  hospitalName: "text",
  hospitalAddress: "text",
  registrationNumber: "text",
  username: "text",
  password: "password",
  confirmPassword: "password",
  phoneNumber: "tel",
  email: "email",
};
