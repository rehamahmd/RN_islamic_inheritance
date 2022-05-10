

import { GenderEnum } from "../../screens/enums/gender_enum";
import { heirsEnum } from "../../screens/enums/heirs_enum";
import { allCalcHeirs, allHeirsForView, HeirModel, heirsMen, heirsWomen, spouse } from "../../screens/models/heir_model";
import { ADD_DESCENDANTS_HEIRS, ADD_SPOUSE_HEIR, SET_DECEASED_GENDER, SET_HEIR_NUMBERS,SET_CALCULATION_RESULT, SET_AMOUNT } from "../constants";

import _ from "lodash";

const initialState = {
  // heirs: <Array<heirsEnum>>[],
  gender: GenderEnum.male,
  amount: 0,
  allHeirs: allHeirsForView,
  spouse: spouse,
  currentHeir: HeirModel,
  heirs: allCalcHeirs,
  heirsWomen: heirsWomen,
  heirsMen: heirsMen,
  calcResult: []
};

export default function heirsReducer(state = initialState, action:any) {
  switch (action.type) {

    case SET_DECEASED_GENDER:
      var newHeirs = {};
        if(action.payload == GenderEnum.male){
          var key = heirsEnum.wife;
          newHeirs = state.heirs;
          _.omit(newHeirs, key);
        } else {
          var key = heirsEnum.husband;
          newHeirs = state.heirs;
          _.omit(newHeirs, key);
        }
      return {
        ...state,
        gender: action.payload,
        heirs:newHeirs 
      };
      case ADD_SPOUSE_HEIR:
        return {
          ...state,
          heirs: action.payload
        };
        case SET_HEIR_NUMBERS:
          return {
            ...state, heirs: {
              ...state.heirs,
              [action.key]: action.value,
            }
          }
          case SET_CALCULATION_RESULT:  
           return {
             ...state, ...state.calcResult,
             calcResult:action.payload
           }
           case SET_AMOUNT:  
           return {
             ...state,
             amount:action.payload
           } 
           
    default:
      return state;
  }
}