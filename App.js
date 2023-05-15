/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  Text
} from 'react-native';
import Route from './src/Route';
import 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import { Provider } from 'react-redux';
function App() {
  if (Text.defaultProps) {
    Text.defaultProps.allowFontScaling = false;
  } else {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  return (

    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Route />
    </PersistGate>
  </Provider>
  );
}

export default App;
