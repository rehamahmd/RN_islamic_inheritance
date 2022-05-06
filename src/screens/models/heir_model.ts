import { StyleColors } from "../../styles/colors";
import AllData from "../calculator/data";
import { heirsEnum } from "../enums/heirs_enum";

export class HeirModel {
    name;
    displayName;
    count;
    maxCount;
    color;
    proof;
    
  
  
    constructor({name, displayName, count, maxCount, color, proof}:{name:string, displayName:string, count:number, maxCount:number, color?:string,proof?:any}) {
      this.name = name;
      this.displayName = displayName;
      this.count = count;
      this.maxCount = maxCount;
      this.color = color;
      this.proof = proof;
     
    }
  }
  

  // export const allHeirsList : Array<HeirModel> = [
  //   // Deceased
  //   // One of them husband or wife
  //   new HeirModel({displayName:'wife', name: heirsEnum.wife, count:0}),
  //   new HeirModel({displayName:'husband', name: heirsEnum.husband, count:0}),
   
  //   // sons
  //   new HeirModel({displayName:'son', name: heirsEnum.son, count:0}),
  //   new HeirModel({displayName:'daughter', name: heirsEnum.daughter, count:0}),
    
  //   // Descendants 
  //   new HeirModel({displayName:'son of son', name: heirsEnum.paternal_grand_son, count:0}),
  //   new HeirModel({displayName:'daughter of son', name: heirsEnum.paternal_grand_daughter, count:0}),

  //   // Parents 
  //   new HeirModel({displayName:'father', name: heirsEnum.father, count:0}),
  //   new HeirModel({displayName:'mother', name: heirsEnum.mother, count:0}),

  //   // Ancestors 
  //   new HeirModel({displayName:'grand father', name: heirsEnum.paternal_grand_father, count:0}),
  //   new HeirModel({displayName:'grand mother', name: heirsEnum.paternal_grand_mother, count:0}),
  //   new HeirModel({displayName:'grand grand mother', name: heirsEnum.maternal_grand_mother, count:0}),

  //    // Brothers 
  //    new HeirModel({displayName:'brother', name: heirsEnum.full_brother, count:0}),
  //    new HeirModel({displayName:'sister', name: heirsEnum.full_sister, count:0}),

  // ]



  // export const heirsView   = {

  //   'sons':[
  //     new HeirModel({displayName:'ابن', name: heirsEnum.son, count:0}),
  //     new HeirModel({displayName:'ابنه', name: heirsEnum.daughter, count:0}),
  //   ],

  //   'descendants':[
  //     new HeirModel({displayName:'ابن الابن', name: heirsEnum.paternal_grand_son, count:0}),
  //     new HeirModel({displayName:'بنت الابن', name: heirsEnum.paternal_grand_daughter, count:0}),  
  //   ],

  //   'parents':[
  //     new HeirModel({displayName:'الاب', name: heirsEnum.father, count:0}),
  //     new HeirModel({displayName:'الأم', name: heirsEnum.mother, count:0}),  
  //   ],

  //   'ancestors':[
  //     new HeirModel({displayName:'الجد لأب', name: heirsEnum.paternal_grand_father, count:0}),
  //     new HeirModel({displayName:'الجدة لأب', name: heirsEnum.paternal_grand_mother, count:0}),
  //     new HeirModel({displayName:'الجدة لأم', name: heirsEnum.maternal_grand_mother, count:0}),
  //   ],

  //   'siblings': [
  //     new HeirModel({displayName:'الأخ', name: heirsEnum.full_brother, count:0}),
  //     new HeirModel({displayName:'الأخت', name: heirsEnum.full_sister, count:0}),
  //   ]
  // }

  export const allHeirsForView = {
    // Deceased
    // One of them husband or wife
   
  //  [heirsEnum.wife]: new HeirModel({displayName:'wife', name: heirsEnum.wife, count:0,maxCount:100,color:'#F8EFBA'}),
  //  [heirsEnum.husband]:  new HeirModel({displayName:'husband', name: heirsEnum.husband, count:0,maxCount:100,color:'#8692BA'}),
    [heirsEnum.wife]: new HeirModel({displayName:'wife', name: heirsEnum.wife,  proof:AllData[heirsEnum.wife],count:0, maxCount:4,color:'#F8EFBA'}),
    [heirsEnum.husband]:  new HeirModel({displayName:'husband', name: heirsEnum.husband,proof:AllData[heirsEnum.husband], count:0,maxCount:1,color:StyleColors.color1}),
    // sons
    [heirsEnum.son]:  new HeirModel({displayName:'son', name: heirsEnum.son,proof:AllData[heirsEnum.son], count:0,maxCount:100,color:'#7F9B9B'}),
    [heirsEnum.daughter]:  new HeirModel({displayName:'daughter', name: heirsEnum.daughter,proof:AllData[heirsEnum.daughter], count:0,maxCount:100,color:'#ACA3E2'}),
    
    // Descendants 
    [heirsEnum.paternal_grand_son]:  new HeirModel({displayName:'son of son', name: heirsEnum.paternal_grand_son, proof:AllData[heirsEnum.paternal_grand_son],count:0,maxCount:100,color:'#4CB9CD'}),
    [heirsEnum.paternal_grand_daughter]:   new HeirModel({displayName:'daughter of son', name: heirsEnum.paternal_grand_daughter,proof:AllData[heirsEnum.paternal_grand_daughter], count:0,maxCount:100,color:'#ACA3E2'}),

    // Parents 
    [heirsEnum.father]:   new HeirModel({displayName:'father', name: heirsEnum.father, proof:AllData[heirsEnum.father],count:0,maxCount:100,color:'#8692BA'}),
    [heirsEnum.mother]:   new HeirModel({displayName:'mother', name: heirsEnum.mother, proof:AllData[heirsEnum.mother],count:0,maxCount:100,color:'#F5D7DF'}),

    // Ancestors 
    [heirsEnum.paternal_grand_father]:   new HeirModel({displayName:'grand father', name: heirsEnum.paternal_grand_father,proof:null, count:0,maxCount:100,color:'#A6D1C4'}),
    [heirsEnum.paternal_grand_mother]:   new HeirModel({displayName:'grand mother', name: heirsEnum.paternal_grand_mother, count:0,maxCount:100,color:'#DB9D86'}),
    [heirsEnum.maternal_grand_mother]:   new HeirModel({displayName:'grand grand mother', name: heirsEnum.maternal_grand_mother, count:0,maxCount:100,color:'##E395A5'}),

     // Brothers 
     [heirsEnum.full_brother]:   new HeirModel({displayName:'brother', name: heirsEnum.full_brother,proof:AllData[heirsEnum.full_brother], count:0,maxCount:100,color:StyleColors.Color7}),
     [heirsEnum.full_sister]:   new HeirModel({displayName:'sister', name: heirsEnum.full_sister,proof:AllData[heirsEnum.full_sister], count:0,maxCount:100,color:'#E092C2'}),
     [heirsEnum.paternal_sister]:   new HeirModel({displayName:'paternal_sister', name: heirsEnum.paternal_sister,proof:AllData[heirsEnum.paternal_sister], count:0,maxCount:100,color:'#947287'}),
     [heirsEnum.paternal_brother]:   new HeirModel({displayName:'paternal_brother', name: heirsEnum.paternal_brother, count:0,maxCount:100,color:'#447FAF'}),
     [heirsEnum.maternal_sibling]:   new HeirModel({displayName:'maternal_sibling', name: heirsEnum.maternal_sibling,proof:AllData[heirsEnum.paternal_sister], count:0,maxCount:100,color:'#CADDC2'}),


     // others
     [heirsEnum.full_nephew]:   new HeirModel({displayName:'full_nephew', name: heirsEnum.full_nephew, count:0,maxCount:100,color:'#A9B89A'}),
     [heirsEnum.paternal_nephew]:   new HeirModel({displayName:'paternal_nephew', name: heirsEnum.paternal_nephew, count:0,maxCount:100,color:'#3A3B4B'}),
     [heirsEnum.full_paternal_uncle]:   new HeirModel({displayName:'full_paternal_uncle', name: heirsEnum.full_paternal_uncle, count:0,maxCount:100,color:'#798375'}),
     [heirsEnum.paternal_paternal_uncle]:   new HeirModel({displayName:'paternal_paternal_uncle', name: heirsEnum.paternal_paternal_uncle, count:0,maxCount:100,color:'#DDE0DD'}),
     [heirsEnum.full_cousin]:   new HeirModel({displayName:'full_cousin', name: heirsEnum.full_cousin, count:0,maxCount:100,color:'#375C4B'}),
     [heirsEnum.paternal_cousin]:   new HeirModel({displayName:'paternal_cousin', name: heirsEnum.paternal_cousin, count:0,maxCount:100,color:'#73A1AA'}),

  }
  export const spouse = {
   [heirsEnum.wife]: new HeirModel({displayName:'wife', name: heirsEnum.wife, count:0, maxCount:4}),
   [heirsEnum.husband]:  new HeirModel({displayName:'husband', name: heirsEnum.husband, count:0,maxCount:1}),
  }
  
  export const heirsWomen ={
    
    [heirsEnum.daughter]:  new HeirModel({displayName:'daughter', name: heirsEnum.daughter, count:0,maxCount:100}),
    [heirsEnum.paternal_grand_daughter]:   new HeirModel({displayName:'daughter of son', name: heirsEnum.paternal_grand_daughter, count:0,maxCount:100}),
    [heirsEnum.mother]:   new HeirModel({displayName:'mother', name: heirsEnum.mother, count:0, maxCount:1}),
    [heirsEnum.paternal_grand_mother]:   new HeirModel({displayName:'grand mother', name: heirsEnum.paternal_grand_mother, count:0,maxCount:100}),
    [heirsEnum.maternal_grand_mother]:   new HeirModel({displayName:'grand grand mother', name: heirsEnum.maternal_grand_mother, count:0,maxCount:100}),
    [heirsEnum.full_sister]:   new HeirModel({displayName:'sister', name: heirsEnum.full_sister, count:0,maxCount:100}),
    [heirsEnum.paternal_sister]:   new HeirModel({displayName:'paternal_sister', name: heirsEnum.paternal_sister, count:0,maxCount:100,color:'#947287'}),
  }

  export const heirsMen = {
    
    [heirsEnum.son]:  new HeirModel({displayName:'son', name: heirsEnum.son, count:0,maxCount:100}),
    [heirsEnum.paternal_grand_son]:  new HeirModel({displayName:'son of son', name: heirsEnum.paternal_grand_son, count:0,maxCount:100}),
    [heirsEnum.father]:   new HeirModel({displayName:'father', name: heirsEnum.father, count:0,maxCount:100}),
    [heirsEnum.paternal_grand_father]:   new HeirModel({displayName:'grand father', name: heirsEnum.paternal_grand_father, count:0,maxCount:100}),
    [heirsEnum.full_brother]:   new HeirModel({displayName:'brother', name: heirsEnum.full_brother, count:0,maxCount:100}),
    [heirsEnum.full_nephew]:   new HeirModel({displayName:'full_nephew', name: heirsEnum.full_nephew, count:0,maxCount:100,color:'#76836A'}),
    [heirsEnum.paternal_nephew]:   new HeirModel({displayName:'paternal_nephew', name: heirsEnum.paternal_nephew, count:0,maxCount:100,color:'#3A3B4B'}),
    [heirsEnum.full_paternal_uncle]:   new HeirModel({displayName:'full_paternal_uncle', name: heirsEnum.full_paternal_uncle, count:0,maxCount:100,color:'#798375'}),
    [heirsEnum.paternal_paternal_uncle]:   new HeirModel({displayName:'paternal_paternal_uncle', name: heirsEnum.paternal_paternal_uncle, count:0,maxCount:100,color:'#DDE0DD'}),
    [heirsEnum.full_cousin]:   new HeirModel({displayName:'full_cousin', name: heirsEnum.full_cousin, count:0,maxCount:100,color:'#375C4B'}),
    [heirsEnum.paternal_cousin]:   new HeirModel({displayName:'paternal_cousin', name: heirsEnum.paternal_cousin, count:0,maxCount:100,color:'#73A1AA'}),
    [heirsEnum.paternal_brother]:   new HeirModel({displayName:'paternal_brother', name: heirsEnum.paternal_brother, count:0,maxCount:100,color:'#447FAF'}),
    [heirsEnum.maternal_sibling]:   new HeirModel({displayName:'maternal_sibling', name: heirsEnum.maternal_sibling, count:0,maxCount:100,color:'#CADDC2'}),
  }


  export const allCalcHeirs = {
    [heirsEnum.wife]: 0,
    [heirsEnum.son]: 0,
    [heirsEnum.daughter]:  0,
    
    // Descendants 
    [heirsEnum.paternal_grand_son]:  0,
    [heirsEnum.paternal_grand_daughter]:   0,

    // Parents 
    [heirsEnum.father]:   0,
    [heirsEnum.mother]:   0,

    // Ancestors 
    [heirsEnum.paternal_grand_father]:  0,
    [heirsEnum.paternal_grand_mother]:  0,
    [heirsEnum.maternal_grand_mother]:  0,

     // Brothers 
     [heirsEnum.full_brother]:   0,
     [heirsEnum.full_sister]:  0,
     [heirsEnum.paternal_sister]:   0,
     [heirsEnum.paternal_brother]:  0,


     // others
     [heirsEnum.full_nephew]:   0,
     [heirsEnum.paternal_nephew]:   0,
     [heirsEnum.full_paternal_uncle]:   0,
     [heirsEnum.paternal_paternal_uncle]:  0,
     [heirsEnum.full_cousin]:   0,
     [heirsEnum.paternal_cousin]:   0,


  }