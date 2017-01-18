import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
  SET_CURRENT_NOTEBOOK
} from '../actions/notebook_actions';
import merge from 'lodash/merge';

import { alphaSort } from './selectors';

const _defaultState = {
  currentNotebook: null,
  sortedNotebooks: []
};

const NotebookReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {

    case RECEIVE_NOTEBOOKS:
      nextState = merge({}, state, action.notebooks);
      nextState.sortedNotebooks = alphaSort(action.notebooks);
      return nextState;

    case RECEIVE_NOTEBOOK:
      nextState.currentNotebook = action.notebook;
      nextState[action.notebook.id] = action.notebook;
      return nextState;

      // #NB: was >> delete nextState.notebooks[action.notebook.id];

    case REMOVE_NOTEBOOK:
      delete nextState[action.notebook.id];
      if (nextState.currentNotebook.id === action.notebook.id) {
        nextState.currentNotebook = null;
      }
      return nextState;

    // NEW ACTION TYPES (potentially unnecessary):
    case SET_CURRENT_NOTEBOOK:
      return merge({}, state, {currentNotebook: action.notebook});

    default:
      return state;
  }
};

export default NotebookReducer;
