import { RouteObject, createBrowserRouter } from "react-router-dom";
import RoutePath from "@routes/routePath";
import AuthenticatedLayout from "@components/layout";
import AuthorizedRoute from "@routes/AuthorizedRoute";
import {
  AdminSigninPage,
  AdminStaffManagementPage,
  AdminWardManagementPage,
  AdminWardInoutManagementPage,
  CompletedRequestsPage,
  DietPage,
  NoticePage,
  PatientManagementPage,
  RequestsPage,
  SettingsPage,
  SigninPage,
} from "@pages/index";
import MainHomePage from "@pages/user/MainHomePage";
import StaffHomePage from "@pages/user/StaffHomePage";
import AdminNoticePage from "@pages/admin/AdminNoticePage";
import AdminNoticeWritePage from "@pages/admin/AdminNoticeWritePage";

const routes: RouteObject[] = [
  {
    path: RoutePath.Home,
    element: <AuthenticatedLayout />,
    children: [
      {
        element: <AuthorizedRoute allowedRoles={["main", "staff"]} />,
        children: [
          { index: true, element: <MainHomePage /> },
          { path: RoutePath.StaffHomePage, element: <StaffHomePage /> },
          { path: RoutePath.CompletedRequests, element: <CompletedRequestsPage /> },
          { path: RoutePath.Diet, element: <DietPage /> },
          { path: RoutePath.Notice, element: <NoticePage /> },
          { path: RoutePath.PatientManagement, element: <PatientManagementPage /> },
          { path: RoutePath.Requests, element: <RequestsPage /> },
          { path: RoutePath.Settings, element: <SettingsPage /> },
        ],
      },
      {
        path: RoutePath.AdminWardManagement,
        element: <AuthorizedRoute allowedRoles={["admin"]} />,
        children: [
          { index: true, element: <AdminWardManagementPage /> },
          { path: RoutePath.AdminWardInOut, element: <AdminWardInoutManagementPage /> },
          { path: RoutePath.AdminNotice, element: <AdminNoticePage /> },
          { path: RoutePath.AdminNoticeWrite, element: <AdminNoticeWritePage /> },
          { path: RoutePath.AdminWardInOut, element: <AdminWardInoutManagementPage /> },
          { path: RoutePath.AdminStaffManagement, element: <AdminStaffManagementPage /> },

        ],
      },
    ],
  },
  { path: RoutePath.Signin, element: <SigninPage /> },
  { path: RoutePath.AdminSignin, element: <AdminSigninPage /> },
  { path: "*", element: <>Not found page</> },
];

const Router = createBrowserRouter(routes);

export default Router;
