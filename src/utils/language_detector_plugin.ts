import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager, NativeModules, Platform } from "react-native";
import RNRestart from 'react-native-restart';

const STORE_LANGUAGE_KEY = "settings.lang";
export const getDeviceLang = () => {
  const appLanguage =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier;

  return appLanguage.search(/-|_/g) !== -1
    ? appLanguage.slice(0, 2)
    : appLanguage;
};
const languageDetectorPlugin = {
  type: "languageDetector",
  async: true,
  init: () => {},
  
  detect: async function (callback: (lang: string) => void) {
   
    try {
      //get stored language from Async storage
      const userLang = await AsyncStorage.getItem(STORE_LANGUAGE_KEY);
      const deviceLang = userLang || getDeviceLang();
      const isLangRTL = deviceLang === 'ar';
      if (isLangRTL !== I18nManager.isRTL) {
        /** Adjust app-direction */
        await I18nManager.allowRTL(isLangRTL);
        await I18nManager.forceRTL(isLangRTL);
        /** Restart the app for the app-dir change to take effect */
       
        }
      
    } catch (error) {
      console.log("Error reading language", error);
    }
  },
  
  cacheUserLanguage: async function (language: string) {
    try {
      //save a user's language choice in Async storage
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {}
  },
};

module.exports = { languageDetectorPlugin };