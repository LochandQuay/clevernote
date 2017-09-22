import merge from 'lodash/merge';
import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE,
  ADD_NOTE,
  SET_CURRENT_NOTE,
} from '../actions/note_actions';
import { RECEIVE_TAGGING } from '../actions/tag_actions';
import { REMOVE_NOTEBOOK } from '../actions/notebook_actions';

const blankState = {
  byId: {},
  allIds: [],
  currentNote: null,
};

const pluckedIds = (tags) => {
  const ids = [];
  tags.forEach(tag => ids.push(tag.id));
  return ids;
};

const NoteReducer = (state = blankState, action) => {
  Object.freeze(state);
  const nextState = merge({}, state);

  switch (action.type) {

    case RECEIVE_NOTES:
      nextState.byId = action.payload.byId;
      nextState.allIds = action.payload.allIds;
      return nextState;

    case RECEIVE_NOTE:
      nextState.byId[action.note.id] = action.note;
      nextState.allIds = [action.note.id].concat(
        nextState.allIds.filter(idx => idx !== action.note.id));
      nextState.currentNote = action.note.id;
      return nextState;

    case REMOVE_NOTE:
      delete nextState.byId[action.note.id];
      nextState.allIds = nextState.allIds.filter(idx => idx !== action.note.id);
      if (nextState.currentNote === action.note.id) {
        nextState.currentNote = nextState.allIds[0];
      }
      return nextState;

    case ADD_NOTE:
      nextState.byId[action.note.id] = action.note;
      nextState.allIds = [action.note.id].concat(
        nextState.allIds.filter(idx => idx !== action.note.id));
      nextState.currentNote = action.note.id;
      return nextState;

    case SET_CURRENT_NOTE:
      if (action.note) {
        nextState.currentNote = action.note.id;
      } else {
        nextState.currentNote = null;
      }
      return nextState;

    case REMOVE_NOTEBOOK:
      Object.keys(nextState.byId).forEach((noteId) => {
        if (nextState.byId[noteId].notebook_id === action.notebook.id) {
          delete nextState.byId[noteId];
          nextState.allIds = nextState.allIds.filter(idx => idx !== noteId);
        }
      });
      if (!nextState.byId[nextState.currentNote]) {
        nextState.currentNote = nextState.allIds[0];
      }
      return nextState;

    case RECEIVE_TAGGING:
      if (pluckedIds(nextState.byId[action.payload.tagging.note_id].tags)
        .includes(action.payload.tag.id)) {
        return nextState;
      }
      nextState.byId[action.payload.tagging.note_id].tags.push(action.payload.tag);
      return nextState;

    default:
      return state;
  }
};

export default NoteReducer;
