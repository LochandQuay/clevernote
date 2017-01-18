import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
  SET_CURRENT_NOTE
} from '../actions/note_actions';
import merge from 'lodash/merge';

import { sortedNotes } from './selectors';

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
      nextState.notes = sortedNotes(action.notes);
      return nextState;

    case RECEIVE_NOTE:
      nextState.currentNote = action.note;
      return nextState;

    case REMOVE_NOTE:
      delete nextState.notes[action.note.id];
      if (nextState.currentNote.id === action.note.id) {
        nextState.currentNote = null;
      }
      return nextState;

    // NEW ACTION TYPES (potentially unnecessary):
    case ADD_NOTE:
      nextState[action.note.id] = action.note;
      nextState.notes.unshift(action.note);
      return nextState;

    case EDIT_NOTE:
      nextState[action.note.id] = action.note;
      nextState.currentNote = action.note;
      return nextState;

    case SET_CURRENT_NOTE:
      return merge({}, state, {currentNote: action.note});

    default:
      return state;
  }
};

export default NoteReducer;
