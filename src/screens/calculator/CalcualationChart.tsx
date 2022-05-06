
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
import { formStyle } from './fome_syle';
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

  // const getProof = () => {
  //   var data = AllData;
  //   for (var i in props.calcResult){
  //     for (var j in data){
  //       console.log("----------ddddd---------------");

  //        if(props.calcResult[i].name == data[j].name){
  //          var share = parseFloat(((props.calcResult[i].share.n/props.calcResult[i].share.d)).toFixed(3));
  //          console.log("----------aaaaaaaaaa---------------");
  //          console.log(share);
  //          console.log(data[j].quota);

  //          if(share == data[j].quota){
  //           proof.push(data[j]);
  //           }
  //        }
  //     }
  //    }
  //    console.log(proof);
  // }
  // calcResult();
  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      calcResult();
      // getProof();
    }
  },[names,series,cl,co, colorsList,isInitialRender]);
  const widthAndHeight = Dimension.convertW(125);
  console.log("ppppppppppppppppppppppppp");
  console.log(proof);
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
          {/* <View style={{width:'100%',height:200, flexDirection:'row',justifyContent:'center'}}> */}
            <CalculationPieChart proof={proof} p={props.calcResult} chartColorsList={colorsList} cl={cl} names={names}/>
            {/* <View style={{position:'relative',top:Dimension.convertW(49),left:Dimension.convertW(-72)}}><Text>300</Text></View> */}
          {/* </View> */}
          {/* <View style={{height:'10%'}}>
           
          </View>
          <View style={{height:'40%'}}>
            <ScrollView>
              {proof.map((p,i)=>{
                console.log("iiiiiiiiiiiiii");
                console.log(p.textAr);
                console.log(p.causing);
                return <View key={i} style={{flexDirection:'column',height:60,alignItems:'flex-start'}}>
               
                <Text style={[formStyle.formTitle,{color:'black'}]}>{p.textAr}</Text>
                <Text>{p.name}</Text>
                <Text>{p.proofType}</Text>
                <Text>{p.quota}</Text>
                <Text style={[formStyle.formTitle,{color:'black'}]}>{p.causing}</Text>
                   <HeirSlider color={cl[i]} width={series[i]}/>
                </View>
                
              })}
            
            </ScrollView>
          </View> */}
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