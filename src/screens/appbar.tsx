
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useTranslation } from "react-i18next";
import { Locales } from '../locales/keys';
import { StyleColors } from '../styles/colors';
import { TextStyles } from '../styles/text';


const AppBar = (props:any) => {
  const { t } = useTranslation();

  return (
    <View style={styles.appbar}>
      <Text style={[TextStyles.P3_ROMAN_Color5_1,styles.title]}>{t(Locales.appName)}</Text>
      
      <Text style={[TextStyles.P3_ROMAN_Color5_1,styles.title]}>{new Date().toDateString()} </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  appbar: {
    // height:50,
    width:'100%',
    justifyContent:'center',
    padding:20,
    backgroundColor:StyleColors.white,
  },
  title: {
    fontSize: 17,
    fontWeight:'bold',
    paddingTop:5,
 
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
});

export  {AppBar};