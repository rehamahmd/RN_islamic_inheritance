// import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Locales } from '../../locales/keys';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
import { AppStyle } from '../appStyle';
import { formStyle } from '../calculator/fome_syle';
import CustomSvg from '../custom_svg';
import { AppIcons } from '../icons';
import { ArticlesCard } from './ArticlesCard';
import { ArticleViewModel } from './ArticleViewModel';


  const articlesData = [

  new ArticleViewModel({id:'1', title:'الميراث. ما هي أكثر المشاكل شيوعًا وكيفية حلها', imagePath:require('../../assets/images/inh1.webp'), isSaved:true}),
  new ArticleViewModel({id:'2', title:'المساواة في الميراث ضرورة بمنطق القرآن والدولة المدنية المعاصرة', imagePath:require('../../assets/images/inh2.png'), isSaved:false}),
  new ArticleViewModel({id:'3', title:'مقالة عن الميراث، معضلة ميراث المرأة- لنور الدين', imagePath:require('../../assets/images/inh3.png'), isSaved:false}),
  new ArticleViewModel({id:'4', title:'الميراث. ما هي أكثر المشاكل شيوعًا وكيفية حلها', imagePath:require('../../assets/images/images.jpg'), isSaved:false}),
  new ArticleViewModel({id:'5', title:'الميراث. ما هي أكثر المشاكل شيوعًا وكيفية حلها', imagePath:require('../../assets/images/inh1.webp'), isSaved:true}),
  new ArticleViewModel({id:'6', title:'المساواة في الميراث ضرورة بمنطق القرآن والدولة المدنية المعاصرة', imagePath:require('../../assets/images/inh2.png'), isSaved:false}),
  new ArticleViewModel({id:'7', title:'مقالة عن الميراث، معضلة ميراث المرأة- لنور الدين', imagePath:require('../../assets/images/inh3.png'), isSaved:false}),
  new ArticleViewModel({id:'8', title:'الميراث. ما هي أكثر المشاكل شيوعًا وكيفية حلها', imagePath:require('../../assets/images/images.jpg'), isSaved:false}),
]
export default function ArticlesScreen(props:any) {

  const {t} = useTranslation();
  const appBar = () => {
    return <View style={[AppStyle.appBarStyle, formStyle.boxShadowStyle]}>
         <CustomSvg svgXmlData={AppIcons.forwardArrowSvg} width={15} height={15}/>
         <View style={{width:20}}/>
         <Text style={[formStyle.formTitle, {fontSize:22}]}>{t(Locales.menu_articles)}</Text>   
      </View>
  }
  return (
      <View style={{flex:1,backgroundColor:StyleColors.bgColor}}>
        {appBar()}
        <View style={{height:10}}/>
       <View style={{flex:1, paddingBottom:Dimension.convertH(60), marginHorizontal:Dimension.convertW(15)}}>
          <ScrollView showsVerticalScrollIndicator={false}  style={{flex:1}}>
          {articlesData.map((item) =>
            <ArticlesCard key={item.id} item={item} />)}
          </ScrollView>
        </View>         
      </View>
  )
}



