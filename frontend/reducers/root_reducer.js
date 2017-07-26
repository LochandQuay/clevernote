import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NoteReducer from './note_reducer';
import NotebookReducer from './notebook_reducer';
import TagReducer from './tag_reducer';
import CurrentNotebookReducer from './current_notebook_reducer';
import CurrentTagReducer from './current_tag_reducer';
import ErrorReducer from './error_reducer';

const AppReducer = combineReducers ({
  session: SessionReducer,
  errors: ErrorReducer,
  notes: NoteReducer,
  notebooks: NotebookReducer,
  currentNotebook: CurrentNotebookReducer,
  tags: TagReducer,
  currentTag: CurrentTagReducer
});

const RootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return AppReducer(state, action);
};

export default RootReducer;
