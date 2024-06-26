import {
  HomeMenu,
  RequestsMenu,
  PatientManageMenu,
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
      <PatientManageMenu />
      <CompletedRequestsMenu />
      <NoticeMenu />
      <SettingsMenu />
    </>
  );
}
