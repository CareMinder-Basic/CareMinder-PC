import UserHeader from "./UserHeader";

import { ReactComponent as Logo } from "@assets/full-logo.svg";

import { userState } from "@libraries/recoil";
import { UserType } from "@models/user";
import { Box, styled } from "@mui/material";
import { SwitchCase } from "@toss/react";
import { useRecoilValue } from "recoil";

export default function Header() {
  const user = useRecoilValue(userState);

  return (
    <Layout>
      <Logo />
      <SwitchCase
        value={user?.type as UserType}
        caseBy={{
          main: <UserHeader />,
          staff: <UserHeader />,
          admin: null,
        }}
      />
    </Layout>
  );
}

const Layout = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "64px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "14px 28px",

  backgroundColor: theme.palette.primary.main,
}));
