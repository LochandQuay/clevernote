import React from 'react';
import { Provider } from 'react-redux';

import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import DemoContainer from './demo/demo_container';
import HomeContainer from './home/home_container';
import NoteEditorContainer from './note_editor/note_editor_container';


const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/home');
    }
  };

  const _ensureCurrentUser = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
    else if (currentUser.id !== parseInt(nextState.params.userId)) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route
          path="/"
          component={ App }
          onEnter={_redirectIfLoggedIn} />

        <Route
          path="/home"
          component={ HomeContainer }
          onEnter={_ensureLoggedIn} />


        <Route
          path="/demo"
          component={ DemoContainer }
          onEnter={_redirectIfLoggedIn} />
        <Route
          path="/login"
          component={ SessionFormContainer }
          onEnter={_redirectIfLoggedIn} />
        <Route
          path="/signup"
          component={ SessionFormContainer }
          onEnter={_redirectIfLoggedIn} />
      </Router>
    </Provider>
  );
};

export default Root;
