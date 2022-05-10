import { StyleSheet } from "react-native";
import { StyleColors } from "../styles/colors";
import { Dimension } from "../styles/dimensions";


export const AppStyle = StyleSheet.create({ 
    appBarStyle  :{
        flexDirection:'row',
        height: Dimension.convertH(70),
        backgroundColor: StyleColors.mainColor,
        borderBottomEndRadius: Dimension.convertH(40),
        alignItems:'center',
        paddingHorizontal:Dimension.convertW(20)       
    }
})