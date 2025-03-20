import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const fetchLocale = async (lng: string) => {
  const response = await fetch(`/locales/${lng}.json`);
  return response.json();
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    fallbackLng: "en",
    debug: process.env.NODE_ENV === "development",
    resources: { en: { translation: {} }, it: { translation: {} } },
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator", "htmlTag"], // Orders to detect the user language
      caches: ["localStorage", "cookie"], // Places to save the chosen language
    },
    interpolation: { escapeValue: false },
  });

(async () => {
  const en = await fetchLocale("en");
  const it = await fetchLocale("it");

  i18n.addResourceBundle("en", "translation", en);
  i18n.addResourceBundle("it", "translation", it);
})();

export default i18n;
