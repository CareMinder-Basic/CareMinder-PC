import { ReactComponent as Diet } from "@assets/menuIcons/diet.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";

export default function RequestsMenu() {
  return (
    <MenuLayout routePath={RoutePath.Requests} pageName="요청 확인">
      <Diet />
    </MenuLayout>
  );
}
