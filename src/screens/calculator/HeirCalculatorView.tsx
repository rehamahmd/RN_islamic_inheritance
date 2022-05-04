import React , {useState }from "react"
import { useTranslation } from "react-i18next"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { setHeirNumbers } from "../../client/actions/heirs_actions"
import { StyleColors } from "../../styles/colors"
import { Dimension } from "../../styles/dimensions"
import { GenderEnum } from "../enums/gender_enum"
import { HeirModel } from "../models/heir_model"
import { formStyle } from "./fome_syle"

import HusbandHeirView from "./heirs_views/spouse/HusbandHeirView"
import WifeHeirView from "./heirs_views/spouse/WifeHeirView"
import  DeceasedGender  from "./deceased_gender"
import CustomHeirView from "./heirs_views/CustomHeirView"


 const HeirCalculatorView = (props:any) => {

  const {setHeirNumbers, gender,heirsWomen, heirsMen} = props;
  const plusAction = (key:string, heir:HeirModel) => {
    if(heir.count == heir.maxCount) return;
    ++heir.count;
    setHeirNumbers(key, heir.count)
  }
  
  const minusAction = (key:string, heir:HeirModel) => {
    if(heir.count == 0) return;
    --heir.count;
    setHeirNumbers(key, heir.count)
  }

  return <View style={{flex:1}}>
    <ScrollView style={{height:'100%'}} showsVerticalScrollIndicator={false}>
    <View style={{marginVertical:Dimension.convertH(15),width:'100%', flexDirection:'row',justifyContent:'flex-end'}}>
        <Text style={formStyle.title}>بيانات المتوفي</Text>
        </View>
        <DeceasedGender />
        {props.gender == GenderEnum.male?  <HusbandHeirView /> : <WifeHeirView/> }
        <View style={{height:1,backgroundColor:StyleColors.lightGrey,width:'100%',marginVertical:15}}/>
    
    <View style={{marginVertical:Dimension.convertH(15),width:'100%', flexDirection:'row',justifyContent:'flex-end'}}>
        <Text style={formStyle.title}>الورثة من الرجال</Text>
        </View>

    {Object.keys(heirsMen).map((key:any, i:number)=>{
       return <CustomHeirView key={i} heirModel={heirsMen[key]} plusAction={() => plusAction(key,heirsMen[key])} minusAction={() => minusAction(key, heirsMen[key])}/>
    })}
      <View style={{marginVertical:Dimension.convertH(15),width:'100%', flexDirection:'row',justifyContent:'flex-end'}}>
      <Text style={formStyle.title}>الورثة من النساء</Text>
      </View>
    {Object.keys(heirsWomen).map((key:any, i:number)=>{
      return <CustomHeirView key={i} heirModel={heirsWomen[key]} plusAction={() => plusAction(key,heirsWomen[key])} minusAction={() => minusAction(key, heirsWomen[key])}/>
    })}

  </ScrollView>
  </View>;
}

function mapStateToProps({heirs}:any)  {
  return {   
   allHeirs: heirs.allHeirs,
   heirsWomen: heirs.heirsWomen,
   heirsMen: heirs.heirsMen,
   
   gender: heirs.gender
 }
};




const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    setHeirNumbers,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(HeirCalculatorView)