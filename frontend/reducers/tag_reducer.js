import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
  MAKE_TAG,
  REMOVE_ZERO
} from '../actions/tag_actions';

import merge from 'lodash/merge';

const TagReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_TAGS:
      nextState = merge({}, nextState, action.tags);
      return nextState;

    case RECEIVE_TAG:
      nextState[action.tag.id] = action.tag;
      return nextState;


    case REMOVE_TAG:
      delete nextState[action.tag.id];
      return nextState;

    case MAKE_TAG:
      nextState[action.tag.id] = action.tag;
      return nextState;

    case REMOVE_ZERO:
      delete nextState[0];
      return nextState;

    default:
      return state;
  }
};

export default TagReducer;
