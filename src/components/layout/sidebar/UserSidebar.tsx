import { ReactComponent as Home } from "@assets/menuIcons/home.svg";
import { ReactComponent as CompletedRequests } from "@assets/menuIcons/completedRequests.svg";
import { ReactComponent as Diet } from "@assets/menuIcons/diet.svg";
import { ReactComponent as Notice } from "@assets/menuIcons/notice.svg";
import { ReactComponent as PatientManage } from "@assets/menuIcons/patientManage.svg";
import { ReactComponent as Requests } from "@assets/menuIcons/requests.svg";
import { ReactComponent as Settings } from "@assets/menuIcons/settings.svg";
import MenuLayout from "./menu/MenuLayout";

export default function UserSidebar() {
  return (
    <>
      <MenuLayout routePath="/" pageName="병동 메인">
        <Home />
      </MenuLayout>
      <MenuLayout routePath="/" pageName="식단 등록">
        <CompletedRequests />
      </MenuLayout>
      <MenuLayout routePath="/" pageName="요청 확인">
        <Diet />
      </MenuLayout>
      <MenuLayout routePath="/" pageName="입퇴원 관리">
        <Notice />
      </MenuLayout>
      <MenuLayout routePath="/" pageName={`완료 요청\n히스토리`}>
        <PatientManage />
      </MenuLayout>
      <MenuLayout routePath="/" pageName="공지">
        <Requests />
      </MenuLayout>
      <MenuLayout routePath="/" pageName="설정">
        <Settings />
      </MenuLayout>
    </>
  );
}
