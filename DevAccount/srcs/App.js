import React from 'react';
import * as storage from './Context/Storage'

import Navigator from "./Screens/Navigator"
import Header from './Component/Header'

import { ContextProvider } from "./Context/Context"

const App =  () => {
  storage.initData();

  return (
    <>
      <Header />
      <ContextProvider >
        <Navigator />
      </ContextProvider>
    </>
  );
};


export default App;
