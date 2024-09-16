import { Box, Stack, SvgIcon, Typography, styled } from "@mui/material";
import { AdminTable } from "@components/admin";
import CSwitch from "@components/common/atom/C-Switch";
import CButton from "@components/common/atom/C-Button";
import { ReactComponent as ArrayIcon } from "@assets/array.svg";
import { CloseRounded } from "@mui/icons-material";

const AdminWardInoutManagementPage = () => {
  return (
    <Container>
      <div>
        <Title variant="h1">입퇴원 관리</Title>
        <AdminInoutSubTitleContainer>
          <AdminInoutSubTitleLeftContainer>
            <Subtitle variant="h2">내 구역 테블릿 리스트</Subtitle>
            <div>
              <CSwitch />
            </div>
            <SectionArrayLayout>
              <Arraytitle variant="h2">구역 정렬</Arraytitle>
              <SvgIcon component={ArrayIcon} inheritViewBox />
            </SectionArrayLayout>
          </AdminInoutSubTitleLeftContainer>
          <AdminInoutSubTitleRightContainer>
            <div>서치바</div>
            <ButtonLayout>
              <CButton buttonType={"primarySpaureWhite"}>퇴원 처리</CButton>
            </ButtonLayout>
          </AdminInoutSubTitleRightContainer>
        </AdminInoutSubTitleContainer>
      </div>
      <TableLayout>
        <AdminTable />
      </TableLayout>
      <FooterLayout>
        <div>페이지 네이션</div>
      </FooterLayout>
    </Container>
  );
};

export default AdminWardInoutManagementPage;

/** styles */

const Container = styled(Stack)({
  height: "100%",
  maxHeight: "957px",
});

const AdminInoutSubTitleContainer = styled(Box)({
  marginTop: "17.66px",
  display: "flex",
  justifyContent: "space-between",
});

const AdminInoutSubTitleLeftContainer = styled(Box)({
  display: "flex",
  gap: "20px",
  alignItems: "center",
});
const AdminInoutSubTitleRightContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "15.66px",
});
const ButtonLayout = styled(Box)({
  width: "148px",
});
const TableLayout = styled(Box)({
  marginTop: "40px",
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

const Subtitle = styled(Typography)(({ theme }) => ({
  lineHeight: "26px",
  fontSize: "18px",
  fontWeight: 500,
  color: theme.palette.primary.dark,
}));
const Arraytitle = styled(Typography)(({ theme }) => ({
  lineHeight: "26px",
  fontSize: "18px",
  fontWeight: 500,
  color: theme.palette.primary.main,
}));

const SectionArrayLayout = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});
