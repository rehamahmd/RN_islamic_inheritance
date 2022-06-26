

import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { calculateResult } from '../../client/actions/heirs_actions';
import { Locales } from '../../locales/keys';
import SavePdfComponent from '../../SavePdfComponent';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
// import { mainColor } from '../../styles/colors';
import { HeirModel } from '../models/heir_model';

import { formStyle } from './FormStyle';
const FinishButton = (props:any) => {
 const {heirCalc, calculateResult, navigation} = props; 
 const { t } = useTranslation();
 const calc = () => {

   props.navigation.navigate('CalculatorScreen');
 }
  return (
    <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={()=>calc()}>
          <Text style={[styles.btnText,formStyle.ArabicFontFamilyMedium]}>{'مسألة جديدة'}</Text>
        </TouchableOpacity>
        <SavePdfComponent />
    </View>
  );
};

const styles = StyleSheet.create({
    btnContainer:{
      position:'relative',
      top:'-18%',
      height:'14%',
      width:'100%',
      backgroundColor:StyleColors.bgColor,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      paddingVertical:5,
      flexDirection:'row',
      shadowOpacity: 0.25,
      elevation: 2,
      justifyContent:'space-evenly',
      alignItems:'center',
        
    },
    btn: {
        width:Dimension.convertW(150),
        height:Dimension.convertH(40),
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
});


function mapStateToProps({heirs}:any)  {
  return { 
    heirCalc: heirs.heirs,
 }
};




const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    calculateResult,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(FinishButton)


