import { ReactComponent as PatientManage } from "@assets/menuIcons/patientManage.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";

export default function CompletedRequestsMenu() {
  return (
    <>
      <MenuLayout routePath={RoutePath.CompletedRequests} pageName={`완료 요청\n히스토리`}>
        <PatientManage />
      </MenuLayout>
    </>
  );
}
