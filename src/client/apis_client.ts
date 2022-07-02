import { ArticlesApi } from "../apis/ArticlesApi";
import { SharedPreference } from "./SharedPreference";
import axios from 'axios';

const url  = 'https://inheritanceapielmerath.azurewebsites.net/api/DistributProbabilities/GetDatafromviewall';
export class ApisClient{
   static articles:any = [];
   static  getArticlesAndSaveToSharedPref(){
   // var articles = {};
   if(this.articles.length > 0) return;
     var articlesData:any= [];
       axios
      .get("https://mirathapi.azurewebsites.net/api/Articles")
      .then((res) => {
        articlesData = res.data;
      })
      .then(() => {
         this.articles = articlesData;
           
     
      });
       console.log("-------------------------------------");
       console.log(this.articles);
     
    }

    static  getAllHeirsData(){
       var result =  fetch("https://mirathapi.azurewebsites.net/api/Articles");
       return result;
        
    }
}