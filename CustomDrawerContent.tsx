
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Locales } from './src/locales/keys';
import { formStyle } from './src/screens/calculator/FormStyle';
import CustomSvg from './src/screens/custom_svg';
import { AppIcons } from './src/screens/icons';
import { StyleColors } from './src/styles/colors';




export default function CustomDrawerContent(props:any) {
  var image = './src/assets/app_logo.png';
  const [currentTab, setCurrentTab] = useState("Home");
  const {t} = useTranslation();
  return (
      <View style={{ flex:1,  width: 180, justifyContent: 'space-between', alignItems:'center' }}>
         <View style={{ flex:1,  width: 180, justifyContent:'center',alignItems:'center'}}>
        <Image source={require(image)}  style={{
          height: 60,
          width: 80,
          borderRadius: 10,
          marginTop: 40,
          marginBottom: 0,
          resizeMode: 'contain'
        }}/></View>
        <Text style={formStyle.formTitle}>{t(Locales.appName)}</Text>
        <View style={{ flexGrow: 1, marginTop: 30 }}>
          {TabButton(currentTab,()=> {
            props.onPressMenu();
           
          }, t(Locales.menu_home), require(image))}
          {TabButton(currentTab,()=>{ 
            props.onPressMenu();
            props.navigation.navigate('ArticlesScreen')}, t(Locales.menu_articles), require('./src/assets/images/article.png'))}
              {TabButton(currentTab,()=>{ 
            props.onPressMenu();
            props.navigation.navigate('SelectLanguage')}, t(Locales.menu_language), require('./src/assets/images/language.png'))}
         
        </View>

                  
        {/* {TabButton(currentTab, setCurrentTab, "LogOut", require(image))} */}
        <View style={{ height:50}}></View>
        <View >
          <View style={{ flexDirection: 'row', justifyContent:'space-between',width:140}}>
          <CustomSvg svgXmlData={AppIcons.twitter}  width={20} height={20} />
          <CustomSvg svgXmlData={AppIcons.facebook}  width={20} height={20} />
          <CustomSvg svgXmlData={AppIcons.instagram}  width={20} height={20} />
          </View>
        </View>
        <View style={{ height:20}}></View>
        <View style={{ height:.1,backgroundColor:StyleColors.lightGrey, width:300}}></View>
        <View style={{ height:10}}></View>
        <View><Text style={formStyle.formTitle}>{'جميع الحقوق محفوظة'}</Text></View>
        
        <View style={{ height:20}}></View>
      </View>

  );
}

const TabButton = (currentTab:any, setCurrentTab:any, title:any, image:any) => {
  const {t} = useTranslation()
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        // Do your Stuff...
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingEnd: 13,
        paddingStart: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#5359D1" : "white"
        }}></Image>
      

        <Text style={[formStyle.formTitle,{
              paddingHorizontal: 15,
          color: currentTab == title ? "#5359D1" : "white"
        }]}>{t(title)}</Text>

      </View>
    </TouchableOpacity>
  );
}



