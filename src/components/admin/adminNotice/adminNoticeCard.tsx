import { FC } from "react";
import { Box, styled, Typography } from "@mui/material";

const AdminNoticeCard: FC = () => {
  return (
    <StyledBox>
      <Title>
        공지사항 제목이 노출됩니다. 공지사항 제목이 노출됩니다. 공지사항 제목이 노출됩니다. 공지사항
        제목이 노출됩니다. 공지사항 제목이 노출됩니다.
      </Title>
      <StyledBottomBox>
        <StyledNameBox>
          <Name>홍길동 간호사</Name>|<Contact>010.0000.0000</Contact>
        </StyledNameBox>
        <Contact>2024.05.01</Contact>
      </StyledBottomBox>
    </StyledBox>
  );
};

const StyledBox = styled(Box)(({ theme }) => ({
  width: "100%",
  borderBottom: `1px solid ${theme.palette.divider}`,
  paddingBottom: "20.5px",
  paddingTop: "20px",
}));

const StyledNameBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});
const StyledBottomBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingTop: "8px",
});

const Name = styled(Typography)(({ theme }) => ({
  lineHeight: "20px",
  fontSize: "13px",
  fontWeight: 500,
  color: theme.palette.primary.main,
}));

const Contact = styled(Typography)(({ theme }) => ({
  lineHeight: "26px",
  fontSize: "13px",
  fontWeight: 400,
  color: theme.palette.text.primary,
}));
const Title = styled(Typography)(({ theme }) => ({
  lineHeight: "24px",
  fontSize: "16px",
  fontWeight: 500,
  color: "black",
}));

export default AdminNoticeCard;
