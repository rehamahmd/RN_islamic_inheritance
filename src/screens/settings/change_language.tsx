import React from 'react';
import { useTranslation } from 'react-i18next';
import {Pressable,Text, View} from 'react-native';
import { Locales } from '../../locales/keys';
import RNRestart from 'react-native-restart';
// export const SelectLanguage = ({})=>{
//     const { i18n } = useTranslation();
//     // const changeLanguage=({lang}:{lang:string})=>{
//     //     i18n.changeLanguage(lang);
//     // };
//     return <View>
//         <Pressable
//         onPress={async()=>await i18n.changeLanguage('ar')}>
//         <Text>Arabic</Text>
//       </Pressable>
//       <Pressable
//         onPress={() => i18n.changeLanguage('en')}>
//         <Text>English</Text>
//       </Pressable>
//     </View>
// }

export const SelectLanguage = (props:any) => {
    const { i18n , t } = useTranslation()
   console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEee");
   console.log(props);
   console.log(i18n);
   console.log(t(Locales.letStart));
    const changeLanguage =async (lng:string) => {
        console.log(lng);
     i18n.changeLanguage(lng);
     await RNRestart.Restart()
    }
    return (
     <View style={{ flexDirection:'row', justifyContent:'space-around'}}>
      <Text onPress={() => changeLanguage('ar')} >AR</Text>
      <Text onPress={() => changeLanguage('en')} >EN</Text>
      
     </View>
    )
   }