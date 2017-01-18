import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

// testing only
import * as SessionApiUtil from './util/session_api_util';
import * as NoteApiUtil from './util/note_api_util';
import { fetchNotes, fetchNote } from './actions/note_actions';

window.login = SessionApiUtil.login;
window.logout = SessionApiUtil.logout;
window.signup = SessionApiUtil.signup;
window.createNote = NoteApiUtil.createNote;
window.fetchNotes = NoteApiUtil.fetchNotes;
window.fetchNote = NoteApiUtil.fetchNote;
window.deleteNote = NoteApiUtil.deleteNote;
window.updateNote = NoteApiUtil.updateNote;


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
