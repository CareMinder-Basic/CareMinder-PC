import { ReactComponent as Requests } from "@assets/menuIcons/requests.svg";
import MenuLayout from "./MenuLayout";
import RoutePath from "@routes/routePath";

export default function NoticeMenu() {
  return <MenuLayout routePath={RoutePath.Notice} pageName="공지" icon={Requests} />;
}
