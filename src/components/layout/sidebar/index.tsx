import AdminSidebar from "./AdminSidebar";
import MainUserSidebar from "./MainUserSidebar";
import StaffSidebar from "./StaffSidebar";

import { userState } from "@libraries/recoil";
import { Box, styled } from "@mui/material";
import { useRecoilValue } from "recoil";

export default function Sidebar() {
  const user = useRecoilValue(userState);

  const renderSidebar = () => {
    switch (user?.type) {
      case "main":
        return <MainUserSidebar />;
      case "staff":
        return <StaffSidebar />;
      case "admin":
        return <AdminSidebar />;
      default:
        return null;
    }
  };

  return <Layout>{renderSidebar()}</Layout>;
}

const Layout = styled(Box)(({ theme }) => ({
  width: "72px",
  minHeight: "max-content",

  paddingTop: "80px", // header
  paddingBottom: "16px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  backgroundColor: theme.palette.primary.main,
}));
