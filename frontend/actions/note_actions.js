import * as NoteApiUtil from '../util/note_api_util';

export const RECEIVE_NOTES = "RECEIVE_NOTES";
export const RECEIVE_NOTE = "RECEIVE_NOTE";
export const REMOVE_NOTE = "REMOVE_NOTE";

export const fetchNotes = (userId) => dispatch => (
  NoteApiUtil.fetchNotes(userId)
    .then(notes => dispatch(receiveNotes(notes)))
);

export const fetchNote = (userId, noteId) => dispatch => (
  NoteApiUtil.fetchNote(userId, noteId)
    .then(note => dispatch(receiveNote(note)))
);

export const deleteNote = (userId, noteId) => dispatch => (
  NoteApiUtil.deleteNote(userId, noteId)
    .then(note => dispatch(receiveNote(null)))
);

export const updateNote = (note) => dispatch => (
  NoteApiUtil.updateNote(note)
    .then(updated => dispatch(receiveNote(updated)))
);


export const receiveNotes = (notes) => ({
  type: RECEIVE_NOTES,
  notes
});

export const receiveNote = (note) => ({
  type: RECEIVE_NOTE,
  note
});

export const removeNote = (userId, noteId) => ({
  type: REMOVE_NOTE,
  userId,
  noteId
});
