import { ReactComponent as CompletedRequests } from "@assets/menuIcons/completedRequests.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";

export default function DietMenu() {
  return (
    <>
      <MenuLayout routePath={RoutePath.Diet} pageName="식단 등록">
        <CompletedRequests />
      </MenuLayout>
    </>
  );
}
