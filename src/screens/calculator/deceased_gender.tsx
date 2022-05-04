import React , {useState }from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
// 
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { setDeceasedGender } from "../../client/actions/heirs_actions"
import { StyleColors } from "../../styles/colors"
import { Dimension } from "../../styles/dimensions"
import { GenderEnum } from "../enums/gender_enum"
import { heirsEnum } from "../enums/heirs_enum"
import { formStyle } from "./fome_syle"

function DeceasedGender(props:any){

const {setDeceasedGender, gender} = props;

const _setGender=(v:GenderEnum)=>{
  setDeceasedGender(v);
}
  return <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:40,width:'100%'}}>
      
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <TouchableOpacity onPress={()=>_setGender(GenderEnum.male)} style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={gender==GenderEnum.male?formStyle.selectedText:formStyle.unselectedText}>ذكر</Text>
        <View style={gender==GenderEnum.male?formStyle.selectedRadioView:formStyle.unselectedRadioView}>
          <View style={{height:8,width:8,borderRadius:4,backgroundColor:StyleColors.bgColor}} />
        </View>
        </TouchableOpacity>
        <View style={{width:Dimension.convertW(20)}}/>
        <TouchableOpacity onPress={()=>_setGender(GenderEnum.female)} style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={gender==GenderEnum.female?formStyle.selectedText:formStyle.unselectedText}>انثي</Text>
        <View style={gender==GenderEnum.female?formStyle.selectedRadioView:formStyle.unselectedRadioView}>
          <View style={{height:8,width:8,borderRadius:4,backgroundColor:StyleColors.bgColor}} />
        </View>
        </TouchableOpacity>
        </View> 
        <View style={{}}>
        <Text style={formStyle.title}>النوع</Text></View>
  </View>
}


function mapStateToProps({heirs}:any)  {
  return { 
   gender:heirs.gender
 }
};




const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    setDeceasedGender,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(DeceasedGender)