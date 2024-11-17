import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const HomeTemplate = lazy(() => import("../templates/HomeTemplate"));
const HomePage = lazy(() => import("../pages/HomePage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const LandingPage = lazy(() => import("../pages/LandingPage"));
const PolicyPage = lazy(() => import("../pages/PolicyPage"));
// const Login = lazy(() => import("../pages/AuthPage/components/Login"));
// const Register = lazy(() => import("../pages/AuthPage/components/Register"));
const ForgotPass = lazy(() => import("../pages/AuthPage/components/ForgotPass"));
const OTPRegister = lazy(() => import("../pages/AuthPage/components/OTPRegister"));
const ModalAuth = lazy(() => import("../pages/AuthPage"));

// Định nghĩa mảng các route
export const routes: RouteObject[] = [
  {
    path: "",
    element: <HomeTemplate />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/landing-page", element: <LandingPage /> },
      { path: "/policy-page", element: <PolicyPage /> },
    ],
  },
  // { path: "/login", element: <Login /> },
  // { path: "/register", element: <Register /> },
  { path: "/forgot-password", element: <ForgotPass /> },
  { path: "/modal-auth", element: <ModalAuth /> },
  { path: "/otp-register", element: <OTPRegister /> },
  { path: "*", element: <NotFoundPage /> },
];
