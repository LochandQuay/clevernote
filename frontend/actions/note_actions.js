import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";
export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const SET_CURRENT_NOTE = "SET_CURRENT_NOTE";

export const fetchNotes = () => dispatch => (
  NoteApiUtil.fetchNotes()
    .then(notes => dispatch(receiveNotes(notes)))
);

export const fetchNote = id => dispatch => (
  NoteApiUtil.fetchNote(id)
    .then(note => dispatch(receiveNote(note)))
);

export const createNote = note => dispatch => (
  NoteApiUtil.createNote(note)
    .then(newNote => dispatch(addNote(newNote)))
);

export const updateNote = note => dispatch => (
  NoteApiUtil.updateNote(note)
    .then(updated => dispatch(receiveNote(updated)))
);

export const deleteNote = id => dispatch => (
  NoteApiUtil.deleteNote(id)
    .then(note => dispatch(removeNote(note)))
);

export const receiveNotes = notes => ({
  type: RECEIVE_NOTES,
  notes
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const addNote = note => ({
  type: ADD_NOTE,
  note
});

export const editNote = note => ({
  type: EDIT_NOTE,
  note
});

export const removeNote = note => ({
  type: REMOVE_NOTE,
  note
});

export const setCurrentNote = note => ({
  type: SET_CURRENT_NOTE,
  note
});
