var SharedPreferences = require('react-native-shared-preferences');
const articlesKey =  'articlesKey';
export class SharedPreference {

  static articles = [];
  static setArticlesToSharedPref(jsonString: string){
      if(this.articles.length<1){  
        SharedPreferences.setItem(articlesKey, jsonString);
        this.articles = JSON.parse(jsonString).articles;
      }
    }

  static getArticlesFromSharedPref(){
    return SharedPreferences.getItem(articlesKey, function(value:any){
      return JSON.parse(value);
      }); 
    }
}