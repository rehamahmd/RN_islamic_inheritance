

import _ from "lodash";
import { SET_APP_LANGUAGE, SET_ARTICLES } from "../constants";

const initialState = {
  appLanguage: 'ar',
  articles: []
};

export default function appReducer(state = initialState, action:any) {
  switch (action.type) {

    case SET_APP_LANGUAGE:
        return {
          ...state,
          appLanguage: action.payload
        };
    case SET_ARTICLES:
        return {
          ...state,
          articles: action.payload
        }
    default:
      return state;
  }
}