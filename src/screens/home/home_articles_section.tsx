import React from "react";
import { useTranslation } from "react-i18next";
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import { Locales } from "../../locales/keys";
import { StyleColors } from "../../styles/colors";
import { Dimension } from "../../styles/dimensions";
import { ArticlesCard } from "../articles/ArticlesCard";
import { ArticleViewModel } from "../articles/ArticleViewModel";

import { formStyle } from "../calculator/FormStyle";
import CustomSvg from "../custom_svg";
import { AppIcons } from "../icons";
export  const data = [

  new ArticleViewModel({id:'1', title:'الميراث. ما هي أكثر المشاكل شيوعًا وكيفية حلها', imagePath:require('../../assets/images/inh1.webp'), isSaved:true}),
  new ArticleViewModel({id:'2', title:'المساواة في الميراث ضرورة بمنطق القرآن والدولة المدنية المعاصرة', imagePath:require('../../assets/images/inh2.png'), isSaved:false}),
  new ArticleViewModel({id:'3', title:'مقالة عن الميراث، معضلة ميراث المرأة- لنور الدين', imagePath:require('../../assets/images/inh3.png'), isSaved:false}),
  new ArticleViewModel({id:'4', title:'الميراث. ما هي أكثر المشاكل شيوعًا وكيفية حلها', imagePath:require('../../assets/images/images.jpg'), isSaved:false}),

]
export default function HomeArticlesSection(props:any){
     const { t } = useTranslation();
    return <View style={styles.maincontainer}>
        <View style={styles.screenContainer}>
            <Text style={[formStyle.title,styles.title,{ color:'#2E2F42', }]}>{t(Locales.menu_articles)}</Text>
            <TouchableOpacity><Text style={[formStyle.title,{color:'#2E2F42',fontSize:11 ,textAlignVertical:'center'}]}>{t(Locales.home_more)}<CustomSvg svgXmlData={AppIcons.backwardArrowGreySvg} width={8} height={8}/></Text></TouchableOpacity>
        </View>
        <View style={{flex:1}}>
        <ScrollView  horizontal={true}  > 
        {data.map((item) =>
            <View key={item.id} style={{marginEnd:12}}><ArticlesCard key={item.id} item={item} /></View>)} 
        </ScrollView>
        </View>
      </View>;
}

const styles = StyleSheet.create({
    
    maincontainer: {
      height:230,
      // flex:1,
      position:'absolute',
      // top:10,
      bottom:40,
        // height: '100%',
        // marginTop:Dimension.convertH(10),
        width: Dimensions.get('window').width,
       marginStart:'5%'
        // // flexDirection:'row',
        // justifyContent: 'space-between',
        // alignItems: 'flex-start',
       
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