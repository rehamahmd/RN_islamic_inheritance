// import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Locales } from './src/locales/keys';
import { formStyle } from './src/screens/calculator/fome_syle';
import CustomSvg from './src/screens/custom_svg';
import { AppIcons } from './src/screens/icons';
import { StyleColors } from './src/styles/colors';



export default function CustomDrawerContent() {
  var image = './src/assets/app_logo.png';
  const [currentTab, setCurrentTab] = useState("Home");
  const {t} = useTranslation();
  return (
      <View style={{   width: 180, justifyContent: 'space-between', alignItems:'center' }}>
        <Image source={require(image)}  style={{
        //   width: 200,
          height: 60,
          borderRadius: 10,
          marginTop: 40,
          marginBottom: 20,
          resizeMode: 'contain'
        }}></Image>

        <Text style={formStyle.formTitle}>{'حساب المواريث'}</Text>

       
        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Home", require(image))}
          {TabButton(currentTab, setCurrentTab, "Language", require('./src/assets/images/language.png'))}
          {TabButton(currentTab, setCurrentTab, "Articles", require('./src/assets/images/article.png'))}
          {TabButton(currentTab, setCurrentTab, "Settings", require(image))}

        </View>

                  
        {/* {TabButton(currentTab, setCurrentTab, "LogOut", require(image))} */}
        <View style={{ height:50}}></View>
      </View>

  );
}

const TabButton = (currentTab:any, setCurrentTab:any, title:any, image:any) => {
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
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#5359D1" : "white"
        }}></Image>
      

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#5359D1" : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}



