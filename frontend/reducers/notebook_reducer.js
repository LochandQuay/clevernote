import merge from 'lodash/merge';
import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
  MAKE_NOTEBOOK,
  EDIT_NOTEBOOK,
  SET_CURRENT_NOTEBOOK,
} from '../actions/notebook_actions';

const blankState = {
  byId: {},
  allIds: [],
  currentNotebook: null,
};

const notebookReducer = (state = blankState, action) => {
  Object.freeze(state);
  const nextState = merge({}, state);

  switch (action.type) {

    case RECEIVE_NOTEBOOKS:
      nextState.byId = action.payload.byId;
      nextState.allIds = action.payload.allIds;
      return nextState;

    case RECEIVE_NOTEBOOK:
      nextState.byId[action.notebook.id] = action.notebook;
      nextState.allIds = [action.notebook.id].concat(
        nextState.allIds.filter(idx => idx !== action.notebook.id));
      nextState.currentNotebook = action.notebook.id;
      return nextState;

    case REMOVE_NOTEBOOK:
      delete nextState.byId[action.notebook.id];
      nextState.allIds = nextState.allIds.filter(idx => idx !== action.notebook.id);
      if (action.notebook.id === nextState.currentNotebook) {
        nextState.currentNotebook = null;
      }
      return nextState;

    case MAKE_NOTEBOOK:
      nextState.byId[action.notebook.id] = action.notebook;
      nextState.allIds = [action.notebook.id].concat(
        nextState.allIds.filter(idx => idx !== action.notebook.id));
      nextState.currentNotebook = action.notebook.id;
      return nextState;

    case EDIT_NOTEBOOK:
      nextState.byId[action.notebook.id] = action.notebook;
      return nextState;

    case SET_CURRENT_NOTEBOOK:
      nextState.currentNotebook = action.notebook ? action.notebook.id : null;
      return nextState;

    default:
      return state;
  }
};

export default notebookReducer;
