

import _ from "lodash";
import { SET_APP_LANGUAGE } from "../constants";

const initialState = {
  appLanguage: 'ar',
};

export default function heirsReducer(state = initialState, action:any) {
  switch (action.type) {

    case SET_APP_LANGUAGE:
        return {
          ...state,
          appLanguage: action.payload
        };

    default:
      return state;
  }
}