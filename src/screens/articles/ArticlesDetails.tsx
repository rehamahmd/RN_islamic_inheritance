// import { StatusBar } from 'expo-status-bar';

import React, {  } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
import { AppStyle } from '../appStyle';
import { formStyle } from '../calculator/FormStyle';
import CustomSvg from '../custom_svg';
import { styles } from '../home/bottom_navigation_tab_bar';
import { AppIcons } from '../icons';
import Tts from 'react-native-tts';

 function ArticlesDetails(props:any) {

  const {t} = useTranslation();

  const item = props.route.params;

    const speak= async () =>{
      try {
        await Tts.getInitStatus();
        Tts.speak(item.title + item.body);
        console.log("sssssssssssssssss");
      }
      catch (e) {
       console.log("eeeeeeeeeeeeeee"+e); 
      }
  }
  const appBar = () => {
    return <View style={[AppStyle.appBarStyle, formStyle.boxShadowStyle]}>
         <CustomSvg svgXmlData={AppIcons.forwardArrowSvg} width={15} height={15}/>
         <View style={{width:20}}/>
         <TouchableOpacity onPress={()=>speak()}>
         <Text style={[formStyle.formTitle, {fontSize:22}]}>ss</Text>   
         </TouchableOpacity>
      </View>
  }
  return (
      <View style={{flex:1,backgroundColor:StyleColors.white}}>
        {appBar()}
        <View style={{height:10}}/>
       <View style={{flex:1, paddingBottom:Dimension.convertH(5), marginHorizontal:Dimension.convertW(15)}}>
       <View style={{height:20}}/>
        <View style={{width:'90%', paddingHorizontal:10, justifyContent:'center',backgroundColor:'white',}}>
            <Text numberOfLines={2} ellipsizeMode='tail' style={[styles.title,formStyle.ArabicFontFamilyMedium,{ color:'#2E2F42',fontSize:18,lineHeight:25 }]}>{item.title}</Text>
        </View>
        <View style={{height:20}}/>
          <ScrollView showsVerticalScrollIndicator={false}  style={{flex:1}}>
          {/* <TouchableOpacity>
            <View style={{ marginStart:10, borderRadius:10, justifyContent:'center',backgroundColor:'white', width:Dimension.convertH(90),height:Dimension.convertH(90)}}>
              <Image source={{uri:item.image}}  style={[{width: Dimension.convertH(90), height: Dimension.convertH(70), resizeMode: 'contain'}]} /> 
            </View>
        </TouchableOpacity> */}
        
        <View style={{height:10}}/>
        <View style={{width:'100%', paddingHorizontal:10, justifyContent:'center',backgroundColor:'white'}}>
            <Text   style={[styles.title,formStyle.ArabicFontFamily,{ color:'#2E2F42',fontSize:16,lineHeight:25 }]}>{item.body}</Text>
        </View>
        <View style={{height:60}}/>
          </ScrollView>
        </View>         
      </View>
  )
}






export default ArticlesDetails;


