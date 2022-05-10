import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './en';
import ar from './ar';
// import { getUserLanguagee, userLang } from "../utils/language_detector_plugin";
const { languageDetectorPlugin } = require("./../utils/language_detector_plugin");

const resources = {
  en: {
    translation: en,
  },
  ar: {
    translation: ar,
  },

};

i18n.use(initReactI18next).use(languageDetectorPlugin).init({
  resources,
  compatibilityJSON: 'v3',
  fallbackLng: 'ar',
  lng:'ar',
  interpolation: {
    escapeValue: false,
  },
  react: { 
    useSuspense: false
  }
});

export default i18n;