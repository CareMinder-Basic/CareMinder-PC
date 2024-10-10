import { Box, Input, styled } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { ListBoxProps, SearchInputProps } from "@models/search";
import { ReactComponent as Search } from "@/assets/serachIcons/search.svg";

type CSearchBoxProps = {
  value: string;
  onChange: () => void;
  placeholder: string;
  borderColor?: string;
};

const CSearchBox: FC<CSearchBoxProps> = ({ value, onChange, placeholder, borderColor }) => {
  return (
    <SearchInputWrapper>
      <SearchInput
        type="search"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disableUnderline={true}
        borderColor={borderColor}
        endAdornment={<Search style={{ cursor: "pointer" }} />}
      />
    </SearchInputWrapper>
  );
};

const SearchInputWrapper = styled(Box)({
  width: "100%",
});

const SearchInput = styled(Input, {
  shouldForwardProp: prop => prop !== "isOpen",
})<CSearchBoxProps>(({ theme, borderColor }) => ({
  width: "100%",
  maxHeight: "36px",
  borderRadius: "20px",
  padding: "8px 16px",
  border: `1px solid ${borderColor ? borderColor : "theme.palette.divider"}`,
  transition: "padding 0.3s ease-in-out",
  backgroundColor: theme.palette.background.paper,
}));

export default CSearchBox;
