import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
  SET_CURRENT_NOTE
} from '../actions/note_actions';

import { REMOVE_NOTEBOOK } from '../actions/notebook_actions';

import merge from 'lodash/merge';

const blankState = {
  byId: {},
  allIds: [],
  currentNote: null
};

const NoteReducer = (state = blankState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {

    case RECEIVE_NOTES:
      // nextState = merge({}, state, action.notes);
      // nextState = merge({}, state, {byId: action.payload.byId, allIds: action.payload.allIds});
      nextState.byId = action.payload.byId;
      nextState.allIds = action.payload.allIds;
      return nextState;

    case RECEIVE_NOTE:
      // nextState[action.note.id] = action.note;
      nextState.byId[action.note.id] = action.note;
      nextState.allIds = [action.note.id].concat(
        nextState.allIds.filter(idx => idx !== action.note.id));
      nextState.currentNote = action.note.id;
      return nextState;

    case REMOVE_NOTE:
      delete nextState.byId[action.note.id];
      nextState.allIds = nextState.allIds.filter(idx => idx !== action.note.id);
      return nextState;

    case ADD_NOTE:
      nextState.byId[action.note.id] = action.note;
      nextState.allIds = [action.note.id].concat(
        nextState.allIds.filter(idx => idx !== action.note.id));
      nextState.currentNote = action.note.id;
      return nextState;

    case EDIT_NOTE:
      nextState[action.note.id] = action.note;
      return nextState;

    case REMOVE_NOTEBOOK:
      Object.keys(nextState.byId).forEach( noteId => {
        if (nextState.byId[noteId].notebook_id === action.notebook.id) {
          delete nextState.byId[noteId];
          nextState.allIds = nextState.allIds.filter(idx => idx !== noteId);
        }
      });
      if (!nextState.byId[nextState.currentNote]) {
        nextState.currentNote = nextState.allIds[0];
      }
      return nextState;

    case SET_CURRENT_NOTE:
      nextState.currentNote = action.note.id;
      return nextState;
    default:
      return state;
  }
};

export default NoteReducer;
