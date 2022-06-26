import { StyleSheet } from "react-native";
import { StyleColors } from "../../styles/colors";
import { Dimension } from "../../styles/dimensions";

export const formStyle = StyleSheet.create({
    formTitle:{
       fontSize:16,
       textAlign:'justify',
       fontFamily:'GE-SS-Text-Medium',
       color:StyleColors.white
    },
    selectedView:{
        height:30,
        paddingHorizontal:15,
       
    borderRadius:5,
    marginVertical:5,
    borderColor:StyleColors.c2, 
    backgroundColor:StyleColors.c4,
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'GE-SS-Text-Light',
}, 
unselectedView:{
    marginVertical:5,
   
    height:30,
    paddingHorizontal:15,
  
    borderRadius:5,
    borderColor:StyleColors.Color5_2, 
    backgroundColor:'transparent',
    borderWidth:3,
    justifyContent:'center',
    alignItems:'center',
},
selectedRadioView:{
    height:20,
    width:20,
    borderRadius:10,
    marginVertical:5,
    borderWidth:1,
    borderColor:StyleColors.c4, 
    backgroundColor:StyleColors.c4,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:Dimension.convertW(6)
},
unselectedRadioView:{
    height:20,
    width:20,
    borderRadius:10,
    marginVertical:5,
    borderColor:StyleColors.c4, 
    backgroundColor:'transparent',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:Dimension.convertW(6)
},
selectedText:{
    color:StyleColors.textColor,
    fontFamily:'GE-SS-Text-Medium',

},
unselectedText:{
    color:StyleColors.Color0,
    fontFamily:'GE-SS-Text-Medium',
},

ArabicFontFamily:{fontFamily:'GE-SS-Text-Light'},
ArabicFontFamilyBold:{fontFamily:'GE-SS-Text-Bold'},
ArabicFontFamilyMedium:{fontFamily:'GE-SS-Text-Medium'},
title:{
    fontSize:16,
    textAlign:'justify',
    fontFamily:'GE-SS-Text-Medium',
    color:StyleColors.textColor
 
},
subtitle:{
    fontSize:16,
    textAlign:'justify',
    fontFamily:'GE-SS-Text-Light',
    color:StyleColors.textColor
 
},
boxShadowStyle:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    paddingVertical:5,
  
    shadowOpacity: 0.25,
    elevation: 1,
}
});