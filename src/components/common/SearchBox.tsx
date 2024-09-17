import { Box, Input, styled } from "@mui/material";
import { ReactComponent as Search } from "@/assets/search.svg";
import { ReactComponent as User } from "@/assets/user.svg";
import { useState } from "react";

interface SearchInputProps {
  isOpen?: boolean;
}

export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const showList = () => {
    setIsOpen(prev => !prev);
  };
  return (
    <SearchInputWrapper>
      <SearchInput
        placeholder="스태프 선택"
        disableUnderline={true}
        startAdornment={
          <ListBox>
            <User />
          </ListBox>
        }
        endAdornment={<Search style={{ cursor: "pointer" }} onClick={showList} />}
        isOpen={isOpen}
      />
      {isOpen ? (
        <StaffList>
          <Staff>김사랑 간호사</Staff>
          <Staff>김사랑 간호사</Staff>
          <Staff>김사랑 간호사</Staff>
          <Staff>김사랑 간호사</Staff>
          <Staff>김사랑 간호사</Staff>
          <Staff>김사랑 간호사</Staff>
          <Staff>김사랑 간호사</Staff>
          <Staff>김사랑 간호사</Staff>
          <Staff>김사랑 간호사</Staff>
          <Staff>김사랑 간호사</Staff>
          <Staff>김사랑 간호사</Staff>
        </StaffList>
      ) : null}
    </SearchInputWrapper>
  );
}

const SearchInputWrapper = styled(Box)({
  position: "absolute",
  right: "-20px",
});

const SearchInput = styled(Input, {
  shouldForwardProp: prop => prop !== "isOpen,",
})<SearchInputProps>(({ theme, isOpen }) => ({
  position: "relative",
  width: "373px",
  minHeight: "36px",
  border: "none",
  borderRadius: "20px",
  padding: isOpen ? "7.9px 15px 178px 15px" : "7.9px 15px",
  backgroundColor: theme.palette.background.paper,
}));

const ListBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginRight: "5px",
}));

const StaffList = styled(Box)(({ theme }) => ({
  "position": "absolute",
  "display": "flex",
  "flexDirection": "column",
  "gap": "10px",
  "bottom": "15px",
  "width": "320px",
  "height": "160px",
  "marginLeft": "42px",
  "overflowY": "auto",
  "&::-webkit-scrollbar": {
    width: "8px",
  },
  "&::-webkit-scrollbar-track": {
    background: theme.palette.background.default,
  },
  "&::-webkit-scrollbar-thumb": {
    background: theme.palette.primary.main,
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: theme.palette.primary.light,
  },
}));

const Staff = styled(Box)(({ theme }) => ({
  "cursor": "pointer",
  "width": "86px",
  "height": "20px",
  ":hover": {
    color: theme.palette.text.secondary,
  },
}));
