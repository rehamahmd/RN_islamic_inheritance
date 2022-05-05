
import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { useTranslation } from "react-i18next";
import { TextStyles } from '../../styles/text';
import { Dimension } from '../../styles/dimensions';
import { StyleColors } from '../../styles/colors';
import { formStyle } from '../calculator/fome_syle';



const HomeCategoryCard = (props:any) => {
  const { t } = useTranslation();

  return (
    <TouchableOpacity>
     <View style={[styles.card,{backgroundColor: props.color,}]}>
     <Image  source={props.imagePath}  style={[{width:Dimension.convertW(80), height: Dimension.convertH(40),marginTop:Dimension.convertH(18), resizeMode: 'contain'}]} /> 
     <View style={[{width:'100%', marginTop:Dimension.convertH(10)}]}>
     <Text style={[TextStyles.P3_Color5_1,styles.title,{color:props.textColor},formStyle.ArabicFontFamilyBold]}>{props.text}</Text>
     </View>
     </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   
  card:{
    height:Dimension.convertW(105), 
    width:Dimension.convertW(105),
    paddingHorizontal:16,
    borderRadius:5,
    marginVertical:15,
  },
  title: {
    fontSize: Dimension.convertW(14),
     color:StyleColors.white,
    //  fontWeight:'bold'
   
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
    color: StyleColors.c1,
    fontWeight: '800',
    textAlign:'center',
  },
});

export default HomeCategoryCard;