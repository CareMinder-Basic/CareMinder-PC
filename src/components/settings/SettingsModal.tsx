import { CMModal, CMModalProps } from "@components/common";
import SettingsLayout from "./SettingsLayout";

export default function SettingsModal(props: CMModalProps) {
  return (
    <CMModal {...props} maxWidth="sm">
      <SettingsLayout {...props} />
    </CMModal>
  );
}
