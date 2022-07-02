
import React, { Component, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView , StatusBar, Text, View, Pressable, TouchableOpacity, processColor } from 'react-native';
import PieChart from 'react-native-pie-chart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDeceasedGender } from '../../client/actions/heirs_actions';
import { Locales } from '../../locales/keys';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
import { AppBar } from '../appbar';
import { allHeirsForView } from '../models/heir_model';
import HeirCalculatorView from './HeirCalculatorView';
import { HeirSlider } from './slider';
import  CalculateButton  from "./calculate_button"
import CustomSvg from '../custom_svg';
import { AppIcons } from '../icons';
import { formStyle } from './FormStyle';
import FinishButton from './FinishButton';
import CalculationPieChart from './CalculationPieChart';
import AllData from './data';


 const TestChart = (props:any) =>{
  const { t ,  i18n} = useTranslation();
  const [series ,setSeries] = useState(Array<number>()); 
  const [names ,setNames] = useState(Array<string>()); 
  const [co ,setco] = useState(Array<number>()); 
  const [cl ,setcl] = useState(Array<string>()); 
  const [colorsList ,setColorsList] = useState(Array<any>()); 
  const [proof ,setProof] = useState(Array<any>()); 
  const [isInitialRender, setIsInitialRender] = useState(true);

  

  
  const calcResult = () =>{
    
  
    for (var i in props.calcResult){
     var color = props.allHeirs[props.calcResult[i].name].color;
      series.push(parseFloat(((props.calcResult[i].share.n/props.calcResult[i].share.d)*100).toFixed(2)))
      cl.push(color)
      colorsList.push(processColor(color))
      co.push(props.calcResult[i].count)
      names.push(props.calcResult[i].name)
    }
  }

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      calcResult();
    
    }
  },[names,series,cl,co, colorsList,isInitialRender]);
  const widthAndHeight = Dimension.convertW(125);
    return (
      <View style={styles.mainContainer}>
       <AppBar title={t(Locales.inheritance_calc_title)} action={()=>props.navigation.pop()}/>
      <AppBar title={''} action={()=>props.navigation.pop()}/>
      <View style={styles.bodyContainer}>
          <TouchableOpacity onPress={()=>props.navigation.pop()} style={{ position:'relative',end:10,height:Dimension.convertH(25), top:Dimension.convertH(20),alignItems:'flex-end'}}>
            <CustomSvg svgXmlData={AppIcons.close} fill={'#000000'} width={15} height={15} />
          </TouchableOpacity> 
          {props.amount==0?<Text></Text>:<View style={{flexDirection:'row',paddingHorizontal:10,marginVertical:5}}>
          <Text style={[formStyle.title,{fontSize:30}]}></Text>
          <Text style={[formStyle.title,{fontSize:30}]}>{props.amount.toString()}</Text>
          <View style={{width:10}}/>
          <Text style={[formStyle.title,{fontSize:30}]}>{t(Locales.currency)}</Text>
          </View>}
          <CalculationPieChart selectedHeirs={props.selectedHeirs} proof={proof} p={props.calcResult} chartColorsList={colorsList} cl={cl} names={names}/>
      </View>
    <FinishButton navigation={props.navigation}/>
   </View>
  
    );
  
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:StyleColors.mainColor,
    height:'82%',
    justifyContent:'space-between',
},
bodyContainer:{
    display:"flex",
    position:"relative",
    top:'-10%',
    backgroundColor:StyleColors.bgColor,
    borderTopRightRadius:30,
    borderTopLeftRadius:30,
    paddingHorizontal:Dimension.convertW(16),
    height:'100%',
},
title: {
    fontSize: 16,
  },
  container: {
  },
  
});



function mapStateToProps({heirs}:any)  {
  return { 
   heirs: heirs.heirs,
   allHeirs:heirs.allHeirs,
   calcResult:heirs.calcResult,
   selectedHeirs:heirs.selectedHeirs,
   amount:heirs.amount
 }
};




const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    setDeceasedGender,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(TestChart)