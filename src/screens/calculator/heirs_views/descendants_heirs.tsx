import React , {useState }from "react"
import { useTranslation } from "react-i18next"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { setHeirNumbers } from "../../../client/actions/heirs_actions"
import { HeirModel } from "../../models/heir_model"
import CustomHeirView from "./CustomHeirView"


 const DescendantsHeirs = (props:any) => {

  const {setHeirNumbers, allHeirs} = props;
  const plusAction = (key:string, heir:HeirModel) => {
    ++heir.count;
    setHeirNumbers(key, heir.count)
  }
  
  const minusAction = (key:string, heir:HeirModel) => {
    --heir.count;
    setHeirNumbers(key, heir.count)
  }

  return <View style={{flex:1}}>
    <ScrollView style={{height:'100%'}}>{Object.keys(allHeirs).map((key:any, i:number)=>{
    return <CustomHeirView key={i} heirModel={allHeirs[key]} plusAction={() => plusAction(key,allHeirs[key])} minusAction={() => minusAction(key, allHeirs[key])}/>
  })}
  </ScrollView>
  </View>;
}

function mapStateToProps({heirs}:any)  {
  return {   
   allHeirs: heirs.allHeirs,
   gender: heirs.gender
 }
};




const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    setHeirNumbers,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(DescendantsHeirs)