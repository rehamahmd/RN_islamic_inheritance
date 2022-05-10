import React from "react"
import {View, Dimensions, Image, Text, TouchableOpacity, StyleSheet } from "react-native"
import { StyleColors } from "../../styles/colors"
import { Dimension } from "../../styles/dimensions"
import { formStyle } from "../calculator/fome_syle"
import CustomSvg from "../custom_svg"
import { AppIcons } from "../icons"


export const ArticlesCard = ({item}:any) => {
    return   (<View key={item} style={styles.mainCardStyle}>
        <TouchableOpacity>
            <View style={{ marginStart:10, borderRadius:10, justifyContent:'center',backgroundColor:'white', width:Dimension.convertH(90),height:Dimension.convertH(90)}}>
              <Image source={item.imagePath}  style={[{width: Dimension.convertH(90), height: Dimension.convertH(70), resizeMode: 'contain'}]} /> 
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={{width:'60%', paddingHorizontal:10, justifyContent:'center',backgroundColor:'white', height:Dimension.convertH(90)}}>
            <Text numberOfLines={2} ellipsizeMode='tail' style={[styles.title,formStyle.ArabicFontFamilyMedium,{ color:'#2E2F42',fontSize:16,lineHeight:25 }]}>{item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <View style={{width:"20%",height:'100%', justifyContent:'flex-start',position:'relative', end:15,top:15 }}>
              {/* <Image source={item.isSaved?require('../../assets/images/bookmark.png'):require('../../assets/images/bookmark.png')} style={[{width: Dimension.convertH(20), height: Dimension.convertH(30), resizeMode: 'contain',paddingEnd:20}]} />  */}
              <CustomSvg svgXmlData={item.isSaved? AppIcons.emptyBookmark: AppIcons.emptyBookmark} width={20} height={20}/>
            </View>
        </TouchableOpacity>
    </View>)
}

const styles = StyleSheet.create({
    mainCardStyle:{
                
    height:Dimension.convertH(130),
    width:Dimensions.get("window").width- Dimension.convertW(30),
    backgroundColor:StyleColors.white,
    shadowRadius: 5,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    flexDirection:'row',
    paddingVertical:5,
    marginVertical:7,
    justifyContent:'space-between',
    alignItems:'center',
    shadowOpacity: 0.25,
    elevation: 0
    },
    title: {
        fontSize: 16,
        fontFamily:'GE-SS-Text-Bold',
      },
   
})