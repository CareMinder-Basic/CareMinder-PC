import { CMModal, CMModalProps } from "@components/common";
import SigninLayout from "@components/signin/SigninLayout";

export default function StaffSigninModal(props: CMModalProps) {
  return (
    <CMModal {...props} maxWidth="sm">
      <SigninLayout type="staff" />
    </CMModal>
  );
}
