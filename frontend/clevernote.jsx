import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// testing only
import * as SessionApiUtil from './util/session_api_util';

window.login = SessionApiUtil.login;
window.logout = SessionApiUtil.logout;
window.signup = SessionApiUtil.signup;


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
