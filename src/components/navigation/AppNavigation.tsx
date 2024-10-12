import App from "@/App";
import UnAuthenticatedLayout from "@/layouts/UnauthenticatedLayout";
import HomeScreen from "@/screens/app/home/HomeScreen";
import AuthHome from "@/screens/auth/home/AuthHome";
import AuthNameStep from "@/screens/auth/name-step/AuthNameStep";
import AuthEmailStep from "@/screens/auth/email-step/AuthEmailStep";
import AuthEmailOTPStep from "@/screens/auth/email-otp-step/AuthEmailOTPStep";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthenticatedLayout from "@/layouts/AuthenticatedLayout";
import AppContainer from "@/components/base/AppContainer";

/**
 * AppNavigation Component
 *
 * This component sets up the routing configuration for the entire application
 * using React Router. It defines the routes for both authenticated and
 * unauthenticated users, and applies the appropriate layouts.
 *
 * @component
 * @example
 * <RouterProvider router={router} />
 */
const router = createBrowserRouter([
  {
    path: "/index.html",
    element: <UnAuthenticatedLayout />,
    children: [{ path: "/index.html/", element: <App /> }],
  },
  {
    path: "/auth",
    element: <UnAuthenticatedLayout />,
    children: [
      {
        path: "home",
        element: <AuthHome />,
      },
      {
        path: "namestep",
        element: <AuthNameStep />,
      },
      {
        path: "emailstep",
        element: <AuthEmailStep />,
      },
      {
        path: "emailotpstep",
        element: <AuthEmailOTPStep />,
      },
    ],
  },
  {
    path: "/app",
    element: <AuthenticatedLayout />,
    children: [
      {
        path: "home",
        element: <HomeScreen />,
      },
    ],
  },
]);

const AppNavigation = () => {
  return (
    <AppContainer>
      <RouterProvider router={router} />
    </AppContainer>
  );
};

export default AppNavigation;
