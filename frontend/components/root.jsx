import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import App from './app';
import HomeContainer from './home/home_container';
// import SessionFormContainer from './session_form/session_form_container';

const Root = ({ store }) => {
  const ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };

  // const ensureCurrentUser = (nextState, replace) => {
  //   const currentUser = store.getState().session.currentUser;
  //   if (!currentUser) {
  //     replace('/');
  //   }
  //   else if (currentUser.id !== parseInt(nextState.params.userId)) {
  //     replace('/');
  //   }
  // };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route
          path="/"
          component={App}
          onEnter={redirectIfLoggedIn}
        />

        <Route
          path="/home"
          component={HomeContainer}
          onEnter={ensureLoggedIn}
        />
      </Router>
    </Provider>
  );
};

export default Root;
