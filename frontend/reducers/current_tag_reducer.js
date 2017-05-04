import { SET_CURRENT_TAG, REMOVE_TAG } from '../actions/tag_actions';

const CurrentTagReducer = (state = null, action) => {
  Object.freeze(state);

  switch(action.type) {
    case SET_CURRENT_TAG:
      return action.tag;
    case REMOVE_TAG:
      return null;
    default:
      return state;
  }
};

export default CurrentTagReducer;
