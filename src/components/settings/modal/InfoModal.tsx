import { CMModal, CMModalProps, ModalActionButton } from "@components/common";
import { Box, styled, Typography } from "@mui/material";
import { useMemo } from "react";

const MODAL_CONTEXTS = {
  require: { title: "필수 입력 사항이 누락되었습니다.", controlAccount: false },
  doubleCheck: { title: "중복되었습니다.", controlAccount: false },
  error: { title: "오류가 발생했습니다.", controlAccount: false },
  confirmFail: { title: "인증실패되었습니다.", controlAccount: false },
  createSuccess: { title: "계정 생성 완료되었습니다.", controlAccount: false },
  checkAddStaff: { title: "스태프를 정말로 추가하시겠습니까?", controlAccount: true },
  checkDeleteStaff: { title: "스태프를 정말로 제거하시겠습니까?", controlAccount: true },
};

type ModalType = keyof typeof MODAL_CONTEXTS;

interface InfoModalProps extends Omit<CMModalProps, "title"> {
  modalType: ModalType;
  onConfirm?: () => void;
}

export default function InfoModal({ onClose, modalType, onConfirm, ...props }: InfoModalProps) {
  const { title, controlAccount } = useMemo(
    () => MODAL_CONTEXTS[modalType] || { title: "", controlAccount: false },
    [modalType],
  );

  return (
    <CMModal
      onClose={onClose}
      footer={
        controlAccount ? (
          <>
            <ModalActionButton color="secondary" onClick={onClose}>
              아니오
            </ModalActionButton>
            <ModalActionButton onClick={onConfirm}>예</ModalActionButton>
          </>
        ) : (
          <ModalActionButton onClick={onClose}>확인</ModalActionButton>
        )
      }
      {...props}
    >
      <ContentLayout>
        <Typography variant="h2">{title}</Typography>
      </ContentLayout>
    </CMModal>
  );
}

const ContentLayout = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  paddingTop: "30px",
});

/** 사용 예시
<InfoModal open={open} onClose={closeCreateModal} modalType={"require"}></InfoModal>
<InfoModal open={open} onClose={closeCreateModal} modalType={"doubleCheck"}></InfoModal>
<InfoModal open={open} onClose={closeCreateModal} modalType={"error"}></InfoModal>
<InfoModal open={open} onClose={closeCreateModal} modalType={"confirmFail"}></InfoModal>
<InfoModal open={open} onClose={closeCreateModal} modalType={"createSuccess"}></InfoModal>
<InfoModal open={open} onClose={closeCreateModal} modalType={"checkAddStaff"}></InfoModal>
<InfoModal open={open} onClose={closeCreateModal} modalType={"checkDeleteStaff"}></InfoModal>
*/
