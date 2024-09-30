import { CComboBox } from "@components/common/atom/C-ComboBox";
import { NewStaff, NewStaffField } from "@models/staff";
import { FormControl, FormHelperText, InputLabel, TextField } from "@mui/material";
import { Controller, UseFormReturn } from "react-hook-form";

type InputFieldProps = { form: UseFormReturn<NewStaff>; field: NewStaffField };

export default function NewStaffInputField({ field, form }: InputFieldProps) {
  const { name, label, placeholder } = field;

  const {
    control,
    formState: { errors },
  } = form;

  return (
    <FormControl key={name} error={Boolean(errors[name])} sx={{ gap: "3px" }}>
      <InputLabel htmlFor={name} required={name !== "email"}>
        {label}
      </InputLabel>
      <Controller
        name={name}
        control={control}
        rules={validationRules[name]}
        render={({ field }) => (
          <>
            {field.name === "occupation" ? (
              <div style={{ height: "56px" }}>
                <CComboBox
                  placeholder={"간호사"}
                  options={["간호사", "의사", "조무사", "직원"]}
                  value={""}
                  onChange={() => null}
                />
              </div>
            ) : (
              <TextField
                {...field}
                id={name}
                placeholder={placeholder}
                type={inputTypes[name] || "text"}
                error={Boolean(errors[name])}
              />
            )}
          </>
        )}
      />
      {errors[name] && <FormHelperText>{errors[name]?.message}</FormHelperText>}
    </FormControl>
  );
}

/** utils */

const validationRules = {
  name: { required: "이름을 입력해주세요." },
  occupation: { required: "이름을 입력해주세요." },
  username: { required: "아이디를 입력해주세요." },
  password: {
    required: "비밀번호를 입력해주세요.",
    minLength: { value: 8, message: "비밀번호는 최소 8자 이상이어야 합니다." },
  },
  phoneNumber: {
    required: "전화번호를 입력해주세요.",
    pattern: { value: /^\d{3}-\d{4}-\d{4}$/, message: "올바른 전화번호 형식을 입력해주세요." },
  },
  email: {
    pattern: {
      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      message: "올바른 이메일을 입력해주세요.",
    },
  },
};

const inputTypes: { [key in keyof NewStaff]: string } = {
  name: "text",
  occupation: "text",
  username: "text",
  password: "password",
  phoneNumber: "tel",
  email: "email",
};
