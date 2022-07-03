// import { StatusBar } from 'expo-status-bar';

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setAmount } from '../../client/actions/heirs_actions';
import { ApisClient } from '../../client/apis_client';
import { SharedPreference } from '../../client/SharedPreference';
import i18n from '../../locales';
import { Locales } from '../../locales/keys';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
import { AppStyle } from '../appStyle';
import { formStyle } from '../calculator/FormStyle';
import { rulesAr, rulesEn } from '../calculator/rules';
import CustomSvg from '../custom_svg';
import { AppIcons } from '../icons';



 function RulesScreen(props:any) {
  const {t} = useTranslation();

  const appBar = () => {
    return <TouchableOpacity onPress={()=>props.navigation.goBack()} style={[AppStyle.appBarStyle, formStyle.boxShadowStyle]}>
         <CustomSvg svgXmlData={i18n.language == 'ar'? AppIcons.forwardArrowSvg: AppIcons.backwardArrowSvg} width={15} height={15}/>
         <View style={{width:20}}/>
         <Text style={[formStyle.formTitle, {fontSize:22}]}>{t(Locales.rules)}</Text>   
      </TouchableOpacity>
  }
 
  var rules = i18n.language == 'ar'?rulesAr.rules:rulesEn.rules;
  return (
      <View style={{flex:1,backgroundColor:StyleColors.bgColor}}>
        {appBar()}
        <View style={{height:10}}/>
       <View style={{flex:1, paddingBottom:Dimension.convertH(5), marginHorizontal:Dimension.convertW(15)}}>
          <ScrollView showsVerticalScrollIndicator={false}  style={{flex:1}}>
            {/* <Image source={require("../../assets/images/rules.jpg")} style={{height:50,width:'80%'}} /> */}
            {/* // Husband */}
            <View style={{height:20}}/>
            <View>
              <Text style={formStyle.title}>{rules.persons.husband.name}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.husband.first_state}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.husband.ref_1}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.husband.second_state}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.husband.ref_2}</Text>
            </View>
            <View style={{height:20}}/>
            {/* // Wife */}
            <View>
              <Text style={formStyle.title}>{rules.persons.wife.name}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.wife.first_state}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.wife.ref_1}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.wife.second_state}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.wife.ref_2}</Text>
            </View>
            <View style={{height:20}}/>
            {/* // daughter */}
            <View>
              <Text style={formStyle.title}>{rules.persons.daughter.name}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.daughter.first_state}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.daughter.ref_1}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.daughter.ref_2}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.daughter.second_state}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.daughter.ref_3}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.daughter.ref_4}</Text>
            </View>
            <View style={{height:20}}/>
            {/* // grand_daughter */}
            <View>
              <Text style={formStyle.title}>{rules.persons.grand_daughter.name}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.grand_daughter.first_state}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.grand_daughter.ref_1}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.grand_daughter.ref_2}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.grand_daughter.ref_3}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.grand_daughter.second_state}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.grand_daughter.ref_4}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.grand_daughter.ref_5}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.grand_daughter.ref_6}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.grand_daughter.third_state}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.grand_daughter.ref_7}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.grand_daughter.ref_8}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.grand_daughter.ref_9}</Text>


            </View>
            <View style={{height:20}}/>
               {/* // father */}
               <View>
              <Text style={formStyle.title}>{rules.persons.father.name}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.father.first_state}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.father.ref_1}</Text>
           
            </View>
            <View style={{height:20}}/>
            {/* // mother */}
            <View>
              <Text style={formStyle.title}>{rules.persons.mother.name}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.mother.first_state}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.mother.ref_1}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.mother.ref_2}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.mother.second_state}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.mother.ref_3}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.mother.ref_4}</Text>
            </View>
            <View style={{height:20}}/>
            {/* // paternal_grand_father */}
            <View>
              <Text style={formStyle.title}>{rules.persons.paternal_grand_father.name}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.paternal_grand_father.first_state}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.paternal_grand_father.ref_1}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.paternal_grand_father.ref_2}</Text>
            </View>
            
            <View style={{height:20}}/>
            
            {/* // paternal_grand_mother */}
            <View>
              <Text style={formStyle.title}>{rules.persons.paternal_grand_mother.name}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.paternal_grand_mother.first_state}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.paternal_grand_mother.ref_1}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.paternal_grand_mother.ref_2}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.paternal_grand_mother.ref_3}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.paternal_grand_mother.second_state}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.paternal_grand_mother.ref_4}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.paternal_grand_mother.ref_5}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.paternal_grand_mother.ref_6}</Text>
            </View>
            <View style={{height:20}}/>
             {/* // maternal_grand_mother */}
             <View>
              <Text style={formStyle.title}>{rules.persons.maternal_grand_mother.name}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.maternal_grand_mother.first_state}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.maternal_grand_mother.ref_1}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.maternal_grand_mother.second_state}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.maternal_grand_mother.ref_2}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.maternal_grand_mother.ref_3}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.maternal_grand_mother.ref_4}</Text>
            </View>
            <View style={{height:20}}/>
             {/* // full_sister */}
             <View>
              <Text style={formStyle.title}>{rules.persons.full_sister.name}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.full_sister.first_state}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.full_sister.ref_1}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.full_sister.ref_2}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.full_sister.ref_3}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.full_sister.ref_4}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.full_sister.second_state}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.full_sister.ref_5}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.full_sister.ref_6}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.full_sister.ref_7}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.full_sister.ref_8}</Text>
            </View>
            <View style={{height:20}}/>
             {/* // paternal_sister */}
             <View>
              <Text style={formStyle.title}>{rules.persons.paternal_sister.name}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.paternal_sister.first_state}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.paternal_sister.ref_1}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.paternal_sister.ref_2}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.paternal_sister.ref_3}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.paternal_sister.ref_4}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.paternal_sister.second_state}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.paternal_sister.ref_5}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.paternal_sister.ref_6}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.paternal_sister.ref_7}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.paternal_sister.ref_8}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.paternal_sister.third_state}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.paternal_sister.ref_9}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.paternal_sister.ref_10}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.paternal_sister.ref_11}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.paternal_sister.ref_12}</Text>
            </View>
            <View style={{height:20}}/>
              {/* // maternal_sibling */}
              <View>
              <Text style={formStyle.title}>{rules.persons.maternal_sibling.name}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.maternal_sibling.first_state}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.maternal_sibling.ref_1}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.maternal_sibling.ref_2}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.maternal_sibling.ref_3}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.maternal_sibling.second_state}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.maternal_sibling.ref_4}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.maternal_sibling.ref_5}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.maternal_sibling.ref_6}</Text>
            </View>
            <View style={{height:20}}/>
             {/* // maternal_sibling */}
             <View>
              <Text style={formStyle.title}>{rules.persons.maternal_sibling.name}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.maternal_sibling.first_state}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.maternal_sibling.ref_1}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.maternal_sibling.ref_2}</Text>
              <Text style={formStyle.subtitle2}>{ '   ' +rules.persons.maternal_sibling.ref_3}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.maternal_sibling.second_state}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.maternal_sibling.ref_4}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.maternal_sibling.ref_5}</Text>
              <Text style={formStyle.subtitle2}>{'   ' +rules.persons.maternal_sibling.ref_6}</Text>
            </View>
            <View style={{height:20}}/>
            {/* ///////////////////////// */}
            <View>
             
              <Text style={formStyle.title}>{rules.persons.tasib.ranking}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.son_daughter}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.paternal_grandson_paternal_granddaughter}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.father}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.full_brother_full_sister}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.paternal_brother_paternal_sister}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.paternal_grandfather}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.full_brothers_son}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.paternal_brothers_son}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.full_brothers_sons_son}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.paternal_brother_sons_son}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.paternal_uncle}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.paternal_paternal_uncle}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.paternal_uncles_son}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.paternal_paternal_uncles_son}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.paternal_uncles_sons_son}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.paternal_paternal_uncles_sons_son}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.paternal_uncles_sons_sons_son}</Text>
              <Text style={formStyle.subtitle2}>{rules.persons.tasib.paternal_paternal_uncles_sons_sons_son}</Text>

            </View>
            <View style={{height:30}}/>
          </ScrollView>
        </View>         
      </View>
  )
}





function mapStateToProps({heirs,App}:any)  {
  return { 
    amount: heirs.amount,
    articles: App.articles
 }
};


const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    setAmount,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(RulesScreen)


