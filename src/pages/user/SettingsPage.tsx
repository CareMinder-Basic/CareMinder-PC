import SettingsModal from "@components/settings/SettingsModal";
import modalState from "@libraries/recoil/modal";
import { useRecoilState } from "recoil";

export default function SettingsPage() {
  // 로그인 되어있지 않은 상태에서 병동 설정 선택 시 로그인 모달 open
  const [isModalOpen, setIsModalOpen] = useRecoilState(modalState);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <SettingsModal open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
}
