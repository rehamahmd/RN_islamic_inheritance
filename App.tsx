
import React from 'react';
import RootNavigator from './src/navigator';
import './src/locales/index'
import { Provider } from 'react-redux';


import { createStore,compose, combineReducers,applyMiddleware } from 'redux';

// import thunk from 'redux-thunk';
import heirsReducer from './src/client/reducers/heirs_reducer';

// const store = configureStore();

const createStoreWithMiddleware = applyMiddleware()(createStore);

const rootReducer = combineReducers(
{ heirs: heirsReducer }
);

const store = createStoreWithMiddleware(rootReducer);
export const app_store = store;
const App = () => {
  return <Provider store = { store } >
    <RootNavigator />
  </Provider>
 
};


export default App;
