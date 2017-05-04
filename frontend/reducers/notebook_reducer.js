import {
  RECEIVE_NOTEBOOKS,
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
  MAKE_NOTEBOOK,
  EDIT_NOTEBOOK
} from '../actions/notebook_actions';
import merge from 'lodash/merge';

const NotebookReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {

    case RECEIVE_NOTEBOOKS:
      nextState = merge({}, state, action.notebooks);
      return nextState;

    case RECEIVE_NOTEBOOK:
      nextState[action.notebook.id] = action.notebook;
      return nextState;

    case REMOVE_NOTEBOOK:
      delete nextState[action.notebook.id];
      return nextState;

    case MAKE_NOTEBOOK:
      nextState[action.notebook.id] = action.notebook;
      return nextState;

    case EDIT_NOTEBOOK:
      nextState[action.notebook.id] = action.notebook;
      return nextState;

    default:
      return state;
  }
};

export default NotebookReducer;
