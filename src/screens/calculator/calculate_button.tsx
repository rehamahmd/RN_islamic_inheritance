

import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { calculateResult } from '../../client/actions/heirs_actions';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
// import { mainColor } from '../../styles/colors';
import { HeirModel } from '../models/heir_model';

const CalculateButton = (props:any) => {
 const {heirCalc, calculateResult} = props; 
 console.log("HHHHHHHHHHHHHHHHHHHHHH");
 console.log(heirCalc);
  return (
    <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btn} onPress={()=>calculateResult(heirCalc)}>
             <Text style={styles.btnText}>calculate</Text>
           </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    btnContainer:{
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