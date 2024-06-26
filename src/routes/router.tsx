import { RouteObject, createBrowserRouter } from "react-router-dom";
import RoutePath from "@routes/routePath";
import AuthenticatedLayout from "@components/layout";
import AuthorizedRoute from "@routes/AuthorizedRoute";
import {
  AdminSigninPage,
  AdminStaffManagementPage,
  AdminWardManagementPage,
  CompletedRequestsPage,
  DietPage,
  HomePage,
  NoticePage,
  PatientManagementPage,
  RequestsPage,
  SettingsPage,
  SigninPage,
} from "@pages/index";

const routes: RouteObject[] = [
  {
    path: RoutePath.Home,
    element: <AuthenticatedLayout />,
    children: [
      {
        element: <AuthorizedRoute allowedRoles={["main", "staff"]} />,
        children: [
          { index: true, element: <HomePage /> },
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
