import Sidebar from "./sidebar";
import Header from "./header";

import { Box, Stack, styled } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  return (
    <Container>
      <Header />
      <Body>
        <Sidebar />
        <OuterContainer>
          <InnerContainer>
            <Outlet />
          </InnerContainer>
        </OuterContainer>
      </Body>
    </Container>
  );
}

/** styles */

const Container = styled(Stack)(({ theme }) => ({
  minHeight: "100vh",
  backgroundColor: theme.palette.primary.main,
}));

const Body = styled(Box)({
  display: "flex",
  minHeight: "100vh",
});

const OuterContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  marginTop: "64px", // header
  marginLeft: "72px", // sidebar
  backgroundColor: theme.palette.background.default,
}));

const InnerContainer = styled(Stack)(({ theme }) => ({
  margin: "30px",
  borderRadius: "24px",
  backgroundColor: theme.palette.background.paper,
}));
