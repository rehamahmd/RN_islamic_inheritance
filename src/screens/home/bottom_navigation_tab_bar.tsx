import React from 'react';
  import {
    Alert,
    Animated,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import { CurvedBottomBar } from 'react-native-curved-bottom-bar';

  import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
import { TextStyles } from '../../styles/text';
import ArticlesScreen from '../articles/ArticlesScreen';
import { formStyle } from '../calculator/fome_syle';
import CustomSvg from '../custom_svg';
import HomeScreen from '../home_screen';
import { AppIcons } from '../icons';
import SplashScreen from '../splash_screen';
import Home from './home';

  export const CustomTabBar = (props:any) => {
    const _renderIcon = (routeName: string, selectedTab: string) => {
      let icon = '';
      let title = '';
      switch (routeName) {
        case 'title1':
          icon = AppIcons.home;
          title = 'الرئيسية';
          break;
        case 'title2':
          icon = AppIcons.blackBookMark;
          title = 'المحفوظات';
          break;
      }
      return (
        <TouchableOpacity>
          <View style={{flexDirection:'row', justifyContent: 'center',alignItems:'center'}}>
            <CustomSvg
              width={18}
              height={18}
              svgXmlData={icon}
          />
          <View style={{width:10}} />
          <Text style={[TextStyles.H5_COLOR_13,formStyle.title,styles.title]}>{title}</Text>
          </View>
       </TouchableOpacity>
      );
    };
    const renderTabBar = ({ routeName, selectedTab, navigate }: any) => {

      return (
        <TouchableOpacity
          onPress={() => navigate(routeName)}
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          {_renderIcon(routeName, selectedTab)}
        </TouchableOpacity>
      );
    };
    return (
      <View style ={{flex:1}}>
        <CurvedBottomBar.Navigator
          style={styles.bottomBar}
          strokeWidth={0.5}
          height={60}
          circleWidth={55}
          bgColor="white"
          initialRouteName="title1"
          borderTopLeftRight
          swipeEnabled = {false}
          renderCircle={({ selectedTab, navigate }) => (
            <Animated.View style={styles.btnCircle}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  justifyContent: 'center',
                }}
                onPress={() => props.navigation.push('CalculatorScreen')}>
                <CustomSvg
                  width={20}
                  height={20}
                  svgXmlData={AppIcons.calc}/>
              </TouchableOpacity>
            </Animated.View>
          )}
          tabBar={renderTabBar}>
          <CurvedBottomBar.Screen
            name="title1"
            position="left"
            component={({ navigate }:{navigate:any}) => (
              <View style={{ flex: 1 }} >
                <Home navigation={props.navigation} onPressMenu={()=>props.onPressMenu()}/>
              </View>
            )}
          />
          <CurvedBottomBar.Screen
            name="title2"
            component={({ navigate }:{navigate:any}) => (
              <View style={{ flex: 1 }}>
                <ArticlesScreen />
              </View>
            )}
            position="right"
          />
        </CurvedBottomBar.Navigator>
   </View>
    );
  };

  export const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   padding: 20,
    },
    button: {
      marginVertical: 5,
    },
    bottomBar: {},
    btnCircle: {
      width: 60,
      height: 60,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 0.5,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 1,
      bottom: 30,
    },
    title: {
      fontSize: Dimension.convertW(13),
       color:StyleColors.Color0
    },
    imgCircle: {
      width: 30,
      height: 30,
      tintColor: 'gray',
    },
    img: {
      width: 30,
      height: 30,
    },
  });