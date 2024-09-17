import { FormControl, MenuItem, Select, styled } from "@mui/material";
import { ExpandMore as ArrowDropDownIcon, BorderRight } from "@mui/icons-material";
import { FC } from "react";

export type CComboBoxProps<T> = {
  placeholder: string;
  options: Array<string>;
  value: string;
  onChange: (event: any) => void;
};

export const CComboBox: FC<CComboBoxProps<{ label: string; id: number }>> = ({
  placeholder,
  options,
  value,
  onChange,
}) => {
  return (
    <StyledFormControl fullWidth>
      <StyledSelect
        value={value}
        onChange={onChange}
        displayEmpty
        renderValue={(v: any) => <StyledPlaceholder>{v ? v : placeholder}</StyledPlaceholder>}
        IconComponent={ArrowDropDownIcon}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  );
};

const StyledFormControl = styled(FormControl)({
  width: "100%",
  height: "100%",
});

const StyledSelect = styled(Select)(({ theme }) => ({
  "width": "100%",
  "height": "100%", // 부모의 height 상속

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.divider, // 아웃라인 색상
    borderRadius: "6px",
  },

  "& .MuiSelect-icon": {
    right: "16px", // 아이콘의 위치를 오른쪽으로 조정
    top: "50%", // 아이콘의 위치를 수직 중앙으로 조정
    transform: "translateY(-50%)", // 아이콘의 수직 중앙 정렬을 보정
  },
}));

const StyledPlaceholder = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.primary.dark,
  fontWeight: "400px",
  fontSize: "14px",
  lineHeight: "20px",
  padding: "16px 8px",
}));

/* 
EX)
<div style={{ width: "224px", height: "36px" }}> // 상위 요소에서 width와 hegith 를 정해주세요
        <CComboBox placeholder="구도" options={options} />
</div>
\*/
