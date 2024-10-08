import { FC } from "react";
import { Box, styled, Typography, FormControl, TextField, Button, SvgIcon } from "@mui/material";
import CInput from "@components/common/atom/C-Input";
import { ReactComponent as PhotoIcon } from "@assets/photo-icon.svg";

const AdminNoticeWriteForm: FC = () => {
  return (
    <StyledBox>
      <Title>공지 작성</Title>

      <InputForm>
        <label htmlFor="">수신자</label>
        <InputLayout>
          <CInput
            variant={"outlined"}
            placeholder={"수신자를 입력해주세요."}
            onChange={() => null}
            value={""}
            disabled={false}
            id={""}
          />
        </InputLayout>
      </InputForm>
      <InputForm>
        <label htmlFor="">제목</label>
        <InputLayout>
          <CInput
            variant={"outlined"}
            placeholder={"공지제목을 입력해주세요."}
            onChange={() => null}
            value={""}
            disabled={false}
            id={""}
          />
        </InputLayout>
      </InputForm>
      <InputForm>
        <TextAreaLabel>
          <p>내용</p>
          <p className="blue">즐겨찾기 등록</p>
        </TextAreaLabel>
        <StyledTextArea />
      </InputForm>
      <InputForm>
        <p>사진 첨부</p>
        <AddPhotoButton>
          <SvgIcon component={PhotoIcon} inheritViewBox />
          사진 첨부
        </AddPhotoButton>
      </InputForm>
    </StyledBox>
  );
};

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: "700",
  lineHeight: "26px",
  letterSpacing: "-0.03em",
  color: "black",
}));

const StyledBox = styled(FormControl)(({ theme }) => ({
  width: "50%",
  backgroundColor: "white",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "24px",
  padding: "34.5px 24px 62.45px 24px",
}));

const InputLayout = styled(Box)({
  width: "100%",
  height: "40px",
  marginTop: "10px",
});

const InputForm = styled(Box)(({ theme }) => ({
  "marginTop": "24px",
  "& p": {
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "20px",
    color: "black",
  },
  "& label": {
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "20px",
    color: "black",
  },

  "& .blue": {
    color: `${theme.palette.primary.main}`,
  },
}));

const TextAreaLabel = styled(Box)({
  display: "flex",
  alignItems: 'center"',
  width: "100%",
  justifyContent: "space-between",
  marginTop: "10px",
});

const StyledTextArea = styled(TextField)(({ theme }) => ({
  "marginTop": "24px",
  "border": `1px solid ${theme.palette.divider}`,
  "width": "100%",
  "height": "191px",
  "& .MuiInputBase-root": {
    height: "191px",
  },
}));

const AddPhotoButton = styled(Button)(({ theme }) => ({
  marginTop: "10px",
  border: `1px solid ${theme.palette.divider}`,
  color: `${theme.palette.text.primary}`,
  width: "112px",
  height: "40px",
  display: "flex",
  alignItems: "center",
  gap: "4px",
}));

export default AdminNoticeWriteForm;
