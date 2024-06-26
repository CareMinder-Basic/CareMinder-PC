import { ReactComponent as Settings } from "@assets/menuIcons/settings.svg";
import MenuLayout from "@components/layout/sidebar/menu/MenuLayout";
import RoutePath from "@routes/routePath";

export default function AdminWardManagementMenu() {
  return (
    <MenuLayout routePath={RoutePath.AdminWardManagement} pageName={`병동\n계정 관리`}>
      <Settings />
    </MenuLayout>
  );
}
