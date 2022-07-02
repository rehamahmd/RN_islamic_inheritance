// import { StatusBar } from 'expo-status-bar';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';

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
import { formStyle } from '../calculator/FormStyle';
import { rulesAr, rulesEn } from '../calculator/rules';
import CustomSvg from '../custom_svg';
import { AppIcons } from '../icons';



 function RulesScreen(props:any) {
  const {t} = useTranslation();
  const [rules, setRules] = useState({} as any);
  useEffect(() => {
    if(i18n.language == 'ar'){
        setRules(rulesAr.rules)
    } else {
        setRules(rulesEn.rules)
    }
  }, []);
  const appBar = () => {
    return <View style={[AppStyle.appBarStyle, formStyle.boxShadowStyle]}>
         <CustomSvg svgXmlData={i18n.language == 'ar'? AppIcons.forwardArrowSvg: AppIcons.backwardArrowGreySvg} width={15} height={15}/>
         <View style={{width:20}}/>
         <Text style={[formStyle.formTitle, {fontSize:22}]}>{t(Locales.rules)}</Text>   
      </View>
  }
 
 
  return (
      <View style={{flex:1,backgroundColor:StyleColors.bgColor}}>
        {appBar()}
        <View style={{height:10}}/>
       <View style={{flex:1, paddingBottom:Dimension.convertH(5), marginHorizontal:Dimension.convertW(15)}}>
          <ScrollView showsVerticalScrollIndicator={false}  style={{flex:1}}>
            {/* <Image source={require("../../assets/images/rules.jpg")} style={{height:50,width:'80%'}} /> */}
            {/* // Husband */}
            <View>
              <Text>{rules.persons.husband.name}</Text>
              <Text></Text>
            </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(RulesScreen)


