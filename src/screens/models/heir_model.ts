import { heirsEnum } from "../enums/heirs_enum";

export class HeirModel {
    name;
    displayName;
    count;
    
  
  
    constructor({name, displayName, count}:{name:string, displayName:string, count:number}) {
      this.name = name;
      this.displayName = displayName;
      this.count = count;
     
    }
  }
  

  export const allHeirsList : Array<HeirModel> = [
    // Deceased
    // One of them husband or wife
    new HeirModel({displayName:'wife', name: heirsEnum.wife, count:0}),
    new HeirModel({displayName:'husband', name: heirsEnum.husband, count:0}),
   
    // sons
    new HeirModel({displayName:'son', name: heirsEnum.son, count:0}),
    new HeirModel({displayName:'daughter', name: heirsEnum.daughter, count:0}),
    
    // Descendants 
    new HeirModel({displayName:'son of son', name: heirsEnum.paternal_grand_son, count:0}),
    new HeirModel({displayName:'daughter of son', name: heirsEnum.paternal_grand_daughter, count:0}),

    // Parents 
    new HeirModel({displayName:'father', name: heirsEnum.father, count:0}),
    new HeirModel({displayName:'mother', name: heirsEnum.mother, count:0}),

    // Ancestors 
    new HeirModel({displayName:'grand father', name: heirsEnum.paternal_grand_father, count:0}),
    new HeirModel({displayName:'grand mother', name: heirsEnum.paternal_grand_mother, count:0}),
    new HeirModel({displayName:'grand grand mother', name: heirsEnum.maternal_grand_mother, count:0}),

     // Brothers 
     new HeirModel({displayName:'brother', name: heirsEnum.full_brother, count:0}),
     new HeirModel({displayName:'sister', name: heirsEnum.full_sister, count:0}),

  ]


