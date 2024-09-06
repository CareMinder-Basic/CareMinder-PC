import { Autocomplete, AutocompleteProps, styled, TextField } from "@mui/material";
import { ExpandMore as ArrowDropDownIcon } from "@mui/icons-material";
import { FC } from "react";

export type CComboBoxProps<T> = {
  placeholder: string;
} & Omit<
  AutocompleteProps<T, boolean | undefined, boolean | undefined, boolean | undefined>,
  "renderInput"
>;

export const CComboBox: FC<CComboBoxProps<{ label: string; id: number }>> = ({
  placeholder,
  options,
  value,
  onChange,
  ...props
}) => {
  return (
    <StyledAutoComplete
      {...props}
      disabledPortal
      options={options}
      value={value}
      onChange={onChange}
      popupIcon={<ArrowDropDownIcon />}
      renderInput={(params: any) => (
        <StyledTextField
          {...params}
          placeholder={placeholder}
          InputProps={{
            ...params.InputProps,
            inputProps: {
              ...params.inputProps,
            },
          }}
        />
      )}
    />
  );
};

const StyledAutoComplete = styled(Autocomplete)({
  width: "100%",
  height: "100%",
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  "width": "100%",
  "height": "100%", // 부모의 height 상속
  "& .MuiInputBase-root": {
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    border: `1px solid ${theme.palette.divider}`,
    paddingLeft: "16px",
  },
  "& .MuiInputBase-input": {
    color: "black",
  },

  "& input::placeholder": {
    color: theme.palette.primary.dark,
  },
}));

/* 
EX)
<div style={{ width: "224px", height: "36px" }}> // 상위 요소에서 width와 hegith 를 정해주세요
        <CComboBox placeholder="구도" options={options} />
</div>
\*/
