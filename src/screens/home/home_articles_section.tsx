import React from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView, Image, TouchableOpacity } from "react-native";
import PagerView from "react-native-pager-view";
import { StyleColors } from "../../styles/colors";
import { Dimension } from "../../styles/dimensions";
import { formStyle } from "../calculator/fome_syle";
import CustomSvg from "../custom_svg";
import { AppIcons } from "../icons";

export default function HomeArticlesSection(props:any){
  
    return <View style={styles.maincontainer}>
        <View style={styles.screenContainer}>
            <Text style={[formStyle.title,styles.title,{ color:'#2E2F42', }]}>مقالات</Text>
            <TouchableOpacity><Text style={[formStyle.title,{color:'#2E2F42',fontSize:11 ,textAlignVertical:'center'}]}>المزيد<CustomSvg svgXmlData={AppIcons.backwardArrowGreySvg} width={8} height={8}/></Text></TouchableOpacity>
        </View>
        <View style={{flex:1}}>
        <ScrollView  horizontal={true}  >  
        {[1,2,3,4].map((item)=><View key={item} style={{height:Dimension.convertH(130),width:Dimensions.get("window").width - 50,backgroundColor:'#ffffff',shadowRadius: 5,
           borderRadius:10,
           shadowColor: "#000",
           shadowOffset: {
             width: 0,
             height: 2,
           },
           flexDirection:'row',
           paddingVertical:5,
           marginEnd:10,
           justifyContent:'space-between',
           alignItems:'center',
           shadowOpacity: 0.25,
           elevation: 0,}}>
           <TouchableOpacity>
           <View style={{ marginStart:10, borderRadius:10, justifyContent:'center',backgroundColor:'white', width:Dimension.convertH(90),height:Dimension.convertH(90)}}>
           <Image source={require('../../assets/images/images.jpg')}  style={[{width: Dimension.convertH(90), height: Dimension.convertH(70), resizeMode: 'contain'}]} /> 

           </View>
           </TouchableOpacity>
           {/* <TouchableOpacity style={{ width:'60%'}}> */}
          <TouchableOpacity style={{width:'60%', paddingHorizontal:10, justifyContent:'center',backgroundColor:'white', height:Dimension.convertH(90)}}>
          {/* <Text numberOfLines={2} ellipsizeMode='tail' style={[styles.title,{fontWeight:'bold', color:'#2E2F42',fontSize:16,lineHeight:25 }]}>Inheritance. What are the most common problems and how to solve them?</Text> */}
          <Text numberOfLines={2} ellipsizeMode='tail' style={[styles.title,formStyle.ArabicFontFamilyMedium,{ color:'#2E2F42',fontSize:16,lineHeight:25 }]}>الميراث. ما هي أكثر المشاكل شيوعًا وكيفية حلها</Text>

          
          </TouchableOpacity>
          {/* </TouchableOpacity> */}
          
          <TouchableOpacity>
          <View style={{width:"20%",height:'100%', justifyContent:'flex-start',position:'relative', end:15 }}>
          <Image source={require('../../assets/images/bookmark.png')}  style={[{width: Dimension.convertH(20), height: Dimension.convertH(30), resizeMode: 'contain',paddingEnd:20}]} /> 
          </View></TouchableOpacity>
           </View>)
}         
       </ScrollView>
       
        </View>
        </View>;
}

const styles = StyleSheet.create({
    
    maincontainer: {
      height:230,
      // flex:1,
      position:'absolute',
      // top:10,
      bottom:40,
        // height: '100%',
        // marginTop:Dimension.convertH(10),
        width: Dimensions.get('window').width,
       marginStart:'5%'
        // // flexDirection:'row',
        // justifyContent: 'space-between',
        // alignItems: 'flex-start',
       
      },
    screenContainer: {
      
      marginVertical:Dimension.convertH(10),
      width: '90%',
  
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
     
    },
   
    title: {
      fontSize: 16,
      fontFamily:'GE-SS-Text-Bold',
    },
 
    buttonTextStyle: {
      color: '#fdfdfd',
      fontWeight: '700',
    },
  });