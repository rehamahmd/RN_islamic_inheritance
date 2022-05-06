// import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomDrawerContent from './CustomDrawerContent';
import { CustomTabBar } from './src/screens/home/bottom_navigation_tab_bar';
import { StyleColors } from './src/styles/colors';
// import profile from './assets/profile.png';
// Tab ICons...
// import home from './assets/home.png';
// import search from './assets/search.png';
// import notifications from './assets/bell.png';
// import settings from './assets/settings.png';


export default function CustomDrawer(props:any) {
  var image = './src/assets/app_logo.png';
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  console.log("33333333333333333333")
  console.log(props)
const onPressMenu = () => {
        Animated.timing(scaleValue, {
          toValue: showMenu ? 1 : 0.88,
          duration: 300,
          useNativeDriver: true
        })
          .start()

        Animated.timing(offsetValue, {
          // YOur Random Value...
          toValue: showMenu ? 0 : 230,
          duration: 300,
          useNativeDriver: true
        })
          .start()

        Animated.timing(closeButtonOffset, {
          // YOur Random Value...
          toValue: !showMenu ? -30 : 0,
          duration: 300,
          useNativeDriver: true
        })
          .start()

        setShowMenu(!showMenu);
}
  return (
    <SafeAreaView style={styles.container}>

     <CustomDrawerContent />
       <Animated.View style={{
    flexGrow: 1,
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // paddingHorizontal: 15,
    // paddingVertical: 20,
    borderRadius: showMenu ? 15 : 0,
    // Transforming View...
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

// For multiple Buttons...
const TabButton = (currentTab:any, setCurrentTab:any, title:any, image:any) => {
  return (

    <TouchableOpacity onPress={() => {
      if (title == "LogOut") {
        // Do your Stuff...
      } else {
        setCurrentTab(title)
      }
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        backgroundColor: currentTab == title ? 'white' : 'transparent',
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 25, height: 25,
          tintColor: currentTab == title ? "#5359D1" : "white"
        }}></Image>

        <Text style={{
          fontSize: 15,
          fontWeight: 'bold',
          paddingLeft: 15,
          color: currentTab == title ? "#5359D1" : "white"
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
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

