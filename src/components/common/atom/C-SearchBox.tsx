import { Box, Input, styled } from "@mui/material";
import { FC, useEffect, useRef, useState } from "react";
import { useDebounce } from "../SearachBox/const/useDebounce";
import { ListBoxProps, SearchInputProps } from "@models/search";
import { ReactComponent as Search } from "@/assets/serachIcons/search.svg";

type CSearchBoxProps = {
  value: string;
  onChange: () => void;
  plaeholder: string;
};

const CSearchBox: FC<CSearchBoxProps> = ({ value, onChange, plaeholder }) => {
  return (
    <SearchInputWrapper>
      <SearchInput
        type="search"
        value={value}
        onChange={onChange}
        placeholder={plaeholder}
        disableUnderline={true}
        endAdornment={<Search style={{ cursor: "pointer" }} />}
      />
    </SearchInputWrapper>
  );
};

const SearchInputWrapper = styled(Box)({});

const SearchInput = styled(Input, {
  shouldForwardProp: prop => prop !== "isOpen",
})<SearchInputProps>(({ theme }) => ({
  width: "373px",
  maxHeight: "36px",
  borderRadius: "20px",
  padding: "8px 16px",
  border: `1px solid ${theme.palette.divider}`,
  transition: "padding 0.3s ease-in-out",
  backgroundColor: theme.palette.background.paper,
}));

export default CSearchBox;
