import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { StyleColors } from '../../styles/colors';


export function HeirSlider(props: any){
var activeWidth = props.width+'%';
    return <View style={{height:8,width:'100%', backgroundColor:StyleColors.lightGrey,borderRadius:5,flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{height:8, width:activeWidth, backgroundColor:props.color,borderRadius:5}}></View>
    </View>
}