
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { useTranslation } from "react-i18next";
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
import HomeCategoryCard from './home_card';
import HomeArticlesSection from './home_articles_section';
import CustomSvg from '../custom_svg';
import { AppIcons } from '../icons';
import { formStyle } from '../calculator/FormStyle';
import { Locales } from '../../locales/keys';






function Home (props:any)  {
  const { t } = useTranslation();
  return (
      <View style={styles.scrollviewStyle}>
       <View style={{flexDirection:'column',alignItems:'center', height:200, width:'100%',backgroundColor:StyleColors.mainColor}}>
           <View style={{height:80,width:'90%',flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
             <TouchableOpacity style={{height:24,width:50}} onPress={()=>props.onPressMenu()}>
                <CustomSvg svgXmlData={AppIcons.whiteMenu} height={24}/>
             </TouchableOpacity>
             <TouchableOpacity style={{height:24,width:50}} onPress={()=>props.navigation.push("SelectLanguage")}>
             {/* <CustomSvg svgXmlData={AppIcons.home} height={24}/> */}
             </TouchableOpacity>
           </View>
           <View style={styles.mainCard}>
         
            <View style={{height:3}}/>
            <View>
            <Image source={require('../../assets/images/inh.png')}  style={[{width:Dimension.convertW(140), height: Dimension.convertH(50), resizeMode: 'contain'}]} /> 
          </View> 
          <Text style={[styles.title,{ color:'#2E2F42'},formStyle.ArabicFontFamilyBold]}>{t(Locales.inheritance_calculation)}</Text>
          <Text style={[styles.title,{fontSize:14, color:'#2E2F42',paddingHorizontal:13,textAlign:'center'},formStyle.ArabicFontFamilyMedium]}>{t(Locales.inheritance_calculation_subtitle)}</Text>
  
          <View style={{height:3}}/>
            <TouchableOpacity>
              <View style={{height:38,justifyContent:'center',alignItems:'center', width:Dimension.convertW(150),borderRadius:10, backgroundColor:'#2E2F42'}}>
                <Text style={[{color:'white',fontSize:15},formStyle.ArabicFontFamilyBold]}>{t(Locales.inheritance_calculation_tryIt)}</Text>
              </View>
              <View style={{height:10}}/>
            </TouchableOpacity>
            </View>
            <View style={{height:10}}/>
            
            <View style={{flexDirection:'row',justifyContent:'space-between', width:'90%',height:110}}>
            <HomeCategoryCard text={t(Locales.questions_and_answers)} textColor="#52BCF0"  color='#BBDAE9' imagePath={require('../../assets/images/question-mark.png')}/>
            <HomeCategoryCard text={t(Locales.quran_and_sunna)} textColor="#E85481" color="#F2E0E8" style={{ height: Dimension.convertH(45),marginTop:10,marginStart:10}}  imagePath={require('../../assets/images/koran.png')}/>
            <HomeCategoryCard text={t(Locales.inheritance_law)} textColor="#F26F58" color='#FEF5DD' style={{marginTop:4,marginStart:12}} imagePath={require('../../assets/images/balance.png')}/>
            </View>
         </View>
         
         <HomeArticlesSection />
        
    </View>
    
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:'#F3F8FE'
   
  },
  scrollviewStyle:{
    flex: 1,
    width: '100%',
    backgroundColor:'#F3F8FE'
  },
  title: {
    fontSize: 20,
    fontFamily:'GE-SS-Text-Bold',
  },
  buttonStyle: {
    height: 54,
    width: '80%',
    marginTop: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2EE59D',
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(46, 229, 157, 0.5)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonTextStyle: {
    color: '#fdfdfd',
    fontWeight: '700',
  },
  mainCard: {
    height:210,
    width:'90%',
    backgroundColor:'#ffffff',
    position:'relative',
    top:0,
    shadowRadius: 5,
    borderRadius:10,
    alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    paddingVertical:5,
    justifyContent:'space-evenly',
    shadowOpacity: 0.25,
    elevation: 1,
           
  }
});

export default Home;