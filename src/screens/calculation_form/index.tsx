
import React from 'react';
import { View } from 'react-native';
import { allHeirsList, HeirModel } from '../models/heir_model';
import { CalculationForm } from './calculation_form';

export const CalculationFormIndex = (props:any) => {
 var heirs:HeirModel[] = props.heirs ?? [];
 heirs = allHeirsList;
  return <View>
      <CalculationForm heirs={heirs}/>
  </View>
}