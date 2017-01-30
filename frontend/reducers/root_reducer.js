import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import NoteReducer from './note_reducer';
import NotebookReducer from './notebook_reducer';
import TagReducer from './tag_reducer';

const AppReducer = combineReducers ({
  session: SessionReducer,
  notes: NoteReducer,
  notebooks: NotebookReducer,
  tags: TagReducer
});

const RootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state = undefined;
  }

  return AppReducer(state, action);
};

export default RootReducer;
