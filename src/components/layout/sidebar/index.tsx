import AdminSidebar from "./AdminSidebar";
import UserSidebar from "./UserSidebar";

import { userState } from "@libraries/recoil";
import { Stack, styled } from "@mui/material";
import { useRecoilValue } from "recoil";

export default function Sidebar() {
  const user = useRecoilValue(userState);

  const renderSidebar = () => {
    switch (user?.type) {
      case "main":
      case "staff":
        return <UserSidebar />;
      case "admin":
        return <AdminSidebar />;
      default:
        return null;
    }
  };

  return <Layout>{renderSidebar()}</Layout>;
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
