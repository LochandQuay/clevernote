import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
  SET_CURRENT_NOTE
} from '../actions/note_actions';
import merge from 'lodash/merge';

import { sorted } from './selectors';

const _defaultState = {
  currentNote: null,
  notes: []
};

const NoteReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {

    case RECEIVE_NOTES:
      nextState = merge({}, state, action.notes);
      nextState.notes = sorted(action.notes);
      return nextState;

    case RECEIVE_NOTE:
      nextState = merge({}, state, action.note);
      nextState.currentNote = action.note[Object.keys(action.note)[0]];
      return nextState;


    // #NB: was >> delete nextState.notes[action.note.id];

    case REMOVE_NOTE:
      let deletedNote = action.note[Object.keys(action.note)[0]];
      delete nextState[deletedNote.id];
      if (nextState.currentNote.id === deletedNote.id) {
        nextState.currentNote = null;
      }
      return nextState;

    // NEW ACTION TYPES (potentially unnecessary):
    case ADD_NOTE:
      let newNote = action.note[Object.keys(action.note)[0]];
      nextState[newNote.id] = newNote;
      nextState.currentNote = newNote;
      nextState.notes.unshift(newNote);
      return nextState;

    case EDIT_NOTE:
      nextState[action.note.id] = action.note;
      nextState.currentNote = action.note;
      return nextState;

    case SET_CURRENT_NOTE:
      nextState.currentNote = action.note;
      return nextState;

    default:
      return state;
  }
};

export default NoteReducer;
