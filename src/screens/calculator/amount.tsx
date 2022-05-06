

import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {View, TouchableOpacity, Text, StyleSheet, TextInput} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAmount } from '../../client/actions/heirs_actions';
import { Locales } from '../../locales/keys';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
// import { mainColor } from '../../styles/colors';
import { HeirModel } from '../models/heir_model';

import { formStyle } from './fome_syle';
const HeirAmount = (props:any) => {
 const {amount, setAmount, navigation} = props; 
 const { t } = useTranslation();
 const _setAmount = (v:any) => {
   
  setAmount(parseFloat(v));
 }
 
  return (
    <View style={styles.bodyContainer}>
           <Text style={[styles.btnText,formStyle.ArabicFontFamily]}>{'ادخل المبلغ'}</Text>
           <TextInput onChangeText={(v)=>_setAmount(v)} keyboardType="numeric" style={{width:Dimension.convertW(160),height:Dimension.convertH(40), borderBottomWidth:1,borderBottomColor:StyleColors.Color0,textAlign:'center'}}/>
    </View>
  );
};

const styles = StyleSheet.create({
    bodyContainer:{
        height:Dimension.convertH(70),
        width:'100%',
        justifyContent:'space-between',
        backgroundColor:StyleColors.bgColor,
        paddingVertical:5,
        marginVertical:10,
        shadowOpacity: 0.25,
        alignItems:'center'
    },
    btn: {
        width:Dimension.convertW(230),
        height:Dimension.convertH(45),
        // borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:StyleColors.mainColor
        
        // backgroundColor:mainColor
    },
    btnText:{
        fontSize:16,
        // color:'white'
    },
    nameText:{
        fontSize:22,
        color:'black'
    }
});


function mapStateToProps({heirs}:any)  {
  return { 
    amount: heirs.amount,
 }
};




const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    setAmount,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(HeirAmount)


