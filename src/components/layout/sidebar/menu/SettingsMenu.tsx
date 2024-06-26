import { ReactComponent as Settings } from "@assets/menuIcons/settings.svg";
import MenuLayout from "@components/layout/sidebar/menu/MenuLayout";
import RoutePath from "@routes/routePath";

export default function SettingsMenu() {
  return (
    <>
      <MenuLayout routePath={RoutePath.Settings} pageName="설정">
        <Settings />
      </MenuLayout>
    </>
  );
}
