// import { StatusBar } from 'expo-status-bar';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAmount } from '../../client/actions/heirs_actions';
import { ApisClient } from '../../client/apis_client';
import { SharedPreference } from '../../client/SharedPreference';
import i18n from '../../locales';
import { Locales } from '../../locales/keys';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
import { AppStyle } from '../appStyle';
import { aboutAr, aboutEn } from '../calculator/aboutus';
import { formStyle } from '../calculator/FormStyle';
import { rulesAr, rulesEn } from '../calculator/rules';
import CustomSvg from '../custom_svg';
import { AppIcons } from '../icons';



 function AboutUs(props:any) {
  const {t} = useTranslation();

  const appBar = () => {
    return <TouchableOpacity onPress={()=>props.navigation.goBack()} style={[AppStyle.appBarStyle, formStyle.boxShadowStyle]}>
         <CustomSvg svgXmlData={i18n.language == 'ar'? AppIcons.forwardArrowSvg: AppIcons.backwardArrowSvg} width={15} height={15}/>
         <View style={{width:20}}/>
         <Text style={[formStyle.formTitle, {fontSize:22}]}>{t(Locales.menu_aboutus)}</Text>   
      </TouchableOpacity>
  }
 
  var about = i18n.language == 'ar' ? aboutAr.about : aboutEn.about;
  return (
      <View style={{flex:1,backgroundColor:StyleColors.bgColor}}>
        {props.show==null ?appBar():null}
        <View style={{height:10}}/>
       <View style={{flex:1, paddingBottom:Dimension.convertH(5), marginHorizontal:Dimension.convertW(15)}}>
          <ScrollView showsVerticalScrollIndicator={false}  style={{flex:1}}>
            <View style={{height:10}}/>
            <View>
            <Text  style={[formStyle.title,{textAlign:"center"}]}>{about.main_banner.title}</Text>
            <Text style={[formStyle.subtitle2,{textAlign:"center"}]}>{about.main_banner.subTitle}</Text>
            </View>
            {/* /// */}
            <View style={{height:30}}/>
            <View>
            <Text  style={[formStyle.title,{textAlign:"center"}]}>{about.about_area.title}</Text>
            <Text style={[formStyle.subtitle2,{textAlign:"center"}]}>{about.about_area.brief}</Text>
            </View>
            {/* // */}
            <View style={{height:30}}/>
            <View>
            <Text  style={[formStyle.title,{textAlign:"center"}]}>{about.about_area.question}</Text>
            <Text style={[formStyle.subtitle2,{textAlign:"center"}]}>{about.about_area.answer}</Text>
            </View>
            {/* // */}
            <View style={{height:30}}/>
            <View>
            <Text  style={[formStyle.title,{textAlign:"center"}]}>{about.about_area.our_mission}</Text>
            <Text style={[formStyle.subtitle2,{textAlign:"center"}]}>{about.about_area.mission_details}</Text>
            </View>
            <View style={{height:100}}/>
          </ScrollView>
        </View>         
      </View>
  )
}





function mapStateToProps({heirs,App}:any)  {
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
export default connect(mapStateToProps, mapDispatchToProps)(AboutUs)


