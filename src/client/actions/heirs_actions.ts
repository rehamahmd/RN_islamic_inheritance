
import { app_store } from '../../../App';
import { calculate } from '../../core';
import { GenderEnum } from '../../screens/enums/gender_enum';
import { heirsEnum } from '../../screens/enums/heirs_enum';
import { HeirModel } from '../../screens/models/heir_model';
import { SET_AMOUNT, SET_DECEASED_GENDER, SET_HEIR_NUMBERS, SET_CALCULATION_RESULT } from '../constants';


export function setAmount(amount:number) {
   
    return {
        type: SET_AMOUNT,
        payload: amount
        
    }
}

export function setHeirNumbers(key:string,count:number){
    return {
        type: SET_HEIR_NUMBERS,
        key: key,
        value: count,
    }
}

export function setDeceasedGender(gender:GenderEnum) {
    return {
        type: SET_DECEASED_GENDER,
        payload: gender
    }
}

export function calculateResult(heirCalc:any){
//    var obj: {[k: string]: any} = {};
//    var list =  Object.keys(heirs).map((key:any, i:number)=>{
//        var currentHeir: HeirModel = heirs[key];
//        var name:string = currentHeir.name;
//        var count:number = currentHeir.count;
//        obj[name] = count;
//     });
    var result = calculate(heirCalc);
    return {
        type: SET_CALCULATION_RESULT,
        payload: result
    }
}