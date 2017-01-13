import {
  RECEIVE_NOTES,
  RECEIVE_NOTE,
  REMOVE_NOTE
} from '../actions/note_actions';
import merge from 'lodash/merge';

const NoteReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOTES:
      return merge({}, state, action.notes);
    case RECEIVE_NOTE:
      let newNote = { [action.note.id]: action.note };
      return merge({}, state, newNote);
    case REMOVE_NOTE:
      let nextState = merge({}, state);
      delete nextState[action.note.id];
      return nextState;
    default:
      return state;
  }
};
