import {
  HomeMenu,
  RequestsMenu,
  PatientManagementMenu,
  CompletedRequestsMenu,
  NoticeMenu,
  SettingsMenu,
} from "@components/layout/sidebar/menu";

export default function UserSidebar() {
  return (
    <>
      <HomeMenu />
      {/* <DietMenu /> */}
      <RequestsMenu />
      <PatientManagementMenu />
      <CompletedRequestsMenu />
      <NoticeMenu />
      <SettingsMenu />
    </>
  );
}
