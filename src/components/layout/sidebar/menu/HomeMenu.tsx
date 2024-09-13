import { ReactComponent as Home } from "@assets/menuIcons/home.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";
import { useLocation } from "react-router-dom";

export default function HomeMenu() {
  return <MenuLayout routePath={RoutePath.Home} pageName="홈" icon={Home} />;
}
