import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

// testing only
import * as SessionApiUtil from './util/session_api_util';
import * as NoteApiUtil from './util/note_api_util';
import * as NotebookApiUtil from './util/notebook_api_util';
import { fetchNotes, fetchNote } from './actions/note_actions';
import { fetchNotebooks, fetchNotebook } from './actions/notebook_actions';

// SESSION UTIL ACTIONS
window.login = SessionApiUtil.login;
window.logout = SessionApiUtil.logout;
window.signup = SessionApiUtil.signup;

// NOTEUTIL ACTIONS
window.fetchNotes = NoteApiUtil.fetchNotes;
window.fetchNote = NoteApiUtil.fetchNote;
window.createNote = NoteApiUtil.createNote;
window.updateNote = NoteApiUtil.updateNote;
window.deleteNote = NoteApiUtil.deleteNote;

// NOTEBOOK UTIL ACTIONS
window.fetchNotebooks = fetchNotebooks;
window.fetchNotebook = fetchNotebook;
window.createNotebook = NotebookApiUtil.createNotebook;
window.updateNotebook = NotebookApiUtil.updateNotebook;
window.deleteNotebook = NotebookApiUtil.deleteNotebook;



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
