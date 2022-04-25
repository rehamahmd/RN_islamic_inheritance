import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import HomeScreen from './screens/home_screen';
import DetailScreen from './screens/details_screen';
import { SelectLanguage } from './screens/settings/change_language';



const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
        <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;