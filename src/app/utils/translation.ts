import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// import translations files
import en from "../locales/en.json";
import it from "../locales/it.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    resources: { en: { translation: en }, it: { translation: it } },
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator", "htmlTag"], // Orders to detect the user language
      caches: ["localStorage", "cookie"], // Places to save the chosen language
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
