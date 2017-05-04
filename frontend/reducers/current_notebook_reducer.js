import {
  RECEIVE_NOTEBOOK,
  REMOVE_NOTEBOOK,
  SET_CURRENT_NOTEBOOK,
  MAKE_NOTEBOOK,
  EDIT_NOTEBOOK
} from '../actions/notebook_actions';

const CurrentNotebookReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOTEBOOK:
      return action.notebook;
    case REMOVE_NOTEBOOK:
      return (state.id === action.notebook.id) ? null : state;
    case SET_CURRENT_NOTEBOOK:
      return action.notebook;
    case MAKE_NOTEBOOK:
      return action.notebook;
    case EDIT_NOTEBOOK:
      return action.notebook;
    default:
      return state;
  }
};

export default CurrentNotebookReducer;
