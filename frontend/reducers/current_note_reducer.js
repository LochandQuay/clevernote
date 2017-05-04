import {
  RECEIVE_NOTE,
  ADD_NOTE,
  EDIT_NOTE,
  SET_CURRENT_NOTE
} from '../actions/note_actions';

const CurrentNoteReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOTE:
      return action.note;
    case ADD_NOTE:
      return action.note;
    case EDIT_NOTE:
      return action.note;
    case SET_CURRENT_NOTE:
      return action.note;
    default:
      return state;
  }
};

export default CurrentNoteReducer;
