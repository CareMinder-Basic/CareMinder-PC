import { RouteObject, createBrowserRouter } from "react-router-dom";
import RoutePath from "@routes/routePath";
import { ProtectedLayout } from "@components/layout";
import ProtectedRoute from "@routes/ProtectedRoute";
import {
  AdminStaffManagementPage,
  AdminWardManagementPage,
  CompletedRequestsPage,
  DietPage,
  HomePage,
  NoticePage,
  PatientManagementPage,
  RequestsPage,
  SettingsPage,
} from "@pages/index";

const routes: RouteObject[] = [
  {
    path: RoutePath.Home,
    element: <ProtectedLayout />,
    children: [
      {
        element: <ProtectedRoute allowedRoles={["main", "staff"]} />,
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
        element: <ProtectedRoute allowedRoles={["admin"]} />,
        children: [
          { index: true, element: <AdminWardManagementPage /> },
          { path: RoutePath.AdminStaffManagement, element: <AdminStaffManagementPage /> },
        ],
      },
    ],
  },
  { path: RoutePath.Signin, element: <>signin</> },
  { path: "*", element: <>Not found page</> },
];

const Router = createBrowserRouter(routes);

export default Router;
