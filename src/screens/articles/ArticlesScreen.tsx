// import { StatusBar } from 'expo-status-bar';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAmount } from '../../client/actions/heirs_actions';
import { ApisClient } from '../../client/apis_client';
import { SharedPreference } from '../../client/SharedPreference';
import { Locales } from '../../locales/keys';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
import { AppStyle } from '../appStyle';
import { formStyle } from '../calculator/FormStyle';
import CustomSvg from '../custom_svg';
import { AppIcons } from '../icons';
import { ArticlesCard } from './ArticlesCard';
import { ArticleViewModel } from './ArticleViewModel';


 function ArticlesScreen(props:any) {

  const {t} = useTranslation();
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    var articles = SharedPreference.articles;
    setArticles(articles);
    
  }, []);
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
       <View style={{flex:1, paddingBottom:Dimension.convertH(5), marginHorizontal:Dimension.convertW(15)}}>
          <ScrollView showsVerticalScrollIndicator={false}  style={{flex:1}}>
          {articles.map((item:any) =>
            <ArticlesCard key={item.id} item={item} navigation={props.navigation}/>)}
          </ScrollView>
        </View>         
      </View>
  )
}





function mapStateToProps({heirs,App}:any)  {
  console.log("props.articles..............");
console.log(App);
console.log(App.articles);
  return { 
    amount: heirs.amount,
    articles: App.articles
 }
};


const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    setAmount,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(ArticlesScreen)


