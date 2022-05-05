import { StyleColors } from "../../styles/colors";
import { heirsEnum } from "../enums/heirs_enum";

export class HeirModel {
    name;
    displayName;
    count;
    maxCount;
    color;
    
  
  
    constructor({name, displayName, count, maxCount, color}:{name:string, displayName:string, count:number, maxCount:number, color?:string}) {
      this.name = name;
      this.displayName = displayName;
      this.count = count;
      this.maxCount = maxCount;
      this.color = color;
     
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
   
   [heirsEnum.wife]: new HeirModel({displayName:'wife', name: heirsEnum.wife, count:0,maxCount:100,color:'#F5D7DF'}),
   [heirsEnum.husband]:  new HeirModel({displayName:'husband', name: heirsEnum.husband, count:0,maxCount:100,color:'#8692BA'}),
   
    // sons
    [heirsEnum.son]:  new HeirModel({displayName:'son', name: heirsEnum.son, count:0,maxCount:100,color:'#8692BA'}),
    [heirsEnum.daughter]:  new HeirModel({displayName:'daughter', name: heirsEnum.daughter, count:0,maxCount:100,color:'#F3C5D4'}),
    
    // Descendants 
    [heirsEnum.paternal_grand_son]:  new HeirModel({displayName:'son of son', name: heirsEnum.paternal_grand_son, count:0,maxCount:100,color:'#8692BA'}),
    [heirsEnum.paternal_grand_daughter]:   new HeirModel({displayName:'daughter of son', name: heirsEnum.paternal_grand_daughter, count:0,maxCount:100,color:StyleColors.Color11_1}),

    // Parents 
    [heirsEnum.father]:   new HeirModel({displayName:'father', name: heirsEnum.father, count:0,maxCount:100,color:'#8692BA'}),
    [heirsEnum.mother]:   new HeirModel({displayName:'mother', name: heirsEnum.mother, count:0,maxCount:100,color:'#F5D7DF'}),

    // Ancestors 
    [heirsEnum.paternal_grand_father]:   new HeirModel({displayName:'grand father', name: heirsEnum.paternal_grand_father, count:0,maxCount:100,color:StyleColors.Color4}),
    [heirsEnum.paternal_grand_mother]:   new HeirModel({displayName:'grand mother', name: heirsEnum.paternal_grand_mother, count:0,maxCount:100,color:'#F5D7DF'}),
    [heirsEnum.maternal_grand_mother]:   new HeirModel({displayName:'grand grand mother', name: heirsEnum.maternal_grand_mother, count:0,maxCount:100,color:StyleColors.Color6}),

     // Brothers 
     [heirsEnum.full_brother]:   new HeirModel({displayName:'brother', name: heirsEnum.full_brother, count:0,maxCount:100,color:StyleColors.Color7}),
     [heirsEnum.full_sister]:   new HeirModel({displayName:'sister', name: heirsEnum.full_sister, count:0,maxCount:100,color:StyleColors.Color8}),

  }
  export const spouse = {
   [heirsEnum.wife]: new HeirModel({displayName:'wife', name: heirsEnum.wife, count:0, maxCount:4,color:StyleColors.Color9}),
   [heirsEnum.husband]:  new HeirModel({displayName:'husband', name: heirsEnum.husband, count:0,maxCount:1,color:StyleColors.Color10}),
  }
  
  export const heirsWomen ={
    
    [heirsEnum.daughter]:  new HeirModel({displayName:'daughter', name: heirsEnum.daughter, count:0,maxCount:100}),
    [heirsEnum.paternal_grand_daughter]:   new HeirModel({displayName:'daughter of son', name: heirsEnum.paternal_grand_daughter, count:0,maxCount:100}),
    [heirsEnum.mother]:   new HeirModel({displayName:'mother', name: heirsEnum.mother, count:0, maxCount:1}),
    [heirsEnum.paternal_grand_mother]:   new HeirModel({displayName:'grand mother', name: heirsEnum.paternal_grand_mother, count:0,maxCount:100}),
    [heirsEnum.maternal_grand_mother]:   new HeirModel({displayName:'grand grand mother', name: heirsEnum.maternal_grand_mother, count:0,maxCount:100}),
    [heirsEnum.full_sister]:   new HeirModel({displayName:'sister', name: heirsEnum.full_sister, count:0,maxCount:100}),

  }

  export const heirsMen = {
    
    [heirsEnum.son]:  new HeirModel({displayName:'son', name: heirsEnum.son, count:0,maxCount:100}),
    [heirsEnum.paternal_grand_son]:  new HeirModel({displayName:'son of son', name: heirsEnum.paternal_grand_son, count:0,maxCount:100}),
    [heirsEnum.father]:   new HeirModel({displayName:'father', name: heirsEnum.father, count:0,maxCount:100}),
    [heirsEnum.paternal_grand_father]:   new HeirModel({displayName:'grand father', name: heirsEnum.paternal_grand_father, count:0,maxCount:100}),
    [heirsEnum.full_brother]:   new HeirModel({displayName:'brother', name: heirsEnum.full_brother, count:0,maxCount:100}),


  }


  export const allCalcHeirs = {
    [heirsEnum.wife]: 0,
    // [heirsEnum.husband]:  0,
   
    [heirsEnum.daughter]: 0,
    [heirsEnum.paternal_grand_daughter]:  0,
    [heirsEnum.mother]:  0,
    [heirsEnum.paternal_grand_mother]:   0,
    [heirsEnum.maternal_grand_mother]:  0,
    [heirsEnum.full_sister]:  0,

    [heirsEnum.son]:  0,
    [heirsEnum.paternal_grand_son]:  0,
    [heirsEnum.father]:  0,
    [heirsEnum.paternal_grand_father]: 0,
    [heirsEnum.full_brother]: 0,


  }