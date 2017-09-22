import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NoteReducer from './note_reducer';
import NotebookReducer from './notebook_reducer';
import TagReducer from './tag_reducer';
import ErrorReducer from './error_reducer';

const AppReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  notes: NoteReducer,
  notebooks: NotebookReducer,
  tags: TagReducer,
});

const RootReducer = (state, action) => {
  let resetState = state;
  if (action.type === 'LOGOUT') {
    resetState = undefined;
  }

  return AppReducer(resetState, action);
};

export default RootReducer;
