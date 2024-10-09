import {
  HomeMenu,
  RequestsMenu,
  PatientManagementMenu,
  CompletedRequestsMenu,
  NoticeMenu,
  SettingsMenu,
  DietMenu,
} from "@components/layout/sidebar/menu";

export default function StaffSidebar() {
  return (
    <>
      <HomeMenu />
      {/* Todo */}
      {/* <DietMenu /> */}
      {/* <RequestsMenu /> */}
      <PatientManagementMenu />
      <CompletedRequestsMenu />
      <NoticeMenu />
      {/* <SettingsMenu /> */}
    </>
  );
}
