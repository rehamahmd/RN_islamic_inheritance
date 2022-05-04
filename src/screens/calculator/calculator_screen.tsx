import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { StyleColors } from "../../styles/colors"
import { Dimension } from "../../styles/dimensions"
import { AppBar } from "../appbar"
import  DeceasedGender  from "./deceased_gender"
import  CalculateButton  from "./calculate_button"
import { formStyle } from "./fome_syle"
import HusbandHeirView from "./heirs_views/spouse/HusbandHeirView"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { setDeceasedGender } from "../../client/actions/heirs_actions"
import { GenderEnum } from "../enums/gender_enum"
import WifeHeirView from "./heirs_views/spouse/WifeHeirView"
import HeirCalculatorView from "./HeirCalculatorView"
// import  Chart  from "./calcualation_chart"

 function CalculatorScreen(props:any){

   return <View style={styles.mainContainer}>
    <AppBar title="حساب نسبة المواريث" action={()=>props.navigation.goBack()}/>
      <View style={styles.bodyContainer}>

       
        <HeirCalculatorView/>

      </View>
      <CalculateButton/>
   </View>;
}

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:StyleColors.mainColor,
        height:'82%'
    },
    bodyContainer:{
        display:"flex",
       
        backgroundColor:StyleColors.bgColor,
       
        paddingHorizontal:Dimension.convertW(16),
        alignItems:'flex-start',
        height:'100%',
    },
    title: {
        fontSize: 16,
      },
    appbarTitle:{
        width:'95%',
        backgroundColor:StyleColors.bgColor,
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        top:-20,
        shadowOffset: {
            width: 0,
            height: 2,
          },
          flexDirection:'row',
          paddingVertical:5,
        //   marginEnd:10,
         
          shadowOpacity: 0.25,
          elevation: 1
      }
})


function mapStateToProps({heirs}:any)  {
 
  return { 
  
   heirs: heirs.heirs,
   gender:heirs.gender
 }
};




const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    setDeceasedGender,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(CalculatorScreen)