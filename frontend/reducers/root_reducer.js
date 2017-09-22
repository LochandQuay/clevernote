import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import noteReducer from './note_reducer';
import notebookReducer from './notebook_reducer';
import tagReducer from './tag_reducer';
import errorReducer from './error_reducer';

const appReducer = combineReducers({
  session: sessionReducer,
  errors: errorReducer,
  notes: noteReducer,
  notebooks: notebookReducer,
  tags: tagReducer,
});

const rootReducer = (state, action) => {
  let resetState = state;
  if (action.type === 'LOGOUT') {
    resetState = undefined;
  }

  return appReducer(resetState, action);
};

export default rootReducer;
