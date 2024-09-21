import { FC } from "react";
import { Box, styled, SvgIcon, Typography } from "@mui/material";
import { ReactComponent as XIcon } from "@assets/x-Icon.svg";
import { ReactComponent as WarningIcon } from "@assets/warning-icon.svg";

const AdminNoticeCardDeatil: FC = () => {
  return (
    <StyledBox>
      <NoticeTitleLayout>
        <SvgIcon component={WarningIcon} inheritViewBox />
        <Notice>공지</Notice>
      </NoticeTitleLayout>
      <div style={{ display: "flex", gap: "8px" }}>
        <RecipientLayout>
          <p>수신자</p>
          <SvgIcon component={XIcon} inheritViewBox />
        </RecipientLayout>
        <RecipientLayout>
          <p>수신자</p>
          <SvgIcon component={XIcon} inheritViewBox />
        </RecipientLayout>
        <RecipientLayout>
          <p>수신자</p>
          <SvgIcon component={XIcon} inheritViewBox />
        </RecipientLayout>
      </div>
      <TitleLayout>
        <Title>
          공지사항 제목이 노출됩니다. 공지사항 제목이 노출됩니다. 공지사항 제목이 노출됩니다.
          공지사항 제목이 노출됩니다. 공지사항 제목이 노출됩니다.
        </Title>
        <StyledBottomBox>
          <StyledNameBox>
            <Name>홍길동 간호사</Name>|<Contact>010.0000.0000</Contact>
          </StyledNameBox>
          <Contact>2024.05.01</Contact>
        </StyledBottomBox>
      </TitleLayout>
      <TextArea>
        안녕하세요. 응급학과에서 공지를 드립니다. 현재 응급환자가 몰려 지연이 발생하고 있습니다.
        환자분들의 시급함을 충분히 인지하고 있으나 응급실이라는 특성상 우선순위에 맞추어
        진료중이오니 현재 응급환자가 몰려 지연이 발생하고 있습니다. 환자분들의 시급함을 충분히
        인지하고 있습니다.
      </TextArea>
    </StyledBox>
  );
};

const StyledBox = styled(Box)({
  width: "50%",
  backgroundColor: "#EFF1F9",
  borderRadius: "24px",
  paddingTop: "34.5px",
  paddingLeft: "24px",
  paddingRight: "24px",
});

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

const TextArea = styled(Box)({
  color: "black",
  fontSize: "14px",
  lineHeight: "24px",
  fontWeight: "400",
});

const Name = styled(Typography)(({ theme }) => ({
  lineHeight: "20px",
  fontSize: "13px",
  fontWeight: 500,
  color: theme.palette.primary.main,
}));

const Notice = styled(Typography)(({ theme }) => ({
  lineHeight: "20px",
  fontSize: "13px",
  fontWeight: 700,
  color: theme.palette.primary.main,
}));

const Contact = styled(Typography)(({ theme }) => ({
  lineHeight: "26px",
  fontSize: "13px",
  fontWeight: 400,
  color: theme.palette.text.primary,
}));

const RecipientLayout = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const Title = styled(Typography)(({ theme }) => ({
  lineHeight: "26px",
  fontSize: "20px",
  fontWeight: 500,
  color: "black",
}));

const NoticeTitleLayout = styled(Box)({
  display: "flex",
  gap: "4px",
  alignItems: "center",
});

const TitleLayout = styled(Box)({
  paddingBottom: "16px",
  borderBottom: "1px solid #FFFFFF",
});

export default AdminNoticeCardDeatil;
