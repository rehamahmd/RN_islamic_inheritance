/* eslint-disable prettier/prettier */
import React from 'react';
import {ScrollView, View} from 'react-native';
import { HeirModel } from '../models/heir_model';
import {CalculationButton} from './calc_button';
import { HeirInputRow } from './heir_row';

export const CalculationForm = ({heirs}: {heirs: Array<HeirModel>}) => {
  var heirs: HeirModel[] = heirs ?? [];
  console.log(heirs);

  return (
    <View style={{height: '100%'}}>
      <ScrollView style={{flex: 1}}>
        {heirs.map((h: HeirModel) => {
          return <HeirInputRow key={h.name} heir={h}/>;
        })}
      </ScrollView>
      <CalculationButton />
    </View>
  );
};
