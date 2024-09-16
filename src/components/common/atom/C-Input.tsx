import { TextField, styled, InputProps, TextFieldVariants } from "@mui/material";
import { FC, KeyboardEventHandler } from "react";

export type CustomInputProps = {
  variant: TextFieldVariants;
  placeholder: string;
  onChange: () => void;
  value: string;
  disabled: boolean;
  id: string;
};

const CInput: FC<CustomInputProps> = ({
  placeholder,
  onChange,
  value,
  disabled,
  variant,
  id,
  ...props
}) => {
  return (
    <StyledTextField
      id={id}
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      variant={variant}
      {...props}
    />
  );
};

export default CInput;

/** styled */

const StyledTextField = styled(TextField)({
  "width": "100%",
  "height": "100%",
  "borderRadius": "6px",
  "padding": "6px,16px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    height: "100%",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "6px",
  },
  "& .MuiInputBase-input": {
    color: "black",
  },
});

/* 
EX)
<form> // 상위 요소에서 width와 hegith 를 정해주세요
  <label htmlFor=""></label>
  <CInput 
  />
</form> */
