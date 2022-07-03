import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import HomeScreen from './screens/home_screen';
import  SelectLanguage  from './screens/settings/change_language';

import  CustomTabBar  from './screens/home/bottom_navigation_tab_bar';
import CalculatorScreen from './screens/calculator/calculator_screen';
import CalculationChart  from './screens/calculator/CalculationChart';
import CalculationPieChart from './screens/calculator/CalculationPieChart';
import CustomDrawer from '../CustomDrawer';
import ArticlesScreen from './screens/articles/ArticlesScreen';
import ArticlesDetails from './screens/articles/ArticlesDetails';
import SplashScreen from './screens/splash_screen';
import RulesScreen from './screens/home/RulesScreen';
import AboutUs from './screens/home/AboutUs';
import Home from './screens/home/home';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="CustomDrawer">    
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CalculatorScreen" component={CalculatorScreen} />
        <Stack.Screen name="CalculationChart" component={CalculationChart} />
        <Stack.Screen name="CustomDrawer" component={CustomDrawer} />
        <Stack.Screen name="CustomTabBar" component={CustomTabBar} />
        <Stack.Screen name="CalculationPieChart" component={CalculationPieChart} />
        <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
        <Stack.Screen name="ArticlesScreen" component={ArticlesScreen} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="ArticlesDetails" component={ArticlesDetails} />
        <Stack.Screen name="RulesScreen" component={RulesScreen} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;