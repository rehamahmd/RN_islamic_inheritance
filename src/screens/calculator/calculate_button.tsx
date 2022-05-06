

import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { calculateResult } from '../../client/actions/heirs_actions';
import { Locales } from '../../locales/keys';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
// import { mainColor } from '../../styles/colors';
import { HeirModel } from '../models/heir_model';

import { formStyle } from './fome_syle';
const CalculateButton = (props:any) => {
 const {heirCalc, calculateResult, navigation} = props; 
 const { t } = useTranslation();
 const calc = () => {
   calculateResult(heirCalc);
   props.navigation.navigate('CalculationChart');
 }
  return (
    <View style={styles.btnContainer}>
           <TouchableOpacity style={styles.btn} onPress={()=>calc()}>
             <Text style={[styles.btnText,formStyle.ArabicFontFamilyMedium]}>{t(Locales.calculate)}</Text>
           </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default connect(mapStateToProps, mapDispatchToProps)(CalculateButton)


