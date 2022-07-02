import React, { Component, useState, useEffect } from 'react';  
 import { Platform, StyleSheet, View, Text,  
 Image, TouchableOpacity, Alert } from 'react-native';  
import { ApisClient } from '../client/apis_client';


 export default function SplashScreen(props:any){
    useEffect(() => {
        ApisClient.getArticlesAndSaveToSharedPref();
        setTimeout(function(){  
            props.navigation.navigate('CustomDrawer')
          }, 300); 
      
      }, []);
     return <View style={styles.SplashScreen_RootView}>  
     <View style={styles.SplashScreen_ChildView}>  
           <Image source={require('../assets/images/logo3.png')}  
        style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
    </View>  
 </View>;
 } 
  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        alignItems:'center',
        flex:1,  
        backgroundColor: '#4D6CFD',  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {   width:'60%',
        height:'60%',
        justifyContent: 'center',  
        alignItems: 'center',  
        
        flex:1,  
    },  
});  