
import React, { Component, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ScrollView , StatusBar, Text, View, Pressable, TouchableOpacity } from 'react-native';
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
import { formStyle } from './fome_syle';
import FinishButton from './FinishButton';


 const TestChart = (props:any) =>{
  const { t ,  i18n} = useTranslation();
  const [series ,setSeries] = useState(Array<number>()); 
  const [names ,setNames] = useState(Array<string>()); 
  const [co ,setco] = useState(Array<number>()); 
  const [cl ,setcl] = useState(Array<string>()); 
  const [isInitialRender, setIsInitialRender] = useState(true);

  

  
  const calcResult = () =>{
    
  
    for (var i in props.calcResult){
     var color = props.allHeirs[props.calcResult[i].name].color;
      series.push(parseFloat(((props.calcResult[i].share.n/props.calcResult[i].share.d)*100).toFixed(2)))
      cl.push(color)
      co.push(props.calcResult[i].count)
      names.push(props.calcResult[i].name)
    }
  }
  // calcResult();
  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      calcResult();
    }
  },[names,series,cl,co, isInitialRender]);
  const widthAndHeight = Dimension.convertW(125);

  console.log(series[0])
    return (
      <View style={styles.mainContainer}>
       <AppBar title={t(Locales.inheritance_calc_title)} action={()=>props.navigation.goBack()}/>
      <AppBar title={''} action={()=>props.navigation.goBack()}/>
      <View style={styles.bodyContainer}>
          <TouchableOpacity onPress={()=>props.navigation.goBack()} style={{ position:'relative',end:10,height:Dimension.convertH(25), top:Dimension.convertH(20),alignItems:'flex-end'}}>
            <CustomSvg svgXmlData={AppIcons.close} fill={'#000000'} width={15} height={15} />
          </TouchableOpacity> 
          <View style={{flexDirection:'row',paddingHorizontal:10,marginVertical:10}}>
          <Text style={[formStyle.title,{fontSize:30}]}></Text>
       
          <Text style={[formStyle.title,{fontSize:30}]}>{props.amount.toString()}</Text>
          <View style={{width:10}}/>
          <Text style={[formStyle.title,{fontSize:30}]}>ج.م</Text>

          </View>
          <View style={{width:'100%',height:200, flexDirection:'row',justifyContent:'center'}}>
            <PieChart
              widthAndHeight={200}
              series={series}
              sliceColor={cl}
              doughnut={true}
              style={{width:400,height:200, flexDirection:'row',justifyContent:'center'}}
            />
            {/* <View style={{position:'relative',top:Dimension.convertW(49),left:Dimension.convertW(-72)}}><Text>300</Text></View> */}
          </View>
          <View style={{height:'10%'}}>
           
          </View>
          <View style={{height:'40%'}}>
            <ScrollView>
              {series.map((s,i)=>{
                return <View key={i} style={{flexDirection:'column',height:60,alignItems:'flex-start'}}>
                      <View style={{width:'100%',flexDirection:'row', justifyContent:'space-between',alignItems:'center'}}>
                        <Text style={[formStyle.title,{fontSize:14}]}>{t(names[i])}</Text>                        
                        <Text style={[formStyle.title,{fontSize:12}]}>{'%'+series[i]}</Text>
                      </View>
                   <View style={{height:10}}/>
                   <HeirSlider color={cl[i]} width={series[i]}/>
                
                 
                </View>
                
              })}
            
            </ScrollView>
          </View>
      </View>
    <FinishButton/>
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
    // alignItems:'flex-start',
    height:'100%',
},
title: {
    fontSize: 16,
  },
  container: {
    // flex: 1,
    // width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  
});



function mapStateToProps({heirs}:any)  {
 console.log("eeeeeeirs.heirs")
 console.log(heirs.heirs)
  return { 
  
   heirs: heirs.heirs,
   allHeirs:heirs.allHeirs,
   calcResult:heirs.calcResult,
   amount:heirs.amount
 }
};




const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    setDeceasedGender,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(TestChart)