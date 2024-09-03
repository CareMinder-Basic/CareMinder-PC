import SettingsModal from "@components/settings/SettingsModal";
import { useState } from "react";

export default function SettingsPage() {
  // 로그인 되어있지 않은 상태에서 병동 설정 선택 시 로그인 모달 open
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <SettingsModal open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
