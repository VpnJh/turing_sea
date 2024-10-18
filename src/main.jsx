import React from "react";
import { createRoot } from "react-dom/client";
import "@/style/index.css";
import App from "@/layout/App";
import { I18nextProvider } from "react-i18next";
import i18n from "@/locales/i18n.jsx";
import * as ReactRedux from "react-redux";
import { persistor, store } from "@/store";
import { PersistGate } from "redux-persist/integration/react";

// 获取浏览器语言
const browserLanguage = navigator.language || navigator.userLanguage;
i18n.changeLanguage(browserLanguage);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <ReactRedux.Provider store={store}>
    <PersistGate persistor={persistor} loading={"Loading..."}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </PersistGate>
  </ReactRedux.Provider>
);
