import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager } from "react-native";
import RNRestart from 'react-native-restart';

  const STORE_LANGUAGE_KEY = "settings.lang";
  const languageDetectorPlugin = {
    type: "languageDetector",
    async: true,
    init: () => { return  'en';},
    detect: async function (callback: (lang: string) => void) {
      try {
        await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then(async(language) => {
          if (language) {
            // return callback(language);
            var isLangRTL = language == 'ar';
            if (isLangRTL !== I18nManager.isRTL) { 
              // await RNRestart.Restart()
            }
            return  callback(language);
          } else {
            return callback('en');
          }
        });
      } catch (error) {
        console.log("Error reading language", error);
      }
    },
    cacheUserLanguage: async function (language: string) {
      try {
        
        await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
        
      } catch (error) {}
    },
  };




module.exports = { languageDetectorPlugin };