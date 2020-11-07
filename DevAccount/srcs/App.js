/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';



import { ContextProvider} from "./Context/Context"
import Navigator from "./Screens/Navigator"

const App =  () => {
  return (
    <ContextProvider >
      <Navigator />
    </ContextProvider>
  );
};


export default App;
