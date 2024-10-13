import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ChainedBackend from "i18next-chained-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import LocalStorageBackend from "i18next-localstorage-backend";
i18n
  // 检测用户当前使用的语言
  // 文档: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(ChainedBackend)
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 初始化 i18next
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    debug: process.env.NODE_ENV === "development",
    interpolation: {
      escapeValue: false,
      format: (value, format, lng) => {
        console.log("value", value, lng);
        // if (value instanceof Date) {
        //   return DateTime.fromJSDate(value)
        //     .setLocale(lng)
        //     .toLocaleString(DateTime[format]);
        // }
        return value;
      }
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
