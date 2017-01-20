import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
  SET_CURRENT_NOTEBOOK,
  MAKE_NOTEBOOK,
  EDIT_NOTEBOOK

} from '../actions/notebook_actions';
import merge from 'lodash/merge';

import { alphaSort, sorted } from './selectors';

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
      // let notebook = action.notebook;
      // if (notebook.notes) {
      //   notebook.notes = sorted(notebook.notes);
      // }
      // nextState.currentNotebook = notebook;
      // nextState[action.notebook.id] = notebook;
      nextState.currentNotebook = action.notebook;
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
      // let setNotebook = action.notebook;
      // if (action.notebook === null) {
      //   return merge({}, state, {currentNotebook: action.notebook});
      // }
      //
      // if (setNotebook.notes) {
      //   setNotebook.notes = sorted(setNotebook.notes);
      // }
      // return merge({}, state, {currentNotebook: setNotebook});
      nextState.currentNotebook = action.notebook;
      return nextState;

    case MAKE_NOTEBOOK:
      nextState[action.notebook.id] = action.notebook;
      nextState.sortedNotebooks.push(action.notebook);
      nextState.currentNotebook = action.notebook;
      nextState.sortedNotebooks = alphaSort(nextState.sortedNotebooks);
      return nextState;

    case EDIT_NOTEBOOK:
      nextState[action.notebook.id] = action.notebook;
      nextState.currentNotebook = action.notebook;
      return nextState;

    default:
      return state;
  }
};

export default NotebookReducer;
