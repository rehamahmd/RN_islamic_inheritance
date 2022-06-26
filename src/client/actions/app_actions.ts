import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApisClient } from "../apis_client";
// import { STORE_LANGUAGE_KEY } from "../../utils/language_detector_plugin";
import { SET_APP_LANGUAGE, SET_ARTICLES } from "../constants";
import { SharedPreference } from "../SharedPreference";


export async function  setAppLanguage(language?:string) {
 console.log("-----action-----------------");
 console.log(language);
    return {
        type: SET_APP_LANGUAGE,
        payload: language ?? 'ar'
        
    }
}

export  function getArticles(){
    // TODO
    var articles = SharedPreference.getArticlesFromSharedPref();
   
    return {
        type: SET_ARTICLES,
        payload: articles
    }
}
