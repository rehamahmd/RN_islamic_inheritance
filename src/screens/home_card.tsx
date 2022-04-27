
import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import { useTranslation } from "react-i18next";
import { Locales } from '../locales/keys';
import { StyleColors } from '../styles/colors';
import { AppBar } from './appbar';
import { TextStyles } from '../styles/text';


const HomeCard = (props:any) => {
  const { t } = useTranslation();

  return (
     <View style={styles.card}>
      <Text style={[TextStyles.H5_COLOR_13,styles.title]}>This is A calculator for heirs' shares of inheritance.</Text>
      <View style={{flexDirection:'row',justifyContent:'space-between',paddingEnd:20,paddingTop:10}}>
          <View style={{}}>
         
          <Text style={[TextStyles.H5_COLOR_13,styles.title,{color:StyleColors.Color5_2}]}>Get started for free</Text>
          </View>
          <View style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Get Started</Text>
          </View>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
   
  card:{
    height:120, 
    width:'90%',
    marginHorizontal:16,
    paddingHorizontal:16,
    paddingVertical:14,
    borderRadius:14,
    backgroundColor: StyleColors.c1,
    
  },
  title: {
    fontSize: 16,
    fontWeight:'500',
    color:StyleColors.white,
    lineHeight: 25
  },
  buttonStyle: {
    height:30,
    justifyContent:'center',
    width:115, 
    backgroundColor:StyleColors.white,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(46, 229, 157, 0.5)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonTextStyle: {
    fontSize:15,
    color: StyleColors.c1,
    fontWeight: '800',
    textAlign:'center',
  },
});

export default HomeCard;