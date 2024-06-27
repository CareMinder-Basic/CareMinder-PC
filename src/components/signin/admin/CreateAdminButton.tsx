import ActionButton from "@components/signin/ActionButton";
import CreateAdminModal from "./CreateAdminModal";
import { useBooleanState } from "@toss/react";

export default function CreateAdminButton() {
  const [open, openCreateModal, closeCreateModal] = useBooleanState(false);

  return (
    <>
      <ActionButton onClick={openCreateModal}>어드민 계정 생성</ActionButton>
      <CreateAdminModal open={open} onClose={closeCreateModal} />
    </>
  );
}
