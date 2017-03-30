import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NoteReducer from './note_reducer';
import NotebookReducer from './notebook_reducer';
import TagReducer from './tag_reducer';
import ErrorReducer from './error_reducer';

const AppReducer = combineReducers ({
  session: SessionReducer,
  errors: ErrorReducer,
  notes: NoteReducer,
  currentNote: NoteReducer,
  notebooks: NotebookReducer,
  currentNotebook: NotebookReducer,
  tags: TagReducer,
  currentTag: TagReducer
});

const RootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return AppReducer(state, action);
};

export default RootReducer;
