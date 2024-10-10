import {
  HomeMenu,
  RequestsMenu,
  PatientManagementMenu,
  CompletedRequestsMenu,
  NoticeMenu,
  SettingsMenu,
  DietMenu,
} from "@components/layout/sidebar/menu";

export default function UserSidebar() {
  return (
    <>
      <HomeMenu />
      {/* Todo */}
      <DietMenu />
      <RequestsMenu />
      <PatientManagementMenu />
      <CompletedRequestsMenu />
      <NoticeMenu />
      <SettingsMenu />
    </>
  );
}
