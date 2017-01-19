import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
  RECEIVE_NOTE_TAGS
} from '../actions/tag_actions';

import merge from 'lodash/merge';
import { alphaSort, sorted } from './selectors';

const _defaultState = {
  currentTag: null,
  sortedTags: [],
  currentNoteTags: []
};

const TagReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_TAGS:
      nextState.sortedTags = alphaSort(action.tags);
      return merge(nextState, action.tags);

    case RECEIVE_TAG:
      nextState.currentTag = action.tag;
      let tag = action.tag[Object.keys(action.tag)[0]];
      nextState.sortedTags = alphaSort(nextState.sortedTags.concat(tag));
      return merge(nextState, action.tag);

    case REMOVE_TAG:
      delete nextState[action.tag.id];
      if (nextState.currentTag) {
        if (nextState.currentTag.id === action.tag.id) {
          nextState.currentTag = null;
        }
      }
      return nextState;

    case RECEIVE_NOTE_TAGS:
      nextState.currentNoteTags = alphaSort(action.tags);
      return nextState;

    default:
      return state;
  }
};
