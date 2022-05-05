import React , {useState }from "react"
import { useTranslation } from "react-i18next"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { setDeceasedGender } from "../../../client/actions/heirs_actions"
import { StyleColors } from "../../../styles/colors"
import { Dimension } from "../../../styles/dimensions"
import { GenderEnum } from "../../enums/gender_enum"
import { formStyle } from "../fome_syle"



function CustomHeirView(props:any){
  const { t } = useTranslation();
  const {heirModel, minusAction, plusAction} = props;
  console.log("--------------------");
  console.log(t(heirModel.name))
  console.log(heirModel.count)
  return <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:40,width:'100%',marginVertical:4}}>
        <View style={{}}>
      <Text style={[formStyle.subtitle]}>{`${t(heirModel.name)}`}</Text></View>
      <View style={[styles.inputContainer,formStyle.boxShadowStyle]}>
         <TouchableOpacity onPress={plusAction} style={[styles.btnStyle,{backgroundColor:StyleColors.color2_light}]}>
          <Text style={[formStyle.selectedText,{fontSize:16,color:StyleColors.color2}]}>+</Text>
         </TouchableOpacity>

        <View style={styles.inputStyle}>
        <Text style={[formStyle.title,{alignSelf:'center'}]}>{heirModel.count}</Text>
        </View>
        
       
        <TouchableOpacity onPress={minusAction} style={[styles.btnStyle,{backgroundColor:StyleColors.color1_light}]}>
            <Text style={[formStyle.selectedText,{fontSize:16,color:StyleColors.color1}]}>-</Text>
        </TouchableOpacity>
      </View>
    
  </View>
}


const styles = StyleSheet.create({
    inputContainer:{
        flexDirection:"row",
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:StyleColors.lightGrey,
        borderRadius:5,
        paddingHorizontal:4,
        paddingVertical:5,
     
    },
    inputStyle:{
        width:Dimension.convertH(35),
        flexDirection:"row",
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        
        
    },
    btnStyle:{
        flexDirection:"row",
        width:Dimension.convertH(40),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
      
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
export default connect(mapStateToProps, mapDispatchToProps)(CustomHeirView)