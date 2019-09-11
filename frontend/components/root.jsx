import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import { App } from './App';

export const Root = (props) => {
  const currentUser = Object.values(props.store.getState().entities.users)[0]

  return (
    <Provider store={props.store}>
      <HashRouter>
        <App currentUser={currentUser}/>
      </HashRouter>
    </Provider>
  )
  // Note: HashRouter passes ownProps by default 
}