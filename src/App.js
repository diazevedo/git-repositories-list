import React from 'react';

import Routes from './routes';
import ResetCss from './styles/reset';
import BaseCss from './styles/base';

function App() {
  return (
    <>
      <Routes />
      <ResetCss />
      <BaseCss />
    </>
  );
}

export default App;
