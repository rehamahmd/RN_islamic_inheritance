import React , {useEffect, useState }from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { setHeirNumbers } from "../../../../client/actions/heirs_actions"
import { StyleColors } from "../../../../styles/colors"
import { Dimension } from "../../../../styles/dimensions"
import { GenderEnum } from "../../../enums/gender_enum"
import { heirsEnum } from "../../../enums/heirs_enum"
import { HeirModel, heirsWomen } from "../../../models/heir_model"
import { formStyle } from "../../FormStyle";
import CounterUI from "../CounterUi";
import CustomHeirView from "../CustomHeirView"


function HusbandHeirView(props:any){

const {setHeirNumbers, wife, husband} = props;



const plusAction = () => {
  if(wife.count == wife.maxCount) return;
  ++wife.count;
  setHeirNumbers(wife.name, wife.count)
  husband.count = 0;
  setHeirNumbers(husband.name, husband.count)
}

const minusAction = () => {
  if(wife.count == 0) return;
  --wife.count;
  setHeirNumbers(wife.name, wife.count)
  husband.count = 0;
  setHeirNumbers(husband.name, husband.count)
}

  return <CustomHeirView key={-1} heirModel={wife} plusAction={() => plusAction()} minusAction={() => minusAction()}/>
}


function mapStateToProps({heirs}:any)  {
  return { 
   gender:heirs.gender,
   husband: heirs.spouse[heirsEnum.husband],
   wife: heirs.spouse[heirsEnum.wife],
 }
};




const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    setHeirNumbers,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(HusbandHeirView)