import React , {useState }from "react"
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { StyleColors } from "../../../styles/colors"
import { Dimension } from "../../../styles/dimensions"
import { formStyle } from "../fome_syle"

function CounterUI(props:any){



return  <View style={[styles.inputContainer,formStyle.boxShadowStyle]}>
        <TouchableOpacity style={[styles.btnStyle,{backgroundColor:StyleColors.color1_light}]}>
            <Text style={[formStyle.selectedText,{fontSize:16,color:StyleColors.color1}]}>-</Text>
        </TouchableOpacity>
        <View style={styles.inputStyle}>
        <Text style={[formStyle.title,{alignSelf:'center'}]}>{0}</Text>
        </View>
        
        <TouchableOpacity style={[styles.btnStyle,{backgroundColor:StyleColors.color2_light}]}>
        <Text style={[formStyle.selectedText,{fontSize:16,color:StyleColors.color2}]}>+</Text>
        </TouchableOpacity>
    
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

export default (CounterUI)