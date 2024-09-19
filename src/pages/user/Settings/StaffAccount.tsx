import { Box, styled } from "@mui/system";
import CButton from "@components/common/atom/C-Button";
import PaginationComponent from "@components/common/pagination";
import StaffAccountSettingsTable from "@components/settings/StaffAccountSettingsTable";
import { Typography } from "@mui/material";

// 스태프 계정 설정

export const StaffAccount = () => {
  return (
    <>
      <BodyTitleContainer>
        <div style={{ width: "290px" }}></div>
        <div>
          <Title variant="h1">스태프 계정 수정</Title>
        </div>
        <StaffButtonContainer>
          <CButton buttonType="primarySpaureWhite">스태프 계정 생성</CButton>
          <CButton buttonType="primarySpaureWhite">스태프 추가</CButton>
        </StaffButtonContainer>
      </BodyTitleContainer>
      <StaffAccountSettingsTable />
      <PaginationContainer>
        <div>
          <PaginationComponent totalPage={5} />
        </div>
      </PaginationContainer>
    </>
  );
};

const BodyTitleContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "28px 0",
});

const StaffButtonContainer = styled(Box)({
  display: "flex",
  gap: "20px",
  width: "300px",
});

const PaginationContainer = styled(Box)({
  marginTop: "32px",
});

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  textTransform: "uppercase",
  lineHeight: "24px",
  letterSpacing: "-3%",
}));
