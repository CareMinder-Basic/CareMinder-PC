import { ReactComponent as CompletedRequests } from "@assets/menuIcons/completedRequests.svg";
import MenuLayout from "./MenuLayout";
import { SwitchCase } from "@toss/react";
import { useRecoilValue } from "recoil";
import { userState } from "@libraries/recoil";
import { UserType } from "@models/user";
import RoutePath from "@routes/routePath";

export default function CompletedRequestsMenu() {
  const user = useRecoilValue(userState);
  return (
    <SwitchCase
      value={user?.type as UserType}
      caseBy={{
        main: (
          <MenuLayout routePath={"*"} pageName={`완료 요청\n히스토리`} icon={CompletedRequests} />
        ),
        staff: (
          <MenuLayout
            routePath={RoutePath.CompletedRequests}
            pageName={`완료 요청\n히스토리`}
            icon={CompletedRequests}
          />
        ),
      }}
    />
  );
}
