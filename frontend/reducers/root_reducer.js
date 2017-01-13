import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import NoteReducer from './note_reducer';

const RootReducer = combineReducers ({
  session: SessionReducer,
  note: NoteReducer
});

export default RootReducer;
