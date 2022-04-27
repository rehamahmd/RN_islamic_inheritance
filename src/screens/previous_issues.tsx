
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { useTranslation } from "react-i18next";
import { Locales } from '../locales/keys';
import { StyleColors } from '../styles/colors';
import { TextStyles } from '../styles/text';


const HomePreviousIssueCard = (props:any) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity>
     <View style={styles.card}>
      <Text style={[TextStyles.H5_COLOR_13,styles.title]}>Your Previous Issues</Text>
      <Text style={[TextStyles.H5_COLOR_13,styles.title]}>{'->'}</Text>  
     </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   
  card:{
    height:45, 
    width:'90%',
    marginHorizontal:16,
    paddingHorizontal:16,
    borderRadius:2,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: StyleColors.Color5_3,
    
  },
  title: {
    fontSize: 14,
    color:StyleColors.Color0,
    lineHeight: 25
  },
  buttonStyle: {
    height: 54,
    width: '80%',
    marginTop: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2EE59D',
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(46, 229, 157, 0.5)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonTextStyle: {
    color: StyleColors.c1,
    fontWeight: '800',
    textAlign:'center',
  },
});

export default HomePreviousIssueCard;