import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { mainColor } from '../../styles/colors';
import { HeirModel } from '../models/heir_model';

export const HeirInputRow = (props:any) => {
 var heirModel: HeirModel = props.heir;  
  const [heirCount, setHeirCount] = useState(0);
  console.log(heirModel)
  return (
    <View style={{flexDirection: 'row', paddingBottom:20}}>
        <Text style={styles.nameText}>{heirModel.name}</Text>
        <View style={{flexDirection: 'row', alignItems:'center', width:100, justifyContent:'space-around'}}>
        <TouchableOpacity style={styles.btn} onPress={()=>heirCount + 1}>
            <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
        <Text>{heirCount}</Text>
       <View>
           <TouchableOpacity style={styles.btn} onPress={()=>heirCount - 1}>
             <Text style={styles.btnText}>+</Text>
           </TouchableOpacity>
        </View> 
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    btn: {
        width:35,
        height:35,
        justifyContent:'center',
        alignItems:'center',
        
        backgroundColor:mainColor
    },
    btnText:{
        fontSize:18,
        color:'white'
    },
    nameText:{
        fontSize:22,
        color:'black'
    }
});
