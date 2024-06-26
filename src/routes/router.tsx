import { RouteObject, createBrowserRouter } from "react-router-dom";
import RoutePath from "@routes/routePath";
import { ProtectedLayout } from "@components/layout";

const routes: RouteObject[] = [
  {
    path: RoutePath.Home,
    element: <ProtectedLayout />,
  },
  { path: "*", element: <>not found page</> },
];

const Router = createBrowserRouter(routes);

export default Router;
