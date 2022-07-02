
import React from 'react';
import RootNavigator from './src/navigator';
import './src/locales/index'
import { Provider } from 'react-redux';
import { createStore,compose, combineReducers,applyMiddleware } from 'redux';
import heirsReducer from './src/client/reducers/heirs_reducer';
import appReducer from './src/client/reducers/app_reducer';
import { persistReducer, persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import storage from "@react-native-async-storage/async-storage";
import thunk from 'redux-thunk'
const rootReducer = combineReducers(
{ heirs: heirsReducer, App: appReducer }
);


const persistConfig = {
  key: 'root',
  storage,

}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer,applyMiddleware(thunk))
  let persistor = persistStore(store)
const App = () => {
  return <Provider store = { store } >
    <PersistGate loading={null} persistor={persistor}>
       <RootNavigator />
    </PersistGate>
  </Provider>
 
};


export default App;
