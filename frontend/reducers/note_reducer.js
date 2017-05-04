import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
} from '../actions/note_actions';

import { REMOVE_NOTEBOOK } from '../actions/notebook_actions';

import merge from 'lodash/merge';

const NoteReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {

    case RECEIVE_NOTES:
      nextState = merge({}, state, action.notes);
      return nextState;

    case RECEIVE_NOTE:
      nextState[action.note.id] = action.note;
      return nextState;

    case REMOVE_NOTE:
      delete nextState[action.note.id];
      return nextState;

    case ADD_NOTE:
      nextState[action.note.id] = action.note;
      return nextState;

    case EDIT_NOTE:
      nextState[action.note.id] = action.note;
      return nextState;

    case REMOVE_NOTEBOOK:
      Object.keys(nextState).forEach( noteId => {
        if (nextState[noteId].notebook_id === action.notebook.id) {
          delete nextState[noteId];
        }
      });
      return nextState;

    default:
      return state;
  }
};

export default NoteReducer;
