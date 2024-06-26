import { ReactComponent as Notice } from "@assets/menuIcons/notice.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";

export default function PatientManageMenu() {
  return (
    <MenuLayout routePath={RoutePath.PatientManagement} pageName="입퇴원 관리">
      <Notice />
    </MenuLayout>
  );
}
