import { ReactComponent as Requests } from "@assets/menuIcons/requests.svg";
import MenuLayout from "@components/layout/sidebar/menu/MenuLayout";
import RoutePath from "@routes/routePath";

export default function NoticeMenu() {
  return (
    <MenuLayout routePath={RoutePath.Notice} pageName="공지">
      <Requests />
    </MenuLayout>
  );
}
