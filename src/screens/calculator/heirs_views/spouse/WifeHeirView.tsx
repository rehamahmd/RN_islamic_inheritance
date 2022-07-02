import React , {useState }from "react"
import { useTranslation } from "react-i18next"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { setHeirNumbers } from "../../../../client/actions/heirs_actions"
import { Locales } from "../../../../locales/keys"
import { StyleColors } from "../../../../styles/colors"
import { Dimension } from "../../../../styles/dimensions"
import { GenderEnum } from "../../../enums/gender_enum"
import { heirsEnum } from "../../../enums/heirs_enum"
import { formStyle } from "../../FormStyle";


function WifeHeirView(props:any){
  const { t } = useTranslation();
  // i18n.language == 'ar'? -230: 230,
const {setHeirNumbers, wife,husband} = props;
const [husbandExist, setHusbandExist] = useState(false)
const _setHusbandExist=(isExist:boolean)=>{
  wife.count = 0;
  setHeirNumbers(wife.name,wife.count)
  setHusbandExist(isExist);
  if(isExist){
    husband.count = 1;
    setHeirNumbers(husband.name, husband.count)
  } else {
    husband.count = 0;
    setHeirNumbers(husband.name, husband.count)
  }
}
  return <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:40,width:'100%'}}>
       <View style={{}}>
        <Text style={formStyle.title}>{t(Locales.isHusbandExist)}</Text></View>
      <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
        <TouchableOpacity onPress={()=>_setHusbandExist(true)} style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={husbandExist==true?formStyle.selectedText:formStyle.unselectedText}>{t(Locales.yes)}</Text>
        <View style={husbandExist==true?formStyle.selectedRadioView:formStyle.unselectedRadioView}>
          <View style={{height:8,width:8,borderRadius:4,backgroundColor:StyleColors.bgColor}} />
        </View>
        </TouchableOpacity>
        <View style={{width:Dimension.convertW(20)}}/>
        <TouchableOpacity onPress={()=>_setHusbandExist(false)} style={{flexDirection:'row',alignItems:'center'}}>
        <Text style={husbandExist==false?formStyle.selectedText:formStyle.unselectedText}>{t(Locales.no)}</Text>
        <View style={husbandExist==false?formStyle.selectedRadioView:formStyle.unselectedRadioView}>
          <View style={{height:8,width:8,borderRadius:4,backgroundColor:StyleColors.bgColor}} />
        </View>
        </TouchableOpacity>
        </View> 
       
  </View>
}


function mapStateToProps({heirs}:any)  {
 
  return { 
  
    husband: heirs.spouse[heirsEnum.husband],
    wife: heirs.spouse[heirsEnum.wife],
  }
};




const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    setHeirNumbers,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(WifeHeirView)