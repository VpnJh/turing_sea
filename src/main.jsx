import React from "react";
import { createRoot } from "react-dom/client";
import "@/style/index.css";
import App from "@/layout/App";
import { I18nextProvider } from "react-i18next";
import i18n from "@/locales/i18n.jsx";
// 获取浏览器语言
const lang = localStorage.getItem("lang");
const browserLanguage = lang || navigator.language || navigator.userLanguage;
i18n.changeLanguage(browserLanguage);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
