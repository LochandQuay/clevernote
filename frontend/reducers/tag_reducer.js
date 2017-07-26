import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
  MAKE_TAG,
  SET_CURRENT_TAG,
  REMOVE_ZERO
} from '../actions/tag_actions';

import merge from 'lodash/merge';

const blankState = {
  byId: {},
  allIds: [],
  currentNoteTags: [],
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

    case RECEIVE_TAG:
      nextState.byId[action.tag.id] = action.tag;
      nextState.allIds = [action.tag.id].concat(
        nextState.allIds.filter(idx => idx !== action.tag.id));
      nextState.currentTag = action.tag.id;
      return nextState;

    case REMOVE_TAG:
      delete nextState.byId[action.tag.id];
      nextState.allIds = nextState.allIds.filter(idx => idx !== action.tag.id);
      return nextState;

    case MAKE_TAG:
      nextState.byId[action.tag.id] = action.tag;
      nextState.allIds = [action.tag.id].concat(
        nextState.allIds.filter(idx => idx !== action.tag.id));
      nextState.currentTag = action.tag.id;
      return nextState;

    case SET_CURRENT_TAG:
      if (action.tag) {
        nextState.currentTag = action.tag.id;
      } else {
        nextState.currentTag = null;
      }
      return nextState;

    case REMOVE_ZERO:
      delete nextState.byId[0];
      return nextState;

    default:
      return state;
  }
};

export default TagReducer;
