import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
  MAKE_NOTEBOOK,
  EDIT_NOTEBOOK,
  SET_CURRENT_NOTEBOOK
} from '../actions/notebook_actions';
import merge from 'lodash/merge';

const blankState = {
  byId: {},
  allIds: [],
  currentNotebook: null
};

const NotebookReducer = (state = blankState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {

    case RECEIVE_NOTEBOOKS:
      // nextState = merge({}, state, action.notebooks);
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

export default NotebookReducer;
