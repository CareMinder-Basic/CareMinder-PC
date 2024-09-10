import SearchBox from "@components/common/SearchBox";
import SignOutButton from "./SignOutButton";
import { Box, styled, Typography } from "@mui/material";

export default function UserHeader() {
  return (
    <>
      <Typography>
        <HeaderContainer>
          <SearchBoxWrapper>
            <SearchBox />
          </SearchBoxWrapper>
          <SignOutButton />
        </HeaderContainer>
      </Typography>
    </>
  );
}

const HeaderContainer = styled(Box)({
  display: "flex",
  alignItems: "flex-start",
  gap: "20px",
});

const SearchBoxWrapper = styled(Box)({
  position: "relative",
  height: "36px",
});
