import SettingsModal from "@components/settings/SettingsModal";
import modalState from "@libraries/recoil/modal";
import { Box, Button, Stack, styled, Typography } from "@mui/material";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { StaffAccount } from "./StaffAccount";
import { TabletManagement } from "./TabletManagement";

export type TabButtonProps = {
  isActive?: boolean;
};

export default function SettingsPage() {
  // 로그인 되어있지 않은 상태에서 병동 설정 선택 시 로그인 모달 open
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);
  const [activeTab, setActiveTab] = useState<string>("스태프 계정 수정");

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "태블릿 컨텐츠 수정":
        return <div>태블릿 컨텐츠 수정</div>;
      case "스태프 계정 수정":
        return <StaffAccount />;
      case "태블릿 병상 관리":
        return <TabletManagement />;
      default:
        break;
    }
  };

  return (
    <>
      <SettingsModal open={isModalOpen} onClose={handleCloseModal} />
      <Container>
        <HeadContainer>
          <div>
            <Title variant="h1">병동 계정 설정</Title>
          </div>
          <TabContainer>
            <TabButton
              isActive={activeTab === "태블릿 컨텐츠 수정"}
              value={"태블릿 컨텐츠 수정"}
              onClick={() => handleTabClick("태블릿 컨텐츠 수정")}
            >
              태블릿 컨텐츠 수정
            </TabButton>
            <TabButton
              isActive={activeTab === "스태프 계정 수정"}
              value={"스태프 계정 수정"}
              onClick={() => handleTabClick("스태프 계정 수정")}
            >
              스태프 계정 수정
            </TabButton>
            <TabButton
              isActive={activeTab === "태블릿 병상 관리"}
              value={"태블릿 병상 관리"}
              onClick={() => handleTabClick("태블릿 병상 관리")}
            >
              태블릿 병상 관리
            </TabButton>
          </TabContainer>
          <div style={{ width: "131.37px" }}></div>
        </HeadContainer>
        <BodyContainer>{renderContent()}</BodyContainer>
      </Container>
    </>
  );
}

const Container = styled(Stack)({
  height: "100%",
  // maxHeight: "632.82px",
  padding: "31.6px 0",
});

const HeadContainer = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
});

const TabContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.secondary.light,
  width: "602px",
  height: "44px",
  borderRadius: "100px",
  padding: "4px",
}));

const BodyContainer = styled(Box)({
  marginBottom: "32px",
});

const TabButton = styled(Button, {
  shouldForwardProp: prop => prop !== "isActive",
})<TabButtonProps>(({ theme, isActive }) => ({
  "width": "33%",
  "backgroundColor": isActive ? theme.palette.primary.contrastText : theme.palette.secondary.light,
  "color": isActive ? theme.palette.primary.dark : theme.palette.text.disabled,
  "borderRadius": "100px",
  "&:hover": {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.primary.dark,
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  textTransform: "uppercase",
  lineHeight: "24px",
  letterSpacing: "-3%",
}));
