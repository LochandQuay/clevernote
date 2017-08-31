import {
  RECEIVE_TAGS,
  SET_CURRENT_TAG,
  RECEIVE_TAGGING
} from '../actions/tag_actions';

import merge from 'lodash/merge';

const blankState = {
  byId: {},
  allIds: [],
  currentTag: null
};

const TagReducer = (state = blankState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_TAGS:
      nextState.byId = action.payload.byId;
      nextState.allIds = action.payload.allIds;
      return nextState;

    case RECEIVE_TAGGING:
      nextState.byId[action.payload.tag.id] = action.payload.tag;
      nextState.allIds = [action.payload.tag.id].concat(
        nextState.allIds.filter(idx => idx !== action.payload.tag.id));
      return nextState;

    case SET_CURRENT_TAG:
      if (action.tag) {
        nextState.currentTag = action.tag.id;
      } else {
        nextState.currentTag = null;
      }
      return nextState;

    default:
      return state;
  }
};

export default TagReducer;
