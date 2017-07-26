import * as TagApiUtil from '../util/tag_api_util';

export const RECEIVE_TAGS = "RECEIVE_TAGS";
export const RECEIVE_TAG = "RECEIVE_TAG";
export const REMOVE_TAG = "REMOVE_TAG";
export const RECEIVE_NOTE_TAGS = "RECEIVE_NOTE_TAGS";
export const SET_CURRENT_TAG = "SET_CURRENT_TAG";
export const RECEIVE_FILTERED_NOTES = "RECEIVE_FILTERED_NOTES";
export const REMOVE_TAGGING = "REMOVE_TAGGING";

export const MAKE_TAG = "MAKE_TAG";
export const REMOVE_ZERO = "REMOVE_ZERO";

export const fetchTags = () => dispatch => (
  TagApiUtil.fetchTags()
    .then(payload => dispatch(receiveTags(payload)))
);

export const createTag = tagData => dispatch => (
  TagApiUtil.createTag(tagData)
    .then(tag => dispatch(makeTag(tag)))
);

export const fetchTag = id => dispatch => (
  TagApiUtil.fetchTag(id)
    .then(tag => dispatch(receiveTag(tag)))
);

export const deleteTag = id => dispatch => (
  TagApiUtil.deleteTag(id)
    .then(tag => dispatch(removeTag(tag)))
);

export const deleteTagging = taggingData => dispatch => (
  TagApiUtil.deleteTagging(taggingData)
    .then(tagging => dispatch(removeTagging(tagging)))
);

export const receiveTags = payload => ({
  type: RECEIVE_TAGS,
  payload
});

export const receiveTag = tag => ({
  type: RECEIVE_TAG,
  tag
});

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const setCurrentTag = tag => ({
  type: SET_CURRENT_TAG,
  tag
});

/// NEW
export const removeTagging = tagging => ({
  type: REMOVE_TAGGING,
  tagging
});

export const removeZeroIdTag = () => ({
  type: REMOVE_ZERO
});

export const makeTag = tag => ({
  type: MAKE_TAG,
  tag
});
