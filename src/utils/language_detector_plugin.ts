import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18nManager } from "react-native";
import RNRestart from 'react-native-restart';

  const STORE_LANGUAGE_KEY = "settings.lang";
  const languageDetectorPlugin = {
    type: "languageDetector",
    async: true,
    init: () => {},
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
            return callback('ar');
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


//   const appLanguage =
//     Platform.OS === 'ios'
//       ? NativeModules.SettingsManager.settings.AppleLocale ||
//         NativeModules.SettingsManager.settings.AppleLanguages[0]
//       : NativeModules.I18nManager.localeIdentifier;

//   return appLanguage.search(/-|_/g) !== -1
//     ? appLanguage.slice(0, 2)
//     : appLanguage;
// };

// export  let userLang: string;
// export async function  getUserLanguagee () {
//    userLang = await AsyncStorage.getItem(STORE_LANGUAGE_KEY) ?? 'ar';
// ;
// }

// const languageDetectorPlugin = {
//   type: "languageDetector",
//   async: true,
//   init:async () => {
//     console.log("IIIIIIIIIIIIIIIIIII");
//     await getUserLanguagee()
//     console.log(userLang);
//   },
  
//   detect: async function (callback: (lang: string) => void) {
   
//     try {
//       //get stored language from Async storage
//       userLang = await AsyncStorage.getItem(STORE_LANGUAGE_KEY) ?? 'ar';
//       const deviceLang = userLang || getDeviceLang();
//       const isLangRTL = deviceLang === 'ar';
      
//       if (isLangRTL !== I18nManager.isRTL) {
        
//         /** Adjust app-direction */
//         await I18nManager.allowRTL(isLangRTL);
//         await I18nManager.forceRTL(isLangRTL);
//         await RNRestart.Restart()
//         /** Restart the app for the app-dir change to take effect */
       
//         }
      
//     } catch (error) {
//       console.log("Error reading language", error);
//     }
//   },
  
//   cacheUserLanguage: async function (language: string) {
//     try {
//       console.log("00000000000000000000000000000000000000000000000000");
//       //save a user's language choice in Async storage
//       await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
//       // await RNRestart.Restart()
//     } catch (error) {}
//   },

// };

module.exports = { languageDetectorPlugin };