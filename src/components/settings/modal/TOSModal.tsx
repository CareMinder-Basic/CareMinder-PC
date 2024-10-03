import React, { useState } from "react";
import { CMModal, CMModalProps, ModalActionButton } from "@components/common";
import { Box, Checkbox, styled, Typography } from "@mui/material";

interface TOSModalProps extends Omit<CMModalProps, "title"> {
  onConfirm?: () => void;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function TOSModal({ onClose, onConfirm, ...props }: TOSModalProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleConfirm = () => {
    if (isChecked) {
      onConfirm?.();
    } else {
      alert("필수 약관에 동의해야 합니다.");
    }
  };

  return (
    <CMModal
      maxWidth="sm"
      onClose={onClose}
      title={"스태프 계정 생성 약관 동의서"}
      footer={
        <>
          <ModalActionButton color="secondary" onClick={onClose}>
            취소
          </ModalActionButton>
          <ModalActionButton onClick={handleConfirm}>동의합니다</ModalActionButton>
        </>
      }
      {...props}
    >
      <ContentLayout>
        <TOSContainer sx={{ width: "calc(100% - 24px)" }}>
          <TOSContentField>
            <Typography variant="subtitle2" sx={{ fontWeight: "500" }} color="black">
              약관 동의 조항 제목이 노출됩니다.
            </Typography>
            <Typography variant="body2">
              약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의
              조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항
              상세내용이 노출됩니다.
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: "500" }} color="black">
              약관 동의 조항 제목이 노출됩니다.
            </Typography>
            <Typography variant="body2">
              약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의
              조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항
              상세내용이 노출됩니다.
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: "500" }} color="black">
              약관 동의 조항 제목이 노출됩니다.
            </Typography>
            <Typography variant="body2">
              약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의
              조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항
              상세내용이 노출됩니다.
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: "500" }} color="black">
              약관 동의 조항 제목이 노출됩니다.
            </Typography>
            <Typography variant="body2">
              약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의
              조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항
              상세내용이 노출됩니다.
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: "500" }} color="black">
              약관 동의 조항 제목이 노출됩니다.
            </Typography>
            <Typography variant="body2">
              약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의
              조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항
              상세내용이 노출됩니다.
            </Typography>
            <Typography variant="subtitle2" sx={{ fontWeight: "500" }} color="black">
              약관 동의 조항 제목이 노출됩니다.
            </Typography>
            <Typography variant="body2">
              약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의
              조항 상세내용이 노출됩니다. 약관 동의 조항 상세내용이 노출됩니다. 약관 동의 조항
              상세내용이 노출됩니다.
            </Typography>
          </TOSContentField>
        </TOSContainer>
        <div style={{ display: "flex" }}>
          <Checkbox
            {...label}
            checked={isChecked}
            onChange={handleCheckboxChange}
            size="medium"
            color="primary"
          />
          <Typography variant="subtitle1">필수 약관에 동의합니다.</Typography>
        </div>
      </ContentLayout>
    </CMModal>
  );
}

const ContentLayout = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 0 10px 0",
});

const TOSContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.light,
  borderRadius: "24px",

  marginBottom: "30px",
  padding: "10px 20px",
}));

const TOSContentField = styled(Box)(({ theme }) => ({
  "maxHeight": "282px",
  "overflowY": "auto",
  "paddingRight": "20px",

  "&::-webkit-scrollbar": {
    width: "6px",
  },
  "&::-webkit-scrollbar-track": {
    background: theme.palette.background.default,
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: theme.palette.primary.main,
    borderRadius: "4px",
  },
  "&::-webkit-scrollbar-thumb:hover": {
    background: theme.palette.primary.light,
  },
}));
