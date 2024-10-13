import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../views/home/index.jsx";
import { LoginPage } from "../views/login/index.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/",
    element: <HomePage />
    // children: []
  }
]);

export default router;
