import { ReactComponent as Home } from "@assets/menuIcons/home.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";
import { useRecoilValue } from "recoil";
import { userState } from "@libraries/recoil";
import { SwitchCase } from "@toss/react";

export default function HomeMenu() {
  const user = useRecoilValue(userState);

  return (
    <SwitchCase
      value={user!.type}
      caseBy={{
        main: <MenuLayout routePath={RoutePath.Home} pageName="병동 메인" icon={Home} />,
        staff: (
          <MenuLayout routePath={RoutePath.StaffHomePage} pageName="스태프 메인" icon={Home} />
        ),
      }}
    />
  );
}
