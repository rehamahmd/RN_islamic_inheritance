import React , {useState }from "react"
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
// 
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { setSpouseHeir } from "../../../client/actions/heirs_actions"
import { Dimension } from "../../../styles/dimensions"
import { formStyle } from "../fome_syle"


 const AncestorsHeirs = (props:any) => {
    const {setSpouseHeir, ancestors} = props;
console.log("ddddddddddancestorsdddddddddddddddddd");
console.log(props);
console.log(ancestors)
    let [selected, setSelected] = React.useState<Array<string>>([]);
    const setData =(newValue:string)=>{
    if(selected.includes(newValue)){
        setSelected(selected => selected.filter(d=>d!=newValue) )
    } else {
        setSelected(selected => [...selected,newValue] )  
    }
    }
    return (
        <View style={{flex:1,flexDirection:'column',alignItems:'flex-start', justifyContent:'center'}}>
        <View>
            <Text style={formStyle.formTitle}>Ancestors</Text>
        </View>
        <View style={{height:Dimension.convertH(10)}}/>
        <ScrollView style={{flex:1}} horizontal>
        <TouchableOpacity onPress={()=>setData('father')} style={selected.includes('father')?formStyle.selectedView:formStyle.unselectedView}>
        <Text style={selected.includes('father')? formStyle.selectedText:formStyle.unselectedText}>father</Text>

        </TouchableOpacity>
        <View style={{width:Dimension.convertW(20)}}/>
        <TouchableOpacity onPress={()=>setData('mother')} style={selected.includes('mother')?formStyle.selectedView:formStyle.unselectedView}>
        <Text style={selected.includes('mother')?formStyle.selectedText:formStyle.unselectedText}>mother</Text>

        </TouchableOpacity>
        <View style={{width:Dimension.convertW(20)}}/>
        <TouchableOpacity onPress={()=>setData('paternal grand father')} style={selected.includes('paternal grand father')?formStyle.selectedView:formStyle.unselectedView}>
        <Text style={selected.includes('paternal grand father')? formStyle.selectedText:formStyle.unselectedText}>paternal grand father</Text>

        </TouchableOpacity>
        <View style={{width:Dimension.convertW(20)}}/>
        <TouchableOpacity onPress={()=>setData('paternal grand mother')} style={selected.includes('paternal grand mother')?formStyle.selectedView:formStyle.unselectedView}>
        <Text style={selected.includes('paternal grand mother')?formStyle.selectedText:formStyle.unselectedText}>paternal grand mother</Text>

        </TouchableOpacity>
        <View style={{width:Dimension.convertW(20)}}/>
        <TouchableOpacity onPress={()=>setData('maternal grand mother')} style={selected.includes('maternal grand mother')?formStyle.selectedView:formStyle.unselectedView}>
        <Text style={selected.includes('maternal grand mother')? formStyle.selectedText:formStyle.unselectedText}>maternal grand mother</Text>

        </TouchableOpacity>
        
        </ScrollView>
        
      </View>
    );


  
}



function mapStateToProps({heirs}:any)  {
    console.log("77777777777777777777777777777777777777777")
    console.log('heirs')
  return { 
    ancestors: heirs.ancestors,
   
 }
};

const mapDispatchToProps = (dispatch:any) => (
  bindActionCreators({
    setSpouseHeir,
  }, dispatch)
);
export default connect(mapStateToProps, mapDispatchToProps)(AncestorsHeirs)