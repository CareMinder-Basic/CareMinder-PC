import { Box, Stack, Typography, styled } from "@mui/material";
import { AdminTable } from "@components/admin";

import CButton from "@components/common/atom/C-Button";

import PaginationComponent from "@components/common/pagination";
import AdminNoticeWriteForm from "@components/admin/adminNotice/adminNoticeWriteForm";

const AdminNoticeWritePage = () => {
  return (
    <Container>
      <div>
        <Title variant="h1">공지</Title>
        <AdminInoutSubTitleContainer>
          <AdminInoutSubTitleLeftContainer></AdminInoutSubTitleLeftContainer>
          <AdminInoutSubTitleRightContainer>
            <ButtonLayout width={"148px"}>
              <CButton buttonType={"primarySpaure"}>공지 작성</CButton>
            </ButtonLayout>
          </AdminInoutSubTitleRightContainer>
        </AdminInoutSubTitleContainer>
      </div>
      <TableLayout>
        <AdminNoticeListLayout>
          <AdminTable />
        </AdminNoticeListLayout>
        <AdminNoticeWriteForm />
      </TableLayout>
      <FooterLayout>
        <PaginationComponent totalPage={5} />
      </FooterLayout>
    </Container>
  );
};

export default AdminNoticeWritePage;

/** styles */

const Container = styled(Stack)({
  height: "100%",
});

const AdminInoutSubTitleContainer = styled(Box)({
  marginTop: "17.66px",
  display: "flex",
  justifyContent: "space-between",
});

const AdminNoticeListLayout = styled(Box)({
  width: "50%",
});

const AdminInoutSubTitleLeftContainer = styled(Box)({
  display: "flex",
  width: "50%",
  gap: "20px",
  alignItems: "center",
});
const AdminInoutSubTitleRightContainer = styled(Box)({
  display: "flex",
  width: "50%",
  alignItems: "center",
  gap: "15.66px",

  justifyContent: "end",
});
const ButtonLayout = styled(Box)(width => ({
  width: `${width}`,
}));
const ButtonListLayout = styled(Box)({
  display: "flex",
  gap: "10px",
});
const TableLayout = styled(Box)({
  marginTop: "40px",
  display: "flex",
  gap: "24px",
});

const FooterLayout = styled(Box)({
  paddingTop: "61.27px",
  // paddingBottom: "48.73px",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.dark,
  textTransform: "uppercase",
  lineHeight: "24px",
  letterSpacing: "-3%",
}));
