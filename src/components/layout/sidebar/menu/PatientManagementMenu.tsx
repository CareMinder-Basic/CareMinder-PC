import { ReactComponent as PatientManagement } from "@assets/menuIcons/patientManage.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";
import { SwitchCase } from "@toss/react";
import { useRecoilValue } from "recoil";
import { userState } from "@libraries/recoil";
import { UserType } from "@models/user";

export default function PatientManagementMenu() {
  const user = useRecoilValue(userState);

  return (
    <SwitchCase
      value={user?.type as UserType}
      caseBy={{
        main: <MenuLayout routePath={"*"} pageName={"입퇴원 관리"} icon={PatientManagement} />,
        staff: (
          <MenuLayout
            routePath={RoutePath.AdminWardInOut}
            pageName={"입퇴원 관리"}
            icon={PatientManagement}
          />
        ),
      }}
    />
  );
}
