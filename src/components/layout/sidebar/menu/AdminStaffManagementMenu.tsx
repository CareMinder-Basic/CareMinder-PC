import { ReactComponent as Staff } from "@assets/menuIcons/staff.svg";
import MenuLayout from "@components/layout/sidebar/menu/MenuLayout";
import RoutePath from "@routes/routePath";

export default function AdminStaffManagementMenu() {
  return (
    <MenuLayout routePath={RoutePath.AdminStaffManagement} pageName={`스태프\n계정 관리`}>
      <Staff />
    </MenuLayout>
  );
}
