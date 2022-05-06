import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor,
  ScrollView,
} from 'react-native';

import {PieChart} from 'react-native-charts-wrapper'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setDeceasedGender } from '../../client/actions/heirs_actions';
import { Locales } from '../../locales/keys';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
import { formStyle } from './fome_syle';

function CalculationPieChart (props:any) {
    const { t ,  i18n} = useTranslation();
    const [selectedEntry, setSelectedEntry] = useState({});
    const [proofs, setProof] = useState([]);
    const [isInitialRender, setIsInitialRender] = useState(true);
   var highlights= [{x:0}];
   var colors = props.colorsList;


useEffect(() => {
  if (isInitialRender) {
    setIsInitialRender(false);
    setSelectedEntry(props.values[0])
    setProof(props.values[0].proofs)
  }
},[proofs, isInitialRender]);

  var  data= {
    dataSets: [{
      values: props.values,
      label: ' ',
      config: {
        colors: colors,
        valueTextSize: 12,
        valueTextColor: processColor('black'),
        sliceSpace: 5,
        selectionShift: 13,       
        valueFormatter: "#.#'%'",
        styles:{fontFamily:formStyle.ArabicFontFamily.fontFamily},
        valueLineColor: processColor('black'),
        valueLinePart1Length: 0.5,
      }
    }],
  };
  var description = {
    text: 'نسبة  الورثة الفعليين',  //Percentage of actual heirs
    textSize: 12,
    textColor: processColor('darkgray'),
  }

  const handleSelect = (event:any)=> {
    let entry = event.nativeEvent
    if (entry == null) {
        setSelectedEntry({})
        setProof([])
    } else {
        setSelectedEntry(entry)
        setProof(entry.data.proofs)  
    }

  }

console.log("proofsssssssssssss");
console.log(proofs);
    return (
      <View style={{flex: 1,backgroundColor:StyleColors.bgColor,}}>
        <View style={styles.container}>
          <PieChart
            style={styles.chart}
            logEnabled={true}
            chartBackgroundColor={processColor(StyleColors.bgColor)}
            chartDescription={description}
            data={data}
            legend={{ 
                enabled: true,
                textSize: 12,
                form: 'SQUARE',
                horizontalAlignment: "LEFT",
                verticalAlignment: "CENTER",
                orientation: "VERTICAL",
                wordWrapEnabled: true,
                direction:"RIGHT_TO_LEFT" , // ARABIC
                fontFamily:formStyle.ArabicFontFamily.fontFamily,
              }}
            highlights={highlights}
            entryLabelColor={processColor('black')}
            
            entryLabelTextSize={10}
            drawEntryLabels={false}
            rotationEnabled={true}
            rotationAngle={45}
            usePercentValues={true}
            styledCenterText={{text:'', color: processColor('black'),  size: 20}}
            centerTextRadiusPercent={100}
            holeRadius={40}
            holeColor={processColor('#f0f0f0')}
            transparentCircleRadius={45}
            transparentCircleColor={processColor('#f0f0f088')}
            maxAngle={360}
            onSelect={handleSelect}
            onChange={(event) => console.log(event.nativeEvent)}
          />
        </View>
      <View style={{height:Dimension.convertH(50)}}/>
      <View style={{flex:1}}>
        <ScrollView>
        {proofs.map((pro:any,i:number)=>{
          var _selectedEntry : any = selectedEntry;
          var share:number = _selectedEntry.value/100;
         
          if(pro.quota == share){
          return <View key={i}>
             <Text>{pro.causing}</Text>
            <Text>{pro.name}</Text>
            <Text>{pro.quota}</Text>
            <Text>{_selectedEntry.count}</Text>
            <Text>{pro.textAr}</Text>
            <Text>{pro.Causing}</Text>
          </View>}}
        )}
        </ScrollView>
      </View>
      </View>
    
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chart: {
    flex: 1
  }
});


function mapStateToProps({heirs}:any)  {
    var allCount = [];
    var colorsList = [];
    var result = heirs.calcResult;
    
    result.sort(function(a:any, b:any){return ((b.share.n)/(b.share.d))-(a.share.n)/(a.share.d)});
    for(var i =0;i<result.length;i++ ){
        var color = heirs.allHeirs[result[i].name].color;
        var label = result[i].name;
        var share = parseFloat(((result[i].share.n/result[i].share.d)*100).toFixed(2));
        allCount.push({value:share,label:label,proofs:heirs.allHeirs[result[i].name].proof ?? []}),
        colorsList.push(processColor(color))
    }
     return { 
      heirs: heirs.heirs,
      allHeirs:heirs.allHeirs,
      calcResult:heirs.calcResult,
      amount:heirs.amount,
      values:allCount,//[{label:"1",value:10,},{label:"2",value:10,},{label:"3",value:16,},{label:"4",value:30,},{label:"5",value:12,},{label:"6",value:3,},{label:"7",value:15,},{label:"8",value:4,}], //allCount,
      colorsList:colorsList// [processColor('#CFCFC3'),processColor('#C79AA3'),processColor('#6E4D4C'),processColor('#445050'),processColor('#ADA7B1'),processColor('#8C92B3'),processColor('#B67378'),processColor('#535549'),] ,//colorsList
    }
   };
   
   
   
   
   const mapDispatchToProps = (dispatch:any) => (
     bindActionCreators({
       setDeceasedGender,
     }, dispatch)
   );
   export default connect(mapStateToProps, mapDispatchToProps)(CalculationPieChart)
