import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import HomeScreen from './screens/home_screen';
import DetailScreen from './screens/details_screen';
import { SelectLanguage } from './screens/settings/change_language';
import { CalculationForm } from './screens/calculation_form/calculation_form';
import { CalculationFormIndex } from './screens/calculation_form';
import SplashScreen from './screens/splash_screen';
import Home from './screens/home/home';
import { CustomTabBar } from './screens/home/bottom_navigation_tab_bar';
import CalculatorScreen from './screens/calculator/calculator_screen';



const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="AppScreen">
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
        
        <Stack.Screen name="AppScreen" component={CustomTabBar} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
        <Stack.Screen name="CalculationForm" component={CalculationFormIndex} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;