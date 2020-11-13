import React from 'react';

import Navigator from "./Screens/Navigator"
import Header from './Component/Header'

import { ContextProvider } from "./Context/Context"

const App =  () => {
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
