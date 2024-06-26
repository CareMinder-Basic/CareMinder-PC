import { ReactComponent as Settings } from "@assets/menuIcons/settings.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";

export default function AdminWardManagementMenu() {
  return (
    <MenuLayout
      routePath={RoutePath.AdminWardManagement}
      pageName={`병동\n계정 관리`}
      icon={Settings}
    />
  );
}
