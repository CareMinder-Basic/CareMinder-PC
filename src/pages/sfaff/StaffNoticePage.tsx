import { Box, Stack, Typography, styled } from "@mui/material";
import { AdminNoticeCard } from "@components/admin";
import CSearchBox from "@components/common/atom/C-SearchBox";
import { Link } from "react-router-dom";
import RoutePath from "@routes/routePath";
import CButton from "@components/common/atom/C-Button";

import PaginationComponent from "@components/common/pagination";
import AdminNoticeCardDeatil from "@components/admin/adminNotice/adminNoticeCardDetail";

const mock = [1, 2, 3, 4, 5, 6, 7];

const StaffNoticePage = () => {
  return (
    <Container>
      <div>
        <Title variant="h1">공지</Title>
        <AdminInoutSubTitleContainer>
          <AdminInoutSubTitleLeftContainer>
            <CSearchBox
              value={""}
              onChange={() => null}
              placeholder={"검색 내용을 입력해주세요."}
              borderColor="#8C8E94"
            />
          </AdminInoutSubTitleLeftContainer>
          <AdminInoutSubTitleRightContainer>
            <ButtonListLayout>
              <ButtonLayout width={"124px"}>
                <CButton buttonType={"primaryBlack"}>내 환자 대상 공지</CButton>
              </ButtonLayout>
              <ButtonLayout width={"121px"}>
                <CButton buttonType={"primaryBlack"}>내가 작성한 공지</CButton>
              </ButtonLayout>
              <ButtonLayout width={"150px"}>
                <CButton buttonType={"primaryBlack"}>내 근무 시간동안 공지</CButton>
              </ButtonLayout>
            </ButtonListLayout>
            <ButtonLayout width={"148px"}>
              <Link to={RoutePath.StaffNoticeWrite}>
                <CButton buttonType={"primarySpaureWhite"}>공지 작성</CButton>
              </Link>
            </ButtonLayout>
          </AdminInoutSubTitleRightContainer>
        </AdminInoutSubTitleContainer>
      </div>
      <TableLayout>
        <AdminNoticeListLayout>
          {mock.map(item => {
            return <AdminNoticeCard key={item} />;
          })}
        </AdminNoticeListLayout>
        <AdminNoticeCardDeatil />
      </TableLayout>
      <FooterLayout>
        <PaginationComponent totalPage={5} />
      </FooterLayout>
    </Container>
  );
};

export default StaffNoticePage;

/** styles */

const Container = styled(Stack)({
  height: "100%",
});

const AdminInoutSubTitleContainer = styled(Box)({
  width: "100%",
  marginTop: "17.66px",
  display: "flex",
  justifyContent: "space-between",
  gap: "22px",
});

const AdminNoticeListLayout = styled(Box)({
  width: "50%",
});

const AdminInoutSubTitleLeftContainer = styled(Box)({
  display: "flex",
  width: "50%",
  // gap: "20px",
  alignItems: "center",
});
const AdminInoutSubTitleRightContainer = styled(Box)({
  display: "flex",
  width: "50%",
  alignItems: "center",
  gap: "15.66px",

  justifyContent: "space-between",
});
const ButtonLayout = styled(Box)(width => ({
  width: `${width}`,
  maxHeight: "34px",
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
