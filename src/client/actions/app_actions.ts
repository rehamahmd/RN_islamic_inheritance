import AsyncStorage from "@react-native-async-storage/async-storage";
// import { STORE_LANGUAGE_KEY } from "../../utils/language_detector_plugin";
import { SET_APP_LANGUAGE } from "../constants";


export async function  setAppLanguage(language?:string) {
 console.log("-----action-----------------");
 console.log(language);
    return {
        type: SET_APP_LANGUAGE,
        payload: language ?? 'ar'
        
    }
}
