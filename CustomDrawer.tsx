// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CustomDrawerContent from './CustomDrawerContent';
import { setAppLanguage, getArticles } from './src/client/actions/app_actions';
import { ApisClient } from './src/client/apis_client';
import { SharedPreference } from './src/client/SharedPreference';
import i18n from './src/locales';
import { CustomTabBar } from './src/screens/home/bottom_navigation_tab_bar';
import { StyleColors } from './src/styles/colors';

 function CustomDrawer(props:any) {
  var image = './src/assets/app_logo.png';
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);
  const [articles, setArticles] = useState([]);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  const onPressMenu = () => {
      // Animated.timing(scaleValue, {
      //   toValue: showMenu ? 1 : 0.88,
      //   duration: 300,
      //   useNativeDriver: true
      // })
      //   .start()
      Animated.timing(offsetValue, {
        toValue: showMenu ? 0 : i18n.language == 'ar'? -230: 230,
        duration: 300,
        useNativeDriver: true
      })
        .start()
      // Animated.timing(closeButtonOffset, {
      //   toValue: 0,
      //   duration: 300,
      //   useNativeDriver: true
      // })
      //   .start()
      setShowMenu(!showMenu);
  }

  

  useEffect(() => {
    ApisClient.getArticlesAndSaveToSharedPref()
    props.getArticles();
    var articles = SharedPreference.articles;
    setArticles(articles);
    console.log("articles..............................");
    console.log(articles);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
        <CustomDrawerContent onPressMenu={() => onPressMenu()} navigation={props.navigation} />
        <Animated.View style={{
          flexGrow: 1,
          backgroundColor: 'white',
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          borderRadius: showMenu ? 15 : 0,
          transform: [
            { scale: scaleValue },
            { translateX: offsetValue }
        ]
      }}>
    <CustomTabBar onPressMenu={() => onPressMenu()} navigation={props.navigation}/>
    </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleColors.mainColor,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});


function mapStateToProps({App}:any)  {
  console.log("App.language");
  console.log(App.appLanguage);
  return { 

  //  language:App.appLanguage
 }
};




const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    setAppLanguage,
    getArticles
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer)
