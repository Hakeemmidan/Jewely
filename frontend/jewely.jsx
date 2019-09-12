import React from "react";
import ReactDOM from "react-dom";

import { signup, login, logout } from './actions/session_actions';
import { configureStore } from './store/store';
import { Root } from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  let store;
  const currentProduct = JSON.parse(window.localStorage.getItem('productFormState'));

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
        products: { [currentProduct.id]: currentProduct }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  // TESTING START
    window.getState = store.getState;
  // TESTING END
});