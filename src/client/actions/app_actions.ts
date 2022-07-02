import AsyncStorage from "@react-native-async-storage/async-storage";
import { ApisClient } from "../apis_client";
// import { STORE_LANGUAGE_KEY } from "../../utils/language_detector_plugin";
import { SET_APP_LANGUAGE, SET_ARTICLES, GET_DATA } from "../constants";
import { SharedPreference } from "../SharedPreference";


export async function  setAppLanguage(language?:string) {

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


export function getAllHeirsData(){
    var result =  ApisClient.getAllHeirsData();
    return (dispatch:any) => 
    result.then(
      response => response.json()
    ).then(
      json => {
        console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEe");
        console.log(json);
        
        dispatch({ type: GET_DATA, payload:json });},
      err => dispatch({ type: "SOMETHING_FAILED", err })
    );
    
}
