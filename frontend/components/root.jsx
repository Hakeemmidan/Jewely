import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { App } from './App';
import Greeting from './greeting/Greeting';

export const Root = (props) => (
  <Provider store={props.store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
  // Note: HashRouter passes ownProps by default 
)