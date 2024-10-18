import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-chained-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import LocalStorageBackend from "i18next-localstorage-backend";
import HttpBackend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === "development",
    supportedLngs: ["zh-CN", "en", "zh"],
    load: "languageOnly",
    interpolation: {
      escapeValue: false
    },
    backend: {
      backends: [LocalStorageBackend, HttpBackend],
      backendOptions: [
        {
          expirationTime: 7 * 24 * 60 * 60 * 1000
        },
        {
          loadPath: "/locales/{{lng}}/{{ns}}.json"
        }
      ]
    }
  });

export default i18n;
