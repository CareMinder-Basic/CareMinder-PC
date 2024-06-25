import UserHeader from "./UserHeader";

import { ReactComponent as Logo } from "@assets/full-logo.svg";

import { userState } from "@libraries/recoil";
import { Container, styled } from "@mui/material";
import { CMColors } from "@styles/colors";
import { useRecoilValue } from "recoil";

export default function Header() {
  const user = useRecoilValue(userState);

  const renderHeader = () => {
    switch (user?.type) {
      case "main":
      case "staff":
        return <UserHeader />;
      case "admin":
      default:
        return null;
    }
  };

  return (
    <Layout>
      <Logo />
      {renderHeader()}
    </Layout>
  );
}

const Layout = styled(Container)({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "64px",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  padding: "14px 28px",

  backgroundColor: CMColors.primary.a60,
});
