import Sidebar from "./sidebar";
import Header from "./header";

import { Box, styled } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  return (
    <Container>
      <Header />
      <Body>
        <Sidebar />
        <MainContainer>
          <Outlet />
        </MainContainer>
      </Body>
    </Container>
  );
}

/** styles */

const Container = styled(Box)({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const Body = styled(Box)(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
}));

const MainContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  margin: "30px",
  marginTop: "94px",
  padding: "30px",
  borderRadius: "24px",
  backgroundColor: theme.palette.background.paper,
}));
