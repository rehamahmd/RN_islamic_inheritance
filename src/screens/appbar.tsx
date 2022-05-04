
import React from 'react';
import {View, Text, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import { useTranslation } from "react-i18next";
import { Locales } from '../locales/keys';
import { StyleColors } from '../styles/colors';
import { TextStyles } from '../styles/text';
import { AppIcons } from './icons';
import CustomSvg from './custom_svg';
import { Dimension } from '../styles/dimensions';
import { formStyle } from './calculator/fome_syle';


const AppBar = (props:any) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity style={styles.appbar} onPress={() => props.action()}>
     <CustomSvg svgXmlData={AppIcons.backwardArrowSvg} width={15} height={15} />  
     <Text style={[formStyle.formTitle,]}>{props.title}</Text>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appbar:{
    height:'10%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:Dimension.convertW(20),
    // paddingBottom:10,
  },
  appbarTitle:{
    width:'90%',
    height:40,
    backgroundColor:StyleColors.white,
    position:'relative',
    top:10
  }
 
});

export  {AppBar};