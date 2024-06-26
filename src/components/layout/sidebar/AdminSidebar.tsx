import { AdminWardManagementMenu, StaffManageMenu } from "@components/layout/sidebar/menu";

export default function AdminSidebar() {
  return (
    <>
      <AdminWardManagementMenu />
      <StaffManageMenu />
    </>
  );
}
