import { ReactComponent as Settings } from "@assets/menuIcons/settings.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";
import { useRecoilValue } from "recoil";
import { userState } from "@libraries/recoil";
import { SwitchCase } from "@toss/react";
import { UserType } from "@models/user";

export default function SettingsMenu() {
  const user = useRecoilValue(userState);
  return (
    <SwitchCase
      value={user?.type as UserType}
      caseBy={{
        main: <MenuLayout routePath={RoutePath.Settings} pageName="설정" icon={Settings} />,
        staff: <MenuLayout routePath={"*"} pageName="설정" icon={Settings} />,
      }}
    />
  );
}
