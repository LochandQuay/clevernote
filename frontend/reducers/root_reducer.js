import { combineReducers } from 'redux';

import { LOGOUT } from '../actions/session_actions';

import SessionReducer from './session_reducer';
import NoteReducer from './note_reducer';
import NotebookReducer from './notebook_reducer';

const AppReducer = combineReducers ({
  session: SessionReducer,
  notes: NoteReducer,
  notebooks: NotebookReducer
});

const RootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return AppReducer(state, action);
};

export default RootReducer;
