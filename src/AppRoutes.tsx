import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const HomeTemplate = lazy(() => import("./templates/HomeTemplate"));
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const PolicyPage = lazy(() => import("./pages/PolicyPage"));

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
  { path: "*", element: <NotFoundPage /> },
];
