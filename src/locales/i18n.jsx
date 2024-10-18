import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-chained-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
i18n
  .use(LanguageDetector)
  .use(Backend)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === "development",
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["zh", "en"],
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
