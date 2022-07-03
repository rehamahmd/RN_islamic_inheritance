

import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { calculateResult,setSelectedHeirs } from '../../client/actions/heirs_actions';
import { calculate } from '../../core';
import { printResults } from '../../core/result';
import { Locales } from '../../locales/keys';
import { StyleColors } from '../../styles/colors';
import { Dimension } from '../../styles/dimensions';
// import { mainColor } from '../../styles/colors';
import { HeirModel } from '../models/heir_model';
import AllData from './data';


import { formStyle } from './FormStyle';
const CalculateButton = (props:any) => {
 const {heirCalc, calculateResult, navigation} = props; 
 const { t } = useTranslation();
 const calc = () => {
   calculateResult(heirCalc);
   var results:any = [];
   var allSelectedHeirs = heirCalc;
  //  if (allSelectedHeirs != "") {
    
    results = calculate(allSelectedHeirs);
    var e = printResultss(results);
  // }



  getRef(allSelectedHeirs, results);
  
if(props.calcResult.length>0){
   props.navigation.pop();
   props.navigation.navigate('CalculationChart');
  } else {
    
  }
 }

 const printResultss=  (results:any)=> {
  const fractionToString = (r:any) => ({ ...r, share: r.share.toFraction() });
  return results.map(fractionToString);
}
 const getRef = (selection:any, results:any)=> {
  
  results = printResultss(results);
 
  var finalData:any = [];
  for (let i in selection) {
    AllData.forEach((item:any) => {
      // husband
      if (item.name == i && i == "husband" && selection[i] != 0) {
        results.forEach((result:any) => {
          // husband share 1/2
          if (
            result.name == "husband" &&
            result.share == "1/2" &&
            item.propId == 1
          ) {
            finalData.push(item);
          }
          // husband share 1/4
          if (
            result.name == "husband" &&
            result.share == "1/4" &&
            item.propId == 2
          ) {
            finalData.push(item);
          }
        });
      }

      // wife
      if (item.name == i && i == "wife" && selection[i] != 0) {
        results.forEach((result:any) => {
          // wife share 1/4
          if (
            result.name == "wife" &&
            result.share == "1/4" &&
            item.propId == 3
          ) {
            finalData.push(item);
          }
          // wife share 1/8
          if (
            result.name == "wife" &&
            result.share == "1/8" &&
            item.propId == 4
          ) {
            finalData.push(item);
          }
        });
      }

      // son
      if (item.name == i && i == "son" && selection[i] != 0) {
        // son with female
        if (
          selection.daughter != undefined &&
          selection.daughter != 0 &&
          item.propId == 5
        ) {
          finalData.push(item);
        }
        // son without female
        if (
          (selection.daughter == undefined || selection.daughter == 0) &&
          item.propId == 6
        ) {
          finalData.push(item);
        }
      }

      // daughter
      if (item.name == i && i == "daughter" && selection[i] != 0) {
        results.forEach((result:any) => {
          // daughter share 1/2
          if (
            result.name == "daughter" &&
            result.count == 1 &&
            (result.share == "1/2" || result.share == "3/4") &&
            item.propId == 7
          ) {
            finalData.push(item);
          }
          // daughter share 2/3
          if (
            result.name == "daughter" &&
            result.count > 1 &&
            (selection.son == undefined || selection.son == 0) &&
            item.propId == 8
          ) {
            finalData.push(item);
          }
          // daughter has male
          if (
            selection.son != undefined &&
            selection.son != 0 &&
            item.propId == 9
          ) {
            finalData.push(item);
          }
        });
      }

      // paternal_grand_son
      if (
        item.name == i &&
        i == "paternal_grand_son" &&
        selection[i] != 0
      ) {
        // paternal_grand_son blocked by son
        if (
          selection.son != undefined &&
          selection.son != 0 &&
          item.propId == 10
        ) {
          finalData.push(item);
        }
        // paternal_grand_son with female
        if (
          (selection.son == undefined || selection.son == 0) &&
          selection.paternal_grand_daughter != undefined &&
          selection.paternal_grand_daughter != 0 &&
          item.propId == 11
        ) {
          finalData.push(item);
        }
        // paternal_grand_son without female
        if (
          (selection.son == undefined || selection.son == 0) &&
          (selection.paternal_grand_daughter == undefined ||
            selection.paternal_grand_daughter == 0) &&
          item.propId == 12
        ) {
          finalData.push(item);
        }
      }

      // paternal_grand_daughter
      if (
        item.name == i &&
        i == "paternal_grand_daughter" &&
        selection[i] != 0 &&
        (selection.son == undefined || selection.son == 0)
      ) {
        results.forEach((result:any) => {
          // paternal_grand_daughter share 1/2
          if (
            result.name == "paternal_grand_daughter" &&
            result.count == 1 &&
            (result.share == "1/2" || result.share == "3/4") &&
            item.propId == 13
          ) {
            finalData.push(item);
          }
          // paternal_grand_daughter share 2/3
          if (
            result.name == "paternal_grand_daughter" &&
            result.count > 1 &&
            (selection.daughter == undefined || selection.daughter == 0) &&
            (selection.paternal_grand_son == undefined ||
              selection.paternal_grand_son == 0) &&
            item.propId == 14
          ) {
            finalData.push(item);
          }
          // paternal_grand_daughter share 1/6
          if (
            selection.daughter != undefined &&
            selection.daughter != 0 &&
            result.share == "1/6" &&
            item.propId == 16
          ) {
            finalData.push(item);
          }
        });

        // paternal_grand_daughter with paternal_grand_son
        if (
          selection.paternal_grand_son != undefined &&
          selection.paternal_grand_son != 0 &&
          item.propId == 15
        ) {
          finalData.push(item);
        }
      }

      // father
      if (item.name == i && i == "father" && selection[i] != 0) {
        results.forEach((result:any) => {
          // father share 1/6
          if (result.name == "father" && result.share == "1/6") {
            if (
              ((selection.son != undefined && selection.son != 0) ||
                (selection.paternal_grand_son != undefined &&
                  selection.paternal_grand_son != 0)) &&
              item.propId == 18
            ) {
              finalData.push(item);
            }
            if (
              ((selection.daughter != undefined &&
                selection.daughter != 0) ||
                (selection.paternal_grand_daughter != undefined &&
                  selection.paternal_grand_daughter != 0)) &&
              item.propId == 19
            ) {
              finalData.push(item);
            }
          }

          // father without branch
          if (
            (selection.son == undefined || selection.son == 0) &&
            (selection.paternal_grand_son == undefined ||
              selection.paternal_grand_son == 0) &&
            (selection.daughter == undefined || selection.daughter == 0) &&
            (selection.paternal_grand_daughter == undefined ||
              selection.paternal_grand_daughter == 0) &&
            item.propId == 20
          ) {
            finalData.push(item);
          }
        });
      }

      // mother
      if (item.name == i && i == "mother" && selection[i] != 0) {
        results.forEach((result:any) => {
          // mother share 1/6
          if (
            result.name == "mother" &&
            result.share == "1/6" &&
            item.propId == 21
          ) {
            finalData.push(item);
          }
          // mother share 1/3
          if (
            result.name == "mother" &&
            result.share == "1/3" &&
            item.propId == 22
          ) {
            finalData.push(item);
          }
        });
      }

      // full_brother
      if (
        item.name == i &&
        i == "full_brother" &&
        selection[i] != 0 &&
        (selection.son == undefined || selection.son == 0) &&
        (selection.father == undefined || selection.father == 0) &&
        item.propId == 28
      ) {
        finalData.push(item);
      }

      // maternal_sibling
      if (item.name == i && i == "maternal_sibling" && selection[i] != 0) {
        results.forEach((result:any) => {
          // maternal_sibling share 1/6
          if (
            result.name == "maternal_sibling" &&
            result.share == "1/6" &&
            result.count == 1 &&
            item.propId == 32
          ) {
            finalData.push(item);
          }
          // maternal_sibling share 1/3
          if (
            result.name == "maternal_sibling" &&
            result.share == "1/3" &&
            result.count > 1 &&
            item.propId == 33
          ) {
            finalData.push(item);
          }
        });
      }

      // full_sister
      if (item.name == i && i == "full_sister" && selection[i] != 0) {
        results.forEach((result:any) => {
          // single full_sister without full_brother
          if (
            result.name == "full_sister" &&
            result.count == 1 &&
            (selection.full_brother == undefined ||
              selection.full_brother == 0) &&
            item.propId == 38
          ) {
            finalData.push(item);
          }
          // multiple full_sister without full_brother
          if (
            result.name == "full_sister" &&
            result.count > 1 &&
            (selection.full_brother == undefined ||
              selection.full_brother == 0) &&
            item.propId == 39
          ) {
            finalData.push(item);
          }
        });
        // full_sister with full_brother
        if (
          selection.full_brother != undefined &&
          selection.full_brother != 0 &&
          item.propId == 40
        ) {
          finalData.push(item);
        }
        // full_sister with female
        if (
          ((selection.daughter != undefined && selection.daughter != 0) ||
            (selection.paternal_grand_daughter != undefined &&
              selection.paternal_grand_daughter != 0)) &&
          item.propId == 41
        ) {
          finalData.push(item);
        }
      }

      // paternal_sister
      if (item.name == i && i == "paternal_sister" && selection[i] != 0) {
        results.forEach((result:any) => {
          // paternal_sister share 1/2
          if (
            result.name == "paternal_sister" &&
            result.share == "1/2" &&
            result.count == 1 &&
            (selection.paternal_brother == undefined ||
              selection.paternal_brother == 0) &&
            item.propId == 43
          ) {
            finalData.push(item);
          }
          // paternal_sister share 2/3
          if (
            result.name == "full_sister" &&
            result.share == "2/3" &&
            result.count > 1 &&
            (selection.paternal_brother == undefined ||
              selection.paternal_brother == 0) &&
            item.propId == 44
          ) {
            finalData.push(item);
          }
        });
      }

      // full_nephew
      if (item.name == i && i == "full_nephew" && selection[i] != 0) {
        // full_nephew without male
        if (
          (selection.son == undefined || selection.son == 0) &&
          (selection.father == undefined || selection.father == 0) &&
          (selection.full_brother == undefined ||
            selection.full_brother == 0) &&
          (selection.paternal_brother == undefined ||
            selection.paternal_brother == 0) &&
          item.propId == 49
        ) {
          finalData.push(item);
        }

        // full_nephew with male
        if (
          ((selection.son != undefined && selection.son != 0) ||
            (selection.father != undefined && selection.father != 0) ||
            (selection.full_brother != undefined &&
              selection.full_brother != 0) ||
            (selection.paternal_brother != undefined &&
              selection.paternal_brother != 0)) &&
          item.propId == 51
        ) {
          finalData.push(item);
        }
      }

      // paternal_nephew
      if (item.name == i && i == "paternal_nephew" && selection[i] != 0) {
        // paternal_nephew without male
        if (
          (selection.son == undefined || selection.son == 0) &&
          (selection.father == undefined || selection.father == 0) &&
          (selection.full_brother == undefined ||
            selection.full_brother == 0) &&
          (selection.paternal_brother == undefined ||
            selection.paternal_brother == 0) &&
          item.propId == 52
        ) {
          finalData.push(item);
        }

        // paternal_nephew with male
        if (
          ((selection.son != undefined && selection.son != 0) ||
            (selection.father != undefined && selection.father != 0) ||
            (selection.full_brother != undefined &&
              selection.full_brother != 0) ||
            (selection.paternal_brother != undefined &&
              selection.paternal_brother != 0)) &&
          item.propId == 54
        ) {
          finalData.push(item);
        }
      }

      // full_paternal_uncle
      if (
        item.name == i &&
        i == "full_paternal_uncle" &&
        selection[i] != 0
      ) {
        // full_paternal_uncle without male
        if (
          (selection.son == undefined || selection.son == 0) &&
          (selection.father == undefined || selection.father == 0) &&
          (selection.full_brother == undefined ||
            selection.full_brother == 0) &&
          (selection.paternal_brother == undefined ||
            selection.paternal_brother == 0) &&
          item.propId == 55
        ) {
          finalData.push(item);
        }

        // full_paternal_uncle with male
        if (
          ((selection.son != undefined && selection.son != 0) ||
            (selection.father != undefined && selection.father != 0) ||
            (selection.full_brother != undefined &&
              selection.full_brother != 0) ||
            (selection.paternal_brother != undefined &&
              selection.paternal_brother != 0)) &&
          item.propId == 56
        ) {
          finalData.push(item);
        }
      }

      // paternal_paternal_uncle
      if (
        item.name == i &&
        i == "paternal_paternal_uncle" &&
        selection[i] != 0
      ) {
        // paternal_paternal_uncle without male
        if (
          (selection.son == undefined || selection.son == 0) &&
          (selection.father == undefined || selection.father == 0) &&
          (selection.full_brother == undefined ||
            selection.full_brother == 0) &&
          (selection.paternal_brother == undefined ||
            selection.paternal_brother == 0) &&
          (selection.full_paternal_uncle == undefined ||
            selection.full_paternal_uncle == 0) &&
          item.propId == 57
        ) {
          finalData.push(item);
        }

        // paternal_paternal_uncle with male
        if (
          ((selection.son != undefined && selection.son != 0) ||
            (selection.father != undefined && selection.father != 0) ||
            (selection.full_brother != undefined &&
              selection.full_brother != 0) ||
            (selection.paternal_brother != undefined &&
              selection.paternal_brother != 0) ||
            (selection.full_paternal_uncle != undefined &&
              selection.full_paternal_uncle != 0)) &&
          item.propId == 58
        ) {
          finalData.push(item);
        }
      }

      // full_cousin
      if (item.name == i && i == "full_cousin" && selection[i] != 0) {
        // full_cousin without male
        if (
          (selection.son == undefined || selection.son == 0) &&
          (selection.father == undefined || selection.father == 0) &&
          (selection.full_brother == undefined ||
            selection.full_brother == 0) &&
          (selection.full_paternal_uncle == undefined ||
            selection.full_paternal_uncle == 0) &&
          (selection.paternal_paternal_uncle == undefined ||
            selection.paternal_paternal_uncle == 0) &&
          item.propId == 59
        ) {
          finalData.push(item);
        }

        // full_cousin with male
        if (
          ((selection.son != undefined && selection.son != 0) ||
            (selection.father != undefined && selection.father != 0) ||
            (selection.full_brother != undefined &&
              selection.full_brother != 0) ||
            (selection.paternal_brother != undefined &&
              selection.paternal_brother != 0) ||
            (selection.full_paternal_uncle != undefined &&
              selection.full_paternal_uncle != 0) ||
            (selection.paternal_paternal_uncle != undefined &&
              selection.paternal_paternal_uncle != 0)) &&
          item.propId == 60
        ) {
          finalData.push(item);
        }
      }

      // paternal_cousin
      if (item.name == i && i == "paternal_cousin" && selection[i] != 0) {
        // paternal_cousin without male
        if (
          (selection.son == undefined || selection.son == 0) &&
          (selection.father == undefined || selection.father == 0) &&
          (selection.full_brother == undefined ||
            selection.full_brother == 0) &&
          (selection.paternal_brother == undefined ||
            selection.paternal_brother == 0) &&
          (selection.full_paternal_uncle == undefined ||
            selection.full_paternal_uncle == 0) &&
          (selection.paternal_paternal_uncle == undefined ||
            selection.paternal_paternal_uncle == 0) &&
          item.propId == 61
        ) {
          finalData.push(item);
        }

        // paternal_cousin with male
        if (
          ((selection.son != undefined && selection.son != 0) ||
            (selection.father != undefined && selection.father != 0) ||
            (selection.full_brother != undefined &&
              selection.full_brother != 0) ||
            (selection.paternal_brother != undefined &&
              selection.paternal_brother != 0) ||
            (selection.full_paternal_uncle != undefined &&
              selection.full_paternal_uncle != 0) ||
            (selection.full_cousin != undefined &&
              selection.full_cousin != 0)) &&
          item.propId == 62
        ) {
          finalData.push(item);
        }
      }

      // paternal_grand_father
      if (
        item.name == i &&
        i == "paternal_grand_father" &&
        selection[i] != 0
      ) {
        results.forEach((result:any) => {
          // paternal_grand_father share 1/6
          if (
            result.name == "paternal_grand_father" &&
            result.share == "1/6"
          ) {
            // paternal_grand_father without father or male
            if (
              (selection.father == undefined ||
                selection.father == 0 ||
                selection.son == undefined ||
                selection.son == 0 ||
                selection.paternal_grand_son == undefined ||
                selection.paternal_grand_son == 0) &&
              item.propId == 63
            ) {
              finalData.push(item);
            }
            // paternal_grand_father without father or female
            if (
              (selection.father == undefined ||
                selection.father == 0 ||
                selection.daughter == undefined ||
                selection.daughter == 0 ||
                selection.paternal_grand_daughter == undefined ||
                selection.paternal_grand_daughter == 0) &&
              item.propId == 64
            ) {
              finalData.push(item);
            }
          }
        });
        // paternal_grand_father with father
        if (
          selection.father != undefined &&
          selection.father != 0 &&
          item.propId == 65
        ) {
          finalData.push(item);
        }
      }

      // paternal_grand_mother
      if (
        item.name == i &&
        i == "paternal_grand_mother" &&
        selection[i] != 0
      ) {
        if (
          (selection.father == undefined || selection.father == 0) &&
          (selection.mother == undefined || selection.mother == 0) &&
          item.propId == 66
        ) {
          finalData.push(item);
        }
      }

      // maternal_grand_mother
      if (
        item.name == i &&
        i == "maternal_grand_mother" &&
        selection[i] != 0
      ) {
        if (
          (selection.father == undefined || selection.father == 0) &&
          (selection.mother == undefined || selection.mother == 0) &&
          item.propId == 68
        ) {
          finalData.push(item);
        }
      }
    });
  }
  // finalData = new Set(finalData);


  var data :any= {};
  for (let index = 0; index < finalData.length; index++) {
    const element = finalData[index];
    data[element.name] = element;
  }

  props.setSelectedHeirs(data);
}
  return (
    <View style={styles.btnContainer}>
           <TouchableOpacity style={styles.btn} onPress={()=>calc()}>
             <Text style={[styles.btnText,formStyle.ArabicFontFamilyMedium]}>{t(Locales.calculate)}</Text>
           </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    btnContainer:{
      position:'relative',top:'-10%',
        height:'14%',
        width:'100%',
        backgroundColor:StyleColors.bgColor,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        paddingVertical:5,
      
        shadowOpacity: 0.25,
        elevation: 2,
        justifyContent:'center',
        alignItems:'center',
        
    },
    btn: {
        width:Dimension.convertW(230),
        height:Dimension.convertH(45),
        borderRadius:22,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:StyleColors.mainColor
        
        // backgroundColor:mainColor
    },
    btnText:{
        fontSize:18,
        color:'white'
    },
    nameText:{
        fontSize:22,
        color:'black'
    }
});


function mapStateToProps({heirs}:any)  {
  return { 
    heirCalc: heirs.heirs,
    heirsData: heirs.heirsData,
    calcResult:heirs.calcResult,
 }
};




const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    calculateResult,
    setSelectedHeirs
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(CalculateButton)


