import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet, Dimensions, ScrollView, ActivityIndicator, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import { ApisClient } from "../../client/apis_client";
import i18n from "../../locales";
import { Locales } from "../../locales/keys";
import { StyleColors } from "../../styles/colors";
import { Dimension } from "../../styles/dimensions";
import { ArticlesCard } from "../articles/ArticlesCard";
import { ArticleViewModel } from "../articles/ArticleViewModel";

import { formStyle } from "../calculator/FormStyle";
import CustomSvg from "../custom_svg";
import { AppIcons } from "../icons";

export default function HomeArticlesSection(props:any){
     const { t } = useTranslation();
     const [loading,setLoading] = useState(true);
     const [articles, setArticles] = useState([] as Array<any>);
     useEffect(() => {
      ApisClient.getArticlesAndSaveToSharedPref();
      setTimeout(() => {
        setLoading(false);
        setArticles(ApisClient.articles)
        console.log("aaaa")
        }, 5000);
    
    }, []);

   const navigateToArticles=()=>{
    props.navigation.navigate('ArticlesScreen')
   }
    return <View style={styles.maincontainer}>
        <View style={styles.screenContainer}>
            <Text style={[formStyle.title,styles.title,{ color:'#2E2F42', }]}>{t(Locales.menu_articles)}</Text>
            <TouchableOpacity onPress={navigateToArticles} ><Text style={[formStyle.title,{color:'#2E2F42',fontSize:11 ,textAlignVertical:'center'}]}>{''}<CustomSvg svgXmlData={i18n.language == 'ar'? AppIcons.backwardArrowGreySvg: AppIcons.forwardArrowSvg} width={8} height={8}/></Text></TouchableOpacity>
        </View>
        {(loading) ? <View><ActivityIndicator size="large" color="#2E2F42" /></View> :
        <View style={{flex:1}}>
        <ScrollView  horizontal={true}  > 
        {articles.map((item:any) =>
            <View key={item.id} style={{marginEnd:12}}><ArticlesCard key={item.id} item={item} /></View>)} 
        </ScrollView>
        </View>}
      </View>;
}

const styles = StyleSheet.create({
    
    maincontainer: {
      height:230,
      position:'absolute',
      bottom:40,
      width: Dimensions.get('window').width,
      marginStart:'5%'
       
      },
    screenContainer: {
      
      marginVertical:Dimension.convertH(10),
      width: '90%',
  
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
     
    },
   
    title: {
      fontSize: 16,
      fontFamily:'GE-SS-Text-Bold',
    },
 
    buttonTextStyle: {
      color: '#fdfdfd',
      fontWeight: '700',
    },
  });


