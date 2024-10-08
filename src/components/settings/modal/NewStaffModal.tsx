import { CMModal, CMModalProps, ModalActionButton } from "@components/common";
import CInput from "@components/common/atom/C-Input";
import { Box, styled, Typography } from "@mui/material";

export default function NewStaffModal({ onClose, ...props }: CMModalProps) {
  return (
    <CMModal
      onClose={onClose}
      title={"스태프 추가"}
      footer={
        <>
          <ModalActionButton color="secondary" onClick={onClose}>
            취소
          </ModalActionButton>
          <ModalActionButton>추가</ModalActionButton>
        </>
      }
      {...props}
    >
      <ContentLayout>
        <Typography variant="h4">아이디/휴대폰 번호/이메일 중 택일</Typography>
        <InputLayout>
          <CInput
            variant={"outlined"}
            placeholder={"입력해주세요."}
            onChange={() => null}
            value={""}
            disabled={false}
            id={""}
          />
        </InputLayout>
      </ContentLayout>
    </CMModal>
  );
}

const ContentLayout = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "24px 30px",
});

const InputLayout = styled(Box)({
  width: "349px",
  height: "40px",
});
