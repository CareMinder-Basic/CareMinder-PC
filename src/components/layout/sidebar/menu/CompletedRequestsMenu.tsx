import { ReactComponent as CompletedRequests } from "@assets/menuIcons/completedRequests.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";

export default function CompletedRequestsMenu() {
  return (
    <MenuLayout
      routePath={RoutePath.CompletedRequests}
      pageName={`완료 요청\n히스토리`}
      icon={CompletedRequests}
    />
  );
}
