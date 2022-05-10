
import React from 'react';
import {View, Text, StyleSheet, Pressable, ScrollView, FlatList} from 'react-native';
import { useTranslation } from "react-i18next";
import { Locales } from '../locales/keys';
import { StyleColors } from '../styles/colors';
import { AppBar } from './appbar';
import { TextStyles } from '../styles/text';
import HomeCard from './home_card';
import HomePreviousIssueCard from './previous_issues';
import CategoryCard from './category_card';
import { Dimension } from '../styles/dimensions';


const HomeScreen = (props:any) => {
  const { t } = useTranslation();

  return (
    <View style={styles.scrollviewStyle}>
      <AppBar/>
      <HomeCard />
      <View style={{height:15}} />
      <HomePreviousIssueCard />
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',marginTop:10,marginStart:16, marginEnd:16,width:'90%', flexWrap:'wrap'}}>
      <CategoryCard text={"Quran & sunna"} style={{width:Dimension.convertW(130), height: Dimension.convertW(75)}} color={StyleColors.c2} imagePath={require('../assets/images/koran.png')}/>
      <CategoryCard text={"Questions & Answers"}  color={StyleColors.c4} imagePath={require('../assets/images/question-mark.png')}/>
      <CategoryCard text={"Inheritance Laws"}  color={StyleColors.c3} imagePath={require('../assets/images/balance.png')}/>
     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
   
  },
  scrollviewStyle:{
    flex: 1,
    width: '100%',
    backgroundColor: StyleColors.white,
  },
  title: {
    fontSize: 22,
    fontFamily:'GE-SS-Text-Bold',
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
    color: '#fdfdfd',
    fontWeight: '700',
  },
});

export default HomeScreen;