import React from 'react';
import {
  View
} from 'react-native';

import { ContextProvider } from "~/Context"

/* const App: () => React$Node = () => { */
const App = () => {
  return (
    <ContextProvider>
      <View>

      </View>
    </ContextProvider>
  )
};

export default App;
