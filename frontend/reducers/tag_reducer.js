import {
  RECEIVE_TAGS,
  RECEIVE_TAG,
  REMOVE_TAG,
  RECEIVE_NOTE_TAGS,
  SET_CURRENT_TAG,
  RECEIVE_FILTERED_NOTES,
  MAKE_TAG,
  REMOVE_ZERO
} from '../actions/tag_actions';

import merge from 'lodash/merge';
import { sortTags, sorted } from './selectors';

const _defaultState = {
  currentTag: null,
  sortedTags: [],
  filteredNotesByTag: [],
  currentNoteTags: []
};

const TagReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch(action.type) {
    case RECEIVE_TAGS:
      nextState = merge({}, nextState, action.tags);
      nextState.sortedTags = sortTags(action.tags);
      return nextState;
      // return merge(nextState, action.tags);

    // case RECEIVE_TAG:
      // nextState.currentTag = action.tag;
      // let tag = action.tag[Object.keys(action.tag)[0]];
      // nextState.sortedTags = sortTags(nextState.sortedTags.concat(tag));
      // return merge(nextState, action.tag);


    case REMOVE_TAG:
      delete nextState[action.tag.id];
      // if (nextState.currentTag) {
      //   if (nextState.currentTag.id === action.tag.id) {
      //     nextState.currentTag = null;
      //   }
      // }
      nextState.currentTag = null;
      return nextState;

    case RECEIVE_NOTE_TAGS:
      nextState.currentNoteTags = sortTags(action.tags);
      return nextState;

    case RECEIVE_FILTERED_NOTES:
      nextState.filteredNotesByTag = sorted(action.notes);
      return nextState;

    case SET_CURRENT_TAG:
      nextState.currentTag = action.tag;
      return nextState;
      // return merge({}, state, {currentTag: action.tag});

    case MAKE_TAG:
      nextState[action.tag.id] = action.tag;
      nextState.sortedTags.push(action.tag);
      nextState.sortedTags = sortTags(nextState.sortedTags);
      return nextState;

    case REMOVE_ZERO:
      delete nextState[0];
      return nextState;

    default:
      return state;
  }
};

export default TagReducer;
