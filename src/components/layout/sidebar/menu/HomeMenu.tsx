import { ReactComponent as Home } from "@assets/menuIcons/home.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";

export default function HomeMenu() {
  return (
    <MenuLayout routePath={RoutePath.Home} pageName="홈">
      <Home />
    </MenuLayout>
  );
}
