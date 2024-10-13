import React, { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import router from "@/router";
import "./App.css";
import "@/locales/i18n.jsx";

function App() {
  return (
    <Suspense fallback="..loading">
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
