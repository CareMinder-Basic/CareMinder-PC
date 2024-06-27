import AdminSidebar from "./AdminSidebar";
import UserSidebar from "./UserSidebar";

import { userState } from "@libraries/recoil";
import { UserType } from "@models/user";
import { Stack, styled } from "@mui/material";
import { SwitchCase } from "@toss/react";
import { useRecoilValue } from "recoil";

export default function Sidebar() {
  const user = useRecoilValue(userState);

  return (
    <Layout>
      <SwitchCase
        value={user?.type as UserType}
        caseBy={{
          main: <UserSidebar />,
          staff: <UserSidebar />,
          admin: <AdminSidebar />,
        }}
        defaultComponent={null}
      />
    </Layout>
  );
}

/** styles */

const Layout = styled(Stack)(({ theme }) => ({
  position: "fixed",
  left: 0,
  top: "64px",

  width: "72px",
  minHeight: "max-content",
  height: "calc(100vh - 64px)",
  overflowY: "auto",

  alignItems: "center",
  gap: "14px",
  padding: "16px 0",

  backgroundColor: theme.palette.primary.main,
}));
