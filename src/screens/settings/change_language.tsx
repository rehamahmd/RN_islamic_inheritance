import React, { useState } from 'react';
import {TouchableOpacity,StyleSheet,Text, View, I18nManager} from 'react-native';
import { Locales } from '../../locales/keys';
import RNRestart from 'react-native-restart';
// import i18n from '../../locales';
import { useTranslation } from 'react-i18next';
import { setAppLanguage } from '../../client/actions/app_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AppBar } from '../appbar';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
import { formStyle } from '../calculator/FormStyle';

 const SelectLanguage = (props:any) => {
    const {  t ,i18n } = useTranslation()
    const [lang, setLang] = useState(i18n.language);


    const _changeLanguage = async () => {
       await i18n.changeLanguage(lang);
       const isLangRTL = lang === 'ar';
        if (isLangRTL) {
          await I18nManager.allowRTL(true);
          await I18nManager.forceRTL(true);
          await RNRestart.Restart()
          return;
         
        } else {
          await I18nManager.allowRTL(false);
          await I18nManager.forceRTL(false);
          await RNRestart.Restart()
        }
     
      //  await RNRestart.Restart()
    }
   const _selectLanguage = (lng:string) => {
        setLang(lng);
    }
    return (
     <View style={styles.mainContainer}>
        <AppBar title={t(Locales.language_change_title)} action={()=>props.navigation.pop()}/>
        <AppBar title={''} action={()=>props.navigation.pop()}/>
        <View style={styles.bodyContainer}>
        <TouchableOpacity  onPress={() => _selectLanguage('ar')} style={styles.btnStyle}>  
          <View style={lang=='ar'?formStyle.selectedRadioView:formStyle.unselectedRadioView}>
            <View style={{height:8,width:8,borderRadius:4,backgroundColor:StyleColors.bgColor}} />
          </View>          
        <View >
          <Text style={formStyle.title}>{t(Locales.language_arabic)}</Text>
        </View>
        </TouchableOpacity>
        <View style={{height:1,width:'100%', backgroundColor:StyleColors.lightGrey}}/>
        <TouchableOpacity  onPress={() => _selectLanguage('en')}  style={styles.btnStyle}> 
         <View style={lang=='en'?formStyle.selectedRadioView:formStyle.unselectedRadioView}>
            <View style={{height:8,width:8,borderRadius:4,backgroundColor:StyleColors.bgColor}} />
          </View>       
        <View>
          <Text style={formStyle.title}>{t(Locales.language_english)}</Text>
        </View>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        
          <TouchableOpacity style={styles.btn} onPress={()=>_changeLanguage()}>
            <Text style={[styles.btnText,formStyle.ArabicFontFamilyMedium]}>{t(Locales.language_change_btn)}</Text>
          </TouchableOpacity>
    </View>
     </View>
    )
   }


   const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:StyleColors.mainColor,
        height:'82%',
        justifyContent:'space-between',
        direction:'rtl',
    },
    bodyContainer:{
        display:"flex",
        position:"relative",
        top:'-10%',
        backgroundColor:StyleColors.bgColor,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingHorizontal:Dimension.convertW(16),
        alignItems:'flex-start',
        height:'100%',
    },
    title: {
        fontSize: 16,
      },
      btnStyle:{
        width:'100%',
        height:Dimension.convertH(50),
        backgroundColor:StyleColors.bgColor,
        justifyContent:'flex-start',
        alignItems:'center',
        marginVertical:5,    
        flexDirection:'row',
        paddingVertical:5,     
        shadowOpacity: 0.25,
         
      },
      btnContainer:{
        position:'relative',top:'-10%',
          height:'14%',
          width:'100%',
          backgroundColor:StyleColors.bgColor,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          paddingVertical:5,
        
          shadowOpacity: 0.25,
          elevation: 2,
          justifyContent:'center',
          alignItems:'center',
          
      },
      btn: {
          width:Dimension.convertW(230),
          height:Dimension.convertH(45),
          borderRadius:22,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:StyleColors.mainColor
          
          // backgroundColor:mainColor
      },
      btnText:{
          fontSize:18,
          color:'white'
      },
      nameText:{
          fontSize:22,
          color:'black'
      }
})
   
function mapStateToProps({App}:any)  {
    return {}
  };
  
  
  
  
  const mapDispatchToProps = (dispatch:any) => (
    bindActionCreators({
      setAppLanguage,
    }, dispatch)
  );
  export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage)