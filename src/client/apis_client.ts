import { ArticlesApi } from "../apis/ArticlesApi";
import { SharedPreference } from "./SharedPreference";

export class ApisClient{

    static getArticlesAndSaveToSharedPref(){
       var articles = ArticlesApi.getArticles();
       var string = JSON.stringify(articles);
       SharedPreference.setArticlesToSharedPref(string);
    }
}