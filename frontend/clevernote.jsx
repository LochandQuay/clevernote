import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import configureStore from './store/store';
import Root from './components/root';

// testing only
import * as SessionApiUtil from './util/session_api_util';
import * as NoteApiUtil from './util/note_api_util';
import * as NotebookApiUtil from './util/notebook_api_util';
import * as TagApiUtil from './util/tag_api_util';
import * as Selectors from './reducers/selectors';

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
// window.fetchTaggedNotes = NoteApiUtil.fetchTaggedNotes;

// NOTEBOOK UTIL ACTIONS
window.fetchNotebooks = NotebookApiUtil.fetchNotebooks;
window.fetchNotebook = NotebookApiUtil.fetchNotebook;
window.createNotebook = NotebookApiUtil.createNotebook;
window.updateNotebook = NotebookApiUtil.updateNotebook;
window.deleteNotebook = NotebookApiUtil.deleteNotebook;

// TAG UTIL ACTIONS
window.fetchTags = TagApiUtil.fetchTags;
window.fetchTag = TagApiUtil.fetchTag;
window.fetchNoteTags = TagApiUtil.fetchNoteTags;
window.createTag = TagApiUtil.createTag;
window.deleteTag = TagApiUtil.deleteTag;

window.filteredNotes = Selectors.filteredNotes;

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});
