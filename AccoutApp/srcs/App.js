import React from 'react';
import {
  View
} from 'react-native';

import { ContextProvider } from "~/Context"
import Navigator from "~/Screens/Navigator"

/* const App: () => React$Node = () => { */
const App = () => {
  return (
    <ContextProvider>
      <Navigator />
    </ContextProvider>
  )
};

export default App;
