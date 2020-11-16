import React from 'react';
import * as storage from '~/srcs/Context/Storage'

import Navigator from "~/srcs/Screens/Navigator"
import { Header } from '~/srcs/Component'

import { ContextProvider } from "~/srcs/Context/Context"

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
