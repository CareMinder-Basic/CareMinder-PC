import { ReactComponent as PatientManagement } from "@assets/menuIcons/patientManage.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";

export default function PatientManagementMenu() {
  return (
    <MenuLayout
      routePath={RoutePath.PatientManagement}
      pageName="입퇴원 관리"
      icon={PatientManagement}
    />
  );
}
