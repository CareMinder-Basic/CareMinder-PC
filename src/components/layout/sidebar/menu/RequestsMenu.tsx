import { ReactComponent as Request } from "@assets/menuIcons/requests.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";

export default function RequestsMenu() {
  return <MenuLayout routePath={RoutePath.Requests} pageName="요청 확인" icon={Request} />;
}
