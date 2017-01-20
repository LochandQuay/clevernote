import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
  SET_CURRENT_NOTE,
  RECEIVE_TAGGED_NOTES
} from '../actions/note_actions';

import merge from 'lodash/merge';

import { sorted } from './selectors';

const _defaultState = {
  currentNote: null,
  notes: [],
  taggedNotes: []
};

const NoteReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  let note;
  if (action.note) {
    note = (action.note.id) ?
      (action.note) : (action.note[Object.keys(action.note)[0]]);
  }

  switch(action.type) {

    case RECEIVE_NOTES:
      nextState = merge({}, state, action.notes);
      nextState.notes = sorted(action.notes);
      return nextState;

    case RECEIVE_NOTE:
      // nextState = merge({}, state, action.note);
      nextState.currentNote = note;
      // nextState.currentNote = action.note;
      return nextState;


    // #NB: was >> delete nextState.notes[action.note.id];

    case REMOVE_NOTE:
      // let deletedNote = note;
      // delete nextState[deletedNote.id];
      // if (nextState.currentNote.id === deletedNote.id) {
        // nextState.currentNote = null;
      // }
      delete nextState[note.id];
      return nextState;

    // NEW ACTION TYPES (potentially unnecessary):
    case ADD_NOTE:
      nextState[note.id] = note;
      nextState.currentNote = note;
      nextState.notes.unshift(note);
      // nextState[action.note.id] = action.note;
      // nextState.notes.unshift(action.note);
      return nextState;

    case EDIT_NOTE:
      nextState[note.id] = note;
      nextState.currentNote = note;
      return nextState;

    case SET_CURRENT_NOTE:
      nextState.currentNote = note;
      return nextState;

    case RECEIVE_TAGGED_NOTES:
      nextState.taggedNotes = action.notes;
      return nextState;

    default:
      return state;
  }
};

export default NoteReducer;
