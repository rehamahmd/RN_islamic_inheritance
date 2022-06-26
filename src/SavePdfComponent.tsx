import React, { Component, useEffect, useState ,} from 'react';

import {
  Alert,
  PermissionsAndroid,
  Platform,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import RNHTMLtoPDF from 'react-native-html-to-pdf';

import * as RNFS from 'react-native-fs';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { formStyle } from './screens/calculator/FormStyle';
import { StyleColors } from './styles/colors';
import { Dimension } from './styles/dimensions';
 const SavePdfComponent = (props:any) => {
  const [content, setContent] = useState("");
  const [downloadsFolder, setDownloadsFolder] = useState('');
  const [documentsFolder, setDocumentsFolder] = useState('');
  const [externalDirectory, setExternalDirectory] = useState('');
  const [fileSaved, setFileSaved] = useState("");

  useEffect(() => {
    //get user's file paths from react-native-fs
    setDownloadsFolder(RNFS.DownloadDirectoryPath);
    setDocumentsFolder(RNFS.DocumentDirectoryPath); //alternative to MainBundleDirectory.
    setExternalDirectory(RNFS.ExternalStorageDirectoryPath);
  }, []);
 async function createPDF() {
    let options = {
      html: `<h1>PDF TEST</h1>
      
      ${props.amount} <br/>
      ${props.values.map((value:any)=>{
        return <h1>{value}</h1>
      })} <br/>
      ${props.calcResult}
      
      
      
      
      
      
      
      
      
      `,
      fileName: 'hhh',
      directory: 'Documents',
    };

    let file = await RNHTMLtoPDF.convert(options)
    console.log("file.filePath....................................");
    console.log(file.filePath);
    setFileSaved(file.filePath??"");
  }

  const writeFile = async() => {
    await createPDF();
    var path = downloadsFolder + '/inheritance.pdf';
    var fileSaved2 = fileSaved;
    console.log("content.content....................................");
    console.log(path);
    console.log(fileSaved2);
    RNFetchBlob.fs.cp(fileSaved, path)
    // RNFS.writeFile(path, content, 'utf8')
     .then(() => {
      Alert.alert("File Saved At +", path);
      console.log('FILE WRITTEN!')
     })
     .catch((err) => console.log('eeeeeeeeeeeeeeeeeeeee'+err.message));
  }
  

    return(
      <TouchableOpacity style={styles.btn} onPress={writeFile}>
          <Text style={[styles.btnText,formStyle.ArabicFontFamilyMedium]}>{'حفظ ك pdf'}</Text>
      </TouchableOpacity>
    );
  
}

const styles=StyleSheet.create({
  btn: {
    width:Dimension.convertW(150),
    height:Dimension.convertH(40),
    borderRadius:22,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:StyleColors.mainColor
  
  },
  btnText:{
      fontSize:18,
      color:'white'
  },
})




function mapStateToProps({heirs}:any)  {
  var allCount = [];

  var result = heirs.calcResult;
  const { t } = useTranslation();
  result.sort(function(a:any, b:any){return ((b.share.n)/(b.share.d))-(a.share.n)/(a.share.d)});
  for(var i =0;i<result.length;i++ ){
      var label = t(result[i].name);
      var share = parseFloat(((result[i].share.n/result[i].share.d)*100).toFixed(2));
      allCount.push({value:share,label:label,proofs:heirs.allHeirs[result[i].name].proof ?? []});
  }
   return { 
    heirs: heirs.heirs,
    allHeirs:heirs.allHeirs,
    calcResult:heirs.calcResult,
    amount:heirs.amount,
    values:allCount,//[{label:"1",value:10,},{label:"2",value:10,},{label:"3",value:16,},{label:"4",value:30,},{label:"5",value:12,},{label:"6",value:3,},{label:"7",value:15,},{label:"8",value:4,}], //allCount,
    
  }
 };
 
 
 

 
 export default connect(mapStateToProps, null)(SavePdfComponent)
