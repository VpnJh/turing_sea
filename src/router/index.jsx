import React, { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
const HomePage = lazy(() => import("@/views/home"));
const LoginPage = lazy(() => import("@/views/Login"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/home",
    element: <HomePage />
    // children: []
  }
]);

export default router;
