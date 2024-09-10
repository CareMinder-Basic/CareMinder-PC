import Sidebar from "./sidebar";
import Header from "./header";

import { Box, Stack, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { userState } from "@libraries/recoil";
import { useNavigate } from "react-router";
import { useRecoilValue } from "recoil";
import RoutePath from "@routes/routePath";
import { useCallbackOnce } from "@toss/react";
import InnerContainer from "./inner/InnerContainer";

export default function AuthenticatedLayout() {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const [isChecking, setIsChecking] = useState(true);

  const navigateSignin = useCallbackOnce(() => {
    console.error("로그인이 필요한 서비스입니다.");
    navigate(RoutePath.Signin);
  }, []);

  useEffect(() => {
    if (user) {
      setIsChecking(false);
    } else {
      navigateSignin();
    }
  }, [user, navigate, navigateSignin]);

  if (isChecking) {
    return null;
  }

  return (
    <Container>
      <Header />
      <Body>
        <Sidebar />
        <OuterContainer>
          <InnerContainer />
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

// const InnerContainer = styled(Stack)(({ theme }) => ({
//   margin: "30px",
//   padding: "30px",
//   borderRadius: "24px",
//   backgroundColor: theme.palette.background.paper,
// }));
