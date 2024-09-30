import { Box, styled } from "@mui/system";
import PaginationComponent from "@components/common/pagination";
import { Typography } from "@mui/material";
import TabletManagementTable from "@components/settings/TabletManagementTable";

//태블릿 병상 관리

export const TabletManagement = () => {
  return (
    <>
      <BodyTitleContainer>
        <div>
          <Title variant="h1">태블릿 병상 관리</Title>
        </div>
      </BodyTitleContainer>
      <TabletManagementTable />
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
  justifyContent: "center",
  alignItems: "center",
  margin: "60px 0 40px 0",
});

const PaginationContainer = styled(Box)({
  marginTop: "60px",
});

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  textTransform: "uppercase",
  lineHeight: "24px",
  letterSpacing: "-3%",
}));
