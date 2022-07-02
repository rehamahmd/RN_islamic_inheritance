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
import { AppStyle } from '../appStyle';
import { formStyle } from './FormStyle';

function CalculationPieChart (props:any) {
    const { t ,  i18n} = useTranslation();
    const [selectedEntry, setSelectedEntry] = useState({} as any);
    const [proofs, setProof] = useState([]);
    const [isInitialRender, setIsInitialRender] = useState(true);
    const [text, setText] = useState('');
   var highlights= [{x:0}];
   var colors = props.colorsList;


useEffect(() => {
  setText(t(Locales.actual_heirs))
  if (isInitialRender) {
    setIsInitialRender(false);
    var s = props.selectedHeirs[(props.values[0].name).toString()];
    s["share"] = props.values[0].value;
    setSelectedEntry(s)
  
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
    text: text,  //Percentage of actual heirs
    textSize: 12,
    textColor: processColor('darkgray'),
    paddingTop:30
  }

  const handleSelect = (event:any)=> {
    let entry = event.nativeEvent
    if (entry == null) {
        setSelectedEntry({})
        setProof([])
    } else {
        setSelectedEntry(entry)
        setProof(entry.data.proofs)  
        var s = props.selectedHeirs[(entry.data.name).toString()];
        s["share"] = entry.data.value;
        setSelectedEntry(s)
    }

  }

 var _selectedEntry = selectedEntry;
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
      <View style={{height:Dimension.convertH(10)}}/>
     
      <View style={{flex:1}}>
       
         <ScrollView> 
    
           <View>
             <View style={{flexDirection:'row'}}>
              <Text style={[formStyle.title,formStyle.ArabicFontFamilyMedium,]}>{t(Locales.heir)}</Text>
              <View style={{width:30}}></View>
              <Text style={[formStyle.title,formStyle.ArabicFontFamily]}>{`${t(selectedEntry.name)}`}</Text>
            </View>
            <View style={{height:8}}/>
            {/* causing */}
            <View style={{flexDirection:'row'}}>
              <Text style={[formStyle.title,formStyle.ArabicFontFamilyMedium]}>{t(Locales.causing)}</Text>
              <View style={{width:30}}></View>
              <Text style={[formStyle.title,formStyle.ArabicFontFamily,{flexWrap:'wrap'}]}>{i18n.language == 'ar'?t(selectedEntry.causing) : t(selectedEntry.causingEn)}</Text>
            </View>
            <View style={{height:8}}/>
            {/* // */}
            <View style={{flexDirection:'row'}}>
              <Text style={[formStyle.title,formStyle.ArabicFontFamilyMedium,]}>{t(Locales.share_percentage)}</Text>
              <View style={{width:30}}></View>
              <Text style={[formStyle.title]}>{`% ${selectedEntry.share}`}</Text>
            </View>
            <View style={{height:8}}/>

          {props.amount == 0?<Text></Text>:  <View style={{flexDirection:'row'}}>
              <Text style={[formStyle.title,formStyle.ArabicFontFamilyMedium,]}>{t(Locales.amount)}</Text>
              <View style={{width:30}}></View>
              <Text style={[formStyle.title,formStyle.ArabicFontFamily,]}>{`${selectedEntry.share*props.amount/100}  ${t(Locales.currency)}`}</Text>
            </View>}
            {/* <View style={{height:5}}/> */}
            <View style={{height:8}}/>
            <View style={{flexDirection:'row'}}>
              <Text style={[formStyle.title,formStyle.ArabicFontFamilyMedium]}>{t(Locales.proofType)}</Text>
              <View style={{width:30}}></View>
              <Text style={[formStyle.title,formStyle.ArabicFontFamily,{flexWrap:'wrap'}]}>{i18n.language == 'ar'?t(selectedEntry.proofType) : t(selectedEntry.proofTypeEn)}</Text>
            </View>
            <View style={{height:8}}/>
            <View style={{flexDirection:'column'}}>
              <Text style={[formStyle.title,formStyle.ArabicFontFamilyMedium,]}>{t(Locales.textAr)}</Text>
              <Text style={[formStyle.title,formStyle.ArabicFontFamily,{paddingEnd:44}]}>{i18n.language == 'ar'?t(selectedEntry.textAr) : t(selectedEntry.textEn)}</Text>
            </View>
  
            <View style={{height:15}}/>
           
          
            
          </View>
        
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
  },

});


function mapStateToProps({heirs}:any)  {
    var allCount = [];
    var colorsList = [];
    var result = heirs.calcResult;
    const { t } = useTranslation();
    result.sort(function(a:any, b:any){return ((b.share.n)/(b.share.d))-(a.share.n)/(a.share.d)});
    for(var i =0;i<result.length;i++ ){
        var color = heirs.allHeirs[result[i].name].color;
        var label = t(result[i].name);
        var name = result[i].name;
        var share = parseFloat(((result[i].share.n/result[i].share.d)*100).toFixed(2));
        allCount.push({value:share,name:name,label:label,proofs:heirs.allHeirs[result[i].name].proof ?? []}),
        colorsList.push(processColor(color))
    }
     return { 
      heirs: heirs.heirs,
      allHeirs:heirs.allHeirs,
      calcResult:heirs.calcResult,
      amount:heirs.amount,
      values:allCount,
      colorsList:colorsList
    }
   };
   
   
   
   
   const mapDispatchToProps = (dispatch:any) => (
     bindActionCreators({
       setDeceasedGender,
     }, dispatch)
   );
   export default connect(mapStateToProps, mapDispatchToProps)(CalculationPieChart)
